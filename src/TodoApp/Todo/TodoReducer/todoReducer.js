export const initialValues = {
  people: [],
  isModalOpen: false,
  show: false,
  msg: "",
  color: "",
};

export const todoReducer = (state, action) => {
  if (action.type === "ADD_PEOPLE") {
    return {
      ...state,
      people: [...state.people, action.payload],
      show: true,
      msg: "person added",
      color: "green",
    };
  }
  if (action.type === "REMOVE_PERSON") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      show: true,
      msg: "person removed",
      color: "red",
    };
  }
  if (action.type === "EDIT_PERSON") {
    const { editId, name } = action.payload;
    console.log(name);
    const newPeople = state.people.map((person) => {
      if (person.id === editId) {
        return { ...person, name };
      }
      return person;
    });
    return {
      ...state,
      people: newPeople,
      show: true,
      msg: "person edited",
      color: "orange",
    };
  }
  if (action.type === "CLEAR_ITEMS") {
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === "Close_Modal") {
    if (action.payload === true) {
      return initialValues;
    }
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      show: false,
      msg: "",
      color: "",
    };
  }
  return state;
};
