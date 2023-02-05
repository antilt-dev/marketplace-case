import { BaseDB } from "./BaseDB";

export class Migrations extends BaseDB{
    TABLE_NAME = ""
    createTables = async ()=>{
        await BaseDB.connection.raw(
            `
            CREATE TABLE IF NOT EXISTS users(
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                phone VARCHAR(15) NOT NULL UNIQUE,
                country VARCHAR(50) NOT NULL,
                state VARCHAR(50) NOT NULL,
                city VARCHAR(50) NOT NULL,
                zipcode VARCHAR(20) NOT NULL,
                address VARCHAR(100) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS users_images(
                id VARCHAR(100) PRIMARY KEY,
                link VARCHAR(100) NOT NULL UNIQUE,
                user_id VARCHAR(100) NOT NULL UNIQUE,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );

            CREATE TABLE IF NOT EXISTS products(
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                price DECIMAL NOT NULL,
                stock INT NOT NULL,
                seller_id VARCHAR(100) NOT NULL,
                FOREIGN KEY (seller_id) REFERENCES users(id)
            );

            CREATE TABLE IF NOT EXISTS products_images(
                id VARCHAR(100) PRIMARY KEY,
                link VARCHAR(100) NOT NULL UNIQUE,
                product_id VARCHAR(100) NOT NULL,
                FOREIGN KEY (product_id) REFERENCES products(id)
            );

            CREATE TABLE IF NOT EXISTS purchases(
                id VARCHAR(100) PRIMARY KEY,
                buyer_id VARCHAR(100) NOT NULL,
                purchase_date datetime DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (buyer_id) REFERENCES users(id)  
            );

            CREATE TABLE IF NOT EXISTS purchased_items(
                id INT AUTO_INCREMENT PRIMARY KEY,
                purchase_id VARCHAR(100) NOT NULL,
                product_id VARCHAR(100) NOT NULL,
                price DECIMAL NOT NULL,
                quantity INT NOT NULL,
                seller_id VARCHAR(100) NOT NULL,
                FOREIGN KEY (purchase_id) REFERENCES purchases(id),
                FOREIGN KEY (product_id) REFERENCES products(id),
                FOREIGN KEY (seller_id) REFERENCES users(id)
            );

            `
        )
        .then(()=> console.log("Successfully created tables!"))
        .catch((error:any)=>console.log(error.sqlMessage || error.message))
    }
}

const migrations = new Migrations()
migrations.createTables()