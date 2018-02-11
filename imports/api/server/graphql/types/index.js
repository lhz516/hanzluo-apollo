import { mergeTypes } from 'merge-graphql-schemas'

import USERS_SCHEMA from './users.graphqls'
import CONTACTS_SCHEMA from './contacts.graphqls'

export default mergeTypes([USERS_SCHEMA.loc.source.body, CONTACTS_SCHEMA.loc.source.body])
