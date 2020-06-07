//importar a dependencia do slqlite 3
const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar objeto de banco de dados, para nossas operações
     //db.serialize(()=>{
    //     //Com comandos SQL eu vou:

    // //1 - Criar uma tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT, 
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //2 - Inserir dados na tabela
    //     const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //         ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://www.https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTptyagHinoBl527nYfwjIzG9Hg1xUMBoWi_sY7G_1IfkIkXxJ&usqp=CAU.com.br/wp-content/uploads/2016/08/Reciclagem-de-papel-apara-papel-papel%C3%A3o.jpg",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos eletrônicos, Lâmpadas"
    //    ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("CADASTRADO COM SUCESSO")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    //3 - Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão os seus registros: ")
    //     console.log(rows)
    // })

    //4 - Deletar um dado da tabela

//     db.run(`DELETE FROM places WHERE id = ?`,[2],function(err){
//         if(err){
//             console.log(err)
//         }
//         console.log("REGISITRO DELETADO COM SUCESSO")
//     })
// })