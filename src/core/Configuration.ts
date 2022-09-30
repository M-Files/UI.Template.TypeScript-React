import { getStructure, Structure } from "./Structure";

export interface Configuration {
    structure: Structure;
}

interface ConfigGetter {
    (vault: MFilesAPI.Vault): Promise<Configuration>
    config?: Configuration
}

export const getConfig: ConfigGetter = async function (vault: MFilesAPI.Vault) {
    if (typeof getConfig.config === 'undefined') {
        const structure = await getStructure(vault);
        getConfig.config = { structure: structure };
    }

    return getConfig.config;
};