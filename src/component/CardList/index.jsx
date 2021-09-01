import { Component } from 'react';
import CardInfo from '../CardInfo';
import PropTypes from 'prop-types';
import './style.css';

class CardList extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="CardList">
                {data
                    ? Object.keys(data).map((el) => (
                          <CardInfo
                              key={el + data[el]}
                              type={el}
                              value={data[el]}
                          />
                      ))
                    : ''}
            </div>
        );
    }
}
CardList.propTypes = {
    data: PropTypes.object,
};
export default CardList;
