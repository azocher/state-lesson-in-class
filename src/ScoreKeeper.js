import React, { Component } from 'react'
import Point from './Point'

let players = ['Player 1', 'Player 2', 'Player 3']

export default class ScoreKeeper extends Component {
    constructor(props) {
        super()
        this.state = {
            score0: 0,
            score1: 0,
            score2: 0
        }
    }

    increaseScore(e, scoreKey) {
        console.log(this.state[`${scoreKey}`])
        let scoreObj = { [scoreKey]: this.state[scoreKey] + 1}
        this.setState(scoreObj)
    }

    render() {
        return (
            <div>
               {players.map((player, i) => {
                   return <Point player={player} score={this.state[`score${i}`]} increaseScore={this.increaseScore} scoreKey={`score${i}`} />
               })}
            </div>
        )
    }
}