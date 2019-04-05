import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Routes from 'components/Routes';

import { client as ApolloClient } from 'services/Apollo';

const App = () => (
    <ApolloProvider client={ApolloClient}>
        <Routes />
    </ApolloProvider>
);

export default App;
