import  LoginFrom  from "../../utils/bootstrap/login";
import video from '../../resources/video/pexels-pavel-danilyuk-6443881.mp4'

const Login = () => {
    return (<div className="login-page">
      <video src={video} className="background-video" autoPlay muted loop ></video>
       <div className="login-form">
          <LoginFrom/>
       </div>
    </div>);
}

export default Login;