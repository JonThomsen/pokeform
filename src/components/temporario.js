import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  form: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FORM_PENDING": {
      return { ...state, fetching: true };
      break;
    }
    case "FETCH_FORM_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
      break;
    }
    case "FETCH_FORM_FULLFILED": {
      return {
        ...state,
        fetching: false,
        feteched: true,
        users: action.payload
      };
      break;
    }
  }
  return state;
};

const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch({
  type: "FETCH_FORM",
  payload: axios.get(
    "https://coletum.com/api/graphql?query={form_structure(formId:6950){label,componentId,type,helpBlock,order,components}}&token=7s5txcu909kwc48wookgw8g00occokk"
  )
});
