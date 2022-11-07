import { gql, useQuery } from "@apollo/client";
import { logDOM } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

const getAuthors = gql`
  query get_Authors {
    authors {
      id
      name
      dateOfBirth
    }
  }
`;

export const AuthorsPage = () => {
  const { loading, error, data } = useQuery(getAuthors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="row rows-cols-1">
      {data.authors.map(({ id, name, dateOfBirth }) => (
        <div className="card" key={id}>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            {(() => {
              if (dateOfBirth) {
                return (
                  <p className="card-text">
                    <b>Birth date: </b> {dateOfBirth}
                  </p>
                );
              }
            })()}
            <p className="card-text">
              <b>Author id: </b> {id}
            </p>
            <Link to="/">More..</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
