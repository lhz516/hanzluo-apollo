export default {
  Mutation: {
    submitContact: ({ dbs }, { input }) => {
      input.createdAt = new Date();
      const _id = dbs.Contacts.insert(input);
      return { _id };
    }
  }
};
