import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivityDetails from "./pages/activitydetails/activitydetails";

function App() {
  let defaultActivity = "castle-of-gerald-the-devil";
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to={defaultActivity} />
          <Route path="/:activity_slug" children={<ActivityDetails />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
