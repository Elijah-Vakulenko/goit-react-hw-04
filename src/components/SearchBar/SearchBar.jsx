import { useState } from "react";
import s from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";
import { showError } from "../../services/toaster";

const SearchBar = ({ onSubmit }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      showError("Please enter a search query");
      return;
    }
    onSubmit(topic);
    console.log(topic);
  };

  const handleChange = (evt) => {
    setTopic(evt.target.value);
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <Toaster />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;