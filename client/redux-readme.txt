Redux State Flow

(get data from api to populate app store state)

ItemsList.js 
- onload dispatches getItems action 

itemActions.js
- getItems action makes a GET call to the backend api route /api/itmems
- type GET_ITEMS and payload res.data (result of api call) dispatched to itemReducer.js

itemReducer.js
- type GET_ITEMS and payload res.data (result of api call)
- updates state with the payload

rootReducer.js
- takes in the updated state from itemReducer.js
- updates the state in the store




