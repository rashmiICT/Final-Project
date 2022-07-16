import "./App.css";
import React, { useState } from "react";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/home/home";
import Footer from "./components/common/footer/Footer";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Login from "./components/home/login/Login";
import Booking from "./components/home/Booking/Booking";
import Register from "./components/home/register/Register";
import { getProfile } from "./utils/user";

function App() {
  const [user, setUser] = useState(getProfile("user"));
  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/login"
          component={() => <Login setUser={setUser} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Booking" component={Booking} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;