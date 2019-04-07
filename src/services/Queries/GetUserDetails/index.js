import gql from 'graphql-tag';

export default gql`
    query GetUserDetails($login: String!){
        user(login: $login) {
            name,
            avatarUrl,
            company,
            location,
            bio,
            repositories(affiliations: [OWNER], first: 100) {
                nodes {
                    name,
                    description,
                    url,
                    homepageUrl,
                }
            },
        }
    }
`;
