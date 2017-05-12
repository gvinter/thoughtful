import React from 'react';
import PropTypes from 'prop-types';


export default function Header(props) {
    return (
        <div className="header">
            <h1>Contacts</h1>
        </div>
    );
}

Header.propTypes = {
    contacts: PropTypes.array.isRequired,
};