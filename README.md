# graphQl-debug

## Getting Started
In order for this application to use a GraphQL API, you’ll need to refactor the API to use GraphQL on the back end and add some functionality to the front end. The following sections contain details about the files you’ll need to modify on the back end and the front end.

## IMPORTANT
Make sure to study the application before building upon it. Better yet, start by making a copy of it. It's already a working application—you're converting it from RESTful API practices to a GraphQL API.

## Back-End Specifications
You’ll need to complete the following tasks in each of these back-end files:

auth.js: Update the auth middleware function to work with the GraphQL API.

server.js: Implement the Apollo Server and apply it to the Express server as middleware.

## IMPORTANT
Apollo Server recently migrated to Apollo Server 3. This major-version release impacts how Apollo Server interacts in an Express environment. To implement Apollo Server 2 as demonstrated in the activities, you MUST use the following script npm install apollo-server-express@2.15.0 to install Apollo Server 2. Alternately, to migrate to the latest version of Apollo Server, please refer to the Apollo Server Docs on Migrating to Apollo Server 3Links to an external site. and Apollo Server Docs on Implementing Apollo Server Express with v3Links to an external site.. Note that if you are using Apollo Server 3 you are required use await server.start() before calling server.applyMiddleware.

Schemas directory:

index.js: Export your typeDefs and resolvers.

resolvers.js: Define the query and mutation functionality to work with the Mongoose models.

HINT
typeDefs.js: Define the necessary Query and Mutation types:

Query type:

me: Which returns a User type.
Mutation type:

login: Accepts an email and password as parameters; returns an Auth type.

addUser: Accepts a username, email, and password as parameters; returns an Auth type.

saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

removeBook: Accepts a book's bookId as a parameter; returns a User type.

User type:

_id

username

email

bookCount

savedBooks (This will be an array of the Book type.)

Book type:

bookId (Not the _id, but the book's id value returned from Google's Book API.)

authors (An array of strings, as there may be more than one author.)

description

title

image

link

Auth type:

token

user (References the User type.)

## Front-End Specifications
You'll need to create the following front-end files:

queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

mutations.js:

LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

ADD_USER will execute the addUser mutation.

SAVE_BOOK will execute the saveBook mutation.

REMOVE_BOOK will execute the removeBook mutation.

Additionally, you’ll need to complete the following tasks in each of these front-end files:

App.js: Create an Apollo Provider to make every request work with the Apollo server.

SearchBooks.js:

Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.

Make sure you keep the logic for saving the book's ID to state in the try...catch block!

SavedBooks.js:

Remove the useEffect() Hook that sets the state for UserData.

Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.

Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)

SignupForm.js: Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.

LoginForm.js: Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.

## Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

## Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

Use an Apollo Server and apply it to the Express.js server as middleware.

Include schema settings for resolvers and typeDefs as outlined in the Challenge instructions.

Modify the existing authentication middleware to work in the context of a GraphQL API.

Use an Apollo Provider so that the application can communicate with the Apollo Server.

Application must be deployed to Heroku.

Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

Application Quality: 15%
User experience is intuitive and easy to navigate.

User interface style is clean and polished.

Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README file with description, screenshot, and link to the deployed application.

## How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE
