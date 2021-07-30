const { gql, ApolloServer } = require('apollo-server')

/* + Aula sobre Schema & Query
* - Scalar Types - Tipos escalares
* - Int
* - Float
* - String
* - Boolean
* - ID
*/
const typeDefs = gql`
   type Query {
       idade: Int
       salario: Float
       nome: String
       ativo: Boolean
       id: ID
   }     
`;

const resolvers = {
    Query: {
        idade(){
            return 18;
        },
        salario(){
            return 1234.54;
        },
        nome(){
            return 'GraphQL';
        },
        id(){
            return 1;
        }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();