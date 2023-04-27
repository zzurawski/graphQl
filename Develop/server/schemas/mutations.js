import {gql} from "@apollo/client";

const LOGIN_USER = gql`
    mutation login(
        $email: String!,
        $password: String!
        ){
            login(
                email: $email,
                password: $password
            ){
                token
                user{
                    _id
                    username
                    email
                }
            }
        }`;

const ADD_USER = gql`
    mutation createUser(
        $username: String!,
        $email: String!,
        $password: String!
    ){
        createUser(
            username: $username,
            email: $email,
            password: $password
        ){
            token
            user{
                _id
                username
            }
        }
    }`;

const SAVE_BOOK = gql`
    mutation saveBook(
        $input: bookInput!
    ){
        saveBook(
            input: $input
        ){
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }`;

const REMOVE_BOOK = gql`
    mutation deleteBook(
        $bookId: String!
    ){
        deleteBook(
            bookId: $bookId
        ){
            _id
            username
            email
            bbokCount
            savedBooks{
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }`;

module.exports = {
    LOGIN_USER,
    ADD_USER,
    SAVE_BOOK,
    REMOVE_BOOK
};