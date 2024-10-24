import StorageService from "@z-emplate/services/storage.services.ts";

const instance = new StorageService('pedrito')
    .update({
        people: {
            username: "id",
            name: "property"
        }
    })
    .update({
        products: {
            id: "idAutoincrement",
            total: "property"
        },
        orders: {
            id: "idAutoincrement",
            price: "property"
        }
    })

// Save info data about the database and get it
const db = instance.save();

export {db}
