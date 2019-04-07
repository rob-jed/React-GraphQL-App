# React + GraphQL App

Simple app to search for GitHub users and review their repositories using Github GrahpQL API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For more info about environment and installation process please head to the CRA repository.

## Getting Started
App requires GitHub authentication token to perform GraphQL requests.
If you need any help obtaining one please go to [official guide](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

Then you have to create `.env` file in project root directory and add `REACT_APP_GITHUB_TOKEN`
variable with value equal to your token:

`REACT_APP_GITHUB_TOKEN=yourTokenGoesHere`

## Key packages used in project
* [React.js](https://reactjs.org/)
* [React Apollo](https://github.com/apollographql/react-apollo)
* [GraphQL](https://graphql.org/)
