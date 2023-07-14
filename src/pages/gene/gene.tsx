import React from 'react';
import Search from "../../components/Search/Search"
import DottedChart from "../../components/DottedChart/DottedChart";
import BoxPlot from "../../components/BoxPlot/BoxPlot"
import {Divider} from "@mui/material";
import './gene.scss'

export default function Gene() {
    const handleCallback = (childData: string) => {
        alert(childData)
    }

    return (<div className={"container"}>
            <Search topText={topText} options={geneIds} label={"Locus ID"} buttonText={"Show Chart"}
                    parentCallback={handleCallback}/>
            <Divider variant="middle"/>
            <div className={"top-charts-container"}>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"x: {x}, y: {y}"}
                        dataPoints={data}
                        plotContainerHeight={"calc(25vh)"}
                        chartTitle={"title"} xAxisName={"xname"}
                        yAxisName={"yName"} xAxisSuffix={"xx"} yAxisSuffix={"yy"}/>
                </div>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"x: {x}, y: {y}"}
                        dataPoints={data}
                        plotContainerHeight={"calc(25vh)"}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"} xAxisSuffix={"xx"} yAxisSuffix={"yy"}/>
                </div>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"x: {x}, y: {y}"}
                        dataPoints={data}
                        plotContainerHeight={"calc(25vh)"}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"} xAxisSuffix={"xx"} yAxisSuffix={"yy"}/>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className={"correlation-charts-container"}>
                <DottedChart
                    isClickable={false}
                    tooltipContent={"x: {x}, y: {y}"}
                    dataPoints={data}
                    plotContainerHeight={"calc(25vw)"}
                    chartTitle={"title"} xAxisName={"xname"}
                    yAxisName={"yName"} xAxisSuffix={"xx"} yAxisSuffix={"yy"}/>
            </div>
            <Divider variant="middle"/>
            <div className={"bottom-charts-container"}>
                <div className={"bottom-chart"}>
                    <BoxPlot
                        dataPoints={dataPoints}
                        plotContainerHeight={"calc(30vh)"}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"}
                        yValueFormatString={"#,##0.#"}/>
                </div>
                <div className={"bottom-chart"}>
                    <BoxPlot
                        dataPoints={dataPoints}
                        plotContainerHeight={"calc(30vh)"}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"}
                        yValueFormatString={"#,##0.#"}/>
                </div>
            </div>
            <Divider variant="middle"/>
        </div>
    )
}

const dataPoints = [
    {label: "Bread", y: [179, 256, 300, 418, 274]},
    {label: "Cake", y: [252, 346, 409, 437, 374.5]},
    {label: "Biscuit", y: [236, 281.5, 336.5, 428, 313]},
    {label: "Doughnut", y: [340, 382, 430, 452, 417]},
    {label: "Pancakes", y: [194, 224.5, 342, 384, 251]},
    {label: "Bagels", y: [241, 255, 276.5, 294, 274.5]}
]

const data = [
    {x: 14.2, y: 215},
    {x: 12.9, y: 175},
    {x: 16.4, y: 325},
    {x: 26.9, y: 635},
    {x: 32.5, y: 464},
    {x: 22.1, y: 522},
    {x: 19.4, y: 412},
    {x: 25.1, y: 614},
    {x: 34.9, y: 374},
    {x: 28.7, y: 625},
    {x: 23.4, y: 544},
    {x: 31.4, y: 502},
    {x: 40.8, y: 262},
    {x: 37.4, y: 312},
    {x: 42.3, y: 202},
    {x: 39.1, y: 302},
    {x: 17.2, y: 408}
]

const geneIds = [
    "AT1G01010",
    "AT1G01020",
];

const topText = "Enter valid gene locus ID (Araport 11 annotation; use capital letters) e.g. AT1G02250";
