import React from "react";

import LoginPage from "./pages/LoginPage";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// function reducer(state, action){
//   const newState = {...state}
//   return newState;
// }
// const store = createStore(reducer)

export default function App() {
  return (
    <div>
      {/* <Provider store={store}> */}

      <LoginPage />
      {/* </Provider> */}
    </div>
  );
}
