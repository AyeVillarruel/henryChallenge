import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Catalogo  from './components/catalogo/catalogo'
import Home from './containers/Home'
import Card from './components/card/Card'
import Inicio from './containers/inicio'
import Contacto from './containers/contacto'
import About from './containers/about'


function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Inicio} />
     <Route exact path="/Home" component={Home} />
     <Route exact path="/catalogo" component={Catalogo}/>
     <Route exact path="/card" component={Card} />
     <Route exact path="/contacto" component={Contacto} />
     <Route exact path="/nosotros" component={About} />

   </Switch>
   </BrowserRouter>
  );
}

export default App;
