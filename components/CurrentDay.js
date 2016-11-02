import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'


class CurrentDay extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState({
            temp: '---',
            condition: {
                description: '---',
                icon: ''
            }
        })
    }

    componentDidMount() {
        attachSharedState(this)

        var api = {
            base: 'http://api.openweathermap.org/data/2.5/weather?',
            city: this.state.city,
            appId: 'e54f5549bbe573caa95441e42a6fad59'
        }

        // fetch api data
        fetch(`${api.base}q=${api.city}&APPID=${api.appId}`)
        .then(response => response.json())
        .then(this.updateWeatherData)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    updateWeatherData(data) {
        //grab temp (format kelvin) and condition
        //set state
        var temp = this.convertKelvinToFahrenheit(data.main.temp)
        var condition = {}

        data.weather.forEach(function(item) {
            condition.description = item.main
            condition.icon = `owf owf-${item.id} owf-2x`
        })

        sharedState({
            temp: temp,
            condition: condition
        })

    }

    convertKelvinToFahrenheit(kelvin) {
        return Math.round(kelvin * (9/5) - 459.67)
    }

    render() {
        return <div className="currentDay">
            <div className="temp">
                {this.state.temp}&deg;
            </div>
            <p>{this.state.condition.description}</p>
            <p><i className={this.state.condition.icon}></i></p>
        </div>
    }
}

export default CurrentDay
