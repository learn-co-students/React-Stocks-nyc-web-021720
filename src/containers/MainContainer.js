import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: [],
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stock => {
      this.setState({
        stocks: stock,
        displayStocks: stock
      })
    })
  }

  addPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  sellStock = (stock) => {
    this.setState({
    portfolioStocks: [...this.state.portfolioStocks.filter(s => s !== stock)]
    
  })
}

filterStocks = (type) => {
  if(type !== "All"){
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })
  }else{
    this.setState({
      displayStocks: this.state.stocks
    })
  }

}

sortStocks = (sortType) => {
  let arr = []
  switch(sortType){
    case "Alphabetically":
      arr = this.state.displayStocks.sort((a, b) => a.name > b.name ? 1 : -1)
      break;
    case "Price":
      arr = this.state.displayStocks.sort((a,b) => a.price < b.price ? 1: -1)
      break;
    default: 
    console.log("Choose again")
  }
  this.setState({
    displayStocks: arr
  })

}

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
