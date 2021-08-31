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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            avgSession: {},
            activity: {},
            perf: {},
            userId: 12,
        };
    }
    componentDidMount() {
        let userId = 12;
        service(userId, 0)
            .then((response) => {
                this.setState({ data: response.data.data });
            })
            .catch((e) => console.error("Can't fetch data from service"));
    }
    render() {
        console.log('home render');
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
    name: PropTypes.string,
};
export default Home;
