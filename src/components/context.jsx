import { createContext, useState } from "react";

const MyContext = createContext();
export { MyContext };

export default function ContextFunction({ children }) {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("characters");
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(10);
  return (
    <MyContext.Provider
      value={{
        value,
        setValue,
        search,
        setSearch,
        genre,
        setGenre,
        setPage,
        setLastPage,
        page,
        lastPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
