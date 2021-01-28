let initialState = {
  postmarked: {results:[]},
  
  responseStatus: 0,
};
const requestOptions = { 
    method: 'POST',
    headers: {"content-type": "application/json; charset=UTF-8"},
    body: '',
    mode: 'cors' }
    
const url = 'https://postmark.pixeljava.com/convert';
// actions

// onclick post action to convert
export const post = (payload) => dispatch => {
  requestOptions.body = payload
  return fetch(url,requestOptions)
    .then(response => {
      dispatch(postAction(response))
  })
}
export const postAction = payload => {
  return{
    type: 'POST',
    payload: payload
  }
}

const postmarkStore = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'POST':
      console.log(payload)
      console.log(payload.body)
      console.log(payload.status)

      return payload;

    case 'RESET':
      return payload;

    default:
      return state;
  }
};

export const resetStore = () => {
  return {
    type: 'RESET',
  };
};

export default postmarkStore;
