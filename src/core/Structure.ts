
/** Structure represents the structure of the M-Files vault.
 * Add properties both to the interfaces and to the getStructure function.
 * Currently not every type of metadata structure item is handled.
 * To add more types, add handling to resolveAlias function */

interface ObjectTypeStructure {
}

interface PropertyStructure {
    myProperty1: number;
    myProperty2: number;
}

interface ClassStructure {
    myClass1: number;
}


// interface WorkflowStructure {
// }

interface StateStructure {
}

// interface ValueListStructure {
// }

export interface Structure {
    objTypes: ObjectTypeStructure;
    properties: PropertyStructure;
    classes: ClassStructure;
    states: StateStructure;
}

export async function getStructure(vault: MFilesAPI.Vault): Promise<Structure> {
    const objTypes: ObjectTypeStructure = {
    };

    const properties: PropertyStructure = {
        myProperty1: await resolveProperty("PD.MyProperty1"),
        myProperty2: await resolveProperty("PD.MyProperty2")
    };

    const classes: ClassStructure = {
        myClass1: await resolveClass("CL.MyClass")
    };

    const states: StateStructure = {
    };

    async function resolveObjectType(alias: string): Promise<number> {
        return await resolveAlias(MFiles.MFMetadataStructureItem.ObjectType, alias);
    }

    async function resolveProperty(alias: string): Promise<number> {
        return await resolveAlias(MFiles.MFMetadataStructureItem.PropertyDef, alias);
    }

    async function resolveClass(alias: string): Promise<number> {
        return await resolveAlias(MFiles.MFMetadataStructureItem.Class, alias);
    }

    function resolveAlias(structureItem: MFilesAPI.MFMetadataStructureItem, objAlias: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            switch (structureItem) {
                case MFiles.MFMetadataStructureItem.ObjectType:
                    vault.Async.ObjectTypeOperations.GetObjectTypeIDByAlias(objAlias, (result) => resolve(result), (shortError) => reject(shortError));
                    break;
                case MFiles.MFMetadataStructureItem.PropertyDef:
                    vault.Async.PropertyDefOperations.GetPropertyDefIDByAlias(objAlias, (result) => resolve(result), (shortError) => reject(shortError));
                    break;
                case MFiles.MFMetadataStructureItem.Class:
                    vault.Async.ClassOperations.GetObjectClassIDByAlias(objAlias, (result) => resolve(result), (shortError) => reject(shortError));
                    break;
                case MFiles.MFMetadataStructureItem.State:
                    vault.Async.WorkflowOperations.GetWorkflowStateIDByAlias(objAlias, (result) => resolve(result), (shortError) => reject(shortError));
                    break;
            }
        });
    }

    return { objTypes, properties, classes, states };
}