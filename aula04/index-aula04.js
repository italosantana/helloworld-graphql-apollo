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
      }
`;

const resolvers = {
    Query: {
       usuarios(){
               return usuarios;
       },
       produtos(){
             return produtos;
       }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();