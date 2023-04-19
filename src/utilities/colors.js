import { React } from 'globalthis/implementation';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../sidebar';

export function ColorUtilities() {
    return (
        <Sidebar>
            <div>
                <div className="heading">
                    <h1>Color Utilities</h1>
                    <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 margin">
                        <CustomText
                            cardTitle="Custom Text Color Utilities"
                            sty1="text-gray-100 p-3 bg-dark m-0"
                            ptext1=".text-gray-100"
                            sty2="text-gray-200 p-3 bg-dark m-0"
                            ptext2=".text-gray-200"
                            sty3="text-gray-300 p-3 bg-dark m-0"
                            ptext3=".text-gray-300"
                            sty4="text-gray-400 p-3 bg-dark m-0"
                            ptext4=".text-gray-400"
                            sty5="text-gray-500 p-3 m-0"
                            ptext5=".text-gray-500"
                            sty6="text-gray-600 p-3 m-0"
                            ptext6=".text-gray-600"
                            sty7="text-gray-700 p-3  m-0"
                            ptext7=".text-gray-700"
                            sty8="text-gray-800 p-3 m-0"
                            ptext8=".text-gray-800"
                            sty9="text-gray-900 p-3 m-0"
                            ptext9=".text-gray-900"
                        />
                        <div className="col-lg-3 margin">
                            <CustomFont />
                        </div>
                    </div>

                    <div className="col-lg-3 margin">
                        <CustomText
                            cardTitle="Custom Background Gradient Utilities"
                            sty1="px-3 py-5 bg-gradient-primary text-white"
                            ptext1=".bg-gradient-primary"
                            sty2="px-3 py-5 bg-gradient-secondary text-white"
                            ptext2=".bg-gradient-secondary"
                            sty3="px-3 py-5 bg-gradient-success text-white"
                            ptext3=".bg-gradient-successy"
                            sty4="px-3 py-5 bg-gradient-info text-white"
                            ptext4=".bg-gradient-info"
                            sty5="px-3 py-5 bg-gradient-warning text-white"
                            ptext5=".bg-gradient-warning"
                            sty6="px-3 py-5 bg-gradient-danger text-white"
                            ptext6=".bg-gradient-danger"
                            sty7="px-3 py-5 bg-gradient-light text-white"
                            ptext7="bg-gradient-light"
                            sty8="px-3 py-5 bg-gradient-dark text-white"
                            ptext8=".bg-gradient-dark"
                        />
                    </div>
                    <div className="col-lg-3 margin">
                        <CustomText
                            cardTitle="Custom Grayscale Background Utilities"
                            sty1="p-3 bg-gray-100"
                            ptext1=".bg-gray-100"
                            sty2="p-3 bg-gray-200"
                            ptext2=".bg-gray-200"
                            sty3="p-3 bg-gray-300"
                            ptext3=".bg-gray-300"
                            sty4="p-3 bg-gray-400"
                            ptext4=".bg-gray-400"
                            sty5="p-3 bg-gray-500 text-white"
                            ptext5=".bg-gray-500"
                            sty6="p-3 bg-gray-600 text-white"
                            ptext6=".bg-gray-600"
                            sty7="p-3 bg-gray-700 text-white"
                            ptext7=".bg-gray-700"
                            sty8="p-3 bg-gray-800 text-white"
                            ptext8=".bg-gray-800"
                            sty9="p-3 bg-gray-900 text-white"
                            ptext9=".bg-gray-900"
                        />
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}

function CustomText(props) {
    return (
        <div>
            <div className="color-heating">
                <h5 className="bottom-line">{props.cardTitle}</h5>
            </div>
            <div className="color-body">
                <p className={props.sty1}>{props.ptext1}</p>
                <p className={props.sty2}>{props.ptext2}</p>
                <p className={props.sty3}>{props.ptext3}</p>
                <p className={props.sty4}>{props.ptext4}</p>
                <p className={props.sty5}>{props.ptext5}</p>
                <p className={props.sty6}>{props.ptext6}</p>
                <p className={props.sty7}>{props.ptext7}</p>
                <p className={props.sty8}>{props.ptext8}</p>
                <p className={props.sty9}>{props.ptext9}</p>
            </div>


        </div>
    )
}
function CustomFont() {
    return (
        <div>
            <div className="color-heating">
                <h5 className="bottom-line">Custom Font Size Utilities</h5>
            </div>
            <div className="color-body">
                <p className='text-xs'>.text-xs</p>
                <p className='text-lg mb-0'>.text-lg</p>
            </div>
        </div>
    )

}

