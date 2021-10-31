import {
    gql
} from '@apollo/client';

export const QUERY_USER = gql `
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      businessName
      email
      password
      suburb
      phoneNumber
      channel
      enquiries {
        _id
        enquiryText
        createdAt
      }
    }
  }
`;

export const QUERY_ENQUIRIES = gql `
  query getEnquiries {
    enquiries {
      _id
      user {
        _id
        firstName
        businessName
        email
      }
      enquiryText
      createdAt
    }
  }
`;

export const QUERY_SINGLE_ENQUIRY = gql `
  query getSingleEnquiry($enquiryId: ID!) {
    enquiry(enquiryId: $enquiryId) {
      _id
      enquiryText
      user
      createdAt
      enquiries {
        _id
        enquiryText
        createdAt
      }
    }
  }
`;