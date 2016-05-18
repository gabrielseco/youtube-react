import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import  { API, AUTH_ID, AUTH_SECRET} from '../API';
import  Youtube from './Youtube';


function Home() {
  return (
    <div>
      <h3>HOME</h3>
      <Youtube API={API}
              AUTH_ID={AUTH_ID}
              AUTH_SECRET={AUTH_SECRET}/>
    </div>
  );
}

export default connect()(Home);
