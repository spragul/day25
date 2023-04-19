import { Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../sidebar";

export function OtherUtilities() {
    return (
        <Sidebar>
            <div>
                <div>
                    <h1 style={{ textAlign: 'inherit' }}>Other Utilities</h1>
                    <p>Bootstrap's default utility classes can be found on the official <a href="/color">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6" style={{ textAlign: 'initial', padding: '7px' }}>
                        <div>
                            <WithHeaderExample
                                title="Overflow Hidden Utilty"
                                text1="Use"
                                text2=".o-hidden"
                                text3=" to set the overflow property of any element to hidden."
                            />
                        </div>
                        <div>
                            <WithHeaderExample
                                title="Progress Small Utility"
                                st="2"
                                st1="2"
                                text1="Use the"
                                text2=".progress-sm"
                                text3="class along with"
                                text4=".progress"
                            />
                        </div>
                        <div>
                            <WithHeaderExample
                                title="Dropdown - No Arrow"
                                btn="3"
                                text1="Add the"
                                text2=".no-arrow "
                                text3="class alongside the"
                                text4=" .dropdown"

                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <WithHeaderExamples
                            title="Rotation Utilities"
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
                {props.btn > 0 ? <Card.Text ><BasicExampleDrop /></Card.Text> : ""}
                {props.st > 0 ? <Card.Text >
                    <p>Normal Progress Bar</p>
                    <div class="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </Card.Text> : ""}
                {props.st1 > 0 ? <Card.Text >
                    <p>Small Progress Bar</p>
                    <div class="progress" style={{ height: '9px' }}>
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </Card.Text> : ""}

                <Card.Text > {props.text1}<code className="red-clr">{props.text2}</code>{props.text3} <code className="red-clr">{props.text4}</code></Card.Text>

            </Card.Body>
        </Card>
    );
}

function BasicExampleDrop() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropdown(no arrow)
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function WithHeaderExamples(props) {
    return (
        <Card>
            <Card.Header style={{ color: 'blue' }}>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text ><div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4"> .rotate-15</div> </Card.Text>
                <Card.Text ><hr></hr></Card.Text>
                <Card.Text  ><div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4"> .rotate-n-15</div> </Card.Text>

            </Card.Body>
        </Card>
    );
}