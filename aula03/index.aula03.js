const { gql, ApolloServer } = require('apollo-server')

const typeDefs = gql `
        type Query {
            idade: Int
            salario: Float
            nome: String
            ativo: Boolean
            id: ID
            tecnologias: [String]
        }     
`;
const resolvers = {
    Query: {
        tecnologias(){
            return [ 'GraphQL', 'ReactJS', 'CSS' ]
        },
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