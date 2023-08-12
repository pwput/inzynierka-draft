import React from 'react';
import Search from "../../components/Search/Search"
import DottedChart from "../../components/DottedChart/DottedChart";
import BoxPlot from "../../components/BoxPlot/BoxPlot"
import {Divider} from "@mui/material";
import './gene.scss'
import {IGene} from "../../model/IGene";
import {AxisProps} from "../../components/DottedChart/DottedChart";


export default function Gene() {
    const handleCallback = (childData: string) => {
        alert(childData)
    }

    return <div className={"container"}>
            <Search topText={topText} options={geneIds} label={"Locus ID"} buttonText={"Show Chart"}
                    parentCallback={handleCallback}/>
            <Divider variant="middle"/>
            <div className={"top-charts-container"}>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"x: {x}, y: {y}"}
                        dataPoints={gene.CNData.dataArray}
                        plotContainerHeight={'100%'}
                        chartTitle={"title"}
                        xAxisProps= {{name: "accession_id", suffix: ""}}
                        yAxisProps={{name: "cn_value", suffix: ""}}/>
                </div>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"accession_id: {x}, exp_value: {y}"}
                        dataPoints={gene.EXPData.dataArray}
                        plotContainerHeight={'100%'}
                        chartTitle={"exp"}
                        xAxisProps= {{name: "accession_id", suffix: ""}}
                        yAxisProps={{name: "exp_value", suffix: ""}}/>
                </div>
                <div className={"top-chart"}>
                    <DottedChart
                        isClickable={true}
                        tooltipContent={"accession_id: {x}, mcg_value: {y}"}
                        dataPoints={gene.mCGData.dataArray}
                        plotContainerHeight={'100%'}
                        chartTitle={"mCG"}
                        xAxisProps= {{name: "accession_id", suffix: ""}}
                        yAxisProps={{name: "mcg_value", suffix: ""}}/>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className={"correlation-charts-container"}>
                <DottedChart
                    isClickable={false}
                    tooltipContent={"x: {x}, y: {y}"}
                    dataPoints={data}
                    plotContainerHeight={'100%'}
                    chartTitle={"title"}
                    xAxisProps= {{name: "xname", suffix: "xx"}}
                    yAxisProps={{name: "yName", suffix: "yy"}}/>
            </div>
            <Divider variant="middle"/>
            <div className={"bottom-charts-container"}>
                <div className={"bottom-chart"}>
                    <BoxPlot
                        dataPoints={dataPoints}
                        plotContainerHeight={'100%'}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"}
                        yValueFormatString={"#,##0.#"}/>
                </div>
                <div className={"bottom-chart"}>
                    <BoxPlot
                        dataPoints={dataPoints}
                        plotContainerHeight={'100%'}
                        chartTitle={"title"}
                        xAxisName={"xname"}
                        yAxisName={"yName"}
                        yValueFormatString={"#,##0.#"}/>
                </div>
            </div>
            <Divider variant="middle"/>
        </div>
}

const gene: IGene = {
    geneId: "AT1G01010",
    type: "protein-coding gene",
    chromosome: "Chr1",
    start: 3630,
    end: 5899,
    CNData: {
        isData: true,
        dataArray: [
            {x: 9606, y: 1.7982},
            {x: 6911, y: 1.7721},
            {x: 9905, y: 2.2411},
            {x: 9887, y: 2.1374},
            {x: 9879, y: 1.8922},
            {x: 9871, y: 2.0454},
            {x: 9869, y: 1.8762},
            {x: 9837, y: 1.76},
            {x: 9832, y: 2.0741},
            {x: 9600, y: 1.5365},
            {x: 9598, y: 1.9822},
            {x: 9583, y: 1.5809},
        ]
    },
    EXPData: {
        isData: true,
        dataArray: [
            {x: 108, y: 4.930842315},
            {x: 139, y: 5.858525934},
            {x: 159, y: 5.112783158},
            {x: 265, y: 3.479873069},
            {x: 350, y: 4.416349974},
            {x: 351, y: 6.910971874},
            {x: 403, y: 5.701922149},
            {x: 410, y: 5.984692861},
            {x: 424, y: 6.73031353},
            {x: 428, y: 7.632808575},
            {x: 506, y: 8.527780861},
            {x: 630, y: 7.695199165},
        ]
    },
    mCGData: {
        isData: true,
        dataArray: [
            {x: 88, y: 0},
            {x: 108, y: 0.015384615},
            {x: 159, y: 0},
            {x: 265, y: 0.04640884},
            {x: 350, y: 0.010344828},
            {x: 351, y: 0.0693153},
            {x: 403, y: 0.02675059},
            {x: 410, y: 0},
            {x: 424, y: 0.053386912},
            {x: 428, y: 0.064046579},
            {x: 430, y: 0.037593985},
            {x: 506, y: 0.032921811},
        ]
    },
    WGCNAData: {
        isData: true,
        dataArray: [
            {x: 9606, y: 1.7982},
        ]
    },
    sort: 0,
    covByHighConfCNVs: 0,
    covByLowConfCNVs: 0,
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
    {x: 14.2, y: 215, color: "red"},
    {x: 12.9, y: 175, color: "red"},
    {x: 16.4, y: 325, color: "red"},
    {x: 26.9, y: 635, color: "red"},
    {x: 32.5, y: 464, color: "red"},
    {x: 22.1, y: 522, color: "red"},
    {x: 19.4, y: 412, color: "green"},
    {x: 25.1, y: 614, color: "green"},
    {x: 34.9, y: 374, color: "green"},
    {x: 28.7, y: 625, color: "green"},
    {x: 23.4, y: 544, color: "green"},
    {x: 31.4, y: 502, color: "green"},
    {x: 40.8, y: 262, color: "blue"},
    {x: 37.4, y: 312, color: "blue"},
    {x: 42.3, y: 202, color: "blue"},
    {x: 39.1, y: 302, color: "blue"},
    {x: 17.2, y: 408, color: "blue"}
]

const geneIds = [
    "AT1G01010",
    "AT1G01020",
];

const topText = "Enter valid gene locus ID (Araport 11 annotation; use capital letters) e.g. AT1G02250";
