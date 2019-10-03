import React from 'react'


export default function Display(props) {
    console.log(props)
    return (
        <div>
            <div>
                <h1>This At Bat</h1>
            </div>
            <div className="box-container">
                <div data-testid="strikes-display" className="strikes">
                    <h2>Strikes</h2>
                    <h2>{props.strikes}</h2>
                </div>
                <div className="balls">
                <h2>Balls</h2>
                    <h2>{props.balls}</h2>
                </div>
            </div>
        </div>
    )
}
