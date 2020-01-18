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
            <div className="container">
                { this.state.languages.map(language => {
                    return (
                        <ul className="list-group my-1">
                            <li className="list-group-item d-flex justify-content-between align-items-center">{ language.name } vote: { language.vote }
                            <div className="btn-group">
                                <button className="btn btn-light" onClick={() => this.handleClick(language)}>+Vote Me</button>
                            </div>
                            </li>
                        </ul>
                    )
                }) }
            </div>
        )
    }
}
