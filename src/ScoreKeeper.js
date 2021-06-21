import React, { Component } from 'react'

export default class ScoreKeeper extends Component {
    constructor(props) {
        super()
        this.state = {
            score1: 0,
            score2: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Score Player 1:</h3>
                    <p>{this.state.score1}</p>
                </div>
                <div>
                    <h3>Score Player 2:</h3>
                    <p>{this.state.score2}</p>
                </div>
            </div>
        )
    }
}