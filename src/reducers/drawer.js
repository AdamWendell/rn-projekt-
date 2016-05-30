const initialState = false

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      console.log('action', state);
      return !state
    
    case "OPEN_DRAWER":
      return true
    
    case "CLOSE_DRAWER":
      return false

    default:
      return state;
  }
}