import { Route } from "wouter";

//Routes
import Home from "./components/Home/Home";
import DictionaryWords from "./components/DictionaryWords/DictionaryWords";

function App() {
  return (
    <main>
      <Route path="/" component={Home} />
      <Route path="/search/:word" component={DictionaryWords} />
    </main>
  );
}

export default App;
