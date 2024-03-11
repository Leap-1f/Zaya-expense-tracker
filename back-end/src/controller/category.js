import { sql } from "../../config/database.js";
let tableName = "category";

export const getAllCategories = async (req, res) => {
    try {
        const data = await sql `SELECT * FROM ${sql(tableName)}`;
        res.send(data);
    } catch (err) {
        console.log(err);
    }
};

export const postCategory = async (req, res) => {
    try {
        const data = await sql `SELECT * FROM ${sql(tableName)}`;
        const newCategory = await sql `INSERT INTO ${sql(tableName)}(email, name) VALUES(${req.body.name}, ${req.body.email}) RETURNING *`;
        data.push(newCategory);
        res.send(data);
    } catch(err){
        console.log(err);
    }
};

export const createTable = async(req, res) => {
    try {const data = await sql `CREATE TABLE ${sql(tableName)}(id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), name VARVHAR(100), desceiption TEXT, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    category_image text);`;
res.send(`${tableName} table is created`)
} catch(err) {
    console.log(err);
}
}

export const dropTable = async(req, res) => {
    try {
        const data = await sql `DROP TABLE ${sql(tableName)}`;
        res.send(`${tableName} table was deleted`);
    } catch (err){
        console.log(err);
    }
}