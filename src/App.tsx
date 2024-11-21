import { Route } from "wouter";

//Routes
import Home from "./components/Home/Home";
import DictionaryWords from "./components/DictionaryWords/DictionaryWords";

//constants
import { ROOT_ROUTE } from "./constants/constants";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <Route path={ROOT_ROUTE} component={Home} />
      <Route path={ROOT_ROUTE + "search/:word"} component={DictionaryWords} />
    </main>
  );
}

export default App;
