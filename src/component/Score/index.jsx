import React from 'react';
import './style.css';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const renderLegend = (props) => {
    const { payload } = props;
    payload.length && console.log(payload[0].payload)
    return (
        payload.length && <p className="Score_legend"><span className="Score">{payload[0].payload.todayScore*100}%</span> de votre objectif</p>


    );
  }
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
                        cornerRadius = {"50%"}
                        clockWise
                        dataKey="todayScore"
                    >
                </RadialBar>
                        <Legend content={renderLegend} width={100} wrapperStyle={{ top: 60, right: 50, textAlign:'center', backgroundColor: '#00f5f500', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '18px' }} > allo</Legend>
                </RadialBarChart>
                
            </ResponsiveContainer> 

        )
    }
}

export default Score;
