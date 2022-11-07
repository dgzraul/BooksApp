import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

const getBooks = gql`
  query get_Books {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

export const BooksPage = () => {
  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="row rows-cols-1">
      {data.books.map(({ id, title, author }) => (
        <div className="card" key={id}>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
              <b>Author: </b>
              {author.name}
            </p>
            <p className="card-text">
              <b>Book id:</b> {id}
            </p>

            <Link to={`/books/${id}`}>More..</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
