import React from 'react';
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import LiveFootballEvents from '../../components/LiveFootballEvents/LiveFootballEvents';
import { Container, Separator } from './App.css'
import EventCard from '../EventCard/EventCard';
import { AppStoreContext } from '../../stores/appStoreContext'
import { OddFractionalDecimal } from '../../models/OddFractionalDecimal';
import Header from '../../components/Header/Header'

export const App: React.FC = () => (
  <AppStoreContext.Provider value={{oddType: OddFractionalDecimal.fractional}}>
      <Header />
      <Separator />
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <Redirect to='/events' />}
            />
            <Route exact path='/events' component={LiveFootballEvents} />
            <Route exact path='/events/:eventId' component={EventCard} />
          </Switch>
        </Router>
      </Container>
    </AppStoreContext.Provider>
);
