import { BrowserRouter, Route, Switch } from "react-router-dom";
import SnippetsList from "./components/SnippetsList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import AddSnippet from "./components/AddSnippet";
import EditSnippet from "./components/EditSnippet";
import SnippetDetails from "./components/SnippetDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={SnippetsList} />
            <Route path="/add" component={AddSnippet} />
            <Route path="/snippet/edit/:id" component={EditSnippet} />
            <Route path="/snippet/:id" component={SnippetDetails} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
