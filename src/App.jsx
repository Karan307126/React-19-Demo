import { useState, useTransition } from "react";
import "./App.css";
import Products from "./components/Products";
import Home from "./components/Home";

const App = () => {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const switchTab = (tab) => startTransition(() => setTab(tab));

  const setClasses = (thisTab) => (thisTab === tab ? "active" : "inactive");

  return (
    <main>
      {/* We can add meta tags anywhere inside our JSX  ant it is hoisted to the head element */}
      <title>{tab.toLocaleUpperCase()}</title>
      <meta rel="author" content="Karan Sarvaiya" />
      <nav>
        <button
          onClick={() => switchTab("home")}
          className={setClasses("home")}
        >
          Home
        </button>
        <button
          onClick={() => switchTab("products")}
          className={setClasses("products")}
        >
          Products
        </button>
        <button
          onClick={() => switchTab("about")}
          className={setClasses("about")}
        >
          About
        </button>
      </nav>
      <div>
        {isPending && <h1>Loading...</h1>}
        {!isPending && tab === "home" && <Home />}
        {!isPending && tab === "products" && <Products />}
        {!isPending && tab === "about" && <h1>About Page</h1>}
      </div>
    </main>
  );
};

export default App;
