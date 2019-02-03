import ApolloClient from 'apollo-boost';

// let endpoint = "https://api.graph.cool/simple/v1/cjrgh4siodyv80101tmz7mf98"
let endpoint = "https://api.graph.cool/simple/v1/cjrhwae2sazrv0129hd7vju3l"
// const httpLink = new HttpLink({ uri: endpoint});

// const authLink = new ApolloLink((operation, forward) => {
//   // Retrieve the authorization token from local storage.
//   const token = localStorage.getItem('graphToken');

//   // Use the setContext method to set the HTTP headers.
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   });

//   // Call the next link in the middleware chain.
//   return forward(operation);
// });

const client = new ApolloClient({
  uri:endpoint
});

 // const client = new ApolloClient({ networkInterface })

 export default client