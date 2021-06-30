import React, {useState, createContext} from 'react';

const initialState = {
  status: false,
};

export const StateContext = createContext({
  state: initialState,
  actions: {setStatus: () => {}},
});

const setStatus = (state, setState, status) => {
  setState({status});
  console.warn(state);
};

export const Context = props => {
  const [state, _setState] = useState(initialState);
  const setState = _state => {
    const newState = {...state, ..._state};
    _setState(newState);
  };

  const actions = {
    setStatus: setStatus.bind(null, state, setState),
  };

  return (
    <StateContext.Provider value={{state, actions}}>
      {props.children}
    </StateContext.Provider>
  );
};
