import  LoginFrom  from "../../utils/bootstrap/login";
import video from '../../resources/video/pexels-pavel-danilyuk-6443881.mp4'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import actionTypes from "../../constants/actionTypes.const";

const Login = ({dispatch}) => {
   const navigate = useNavigate()
   useEffect(() => {
     const tempPayload = localStorage.getItem('loginInformation')
     if (tempPayload) {
       dispatch({
         type: actionTypes.USER_LOGIN, payload: JSON.parse(tempPayload)
       })
       navigate('/dashboard')
     }
 
   }, [])
    return (<div className="login-page">
      <video src={video} className="background-video" autoPlay muted loop ></video>
       <div className="login-form">
          <LoginFrom/>
       </div>
    </div>);
}

const mapStateToProps = (state) =>{
  return {
   state
  }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      dispatch
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);