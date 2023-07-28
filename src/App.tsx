import React from 'react';
import './App.css';
import {User} from "./06.CallBack/06";
import PromiseEx from "./Promises/PromiseEx";
import PromiseEx2 from "./Promises/PromiseEx2";
import PromiseEx3 from "./Promises/PromiseEx3";
import PromiseEx4 from "./Promises/PromiseEx4";

function App() {
  return (
    <div className="App">
      <User/>
      <PromiseEx/>
      <PromiseEx2/>
      <PromiseEx3/>
      <PromiseEx4/>
    </div>
  );
}

export default App;
