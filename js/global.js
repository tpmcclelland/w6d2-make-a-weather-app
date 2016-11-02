import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import WeatherApp from '../components/WeatherApp'
import FiveDayForecast from '../components/FiveDayForecast'
import CurrentDay from '../components/CurrentDay'
import AppSettings from '../components/AppSettings'

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={WeatherApp}>
            <IndexRoute component={CurrentDay} />
            <Route path="fiveday" component={FiveDayForecast} />
            <Route path="settings" component={AppSettings} />
        </Route>
    </Router>
    , document.getElementById('app')
)
