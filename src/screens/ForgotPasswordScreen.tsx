import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {kRegisterRoute} from "./RegisterScreen.tsx";

export const kForgotPasswordRoute = '/forgot-password';

function ForgotPasswordScreen() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <div className="jumbotron col-lg-6 col-lg-offset-3">
                        <h3 className="text-center">Forgot password</h3>
                        <Form>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    Email
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="email" type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix"/>
                            <div className="pt-4"/>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button className="btn-block" type="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                            <Col className="pt-4" sm={12}>
                                Dont have account? <Link to={kRegisterRoute}>Register here</Link>
                            </Col>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default ForgotPasswordScreen;