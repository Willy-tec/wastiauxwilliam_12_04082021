import React from 'react';
import './style.css';
import { LineChart, Line,XAxis } from 'recharts';
const jour = ["", "L", "M", "M", "J", "V", "S", "D"]
class AvgSessionChart extends React.Component
{
    render()
    {
        if (this.props.avgSession.sessions)
        {
            this.data = this.props.avgSession.sessions
            this.data.map(el => el.jour = jour[el.day] )
        }
        
        return (
            <div>
                <LineChart width={400} height={400} data={this.data}>
                    <XAxis dataKey="jour" />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default AvgSessionChart;
