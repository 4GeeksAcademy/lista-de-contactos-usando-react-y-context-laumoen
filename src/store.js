export const initialState = {
  contacts: [],
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { 
        ...state, 
        contacts: [...state.contacts, action.payload] 
      };
    case "SET_CONTACTS":
      return { 
        ...state, 
        contacts: action.payload 
      };
    case "DELETE_CONTACT":
      return { 
        ...state, 
        contacts: state.contacts.filter(c => c.id !== action.payload) 
      };
    default:
      throw new Error("Unknown action: " + action.type);
  }
};