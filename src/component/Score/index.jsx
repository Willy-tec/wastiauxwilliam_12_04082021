import React from 'react';
import './style.css';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const renderLegend = (props) =>
{
    const { payload } = props;
    return (
        payload.length && <><p className="Score_pourcent">{payload[0].payload.todayScore*100}%</p><p className="Score_legend"> de votre objectif</p></>

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
                <Legend content={renderLegend} width={"50%"} wrapperStyle={{ top: "50%", right: "25%", textAlign:'center', border: 'none', borderRadius: 3, lineHeight: '18px', color:"#000000" }} > </Legend>
                </RadialBarChart>
                
            </ResponsiveContainer> 

        )
    }
}

export default Score;

// 