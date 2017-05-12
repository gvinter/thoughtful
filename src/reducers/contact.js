import * as ContactActionTypes from '../actiontypes/contact';

const initialState = {
    contacts: [
        {
            name: "Jim Hoskins",
            score: 31,
        },
        {
            name: "Andrew Chalkley",
            score: 20,
        },
        {
            name: "Alena Holligan",
            score: 50,
        },
    ],
    selectedContactIndex: -1,
};

export default function Contact(state=initialState, action) {

    switch(action.type) {
        case ContactActionTypes.ADD_CONTACT:
            const addContactList = [...state.contacts, {
                name: action.name,
                score: 0
            }];

            return {
                ...state,
                contacts: addContactList
            };

        case ContactActionTypes.REMOVE_CONTACT:
            const removeContactList = [
                ...state.contacts.slice(0, action.index),
                ...state.contacts.slice(action.index + 1)
            ];
            return {
                ...state,
                contacts: removeContactList
            };

        case ContactActionTypes.UPDATE_CONTACT:
            const updateContactList = state.contacts.map((contact, index) => {
                if(index === action.index) {
                    return {
                        ...contact,
                        score: contact.score + action.score,
                        name: contact.name
                    }
                }
                return contact;
            });
            return {
                ...state,
                contacts: updateContactList
            }

        case ContactActionTypes.SELECT_CONTACT:
            console.log(action);
            return {
                ...state,
                selectedContactIndex: action.index
            };

        default:
            return state;
    }
}