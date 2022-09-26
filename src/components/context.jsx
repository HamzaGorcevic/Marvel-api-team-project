import { createContext, useState } from "react";

const MyContext = createContext();
export { MyContext };

export default function ContextFunction({ children }) {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  return (
    <MyContext.Provider value={{ value, setValue, search, setSearch }}>
      {children}
    </MyContext.Provider>
  );
}
