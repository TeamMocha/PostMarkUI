let initialState = {
  collectionBody: '',
  responseMarkdown: '',
  responseStatus: 0,
};

const requestOptions = { 
    method: 'POST',
    headers: {"content-type": "application/json; charset=UTF-8"},
    redirect: 'follow',
    body: '',
    mode: 'cors' }
    
const url = 'https://postmark.pixeljava.com/postmark';

export const post = (payload) => async dispatch => {
  requestOptions.body = await payload;
  return fetch(url, requestOptions)
    .then(response => {
      response.text().then(responseText => {
        console.log(`ResponseText is: `, responseText);
        dispatch(postAction(responseText, response.status));
      })
  })
}

export const postAction = (response, status) => {
  return{
    type: 'POST',
    payload: { responseBody: response, responseStatus: status}
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
      let { responseBody, responseStatus } = payload; // This is currently the PostMark markdown string
      let newStatePost = {responseMarkdown: responseBody, responseStatus: responseStatus, collectionBody: state.collectionBody};
      return newStatePost;

    case 'SET_BODY':
      let newState = {responseMarkdown: state.responseMarkdown, responseStatus: state.responseStatus, collectionBody: payload};
      return newState;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default postmarkStore;
