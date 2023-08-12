import React, {MouseEventHandler} from 'react';
import "./dottedchart.scss"
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
import {IData} from "../../model/IGene";

export interface AxisProps {
    name: string,
    suffix: string
}


export default function DottedChart(props: {
    chartTitle: string,
    dataPoints: IData[],
    xAxisProps: AxisProps,
    yAxisProps: AxisProps,
    plotContainerHeight: string,
    tooltipContent: string,
    isClickable: boolean
                                    }
) {
    const [state, setState] = React.useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(
            event.target.checked
        );
    };

    const handleDivClick = (event: any) => {
        setState(!state)
    }

    const options = {
        theme: "light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
            text: props.chartTitle
        },
        axisX: {
            title: props.xAxisProps.name,
            suffix: props.xAxisProps.suffix,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY:{
            title: props.yAxisProps.name,
            suffix: props.yAxisProps.suffix,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        data: [{
            type: "scatter",
            markerSize: 8,
            toolTipContent: props.tooltipContent,
            dataPoints: props.dataPoints
        }]
    }

    const containerProps = {
        height: props.plotContainerHeight
    };

    return (
        <div style={{borderColor: state? "blue" : "lightgrey"}} className={"chart-container"} onClick={props.isClickable? handleDivClick: ((any) => {})}>
            <CanvasJSReact.CanvasJSChart containerProps={containerProps} options={options}/>
        </div>
    );
}
