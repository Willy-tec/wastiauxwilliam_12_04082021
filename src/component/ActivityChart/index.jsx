import React from 'react';
import './style.css';
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from 'recharts';
import service from '../../service';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="poid">{`${payload[0].value} kg`}</p>
                <p className="kCal">{`${payload[1].value} kCal`}</p>
            </div>
        );
    }

    return null;
};
const style = {
    right: '0',
    lineHeight: '24px',
    padding: '10px',
    fontSize: '14px',
};

class ActivityChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: {},
        };
    }
    componentDidMount() {
        service(this.props.userId, 1)
            .then((response) => {
                this.setState({ activity: response.data.data });
            })
            .catch((e) =>
                console.error("Can't fetch activity data from service")
            );
    }
    render() {
        const { sessions } = this.state.activity;
        return (
            <div className="Activity">
                <h3>Activité quotidienne</h3>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <BarChart data={sessions}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            tickLine={false}
                            dataKey="day"
                            stroke="#9B9EAC"
                            tickFormatter={(data) => data && +data.slice(-2)}
                        />
                        <YAxis
                            dataKey="calories"
                            orientation="right"
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip content={CustomTooltip} />
                        <Legend
                            align="right"
                            verticalAlign="top"
                            margin="0 0 0px 0"
                            iconSize={8}
                            iconType="circle"
                            wrapperStyle={style}
                        />
                        <Bar
                            dataKey="kilogram"
                            name="Poids (kg)"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            barSize={7}
                        />
                        <Bar
                            dataKey="calories"
                            name="Calories brûlées (kCal)"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                            barSize={7}
                        />
                        <h3>Hello</h3>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
ActivityChart.propTypes = {
    userId: PropTypes.number,
};
export default ActivityChart;
