import React from 'react';
import './style.css';
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Legend,
} from 'recharts';
import PropTypes from 'prop-types';
/**
 * Format the legend for recharts component.
 * @param {Object} props
 * @returns Legend
 */
const renderLegend = (props) => {
    const { payload } = props;
    return (
        payload.length && (
            <>
                <p className="Score_pourcent">
                    {payload[0].payload.todayScore * 100}%
                </p>
                <p className="Score_legend"> de votre objectif</p>
            </>
        )
    );
};
/**
 * Score component printing the activity percentage
 */
class Score extends React.Component {
    render() {
        this.score = [];
        const { data } = this.props;
        // variable triche is used for scaling the charts. We hide it.
        let triche = {
            todayScore: 1,
            fill: '#ffffff00',
        };
        data.score && (data.todayScore = data.score);
        if (data.todayScore) {
            this.score.push(data);
            this.score.push(triche);
        }
        return (
            <div className="Score">
                <h3>Score</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        fill="#ffffff"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        barSize={50}
                        data={this.score}
                    >
                        <RadialBar
                            cornerRadius={'50%'}
                            clockWise
                            dataKey="todayScore"
                            fill="#ff0000"
                            startAngle={180}
                            endAngle={190}
                        ></RadialBar>
                        <Legend
                            content={renderLegend}
                            width={'50%'}
                            wrapperStyle={{
                                top: '37.5%',
                                right: '25%',
                                textAlign: 'center',
                                border: 'none',
                                borderRadius: 3,
                                lineHeight: '18px',
                                color: '#000000',
                            }}
                        >
                            {' '}
                        </Legend>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
Score.propTypes = {
    data: PropTypes.object,
};
export default Score;

//
