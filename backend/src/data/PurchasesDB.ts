import { BaseDB } from "./BaseDB";

export class PurchasesDB extends BaseDB{
    TABLE_NAME = "purchases"

    public async getById(id:string):Promise<any>{
        return super.getById(id)
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async getByBuyer(id:string,query?:string,order?:string):Promise<any>{
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({buyer_id:id})
        .where("purchase_date","like",`%${query}%`)
        .orderBy("purchase_date",order)

        return result
    }   
}