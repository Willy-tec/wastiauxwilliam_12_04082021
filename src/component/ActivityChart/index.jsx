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
};

class ActivityChart extends React.Component {
    render() {
        const { sessions } = this.props.activity;

        return (
            <ResponsiveContainer
                className="Activity"
                width={'100%'}
                height={'100%'}
            >
                <BarChart data={sessions} label="LAbel">
                    <CartesianGrid
                        label="LAbel"
                        strokeDasharray="3 3"
                        vertical={false}
                    />
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
                        margin="0 0 10px 0"
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
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default ActivityChart;
