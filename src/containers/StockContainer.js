import React, { Component } from 'react';
import Stock from '../components/Stock'
import PropTypes from 'prop-types'

class StockContainer extends Component {

  render() {

    const {stocks,addPortfolio}=this.props
    // console.log(stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stocks.map(stock =><Stock key={stock.id} stock={stock} addPortfolio={addPortfolio}/>)
        }
      </div>
    );
  }

}

StockContainer.propTypes={
stocks :PropTypes.array.isRequired,
addPortfolio :PropTypes.func.isRequired
}

export default StockContainer;
