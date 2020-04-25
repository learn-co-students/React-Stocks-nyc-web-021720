import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
  const stockCards = this.props.stocks.map(stock => {return <Stock stock={stock} key={stock.id} addPortfolio={this.props.addPortfolio}/>})
    return (
      <div>
        <h2>Stocks</h2>
        {
          stockCards
        }
      </div>
    );
  }

}

export default StockContainer;
