import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import moment from 'moment'

class FiveDayForecast extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState({
            forecasts: []
        })
    }

    componentDidMount() {
        attachSharedState(this)

        var api = {
            base: 'http://api.openweathermap.org/data/2.5/forecast/daily?',
            city: this.state.city,
            appId: 'e54f5549bbe573caa95441e42a6fad59',
            days: '5'
        }

        // fetch api data
        fetch(`${api.base}q=${api.city}&cnt=${api.days}&APPID=${api.appId}&units=imperial`)
        .then(response => response.json())
        .then(this.updateWeatherData)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    updateWeatherData(data) {

        var forecasts = data.list.map(function(day, i) {
            var date = moment().add(i, 'days').format('dddd');
            return {
                date: date,
                maxTemp: day.temp.max
            }
        })

        sharedState({
            forecasts: forecasts
        })
    }

    render() {
        // var forecasts = this.state.forecasts.map(function(forecast) {
        //     return <li className="list-group-item">{forecast.maxTemp} &deg; {forecast.day}</li>
        // })
        // console.log(this.state.forecasts)
        return <div>
            <ul className="list-group">
                {this.state.forecasts.forEach(function(forecast) {
                    <li className="list-group-item">{forecast.maxTemp}&deg; {forecast.day}</li>
                })}
            </ul>
        </div>
    }
}

export default FiveDayForecast
