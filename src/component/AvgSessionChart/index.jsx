import React from 'react';
import './style.css';
import { LineChart, Line,XAxis, ResponsiveContainer, Tooltip } from 'recharts';
const jour = ["", "L", "M", "M", "J", "V", "S", "D"]

const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

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
            <ResponsiveContainer width={"100%"} height={"100%"} className="AvgSession">
                <LineChart data={this.data}>
                    <XAxis dataKey="jour" axisLine={ false }tickLine={false} stroke="#ffffff"/>
                    <Tooltip content={CustomTooltip} formatter={(value, name, props) => [`${value}`, "hello"]  }/>
                    <Line dot={false} activeDot={{ r: 2 }} type="natural" dataKey="sessionLength" stroke="#FFFFFF" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

export default AvgSessionChart;
