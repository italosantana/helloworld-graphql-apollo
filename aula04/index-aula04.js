const { gql, ApolloServer } = require("apollo-server")

/**
 *  => Schema
 *  => Schema Definition Language ou Linguagem de Definição de Esquema
 *  => SDL
 */

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
        usuario: Usuario
        produto: Produto
      }
`;

const resolvers = {
    Query: {
       usuario(){
               return {
                    id: 1,
                    nome: 'Paulo',
                    salario: 1234.54,
                    ativo: true,
                    idade: 23
                };
       },
       produto(){
             return {
                    id: 1,
                    nome: 'Notebok',
                    valor: 4400.21
             };
       }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();