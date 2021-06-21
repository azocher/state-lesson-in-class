import React, { Component } from 'react'

export default class ScoreKeeper extends Component {
    constructor(props) {
        super()
        this.state = {
            score1: 0,
            score2: 0
        }
    }

    increaseScore(e) {
        this.setState({
            score1: this.state.score1 + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Score Player 1:</h3>
                    <p>{this.state.score1}</p>
                    <button onClick={(e) => this.increaseScore(e)}>Add Point</button>
                </div>
                <div>
                    <h3>Score Player 2:</h3>
                    <p>{this.state.score2}</p>
                </div>
            </div>
        )
    }
}