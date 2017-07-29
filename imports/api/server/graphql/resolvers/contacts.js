export default {
  Mutation: {
    submitContact: Meteor.bindEnvironment(({ dbs }, { input }) => {
      input.createdAt = new Date();
      const _id = dbs.Contacts.insert(input);
      return { _id };
    })
  }
};
