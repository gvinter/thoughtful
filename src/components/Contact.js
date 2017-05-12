import React from 'react';
import PropTypes from 'prop-types';

import { Counter } from './Counter';

export default function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={ () => props.removeContact(props.index) }>✖</a>
                <span onClick={ () => props.selectContact(props.index) }>
          {props.name}
        </span>
            </div>
            <div className="player-score">
                <Counter
                    index={props.index}
                    updateContact={props.updateContact}
                    score={props.score}

                />
            </div>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    removeContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired,
};