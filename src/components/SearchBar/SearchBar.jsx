import s from "./SearchBar.module.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { showError } from "../../services/toaster";
import { FaSearch } from 'react-icons/fa';

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
      <a className={s.logo} href="">ImageNation III</a>
      <form className={s.searchform} onSubmit={handleSubmit}>
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
        <button className={s.btn} type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;