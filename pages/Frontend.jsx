import React, { useState } from "react";
import Header from "../components/header/Header";

//import styles
import s from "../styles/frontend.module.css";

const Frontend = () => {
  const books = [
    {
      name: "zalupa",
      price: 20,
      description: "zaaasepqwep",
    },
    {
      name: "zalupa",
      price: 20,
      description: "zaaasepqwep",
    },
    {
      name: "zalupa",
      price: 20,
      description: "zaaasepqwep",
    },
    {
      name: "zalupa",
      price: 20,
      description: "zaaasepqwep",
    },
  ];

  const [value, setValue] = useState("");
  const filterBooks = books.filter((data) => {
    return data.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div>
      <Header />
      <form className="search-form">
        <input
          className="search"
          type="search"
          placeholder="Напишите название книги"
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      {filterBooks.map((game) => {
        return <GameItem key={game.id} game={game} />;
      })}
    </div>
  );
};

export default Frontend;
