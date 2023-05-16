import { createContext } from "react";

export const Context = createContext(null);

const Provider = () => {
  return <Context.Provider value={null}></Context.Provider>;
};

export default Provider;
