const SUBMIT_TYPE = "sub";

const submitCreator = (payload) => {
    return ({type: SUBMIT_TYPE, payload: payload})
};

export const types = {
    SUBMIT_TYPE
};

export const creators = {
    submitCreator
};