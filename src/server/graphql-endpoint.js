import { graphqlKoa } from 'graphql-server-koa'
import { makeExecutableSchema } from 'graphql-tools'

import sheetData from './sheet-data'

const typeDefs = `
  input WhereIn {
    search: [String]
  }

  type SheetsAPIDataset {
    students: [String],
    units: [String]
  }

  type Query {
    students(studentList: WhereIn, unitList: WhereIn) : SheetsAPIDataset
  }

  schema {
    query: Query
  }

  scalar Date
  scalar UUID

  type Student {
    github: String!
  }

  type Unit {
    designator: String!
  }
`

const resolvers = {
  Query: {
    users: (_, args) => sheetData.all(args).catch(console.error)
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default graphqlKoa({ schema })

