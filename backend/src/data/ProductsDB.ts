import { BaseDB } from "./BaseDB";

export class ProductsDB extends BaseDB{
    TABLE_NAME = "products"

    public async getAll(query?:string,sort?:string,order?:string):Promise<any>{
        return super.getAll(query,sort,order)
    }
    public async getById(id:string):Promise<any>{
        return super.getById(id)
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async deleteById(id:string):Promise<void>{
        await super.deleteById(id)
    }
    public async getBySellerId(sellerId:string){
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({seller_id:sellerId})

        return result
    }
    public async changeName(id:string,name:string):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .where({id})
        .update({name})
    }
    public async changePrice(id:string,price:string):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .where({id})
        .update({price})
    }
    public async changeStock(id:string,newStock:number):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .where({id})
        .update({newStock})
    }
}