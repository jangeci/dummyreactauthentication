import {Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useContext} from "react";
import {AppContext} from "../App.tsx";

export const kProfileRoute = '/profile';

function ProfileScreen() {
    const {user} = useContext(AppContext);

    return (
        <div>
            <br/>
            <br/>
            <br/>¬
            <br/>
            <Container>
                <Row>
                    <div className="jumbotron col-lg-6 col-lg-offset-3">
                        <h3 className="text-center">Profile</h3>
                        <ListGroup>
                            <ListGroupItem>Name: {user?.name}</ListGroupItem>
                            <ListGroupItem>Email: {user?.email}</ListGroupItem>
                        </ListGroup>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default ProfileScreen;