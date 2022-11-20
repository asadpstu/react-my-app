import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Echarts from '../charts/echarts';
const Dashboard = () =>{
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} lg={12} sm={12}>
                         <Echarts/>
                    </Col>
                </Row>
                
                </Container>

        </div>
    );
}

export default Dashboard;