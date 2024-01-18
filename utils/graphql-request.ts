import {GraphQLClient} from 'graphql-request';

const graphqlEndpoints: { [key: string]: string } = {
  lilnouns: 'https://api.goldsky.com/api/public/project_cldjvjgtylso13swq3dre13sf/subgraphs/lil-nouns-subgraph/1.0.4/gn',
};

export const graphqlRequest = async (query: string, variables?: any, endpoint = 'lilnouns') => {
  const client = new GraphQLClient(graphqlEndpoints[endpoint]);

  try {
    return await client.request(query, variables);
  } catch (error) {
    console.error('GraphQL request error:', error);
    throw error;
  }
};
