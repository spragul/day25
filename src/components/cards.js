import React from 'react'
import Card from 'react-bootstrap/Card';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar';

export function CardCom() {
    return (
        <Sidebar>
        <div className='main_margin'>
            <div className='row'>
            
                <div className="m-10 col-xl-3 col-md-6 ">
                    <LeftBorders 
                    sty="border-left-primary"
                    position="position-center"
                    text='Earnings (Monthly)'
                    dollar='$40,000'
                    i="fa fa-calendar fa-2x text-gray-300"
                    />
                </div>
                <div className="m-10 col-xl-3 col-md-6 ">
                    <LeftBorders 
                    sty="border-left-success"
                    position="position-center"
                    text='EARNINGS (ANNUAL)'
                    dollar='$215,000'
                    i="fa fa-dollar fa-2x text-gray-300"
                    />
                </div>
                <div className="m-10 col-xl-3 col-md-6 ">
                    <LeftBorders 
                    sty="border-left-info "
                    position="position-center"
                    text='TASKS'
                    dollar='50%'
                    i="fa fa-clipboard fa-2x text-gray-300"
                    process='1'
                    />
                </div>
                <div className="m-10 col-xl-3 col-md-6 ">
                    <LeftBorders 
                    sty="border-left-warning"
                    position="position-center"
                    text='PENDING REQUESTS'
                    dollar='18'
                    i="fa fa-comments fa-2x text-gray-300"
                    />
                </div>
          
            </div>

            
            <div className="row">
                <div className="col-md-6">
                    <WithHeaderStyledExample
                        sty="block"
                        mar=" mp-4"
                        htext="Default Card Example"
                        ptext="This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example."
                    />
                    <WithHeaderStyledExample
                        sty="blue"
                        mar=" mp-4"
                        htext="Basic Card Example"
                        ptext="The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!"
                    />
                </div>
                <div className="col-md-6">
                    <WithHeaderStyledExample
                        sty="blue"
                        mar=" mp-4"
                        htext="Dropdown Card Example"
                        ptext="Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu."
                    />
                    <WithHeaderStyledExample
                        sty="blue"
                        mar=" mp-4"
                        htext="Collapsable Card Example"
                        ptext="This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!"
                    />
                </div>
            </div>
        </div>
        </Sidebar>
    )
}

function WithHeaderStyledExample(props) {
    return (
        <div className={props.mar} >
            <Card >
                <Card.Header as="h5" className={props.sty}>{props.htext}</Card.Header>
                <Card.Body>
                    <Card.Text>{props.ptext} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}


function LeftBorders(props) {
    return (
        <div className={props.sty}>
            <div className={props.position} >
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                       {props.text}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{props.dollar}</div>
                </div>
                
                <div class="col-auto">
                    <i class={props.i} aria-hidden="true"></i>
                </div>
                {props.process>0 ? 
            <div className='col'>
            <div class="progress" style={{height:'9px'}}>
                        <div class="progress-bar bg-info w-75"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div></div> : ''}
            </div>
           
        </div>
    )
}

