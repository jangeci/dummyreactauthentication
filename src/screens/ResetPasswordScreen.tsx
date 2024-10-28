import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export const kResetPasswordRoute = '/reset-password/:id';

export default function ResetPasswordScreen() {
    const [form, setForm] = useState({
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
        message: '',
    });

    const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        axios.post('/reset-password', {
            ...form
        })
            .then(function (response) {
                console.log(response);
                setForm(prevState => ({
                    ...prevState,
                    message: response.data.message
                }));
            })
            .catch(function (error) {
                console.log(error);
                setForm(prevState => ({
                    ...prevState,
                    message: error.response.data.message
                }));
            });
    }

    const errorJSX = form.message ?
        <Col sm={12}>
            <div className="alert alert-danger" role="alert">
                {form.message}
            </div>
        </Col>
        : null;

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <div className="jumbotron col-lg-6 col-lg-offset-3">
                        <h3 className="text-center">Reset Password</h3>
                        {errorJSX}
                        <Form onSubmit={formSubmit}>
                            <FormGroup>
                                <Col sm={12}>
                                    Pincode
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="token" type="text" placeholder="Pincode" onChange={handleChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                    New Password
                                </Col>
                                <Col sm={12}>
                                    <FormControl name="password" type="password" placeholder="Password" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={12}>
                                    Password confirmation
                                </Col>
                                <Col sm={12}>
                                    <FormControl type="password" name="password_confirmation" placeholder="Password confirmation" onChange={handleChange}/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix"/>
                            <div className="pt-4"/>
                            <FormGroup>
                                <Col sm={12}>
                                    <Button className="btn-block" type="submit">Reset password</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );

    // return (
    //     <div className="justify-content-center align-content-center">
    //         <Spinner animation="border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </Spinner>
    //     </div>
    // );
}
