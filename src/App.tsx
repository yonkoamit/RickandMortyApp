import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './client';
import Episodes from './components/Episodes/Episodes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Characters from './components/Characters/Characters';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
          <Header/>
          <Switch>
            <Route path={`/episodes/:id`}><EpisodeDetails/></Route>
            <Route path={'/characters/:id'}><CharacterDetails/></Route>
            <Route path='/episodes'><Episodes/></Route>
            <Route path='/characters'><Characters/></Route>
            <Route path='/'><Home/></Route>
          </Switch>
          <Footer/>
          
      </ApolloProvider>
    </Router>
  );
}

export default App;
