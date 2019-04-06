import gql from 'graphql-tag';

export default gql`
    query FindUsers($query: String!){
        search(query: $query, type: USER, first: 10) {
            edges {
                node {
                    ... on User {
                        login,
                        name,
                        avatarUrl,
                        company,
                        location,
                    }
                },
            },
        }
    }
`;
