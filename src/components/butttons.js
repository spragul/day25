import { React } from 'globalthis/implementation';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from '../sidebar';


export function Buttontype() {
    return (
        <Sidebar>
        <div className='main_margin'>
        <div class="row"  style={{ textAlign: 'initial' }}>
            <h1 class="h3 mb-4 text-gray-800">Buttons</h1>
            <div style={{ textAlign: 'initial' }} className='col-lg-6'>
                <Card />
                <Lengthbtn />
            </div>
            <div style={{ textAlign: 'initial'}} className='col-lg-6'>
                <BoxButton />
            </div>
        </div>
        </div>
        </Sidebar>

    )
}
function Card() {
    return (
        <div>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                    </div>
                    <div class="card-body">
                        <p>Use Font Awesome Icons (included with this theme package) along with the circle
                            buttons as shown in the examples below!</p>
                        <div class="mb-2">
                            <code>.btn-circle</code>
                        </div>
                        <Bbutton
                            st1="btn btn-primary btn-circle m-2"
                            st2="btn btn-success btn-circle m-2"
                            st3="btn btn-info btn-circle m-2"
                            st4="btn btn-warning btn-circle m-2"
                            st5="btn btn-danger btn-circle m-2"
                        />
                        <div class="mb-2">
                            <code>.btn-circle .btn-sm</code>
                        </div>
                        <Bbutton
                            st1="btn btn-primary btn-circle btn-sm m-2"
                            st2="btn btn-success btn-circle btn-sm m-2"
                            st3="btn btn-info btn-circle btn-sm m-2"
                            st4="btn btn-warning btn-circle btn-sm m-2"
                            st5="btn btn-danger btn-circle btn-sm m-2" />
                        <div class="mb-2">
                            <code>.btn-circle .btn-lg</code>
                        </div>
                        <Bbutton
                            st1="btn btn-primary btn-circle btn-lg m-2"
                            st2="btn btn-success btn-circle btn-lg m-2"
                            st3="btn btn-info btn-circle btn-lg m-2"
                            st4="btn btn-warning btn-circle btn-lg m-2"
                            st5="btn btn-danger btn-circle btn-lg m-2" />
                    </div>
                </div>
            </div>
   
    )
}

function Bbutton(props) {
    return (
        <div>
            <button type="button" style={{ borderRadius: '50%' }} class={props.st1}><i className="fa fa-facebook-f"></i></button>
            <button type="button" style={{ borderRadius: '50%' }} class={props.st2}> <i className="fa fa-check"></i></button>
            <button type="button" style={{ borderRadius: '50%' }} class={props.st3}>  <i className="fa fa-info-circle"></i></button>
            <button type="button" style={{ borderRadius: '50%' }} class={props.st4}> <i className="fa fa-exclamation-triangle"></i></button>
            <button type="button" style={{ borderRadius: '50%' }} class={props.st5}><i className="fa fa-trash"></i></button>
        </div>
    )
}
function Lengthbtn() {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div class="card-body">
                <p>Google and Facebook buttons are available featuring each company's respective
                    brand color. They are used on the user login and registration pages.</p>
                <p>You can create more custom buttons by adding a new color variable in the
                    <code>_variables.scss</code> file and then using the Bootstrap button variant
                    mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                    file.</p>
                <a href="/" class="btn btn-danger btn-google btn-block m-2"><i class="fa fa-google fa-fw"></i>
                    .btn-google</a>
                <a href="/" class="btn btn-primary btn-facebook btn-block m-2"><i
                    class="fa fa-facebook-f fa-fw"></i> .btn-facebook</a>

            </div>
        </div>

    )
}

function BoxButton() {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
            </div>
            <div class="card-body">
                <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                    the markup in the examples below. The examples below also use the
                    <code>.text-white-50</code> helper class on the icons for additional styling,
                    but it is not required.</p>
                <Btn
                    style1="btn btn-primary btn-icon-split"
                    style2="fa fa-flag"
                    text="Split Button Primary"
                />
                <div className='my-2'>
                    <Btn
                        style1="btn btn-success btn-icon-split"
                        style2="fa fa-check"
                        text='Split Button Success'
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1='btn btn-info btn-icon-split'
                        style2='fa fa-info-circle'
                        text='Split Button Info'
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-warning btn-icon-split"
                        style2="fas fa-exclamation-triangle"
                        text="Split Button Warning"
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-danger btn-icon-split"
                        style2="fa fa-trash"
                        text="Split Button Danger"
                        link="/"
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-secondary btn-icon-split"
                        style2="fa fa-arrow-right"
                        text="Split Button Secondary"
                        link="/"
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-light btn-icon-split"
                        style2="fa fa-arrow-right"
                        text="Split Button Light"
                        link="/"
                    />
                    <p>Also works with small and large button classes!</p>
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-primary btn-icon-split btn-sm"
                        style2="fa fa-flag"
                        text="Split Button Small"
                        link="/"
                    />
                </div>
                <div className='my-2'>
                    <Btn
                        style1="btn btn-primary btn-icon-split btn-lg"
                        style2="fa fa-flag"
                        text="Split Button Large"
                        link="/"
                    />
                </div>

            </div>
        </div>
    )
}

function Btn(props) {
    return (
        <a href={props.link} class={props.style1}>
            <span class="icon text-white-50">
                <i class={props.style2}></i>
            </span>
            <span class="text">{props.text}</span>
        </a>
    )
}