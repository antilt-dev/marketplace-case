import { BaseDB } from "./BaseDB";

export class Migrations extends BaseDB{
    createTables = async ()=>{
        await BaseDB.connection.raw(
            `
            CREATE TABLE IF NOT EXISTS users(
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                phone VARCHAR(15) NOT NULL UNIQUE
            );

            CREATE TABLE IF NOT EXISTS users_images(
                id VARCHAR(100) PRIMARY KEY,
                user_id VARCHAR(100) NOT NULL UNIQUE,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );

            CREATE TABLE IF NOT EXISTS products(
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                price DECIMAL NOT NULL,
                user_id VARCHAR(100) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );

            CREATE TABLE IF NOT EXISTS products_images(
                id VARCHAR(100) PRIMARY KEY,
                link VARCHAR(100) NOT NULL UNIQUE,
                product_id VARCHAR(100) NOT NULL,
                FOREIGN KEY (product_id) REFERENCES products(id)
            );

            CREATE TABLE IF NOT EXISTS sales(
                id VARCHAR(100) PRIMARY KEY,
                sale_date datetime DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS purchased_items(
                id INT AUTO_INCREMENT PRIMARY KEY,
                sale_id VARCHAR(100) NOT NULL,
                product_id VARCHAR(100) NOT NULL,
                price DECIMAL NOT NULL,
                quantity INT NOT NULL,
                FOREIGN KEY (sale_id) REFERENCES sales(id),
                FOREIGN KEY (product_id) REFERENCES products(id)
            )
            `
        )
        .then(()=> console.log("Successfully created tables!"))
        .catch((error:any)=>console.log(error.sqlMessage || error.message))
    }
}

const migrations = new Migrations()
migrations.createTables()