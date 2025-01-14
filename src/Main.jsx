import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Experience from './pages/Experience';

function Main() {
    return (
        <Router>
            <Switch>
                <Route path="/Experience" component={Experience}/>
            </Switch>
        </Router>
    );
}

export default Main;