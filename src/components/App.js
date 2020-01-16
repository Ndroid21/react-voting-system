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

    handleClick = (language) => {
        const newChanged = { name: language.name, vote: language.vote++ };

        this.setState({
            ...this.state.languages, newChanged
        });
    }

    render() {
        return (
            <div>
                { this.state.languages.map(language => {
                    return <ul>
                        <li>{ language.name } vote: { language.vote }</li>
                        <button onClick={() => this.handleClick(language)}>+Vote Me</button>
                    </ul>
                }) }
            </div>
        )
    }
}
