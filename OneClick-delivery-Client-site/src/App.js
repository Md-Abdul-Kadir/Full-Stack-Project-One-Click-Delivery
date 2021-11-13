import logo from './logo.svg';

import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Pages/Notfound/NotFound';
import Aboutus from './Pages/Aboutus/Aboutus';
import Footer from './Components/Footer/Footer';
import Hotline from './Pages/Hotline/Hotline';
import Foods from './Pages/Foods/Foods';
import Drinks from './Pages/Drinks/Drinks';
import SetMeals from './Pages/SetMeals/SetMeals';
import Orders from './Pages/Orders/Orders';
import Login from './Pages/Login/Firebase/Loginpage/Login';
import Signin from './Pages/Login/Signin/Signin';
import AuthProvider from './Pages/Login/Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
         <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/foods">
          <Foods></Foods>
          </Route>
          <Route path="/drinks">
          <Drinks></Drinks>
          </Route>
          <Route path="/setmenu">
          <SetMeals></SetMeals>
          </Route>
          <Route path="/orders">
          <Orders></Orders>
          </Route>
          <Route path="/orders/:id">
          <Orders></Orders>
          </Route>
          <Route path="/about">
          <Aboutus></Aboutus>
          </Route>
          <Route path="/hotline">
          <Hotline></Hotline>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/signin">
          <Signin></Signin>
          </Route>
          <Route path="/*">
          <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
