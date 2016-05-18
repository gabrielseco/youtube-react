import React from 'react';
import { Link, browserHistory } from 'react-router';


export default function App({children}) {
  return (
    <div>
    <h1>APP CONTAINER</h1>
    {children}
    </div>

  );
}
