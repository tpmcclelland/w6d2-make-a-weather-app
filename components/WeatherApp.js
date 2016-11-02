import React from 'react'
import { Link } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import moment from 'moment'

class WeatherApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = sharedState({
            city: 'Indianapolis'
        })
    }

    componentDidMount() {
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    render() {
        var date = moment().format('MMMM Do YYYY [at] h:mm a')

        return <div className="wrapper">
          <header>
            <h3 className="city">{this.state.city}</h3>
            <h4 className="datetime">{date}</h4>
          </header>
          <main>
            {this.props.children}
          </main>
          <footer>
              <div className="footer-nav">
                <Link className="link" to="/">
                    <i className="fa fa-calendar-o fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="footer-nav">
                <Link className="link" to="/fiveday">
                    <i className="fa fa-calendar fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="footer-nav">
                <Link className="link" to="/settings">
                    <i className="fa fa-cog fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
          </footer>
        </div>
    }
}

export default WeatherApp
