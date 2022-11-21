import { LoginFrom } from "../../utils/bootstrap/login";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {
    return (<div className="page">
       <div className="login-form">
          <LoginFrom/>
       </div>
    </div>);
}

export default Login;