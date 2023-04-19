import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../sidebar';
export function BorderUtilities() {
    return (
        <Sidebar>
            <div >
                <div className="heating-border">
                    <h1>Border Utilities</h1>
                    <p>Bootstrap's default utility classes can be found on the official <a href='/'>Bootstrap Documentation </a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

                </div>
                <div>
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-primary"
                                    sty="border-left-primary"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-secondary"
                                    sty="border-left-secondary"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-success"
                                    sty="border-left-success"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-info"
                                    sty="border-left-info"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-warning"
                                    sty="border-left-warning"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-danger"
                                    sty="border-left-danger"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-left-dark"
                                    sty="border-left-dark"
                                    position="position-center"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-primary"
                                    sty="border-bottom-primary"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-secondary"
                                    sty="border-bottom-secondary"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-success"
                                    sty="border-bottom-success"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-info"
                                    sty="border-bottom-info"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-warning"
                                    sty="border-bottom-warning"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-danger"
                                    sty="border-bottom-danger"
                                    position="position-center"
                                />
                            </div>
                            <div className="m-10">
                                <LeftBorders
                                    LeftBorder=".border-bottom-dark"
                                    sty="border-bottom-dark"
                                    position="position-center"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Sidebar>
    )
}

//left border
function LeftBorders(props) {
    return (
        <div className={props.sty}>
            <div className={props.position} >
                <span>{props.LeftBorder}</span>
            </div>

        </div>
    )
}