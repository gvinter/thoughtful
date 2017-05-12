// Libs
import React, {Component} from 'react';

import Header from '../common/Nav';
import Contacts from 'Contacts';

import * as ContactActionCreators from '../../actions/contact';

class App extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className="scoreboard">
                <Header contacts={contacts} />
                <Contacts />

                <AddPlayerForm addContact={addContact} />
                <SelectedPlayer
                    selectedContact={selectedContact}
                />
            </div>
        );
    }
}