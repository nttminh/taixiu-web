import React, { Component } from 'react'
import { Button, Typography } from '@mui/material';

import backgroundPicture from '../assets/img/bgGame.png'
import Result from './Result';
import { connect } from 'react-redux';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundPicture})`,
}
const btnStyle = {
    padding: '3rem',
    fontSize: '2rem',
    boxShadow: '0 5px 20px rgba(4, 255, 0, 0.5)',
}

class Home extends Component {

    handlePlay = () => {
        const { dice, userChoice,  rollDice, increaseMatch, increaseWon  } = this.props;
        console.log(this.state)
        console.log('User choice: ', userChoice); // 0 (even) or 1 (odd), this shows correct result
        rollDice(); // generate 3 random numbers between 1 and 6 , e.g. (dice =[4, 2 ,5])
        increaseMatch();
        console.log('Dice: ', this.props.dice); // ERROR: here Dice still empty, no matter how many times you roll the dice

        const sum = dice.reduce((acc, cur) => acc + cur, 0);

        const diceIsEven = sum % 2 === 0;

        if (userChoice === 0 && diceIsEven) {
            console.log('user win by even')
            increaseWon();
        }

        if (userChoice === 1 && !diceIsEven) {
            console.log('user win by odd')
            increaseWon();
        }
    }

    render() {
        const { dice, userChoice, chooseDice, clearDice, match, won } = this.props;
        const isFinished = dice.length !== 0;

        return (
            <>
                <div
                    style={containerStyle}
                >
                    <h1 style={{ fontSize: '5rem' }}>Chinese Dice!</h1>
                    <div
                        style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            style={btnStyle}
                            onClick={() => chooseDice(0)}
                        >
                            <b>Even</b>
                        </Button>
                        <Result />
                        <Button
                            variant='contained'
                            color='primary'
                            style={btnStyle}
                            onClick={() => chooseDice(1)}
                        >
                            <b>Odd</b>
                        </Button>
                    </div>
                    <ul
                        style={{
                            padding: 0,
                            listStyle: 'none',
                            fontSize: '1.6rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                        }}
                    >
                        <li>Your choice: <span>{userChoice ? 'Odd' : 'Even'}</span></li>
                        <li>🔥 Matches Won: <span>{won}</span></li>
                        <li>🔥 Total matches: <span>{match}</span></li>
                    </ul>
                    <div>
                        {!isFinished && <Button variant='contained' color='success' onClick={this.handlePlay}>
                            <Typography variant='h6'>PLAY GAME</Typography>
                        </Button>}
                        {isFinished && <Button variant='contained' color='primary' onClick={clearDice}>
                            <Typography variant='h6'>NEXT</Typography>
                        </Button>}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dice: state.dice.dice,
        userChoice: state.dice.userChoice,
        match: state.match.match,
        won: state.match.won,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rollDice: () => {
            const action = { type: 'ROLL_DICE' };
            dispatch(action);
        },
        clearDice: () => {
            const action = { type: 'CLEAR_DICE' };
            dispatch(action);
        },
        chooseDice: (choice) => {
            const action = { type: 'CHOOSE_DICE', payload: choice };
            dispatch(action);
        },
        increaseMatch: () => {
            const action = { type: 'INCREASE_MATCH' };
            dispatch(action);
        },
        increaseWon: () => {
            const action = { type: 'INCREASE_WON' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);