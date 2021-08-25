import React from 'react';
import './style.css';
import {ResponsiveContainer, RadialBarChart, RadialBar} from 'recharts';

class Score extends React.Component{
    render()
    {
        this.score = [];
        let triche = {
            todayScore: 1,
            fill: "#ffffff00"
        }
        if (this.props.data.todayScore)
        {
            this.score.push(this.props.data)
            this.score.push(triche)
        }
        return (
            <ResponsiveContainer width="100%" height="100%" className="Score">
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={50} data={this.score}>
                <RadialBar
                        label={{
                            valueAccessor: data =>
                            {
                                console.log("ALLLLLLLO")
                                return data.todayScore !== 1 ? `${ data.todayScore * 100 }% de votre objectif` : ""
                            },
                            position: 'center', fill: '#666',
                        }}
                        cornerRadius = {"50%"}
                        clockWise
                        dataKey="todayScore"
                    >
                </RadialBar>
                </RadialBarChart>
                
            </ResponsiveContainer> 

        )
    }
}

export default Score;
