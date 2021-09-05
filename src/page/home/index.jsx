import './style.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../component/header';
import service from '../../service';
import AvgSessionChart from '../../component/AvgSessionChart';
import ActivityChart from '../../component/ActivityChart';
import PerfoChart from '../../component/PerfoChart';
import Score from '../../component/Score';
import CardList from '../../component/CardList';
/**
 * Main page of the application
 */
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            avgSession: {},
            activity: {},
            perf: {},
            userId: +props?.match?.params?.userId || 12,
        };
    }
    componentDidMount() {
        const { userId } = this.state;
        service(userId, 0)
            .then((response) => {
                this.setState({ data: response.data.data });
            })
            .catch((e) => console.error("Can't fetch data from service"));
    }
    render() {
        const { userId } = this.state;
        return (
            <div className="Home">
                <div className="Home_Content">
                    <Header userInfos={this.state.data.userInfos} />
                    <AvgSessionChart userId={userId} />
                    <ActivityChart userId={userId} />
                    <PerfoChart userId={userId} />
                    <Score data={this.state.data} />
                    <CardList data={this.state.data.keyData} />
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    userId: PropTypes.number,
};
export default Home;
