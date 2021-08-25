import './style.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../component/nav';
import Header from '../../component/header';
import service from '../../service'
import AvgSessionChart from '../../component/AvgSessionChart';
import ActivityChart from '../../component/ActivityChart';
import PerfoChart from '../../component/PerfoChart';
import Score from '../../component/Score';
import CardList from '../../component/CardList';

class Home extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {data : {}, avgSession: {}, activity: {}, perf:{}};   
    }
    componentDidMount()
    {
        service(12, 0).then(response =>
            {
                this.setState({ data : response.data.data })
            })
        service(12, 1).then(response =>
        {
            this.setState({ activity : response.data.data })
        })
        service(12, 2).then(response =>
            {
                this.setState({ avgSession : response.data.data })
        })
        service(12, 3).then(response =>
        {
                this.setState({ perf : response.data.data })
        })
        
    }
    render()
    {
        return (
            <div className='Home'>
                <Nav />
                <div className="Home_Content">
                    <Header userInfos={this.state.data.userInfos} />
                    <AvgSessionChart avgSession={this.state.avgSession} />
                    <ActivityChart activity={this.state.activity} />
                    <PerfoChart perf={this.state.perf} />
                    <Score data={this.state.data}/>
                    <CardList data = {this.state.data.keyData} />
                </div>

            </div>
            )
    }
}
Home.propTypes = {
    name: PropTypes.string
}
export default Home;
