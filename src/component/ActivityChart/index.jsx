import React from 'react';
import './style.css';
import {BarChart,CartesianGrid,XAxis ,YAxis ,Tooltip, Legend, Bar  } from 'recharts'

class ActivityChart extends React.Component{
    render()
    {
        if (this.props.activity.sessions)
        {
            this.data = this.props.activity.sessions
        }
        return (
            <BarChart width={730} height={250} data={this.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#8884d8" />
                <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart> 
        )
    }
}

export default ActivityChart;
