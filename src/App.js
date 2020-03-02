import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Page Sections/Navigation'
import Welcome from './components/Classes/Welcome'
import WelcomeTime from './components/Classes/WelcomeTime'

import Header from './components/Page Sections/Header'
import Footer from './components/Page Sections/Footer'
 
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Header />
          <div id="WelcomeBar">
            <Welcome />
            <WelcomeTime />
          </div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
           <Footer />
        </div> 
      </BrowserRouter>
    )
  }
}
 
export default App