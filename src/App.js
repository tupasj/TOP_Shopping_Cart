import { HashRouter } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { LoginModal } from "./components/Routes";

const App = () => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <HashRouter baseName='/TOP_Shopping_Cart'>
      <Header itemCount={itemCount} />
      <Navigation />
      <Main itemCount={itemCount} setItemCount={setItemCount} />
      <LoginModal />
    </HashRouter>
  );
};

export { App };
