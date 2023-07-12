import { sql } from '~~/server/db'

export type BolgModel = {
    id: number;
    title: string;
    content: string;
    created_date: string;
}

export const read = async () => {
    const result = await sql({
        query: "select id,title,content ,created_date from blog"
    })

    return result as BolgModel[]
}

export const create = async (data: Pick<BolgModel, 'title' | "content">) => {

    const result = (await sql({
        query: "insert into blog (title,content) values (?,?)", values: [data.title, data.content]
    })) as any
    return result.length === 1 ? (result[0] as BolgModel) : null
}

export const detail = async (id: string) => {
    const result = (await sql({
        query: "select id,title,content,created_date from blog where id = ?",
        values: [id]
    })) as any
    return result.length === 1 ? (result[0] as BolgModel) : null
}

export const update = async (id: string, data: Pick<BolgModel, 'title' | "content">) => {
    const result = (await sql({
        query: ` update blog set  title=?,content=? where id= ?`,
        values: [data.title, data.content, id]
    })) as any
    return await detail(id)
}

export const remove =async (id:string) => {
    await sql({
        query:`Delete from blog where id = ?`,
        values:[id]
    })
    return true
}