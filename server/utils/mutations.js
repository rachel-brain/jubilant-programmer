import {
    gql
} from '@apollo/client';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_ENQUIRY = gql `
  mutation addEnquiry($enquiryText: String!) {
    addEnquiry(enquiryText: $enquiryText) {
      _id
      enquiryText
      user {
        _id
        firstName
      }
      createdAt
      enquiries {
        _id
        enquiryText
      }
    }
  }
`;

export const SEND_EMAIL = gql `
  mutation sendEmail($emailText: String!) {
    sendEmail(emailText: $emailText) {
      _id
      emailText
      user {
        _id
        firstName
      }
      createdAt
      enquiries {
        _id
        emailText
      }
    }
  }
`;