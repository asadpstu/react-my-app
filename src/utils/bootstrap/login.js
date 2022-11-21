
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { emailValidation,passwordValidation } from '../index';
export const LoginFrom = () =>{
    const [loginState,setLoginState] = useState({email : '', password : ''})
    const [errors,setErrors] = useState({email : true, password : []})
    const [disabled, setDisabled] = useState(true)
    const updateLoginState = (e) =>{
        const {name,value} = e.target;
        let tempState = loginState
        let tempError = errors
        tempState[name] = value;
        switch(name){
            case "email" : 
            console.log(emailValidation(value))
              tempError[name] = emailValidation(value);
            break;

            case "password":
              tempError[name] = passwordValidation(value);
              break;

            default:
                setErrors({email : false, password : []})
        }
        setErrors({...tempError})
        if(tempError.email === false || tempError.password.length > 0) setDisabled(true)
        else setDisabled(false)
        setLoginState({...tempState})
    }

    const submitLoginForm = (e) =>{
      e.preventDefault();
      const payload = loginState;
      console.log(payload)
    }



    return <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='align-left'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{updateLoginState(e)}}/>
        {  !errors.email && 
            <Form.Text className="text-danger">
              Please provide a valid Email address!
            </Form.Text>
        }
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={(e)=>{updateLoginState(e)}}/>
        {  
            
            errors.password.length > 0 && 
            errors.password.map((value,index)=>{
              return <div key={index}><Form.Text className="text-danger" key={index}>{index+1}. {value}</Form.Text></div>
            })
            
        }
    
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={(e)=>submitLoginForm(e)} disabled={disabled}>
        Submit
    </Button>
    </Form>;
}
