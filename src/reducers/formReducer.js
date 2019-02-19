export default function formReducer(
  state = {
    form: [
      {
        label: null,
        componentId: null,
        type: null,
        helpBlock: null,
        order: null,
        components: null
      }
    ],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_FORM": {
      return { ...state, fetching: true };
    }
    case "FETCH_FORM_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_FORM_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        //tentando retornar diretamente o form_structure
        form: action.payload.data.form_structure
      };
    }
  }

  return state;
}
