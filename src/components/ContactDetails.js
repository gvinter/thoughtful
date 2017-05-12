import React from 'react';
import PropTypes from 'prop-types';

export const SelectedPlayer = ({ selectedContact }) => {
    if (selectedContact) {
        return (
            <div className="selected-occasion">
                <p>{selectedContact.name}</p>
                <p>{selectedContact.score}</p>
            </div>
        );
    }
    else {
        return (
            <p>No player selected</p>
        );
    }
}

SelectedPlayer.propTypes = {
    selectedContact: PropTypes.object
};