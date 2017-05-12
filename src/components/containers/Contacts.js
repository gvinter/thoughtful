// Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../common/Nav';
import AddPlayerForm from '../AddContactForm';
import Player from '../Contact';
import { SelectedPlayer } from '../ContactDetails';

import * as ContactActionCreators from '../../actions/contact';

class Contacts extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { dispatch, contacts, selectedContactIndex } = this.props;

    const addContact = bindActionCreators(ContactActionCreators.addContact, dispatch);
    const removeContact = bindActionCreators(ContactActionCreators.removeContact, dispatch);
    const updateContact = bindActionCreators(ContactActionCreators.updateContact, dispatch);
    const selectContact = bindActionCreators(ContactActionCreators.selectContact, dispatch);

    let selectedContact;
    if(selectedContactIndex !== -1){
        selectedContact = contacts[selectedContactIndex];
    }

    const contactComponents = contacts.map((contact, index) => (
      <Player
          name={contact.name}
          score={contact.score}
          key={contact.name}
          index={index}
          updateContact={updateContact}
          removeContact={removeContact}
          selectContact={selectContact}
      />
    ));

    return (
      <div className="scoreboard">
        <Header contacts={contacts} />
        <div className="players">
            { contactComponents }
        </div>
        <AddPlayerForm addContact={addContact} />
        <SelectedPlayer
            selectedContact={selectedContact}
        />
      </div>
    );
  }
}

Contacts.PropTypes = {
    contacts: PropTypes.array.isRequired,
    currentlySelectedContact: PropTypes.number
};

const MapStateToProps = state => (
  {
    contacts: state.contacts,
    selectedContactIndex: state.selectedContactIndex
  }
);

export default connect(MapStateToProps)(Contacts);
// mapStateToProps: functionw e want to use to transform state to props
// Occasions: container we want to use to
// subscribes Occasions to any changes in state (via redux)
// it'll be passed as a prop in MapStateToProps
