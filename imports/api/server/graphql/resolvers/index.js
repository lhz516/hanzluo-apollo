import { mergeResolvers } from 'merge-graphql-schemas';
import GraphQLDate from 'graphql-date';
import userResolvers from './users';
import contactResolvers from './contacts';

const customTypeResolvers = {
  Date: GraphQLDate
};

const resolvers = [
  customTypeResolvers,
  userResolvers,
  contactResolvers,
];

export default mergeResolvers(resolvers);
