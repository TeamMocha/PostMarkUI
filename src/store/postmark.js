var bodyParser = require('body-parser');

let initialState = {
  collectionBody: '',
  responseMarkdown: '',
  responseStatus: 0,
};

const requestOptions = { 
    method: 'POST',
    headers: {"content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*"},
    redirect: 'follow',
    body: '',
    mode: 'cors' }
    
const url = 'https://postmark.pixeljava.com/postmark';

export const post = (payload) => async dispatch => {
  requestOptions.body = await payload;
  console.log({requestOptions});
  return fetch(url, requestOptions)
    .then(response => {
      dispatch(postAction(response))
  })
}

export const postAction = async (response) => {
  return{
    type: 'POST',
    payload: await response
  }
}

export const setFieldState = payload => {
  return{
    type: 'SET_BODY',
    payload: payload
  }
}

export const resetStore = () => {
  return {
    type: 'RESET',
  };
};

const postmarkStore = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'POST':
      let postmarkResponse = payload.json();
      console.log({postmarkResponse});
      let responseStatus = postmarkResponse.status;
      let responseBody = postmarkResponse.body;
      let newStatePost = {responseMarkdown: responseBody, responseStatus: responseStatus, collectionBody: state.collectionBody};
      return newStatePost;

    case 'SET_BODY':
      // console.log(`In SET_BODY`, payload);
      let newState = {responseMarkdown: state.responseMarkdown, responseStatus: state.responseStatus, collectionBody: payload};
      // console.log(`In newState`, newState);
      return newState;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default postmarkStore;
