
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../index';
import { connect } from 'react-redux';
import actionTypes from '../../constants/actionTypes.const';
const LoginFrom = ({ dispatch }) => {
  const navigate = useNavigate()
  const [loginState, setLoginState] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: true, password: [''] })
  const [disabled, setDisabled] = useState(true)
  const [isLoading, setIsloading] = useState(false)
  const updateLoginState = (e) => {
    const { name, value } = e.target;
    let tempState = loginState
    let tempError = errors
    tempState[name] = value;
    switch (name) {
      case "email":
        console.log(emailValidation(value))
        tempError[name] = emailValidation(value);
        break;

      case "password":
        tempError[name] = passwordValidation(value);
        break;

      default:
        setErrors({ email: false, password: [] })
    }
    setErrors({ ...tempError })
    console.log()
    if (tempError.email === false || tempError.password.length > 0) setDisabled(true)
    else setDisabled(false)
    setLoginState({ ...tempState })
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
      const tempPayload = {
        name: "Asad zaman",
        email: loginState.email,
        userName: loginState.email.split('@')[0],
        gender: "Male",
        permissions: ['dashboard', 'query'],
        isLoggedIn: true,
        language: "en"
      }
      localStorage.setItem('loginInformation', JSON.stringify(tempPayload))
      dispatch({
        type: actionTypes.USER_LOGIN, payload: tempPayload
      })

      navigate('/dashboard')
    }, 500);

  }



  return <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className='align-left'>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => { updateLoginState(e) }} />
      {!errors.email &&
        <Form.Text className="text-danger">
          Please provide a valid Email address!
        </Form.Text>
      }
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => { updateLoginState(e) }} />
      {

        errors.password.length > 0 &&
        errors.password.map((value, index) => {
          return <div key={index}><Form.Text className="text-danger" key={index}> {value}</Form.Text></div>
        })

      }

    </Form.Group>

    <Button style={{ background: '#fce4ec', color: '#000', border: '2px solid #c9b2ba' }} type="submit" onClick={(e) => submitLoginForm(e)} disabled={disabled}>
      {isLoading ? 'Trying to login..' : 'Login'}
    </Button>
  </Form>;
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom)