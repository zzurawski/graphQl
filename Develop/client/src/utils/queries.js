import {gql} from '@apollo/client';

const GET_ME = gql`
    query me{ 
        me{
            _id
            Username
            Email
            BookCount
            SavedBooks {
                BookId
                Authors
                Title
                Link
                Image
            }
    }}`

module.exports = GET_ME;