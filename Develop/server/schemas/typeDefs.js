const {gql} = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: String
        authors: String
        description: String
        title: String
        link: String
        image: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: user
    }

    input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        link: String
        image: String
    }

    type Mutation {
        login(email: String, password: String): Auth
        saveBook(input: bookInput): User
        deleteBook(input: bookInput): User
        addUser(username: String, email: String, password: String): Auth
    }
    `

    module.exports = typeDefs;