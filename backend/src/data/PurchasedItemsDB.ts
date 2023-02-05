import { BaseDB } from "./BaseDB";

export class PurchasedItemsDB extends BaseDB{
    TABLE_NAME = "purchased_items"

    public async getById(id:string):Promise<any>{
        return super.getById(id)
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async getByPurchase(id:string):Promise<any>{
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({purchase_id:id})

        return result
    }
    public async getBySeller(id:string):Promise<any>{
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({purchase_id:id})

        return result
    }
}