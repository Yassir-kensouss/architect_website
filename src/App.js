import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Header />
    </Router>
  );
}

export default App;
