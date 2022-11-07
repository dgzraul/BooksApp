import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const getBook = gql`
  query get_Book($id: ID!) {
    book(id: $id) {
      id
      title
      author {
        name
      }
    }
  }
`;

export const BookDetailsPage = () => {
  const { loading, error, data } = useQuery(getBook, {
    variables: { id: useParams().id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { author, id, title } = data.book;

  return (
    <div className="row mt-5">
      <div className="col-8">
        <h3>Book title</h3>
        <ul className="list-group list-flush">
          <li className="list-group-item">
            <b>Author: </b> {author.name}
          </li>

          <li className="list-group-item">
            <b>Book id: </b> {id}
          </li>
        </ul>
      </div>
    </div>
  );
};
