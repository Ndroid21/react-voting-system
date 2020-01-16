import React, { Component } from 'react'

export default class App extends Component {
    state = {
        languages : [
            {
                name: 'PHP',
                vote: 0
            },
            {
                name: 'Python',
                vote: 0
            }
        ]
    }

    render() {
        return (
            <div>
                { this.state.languages.map(language => <li>{ language.name }</li>) }
            </div>
        )
    }
}
