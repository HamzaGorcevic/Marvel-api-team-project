import { createContext, useState } from "react";

const MyContext = createContext();
export { MyContext };

export default function ContextFunction({ children }) {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("characters");
  return (
    <MyContext.Provider
      value={{ value, setValue, search, setSearch, genre, setGenre }}
    >
      {children}
    </MyContext.Provider>
  );
}
