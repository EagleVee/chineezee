import {LanguageActions} from './LanguageActions';

export const initialState = {
    something: 'Somethings',
};

export const LanguageReducer = (state, action) => {
    switch (action.type) {
        case LanguageActions.doSomething:
            return {...state, something: payload};
        default:
            return state;
    }
};

export default initialState;
