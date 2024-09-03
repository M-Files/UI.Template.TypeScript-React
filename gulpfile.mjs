// #TEMPLATED_TODO - Change this to your own packaged app name.
const zipPackageName = "ShellUI_ReactUX_App.zip";

/**
 * For available tasks, see bottom of the file or run "gulp -T"
 * NOTE: Most of the tasks are not exported (available from command line)
 * since it would not make sense to run them directly.
 * For example build-install consists of tasks buildZip and install.
 * If you want to have those tasks directly available just uncomment the lines starting with:
 * exports.buildZip =
 * etc.
 */

// Includes.
import log from "fancy-log";
import plgerror from "plugin-error";
import { deleteSync } from "del";
import glob from "glob";
import rename from "gulp-rename";
import newer from "gulp-newer";
import gulpzip from "gulp-zip";
import webp from "webpack";
import eslint from "gulp-eslint";
import gulp from "gulp";
const { series, parallel } = gulp;
import gulpif from 'gulp-if';

import webpackConfig from "./webpack.config.gulp.js";

// Common globs.
const dashboardGlob = "./src/**/*.html";
const styleGlob = "./src/**/*.css";
const scriptGlob = "src/**/*.@(ts|tsx|js)";
const redistGlob = "redist/**/*";
const appDefGlob = "appdef.xml";

/**
 * --------------------------- Task logic & functions ---------------------------
 *
 * Tasks could be exported in the function definitions also: exports.myTask = () => { ... }
 * this would prevent us from freely sorting the tasks however.
 */

function watch(cb) {
	// Watch for changes to static resources.
	gulp.watch([dashboardGlob, redistGlob, appDefGlob], copyStaticInstall);

	// Watch for changes to bundled resources.
	gulp.watch([scriptGlob, styleGlob], buildinstall);

	cb();
}

function clean(cb) {

	// Delete dist folder contents.
	deleteSync("dist/*");
	cb();
}

function copyDashboards() {
	// Copy all html files to the dist folder.
	return gulp.src(dashboardGlob)
		.pipe(rename({ dirname: "" }))
		.pipe(gulp.dest("dist"));
}
copyDashboards.displayName = "copy-dashboards";

function copyRedist() {

	// Copy the redist folder into the dist folder.
	return gulp.src(redistGlob)
		.pipe(newer("dist/redist"))
		.pipe(gulp.dest("dist/redist"));
}
copyRedist.displayName = "copy-redist"

function copyAppdef() {

	// Copy the appdef file.
	return gulp.src(appDefGlob)
		.pipe(gulp.dest("dist"));
}
copyAppdef.displayName = "copy-appdef";

function webpack(cb) {
	// Load the default config template.

	// Resolve the entries to be processed.
	webpackConfig.entry = getWebpackEntries();

	// Run webpack.
	const compiler = webp(webpackConfig);
	compiler.run((err, stats) => {

		// Report any webpack errors to gulp.
		if (err) {
			throw new plgerror.PluginError("webpack", err);
		}

		// Log the webpack output to the console.
		log("[webpack]", stats.toString({
			colors: true,
			chunks: false
		}));

		// Signal the task is done.
		cb();
	});
}

const copyStatic = parallel(copyDashboards, copyRedist, copyAppdef);

const dirtybuild = parallel(copyStatic, webpack);

const build = series(clean, dirtybuild);
build.displayName = "build";

function zip() {
	// Zip the dist folder and place the archive in the package folder.
	return gulp.src("dist/**")
		.pipe(gulpzip(zipPackageName))
		.pipe(rename({ extname: ".mfappx" }))
		.pipe(gulp.dest("package"));
}
zip.displayName = "zip";

const buildZip = series(build, zip);
buildZip.displayName = "build-zip";

/**
 * Alternative to PowerShell would be to use the win32ole module
 * https://helloacm.com/using-com-object-in-nodejs/
 */
import { exec } from "child_process";
function install(cb) {
	exec(
		"Powershell.exe -executionpolicy remotesigned -File install-application.ps1",
		function(err, stdout, stderr) {
			stdout.split('\n').forEach(ln => log(ln));
			cb(stderr);
		}
	);
}

const zipInstall = series(zip, install)
zipInstall.displayName = "zip-install";

const buildinstall = series(buildZip, install);
buildinstall.displayName = "build-install";

const copyStaticInstall = series(copyStatic, zipInstall);
copyStaticInstall.displayName = "copystatic-install";

const lint = (cb) => runLint(false, cb);

const lintfix = (cb) => runLint(true, cb);
lintfix.displayName = "lint-fix";

/**
 * Gets all entries for webpack to process into bundles.
 * Creates bundles for all files in src folder matching the patterns:
 *     .shellui.ts, *.dashboard.ts
 */
const getWebpackEntries = () => {

	// Initialize return value.
	let entries = {};

	// Search for entry files.
	let files = glob.sync("./src/**/*@(shellui|.dashboard).@(ts|tsx)");
	log(files.length + " entry files found");
	// Convert files to an object that web pack will understand.
	// fileName => filePath
	for (let i = 0; i < files.length; i++) {

		// Add the file to the entries object.
		let filePath = files[i];
		let fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));
		entries[fileName] = filePath;
		log("[ " + fileName + " ] = " + filePath);
	}

	// Return the entries.
	return entries;
}

function isFixed(file) {
	return file.eslint != null && file.eslint.fixed;
}

/**
 * Runs lint on typescript files in src.
 * @param {boolean} [fix] - Indicates if fixable issues should be fixed. Default: false.
 */
const runLint = (fix, cb) => {

	// Run eslint on ts and tsx files.

	return gulp.src("src/**/*.@(ts|tsx)")
		.pipe(eslint({
			fix: !!fix
		}))
		.pipe(eslint.format())
		.pipe(gulpif(isFixed, gulp.dest('lintfixed')));
}

/**
 * --------------------------- Available tasks ---------------------------
 */

/**
 * Builds the app then watch for changes.
 */
const defaultTask = series(buildinstall, watch);

export {
	defaultTask as default,

	// Creates the package and installs it to the vault
	buildinstall,

	// Watches for changes and builds parts as needed.
	watch,

	// Copies static assets to dist folder.
	copyStatic,

	// Copies the appdef file into the dist folder.
	// copyAppdef,

	// Copies html files to the dist folder.
	// copyDashboards,

	// Copies the redist folder into the dist folder.
	// copyRedist,

	clean,

	// Clean & build. Name this just build since usually we don't want a dirty build.
	build,

	// Creates a build in the dist folder, and then zips the contents
	// and places it at "package/<package_name>.mfappx"
	// buildZip,

	// Bundles scripts and places them in the dist folder.
	webpack,

	// Runs tslint against all ts and tsx files in src.
	lint,

	// Runs tslint against all ts and tsx files in src and fixes the errors if possible.
	lintfix,

	// Installs the package to the vault.
	install,

	// Copies static assets and generate bundles in dist folder.
	// Does not include cleaning.
	// dirtybuild,

	// Deletes all contents in the dist folder.
	// Note: You may need to kill explorer to release files.
	// clean,
}
