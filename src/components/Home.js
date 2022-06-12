import React, { Component } from 'react'
import { Button, Typography } from '@mui/material';

import backgroundPicture from '../assets/img/bgGame.png'
import Result from './Result';
import { connect } from 'react-redux';
import { CHOOSE_DICE, CLEAR_DICE, INCREASE_MATCH, INCREASE_WON, PLAY } from '../services/constant';

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

    render() {
        const { dice, userChoice, chooseDice, clearDice, match, won, play } = this.props;
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
                        {!isFinished && <Button variant='contained' color='success' onClick={play}>
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
        match: state.dice.match,
        won: state.dice.won,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearDice: () => {
            const action = { type: CLEAR_DICE };
            dispatch(action);
        },
        chooseDice: (choice) => {
            const action = { type: CHOOSE_DICE, payload: choice };
            dispatch(action);
        },
        increaseMatch: () => {
            const action = { type: INCREASE_MATCH };
            dispatch(action);
        },
        increaseWon: () => {
            const action = { type: INCREASE_WON };
            dispatch(action);
        },
        play: () => {
            const action = { type: PLAY };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);