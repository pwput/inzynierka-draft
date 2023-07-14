import React, {MouseEventHandler} from 'react';
import {Checkbox} from "@mui/material";
import "./dottedchart.scss"
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';

export type AxisProps = {
    type: "number" | "category" | undefined,
    dataKey: string,
    name: string,
    unit: string
}


export default function DottedChart(props: {
    chartTitle: string,
    dataPoints: {x: number, y: number}[],
    xAxisName: string,
    xAxisSuffix: string,
    yAxisName: string,
    yAxisSuffix: string,
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
            title: props.xAxisName,
            suffix: props.xAxisSuffix,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY:{
            title: props.yAxisName,
            suffix: props.yAxisSuffix,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        data: [{
            color: "blue",
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
