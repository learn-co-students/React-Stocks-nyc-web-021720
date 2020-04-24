import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = { 
    stocks: [],
    portfolioStocks: [],
    filteredStocks: [],
  }


  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        stocks: data,
        filteredStocks: data

      })
    })
  }

  // create a function that when invoked merges the stock that was clicked with the stocks that are already in the portfolio 
  // pass that function down as a prop so each instance of stock has it 
  // in the portfolioo  container map over all the instances of stock in portfolio container and give them a stock container 

  buyStock = (stock) => {
    console.log("hi")
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }
   
  removeStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s === stock)
    })
  }

  filterSearch = (type) => {
    if(type !== "All"){
     
       let  filteredStocks = this.state.stocks.filter((stock) => stock.type === type)
       this.setState({filteredStocks: filteredStocks})
    }
      
  }
  sortStocks = (sortBy) => {
    let arr = []
    switch(sortBy){
      case "Alphabetically":
        arr = this.state.filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
          arr = this.state.filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("Wrong choice")
    }
    this.setState({
      filteredStocks: arr
    })
  }



  render() {
    console.log("test1: state", this.state.stocks)

    return (
      <div>
        <SearchBar filterSearch={this.filterSearch} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredStocks}  buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} removeStock={this.removeStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
