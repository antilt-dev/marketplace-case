import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDB{
    protected static connection = knex({
        client: "mysql",
        connection:{
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            multipleStatements: true
        },
    });

    abstract TABLE_NAME:string;

    protected async getAll(query?:string,sort?:string,order?:string):Promise<any>{
        const sortDB = sort || "%"
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where("name","like",`%${query}%`)
        .orderBy(sortDB,order);
        return result
    }

    protected async getById(id:string):Promise<any>{
        const result = await BaseDB.connection(this.TABLE_NAME)
        .select()
        .where({id})
        return result
    }

    protected async create(item:any):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .insert(item)
    }

    protected async deleteById(id:string):Promise<void>{
        await BaseDB.connection(this.TABLE_NAME)
        .delete()
        .where({id})
    }

}