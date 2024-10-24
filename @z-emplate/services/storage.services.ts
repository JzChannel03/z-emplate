/*interface StorageServiceOptions {

}*/

interface DbInformation {
    version: number;
    name: string;
}

type StoreObject = {
    [key: string]: {
        [key: string]: "id" | "property" | "idAutoincrement" | "uniqueProperty" | "notIndexableProperty"
    };
}

class StorageService {
    private storesMap = new Map<number, StoreObject>()
    private currentVersion = 0;
    private dbVersion = 0;
    private dbName = '';

    // Validar que el nombre de la base de datos sea unico
    constructor(name: string, /*options?: StorageServiceOptions*/) {
        this.dbName = name;
        this.create();
    }

    public update(store: StoreObject) {

        this.currentVersion++;

        console.log(`currentVersion: ${this.currentVersion} and dbVersion: ${this.dbVersion}`);

        if (this.currentVersion > this.dbVersion) {
            this.storesMap.set(this.currentVersion, store); // Registrar stores con versiones superiores a la db

            //Get each store from storesMap by index, using currentVersion as looking for index, and show in console, one by one
            console.log(`Store #${this.currentVersion} is being updated as: ${JSON.stringify(this.storesMap.get(this.currentVersion))}`);
        }
        
        console.log(`newCurrentVersion: ${this.currentVersion} and newDbVersion: ${this.dbVersion}`);
        return this;
    }

    public save() {
        this.saveDbInfoToLocalStorage(this.dbName, this.currentVersion)
        return this;
    }

    private create() {

        const name = this.dbName;

        const {databaseExists, dbInfo} = this.getExistingDb(name);

        if (!databaseExists) {
            this.saveDbInfoToLocalStorage(name, this.dbVersion)
            return;
        }

        this.dbVersion = dbInfo!.version;
    }

    private getExistingDb(name: string) {
        let dbInfo: DbInformation | null = null;

        try {
            const localDataString = localStorage.getItem(`${name}DB`);

            if (localDataString === null) throw Error("The DB doesn't exists")

            dbInfo = JSON.parse(localDataString)
        } catch (error: any) {
            console.error(error.message)
        }

        return {databaseExists: dbInfo !== null, dbInfo: dbInfo};
    }

    private saveDbInfoToLocalStorage(name: string, version: number) {
        localStorage.setItem(`${name}DB`, JSON.stringify({name, version}))
    }

}

export default StorageService;



