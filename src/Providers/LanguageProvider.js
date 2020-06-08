import initialState, {LanguageReducer} from '../ReduxHooks/LanguageReducer';
import React, {createContext, useReducer} from 'react';
import {LanguageActions} from '../ReduxHooks/LanguageActions';
import API from '../API';
import {put} from './Dispatch';

export const LanguageContext = createContext({});
export const LanguageProvider = LanguageContext.Provider;

export default function Wrapper(props) {
    const [state, dispatch] = useReducer(LanguageReducer, initialState);
    const actions = mapActionsToDispatch(dispatch);
    return (
        <LanguageProvider value={{state, dispatch, ...actions}}>
            {props.children}
        </LanguageProvider>
    );
}
export const mapActionsToDispatch = dispatch => {
    return {
        doSomething: doSomething(dispatch),
    };
};

const doSomething = dispatch => async () => {
    await put(dispatch, LanguageActions.doSomething, 'Some other things');
};
