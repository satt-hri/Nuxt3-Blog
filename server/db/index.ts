import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'dev5p.in.satt.jp',
    user: 'root',
    password: "Abc123$%&",
    database: 'sf-ri'
});

interface Options {
    query: string;
    values?: any[];
}
export const sql = async ({ query, values }: Options) => {
    const [rows] = await pool.query(query, values);
    return rows
}