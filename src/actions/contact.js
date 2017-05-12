import * as ContactActionTypes from '../actiontypes/contact';

export const addContact = name => {
    return {
        type: ContactActionTypes.ADD_CONTACT,
        name
    };
};

export const removeContact = index => {
    return {
        type: ContactActionTypes.REMOVE_CONTACT,
        index
    };
};

export const updateContact = (index, score) => {
    return {
        type: ContactActionTypes.UPDATE_CONTACT,
        index,
        score
    };
};

export const selectContact = index => {
    return {
        type: ContactActionTypes.SELECT_CONTACT,
        index
    };
};