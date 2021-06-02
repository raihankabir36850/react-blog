import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar/NavbarMenu"
import Home from "./pages/Home"
import PostView from "./pages/Post/PostView"
import Users from "./pages/User/Users"
import UserView from "./pages/User/UserView"


function App() {
  return (
    <Router>
      <NavbarMenu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:id" component={UserView} exact />
        <Route path="/posts/:id" component={PostView} exact />
      </Switch>
    </Router>
  );
}

export default App;
