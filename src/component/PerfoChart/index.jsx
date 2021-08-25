import React from 'react';
import './style.css';
import {RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer} from 'recharts';

class PerfoChart extends React.Component
{
    constructor(props)
    {
        super(props)
        this.data = {};
    }
    
    render()
    {
        const {perf, perf:{data}} = this.props
        data && data.map(el => el.kindName = perf.kind[el.kind])
        
        return (
                <ResponsiveContainer width={"100%"} height={"100%"} className="PerfoChart">
                    <RadarChart outerRadius="60%"   data={data}>
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis dataKey="kindName" stroke="#FFFFFF"/>
                        <Radar  dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={1} />
                    </RadarChart>
                </ResponsiveContainer>
        )
    }
}

export default PerfoChart;
