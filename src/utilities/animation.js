import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../sidebar';


export function AnimationUtility() {
    return (
        <Sidebar>
            <div className="heating-border">
                <div>
                    <h1>Animation Utilities</h1>
                    <p>Bootstrap's default utility classes can be found on the official<a href="#"> Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <WithHeaderExample
                            title="Grow In Animation Utilty"
                            text1=".animated--grow-in"
                            text2="Navbar Dropdown Example:"
                            text3="Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar."
                        />
                    </div>
                    <div className="col-lg-6">
                        <WithHeaderExample
                            title="Grow In Animation Utilty"
                            text1=".animated--grow-in"
                            text2="Navbar Dropdown Example:"
                            text4="Dropdown Button Example:"
                            text5="5"
                            text6="Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!"
                        />
                    </div>

                </div>
            </div>
        </Sidebar>

    )
}


function WithHeaderExample(props) {
    return (
        <Card>
            <Card.Header style={{ color: 'blue' }}>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text className="red-clr"> {props.text1} </Card.Text>
                <Card.Text > {props.text2} </Card.Text>
                <Card.Text > <BasicExample /> </Card.Text>
                <Card.Text>{props.text3}</Card.Text>
                <Card.Text>{props.text4}</Card.Text>
                {props.text5 > 0 ? <Card.Text><BasicExampleDrop /></Card.Text> : ""}
                <Card.Text> {props.text6}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Something else hear
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



function BasicExampleDrop() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}



