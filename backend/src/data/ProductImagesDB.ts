import { BaseDB } from "./BaseDB";

export class ProductImagesDB extends BaseDB{
    TABLE_NAME = "products_images";

    public async getById(id:string):Promise<any>{
        return super.getById(id)
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async deleteById(id:string):Promise<void>{
        await super.deleteById(id)
    }
    public async getByProductId(ProductId:string){
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({user_id:ProductId})

        return result
    }
    public async changeLink(id:string,link:string):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .where({id})
        .update({link})
    }
}