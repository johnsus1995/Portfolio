import "./App.css";

//ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPPONENTS
import Header from "./Comp/Header.jsx";
import Main from "./Comp/Main.jsx";
import Works from "./Comp/MyWorks/Works";
import Todo from "./Comp/Todo App/Todo"
import WeatherApp from "./Comp/WeatherApp/WeatherApp";

function App() {
  return (
    
    <Router>
      <Header />
      {/* <Main /> */}
      {/* <Todo /> */}
      
        <Switch>
          <Route path="/weatherApp" exact component={WeatherApp} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/works" exact component={Works}/>
          <Route path='/' exact component={Main} />
        </Switch>
      </Router>
    
  );
}

export default App;
