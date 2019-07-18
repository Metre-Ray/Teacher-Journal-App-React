import React, { Component } from 'react';

import Head from './header/Head.jsx';
import Main from './main/Main.jsx';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { graphql, ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const dataQuery = gql`
  query dataQuery {
    students {
      Id
      Name
      LastName
      Address
      Description
      Marks
    }
    subjects {
      Id
      Name
      Teacher
      Room
      Description
      Dates
    }
  }
`;
const GMain = graphql(dataQuery)(Main);  // декорируем компонент, используя HOC, который берёт запрос и передаёт данные в наш компонент


// When wrapped with the graphql HOC, our ChannelsList component will receive a prop called data,
// which will contain channels when it’s available, or error when there is an error.
// In addition data also contains a loading property, which is true when Apollo Client is still
// waiting for data to be fetched.


export class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <Head />
          <GMain />
        </React.Fragment>
      </ApolloProvider>
    )
  }
}

export default App;
