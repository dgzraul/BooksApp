import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthorsPage, BooksPage } from "./books/pages";
import { BookDetailsPage } from "./books/pages/BookDetailsPage";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/authors" element={<AuthorsPage />} />

          <Route path="/books/:id" element={<BookDetailsPage />} />

          <Route path="/*" element={<Navigate to="/books" />} />
        </Routes>
      </div>
    </>
  );
};
