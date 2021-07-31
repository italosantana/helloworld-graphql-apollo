const { gql, ApolloServer } = require("apollo-server")

/**
 *  => Schema
 *  => Schema Definition Language ou Linguagem de Definição de Esquema
 *  => SDL
 */

const produtos = [
                    {
                        id: 1,
                        nome: 'Notebok',
                        valor: 4400.21
                    },
                    {
                        id: 2,
                        nome: 'TV',
                        valor: 2100.21
                    }
                ];

const usuarios = [
        {
            id: 1,
            nome: 'GraphQL',
            ativo: true,
            idade: 10,
            salario: 999
        },
        {   
            id: 2,
            nome: 'Backend',
            ativo: false,
            idade: 5,
            salario: 6969
        }
];                

const typeDefs = gql `

    type Produto    {
        id: ID
        nome: String
        valor: Float
    }    

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
        usuario(id: Int, nome: String): Usuario
        produto(id: Int, nome: String): Produto
      }
`;

const resolvers = {
    Query: {
       usuarios(){
               return usuarios;
       },
       usuario(_, args){
        console.log(args);
        const {id, nome} = args;
        if(id) return usuarios.find((usuario) => usuario.id == id);
               return usuarios.find((usuario) => usuario.nome == nome);
       },
       produto(_, args){
        const {id, nome} = args;
        if(id) return produtos.find((produto) => produto.id == id);
               return produtos.find((produto) => produto.nome == nome);
       }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();