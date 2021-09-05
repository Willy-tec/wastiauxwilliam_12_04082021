import React from 'react';
import './style.css';
import service from '../../service';
import PropTypes from 'prop-types';

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    ResponsiveContainer,
} from 'recharts';
/**
 * Format the performance into charts, and render the component
 */
class PerfoChart extends React.Component {
    constructor(props) {
        super(props);
        this.data = {};
        this.state = {
            perf: {},
        };
    }
    componentDidMount() {
        const { userId } = this.props;
        service(userId, 3)
            .then((response) => {
                this.setState({ perf: response.data.data });
            })
            .catch((e) =>
                console.error("Can't fetch performance data from service")
            );
    }
    render() {
        const {
            perf,
            perf: { data },
        } = this.state;
        data && data.map((el) => (el.kindName = perf.kind[el.kind]));
        return (
            <ResponsiveContainer
                width={'100%'}
                height={'100%'}
                className="PerfoChart"
            >
                <RadarChart outerRadius="60%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kindName" stroke="#FFFFFF" />
                    <Radar
                        dataKey="value"
                        stroke="#FF0101B2"
                        fill="#FF0101B2"
                        fillOpacity={1}
                    />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}

PerfoChart.propTypes = {
    userId: PropTypes.number,
};

export default PerfoChart;
