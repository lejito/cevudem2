import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: "bds0lfzrt93yrf5j5lfx-mysql.services.clever-cloud.com",
    port: "3306",
    user: "udwiuo9gzl9czxpi",
    password: "A61OU0JGJ3W1llMEgVq5",
    database: "bds0lfzrt93yrf5j5lfx"
})