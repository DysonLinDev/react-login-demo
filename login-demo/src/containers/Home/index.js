import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

const Home = ({ username }) => {
  return (
    <div className={'root'}>
      Welcome
      { !!username && 
        <div className='username'>
          {username}
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  username: state.Login.username,
});

export default connect(mapStateToProps)(Home);