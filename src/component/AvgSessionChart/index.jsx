import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import service from '../../service';
const jour = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

class AvgSessionChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avgSession: {},
            isLoading: true,
        };
    }
    componentDidMount() {
        const { userId } = this.props;
        service(userId, 2)
            .then((response) => {
                this.setState({ avgSession: response.data.data });
            })
            .catch((e) =>
                console.error("Can't fetch  average session data from service")
            );
    }
    render() {
        const { sessions } = this.state.avgSession;
        sessions && sessions.map((el) => (el.jour = jour[el.day]));

        return (
            <ResponsiveContainer
                width={'100%'}
                height={'100%'}
                className="AvgSession"
            >
                <LineChart data={sessions}>
                    <defs>
                        <linearGradient
                            id="colorLine"
                            x1="1"
                            y1="0"
                            x2="0"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stopColor="#FFFFFF"
                                stopOpacity={0.9}
                            />
                            <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity={0.3}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="jour"
                        axisLine={false}
                        tickLine={false}
                        stroke="#ffffff"
                    />
                    <Tooltip content={CustomTooltip} />
                    <Line
                        dot={false}
                        activeDot={{ r: 2 }}
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#colorLine)"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
AvgSessionChart.propTypes = {
    userId: PropTypes.number,
};
export default AvgSessionChart;
