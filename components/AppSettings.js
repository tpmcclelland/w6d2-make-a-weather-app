import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class AppSettings extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }

    componentDidMount() {
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.saveCity()
        }
    }

    handleChange(e) {
        sharedState({
            city: e.target.value
        })
    }

    handleClick(e) {
        this.saveCity()
    }

    saveCity() {
    
    }


    render() {
        return <div className="settings">
            <div className="input-group input-group-lg">
                <input className="form-control" type="text" placeholder="Enter City" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
            </div>
                <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.handleClick}>Save</button>
        </div>
    }
}
export default AppSettings
