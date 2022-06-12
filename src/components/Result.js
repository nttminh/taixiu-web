import React from 'react';
import { connect } from 'react-redux';
import dice1 from '../assets/img/1.png';
import dice2 from '../assets/img/2.png';
import dice3 from '../assets/img/3.png';
import dice4 from '../assets/img/4.png';
import dice5 from '../assets/img/5.png';
import dice6 from '../assets/img/6.png';

class Result extends React.Component {

  render() {
    const { result } = this.props;

    const toDiceComponent = (dice, index) => {
      switch (dice) {
        case 1:
          return (
            <img
              key={index}
              src={dice1}
              alt='dice-1'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        case 2:
          return (
            <img
              key={index}
              src={dice2}
              alt='dice-2'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        case 3:
          return (
            <img
              key={index}
              src={dice3}
              alt='dice-3'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        case 4:
          return (
            <img
              key={index}
              src={dice4}
              alt='dice-4'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        case 5:
          return (
            <img
              key={index}
              src={dice5}
              alt='dice-5'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        case 6:
          return (
            <img
              key={index}
              src={dice6}
              alt='dice-6'
              style={{ width: '50px', objectFit: 'contain' }}
            />
          );
        default:
          return <React.Fragment key={index}></React.Fragment>;
      }
    };

    return (
      <>
        {result.length === 0 && <p style={{ textAlign: 'center' }}>Choose your option</p>}
        {result.length !== 0 && <div>{result.map((dice, index) => toDiceComponent(dice, index))}</div>}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  // whatever return in here will become the props of the component
  result: state.dice.dice,
});

export default connect(mapStateToProps, null)(Result);
