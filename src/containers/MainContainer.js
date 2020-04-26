import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      filteredStocks: [],
      radioChecked: false,
      radioChecked1: false,
      portfolioStocks: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(data => {
        this.setState({stocks: data, filteredStocks: data})
      })
  }
    filterStocks = (type)=>{
      if(type !== "All"){
        this.setState({filteredStocks: this.state.stocks.filter(stock => stock.type === type)})
      }
      else{
        this.setState({filteredStocks: this.state.stocks})
      }
    }

    sortStocks = (sortType)=>{
      let sortedStocks = []
      switch(sortType){
        case "Alphabetically":
          sortedStocks = this.state.stocks.sort((a,b) => a.name.localeCompare(b.name))
          this.setState({filteredStocks: sortedStocks, radioChecked: !this.state.radioChecked})
          break;
        case "Price":
          sortedStocks = this.state.stocks.sort((a, b)=> a.price - b.price)
          this.setState({filteredStocks: sortedStocks, radioChecked1: !this.state.radioChecked1})
          break;
        default:
          console.log('not a choice')
      }
      
    }

    buyStocks = (stock)=>{
      this.setState({portfolioStocks: [...this.state.portfolioStocks, stock]})
    }

    sellStocks = stock =>{
      this.setState({portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock)})
    }

  render() {
    return (
      <div>
        <SearchBar 
          filterStocks={this.filterStocks} 
          sortStocks={this.sortStocks} 
          radioChecked={this.state.radioChecked}
          radioChecked1={this.state.radioChecked1}
        />

          <div className="row">
            <div className="col-8">
              <StockContainer 
                stocks= {this.state.filteredStocks} 
                handleClick={this.handleClick} 
                buyStocks={this.buyStocks}
              />
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolioStocks} sellStocks={this.sellStocks}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
