const {
  gql
} = require('apollo-server-express');

const typeDefs = gql `
type Channel {
  _id: ID
  name: String
}

type Product {
  _id: ID
  name: String
  description: String
  quantity: Int
  price: Float
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type User {
  _id: ID
  businessName: String
  firstName: String
  email: String
  password: String
  channels: [Channel]
  orders: [Order]
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
  channels: [Channel]
  products(name: String): [Product]
  product(_id: ID!): Product
  order(_id: ID!): Order
  checkout(products: [ID]!): Checkout
  user: User
}

type Mutation {
  addUser(businessName: String!, firstName: String!, email: String!, password: String!): Auth
  updateUser(businessName: String, firstName: String, email: String, password: String): User
  # addOrder(products: [ID]!): Order
  # updateProduct(_id: ID!, quantity: Int!): Product
  login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;