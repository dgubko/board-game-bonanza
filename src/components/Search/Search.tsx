import { useEffect } from "react";
import "./Search.css";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export const Search = (props: Props) => {
  const handleInputChange = (event: any) => {
    props.setQuery(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    return () => {
      props.setQuery("");
    };
  }, []);

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        value={props.query}
        placeholder="Search by name"
        onChange={handleInputChange}
        aria-label="search field to find board game title"
        id="search-input"
      />
    </form>
  );
};
