import All_books from "./all_books";
import Book_add from "./book_add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main_frame">
              <All_books 
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
