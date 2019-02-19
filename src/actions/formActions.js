import axios from "axios";

export function fetchForm() {
  return function(dispatch) {
    dispatch({ type: "FETCH_FORM" });

    axios
      .get(
        "https://coletum.com/api/graphql?query={form_structure(formId:6950){label,componentId,type,helpBlock,order,components}}&token=7s5txcu909kwc48wookgw8g00occokk"
      )
      .then(response => {
        dispatch({
          type: "FETCH_FORM_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_FORM_REJECTED", payload: err });
      });
  };
}

// export function addTweet(id, text) {
//   return {
//     type: 'ADD_FORM',
//     payload: {
//       label,
//       componentId,
//       type,
//       helpBlock,
//       order,
//       components
//     },
//   }
// }
