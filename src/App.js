import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";

const App = () => {
  const [ itemCount, setItemCount ] = useState(0);

  return (
    <>
      <Header itemCount={itemCount} />
      <Navigation />
      <Main itemCount={itemCount} setItemCount={setItemCount} />
    </>
  );
};

export { App };
