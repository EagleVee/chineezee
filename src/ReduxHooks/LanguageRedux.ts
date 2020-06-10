export const initialState = {
  something: "Somethings"
};

export interface Action {
  type: string;
  payload: any;
}

export const LanguageActions = {
    doSomething: "DO_SOMETHING"
};


export const LanguageReducer = (state: object, action: Action) => {
  switch (action.type) {
    case LanguageActions.doSomething:
      return { ...state, something: action.payload };
    default:
      return state;
  }
};

export default initialState;
