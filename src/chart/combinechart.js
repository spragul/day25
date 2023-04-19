import Sidebar from "../sidebar";
import { Doughnutchart } from "./Doughnutchart";
import { BarChart } from "./barchart";
import { LineChart } from "./line";


export function CombinedChart() {
    return (
        <Sidebar>
            <div className="heating-border">
                <div>
                    <h1 class="h3 mb-2 text-gray-800">Charts</h1>
                    <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a target="_blank" href="/">official Chart.js
                            documentation</a>.</p>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <Cchart
                                title='Area Chart'
                                diagram1={<LineChart />}
                                text1='Styling for the area chart can be found in the'
                                code1='/js/demo/chart-area-demo.js'
                                text2=' file.'
                            />
                        </div>

                        <div className="card shadow mb-4">
                            <Cchart
                                title='Bar Chart'
                                diagram1={<BarChart />}
                                text1='Styling for the bar chart can be found in the'
                                code1='/js/demo/chart-bar-demo.js'
                                text2=' file.'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <Cchart
                                title='Donut Chart'
                                diagram1={<Doughnutchart />}
                                text1='Styling for the donut chart can be found in the'
                                code1='/js/demo/chart-pie-demo.js'
                                text2=' file.'
                            />
                        </div>
                    </div>


                </div>
            </div>

        </Sidebar>
    )
}
function Cchart(props) {
    return (
        <div >
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{props.title}</h6>
            </div>
            <div class="card-body">
                {props.diagram1}
                <hr></hr>
                {props.text1}
                <code>{props.code1}</code>{props.text2}
            </div>
        </div>
    )
}