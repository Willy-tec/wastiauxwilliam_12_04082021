import React from 'react';
import './style.css';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts';

class PerfoChart extends React.Component
{
    constructor(props)
    {
        super(props)
        this.data = {};
    }
    
    render()
    {
        if (this.props.perf.data)
        {
            this.data = this.props.perf
            this.data.data.map(el => el.kindName = this.props.perf.kind[el.kind])
        }
        return (
            <RadarChart outerRadius={90} width={730} height={250} data={this.props.perf.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kindName" />
                <PolarRadiusAxis angle={30} domain={[0, 200]} />
                <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        )
    }
}

export default PerfoChart;
