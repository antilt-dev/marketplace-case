import { AddressDTO } from "../models/AddressDTO";
import { BaseDB } from "./BaseDB";

export class UsersDB extends BaseDB{
    TABLE_NAME = "users"
    

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
    public async getByEmail(email:string):Promise<any>{
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({email})

        return result
    }
    public async changePhone(id:string,phone:string):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .where({id})
        .update({phone})
    }
    public async changeAddress(id:string,newAddress:AddressDTO):Promise<void>{
        const {country,state,city,zipcode,address} = newAddress

        await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({id})
        .update({country,state,city,zipcode,address})
    }
}