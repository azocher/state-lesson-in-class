import React, { Component } from 'react'


export default class Point extends Component {
    render() {
        return (
            <div>
                <h3>Score {this.props.player}:</h3>
                <p>{this.props.score}</p>
                <button onClick={(e) => this.props.increaseScore(e, this.props.scoreKey)}>Add Point</button>
            </div>
        )
    }
}