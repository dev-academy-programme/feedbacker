import { graphqlKoa } from 'graphql-server-koa'
import { makeExecutableSchema } from 'graphql-tools'

import sheetData from './sheet-data'

const typeDefs = `
  input StudentsInput {
    search: [String]
  }

  input UnitsInput {
    search: [String]
  }

  type SheetsAPIDataset {
    students: [Student],
    units: [Unit]
  }

  type Student {
    github: String!
  }

  type Unit {
    designator: String!
  }

  type Query {
    students(studentList: StudentsInput, unitList: UnitsInput) : SheetsAPIDataset
  }

  schema {
    query: Query
  }

`

const resolvers = {
  Query: {
    students: (_, args) => sheetData.students(args)
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default graphqlKoa({ schema })

