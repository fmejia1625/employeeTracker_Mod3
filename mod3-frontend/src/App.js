import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import RandomEmployeeComponent from './components/RandomEmployeeComponent';

function App() {
  // We will render our ListEmployeeComponent here. Using bootstrap class of container will style the table.
  // The next step will be to configure routing for the different components. 
  return (
  <div>
    {/* Header Component here */}
    {/* Router goes here  */}
    <Router>
      {/* Bootstrap className */}
      
        <HeaderComponent />
         <div className="container">
           {/* Switch will go here */}
            <Switch> 
              {/* place List Employee component here */}
              {/* Configure the routes here. this allows LEC to be rendered as the home page. Remember exact */}
              <Route path = "/" exact component = {ListEmployeeComponent}></Route>
              {/* Confuigure the second route below */}
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              {/*Route for the CreateEmployeeComponent will be configured here  */}
             <Route path = "/add-employees" component = {CreateEmployeeComponent}></Route>  
               {/*Route for RandomEmployeeComponent will be rendered here.  */}
              <Route path = "/random-employee" component = {RandomEmployeeComponent}></Route>
              {/* Route for UpdateEmployeeComponent will be configured here */}
             <Route path = "/update-employee/map/:id" component = {UpdateEmployeeComponent}></Route> 
             {/* Route for ViewEmployeeComponent will be configured here */}
             <Route path = "/view-employee/map/:id" component = {ViewEmployeeComponent}></Route>

           </Switch>
            </div>
        {/* Footer goes here */}
        <FooterComponent />

    </Router>
  </div>

    
  );
}

export default App;
// Add the Header Component here and nested within its own div will lie the ListEmployee Component