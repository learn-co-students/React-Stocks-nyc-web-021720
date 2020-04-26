import React, { Component } from 'react';
import Stock from '../components/Stock';
import PropTypes from "prop-types";

class PortfolioContainer extends Component {

  render() {
    const {stocks,removeStock}=this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            stocks.map(stock => <Stock key={stock.id} stock={stock} removeStock={removeStock}/>)
            
          }
      </div>
    );
  }

}

PortfolioContainer.propTypes={
  stocks: PropTypes.array.isRequired,
  removeStock: PropTypes.func.isRequired
}

export default PortfolioContainer;
