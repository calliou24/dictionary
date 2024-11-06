import { Route } from "wouter";

//Routes
import Home from "./components/Home/Home";
import DictionaryWords from "./components/DictionaryWords/DictionaryWords";

//constants
import { ROOT_ROUTE } from "./constants/constants";

function App() {
  return (
    <main>
      <Route path={ROOT_ROUTE} component={Home} />
      <Route path="/search/:word" component={DictionaryWords} />
    </main>
  );
}

export default App;
