import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submit } from '../../reducers/loginReducer';

import './style.css';

const LoginForm = ({ submit, error }) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const handleUsernameChange = e => onChangeUsername(e.target.value);
  const handleChangePassword = e => onChangePassword(e.target.value);
  const onSubmit = () => { 
    if (!username || !password) return; // TODO: show error message

    submit({username, password});
  }

  return (
    <div className='root'>
      <input className='input' onChange={handleUsernameChange}
      value={username} placeholder='username'/>
      <input className='input' onChange={handleChangePassword}
      value={password} placeholder='password'/>
      <button onClick={onSubmit} >submit</button>
      {
        !!error && 
        <div>{'wrong username and password'}</div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  error: state.Login.error,
});

export default connect(mapStateToProps, { submit })(LoginForm);