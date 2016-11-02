import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Page extends React.Component {
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

    render() {
        return <div>
            <h1>Page View</h1>
            <p>{this.state.pageText}</p>
        </div>
    }
}

export default Page
