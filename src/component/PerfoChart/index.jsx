import React from 'react';
import './style.css';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer} from 'recharts';

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
            this.props.perf.data.map(el => el.kindName = this.props.perf.kind[el.kind])
        }
        return (
            <> {
                this.props.perf ?
                    <ResponsiveContainer width={"100%"} height={"100%"} className="PerfoChart">
                        <RadarChart outerRadius="60%"   data={this.props.perf.data}>
                            <PolarGrid radialLines={false}/>
                            <PolarAngleAxis dataKey="kindName" stroke="#FFFFFF"/>
                            <Radar  dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={1} />
                        </RadarChart>
                    </ResponsiveContainer>
                 : "Loading"
        }
        </>
        )
    }
}

export default PerfoChart;
