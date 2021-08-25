import { Component } from 'react';
import CardInfo from '../CardInfo';
import './style.css';

class CardList extends Component{
    render(){
        return (
            <div className="CardList">
                {this.props.data ? Object.keys(this.props.data).map(el => <CardInfo key={el+this.props.data[el]} type={el} value={this.props.data[el]}/>): ""}
            </div>
        )
    }
}

export default CardList;
