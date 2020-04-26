import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks:[],
    displayStocks:[],
    portfolioStocks:[]
  }



  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        stocks: stockData,
        displayStocks: stockData
      })
    })
  }

//event listener to add stock to portfolio
//think as stock = event 
  addPortfolio = (stock) => { 
    this.setState({
      portfolioStocks : [...this.state.portfolioStocks,stock]
    }, () =>{console.log('after',this.state)} )
    
    // console.log(this.state)
    
  }


//event listener to remove stock from portfolio 
  removeStock = (stock) => {
    this.setState({
      portfolioStocks : this.state.portfolioStocks.filter (s => s !== stock)
    })
  }


filterStocks = (type) => {

  type!=="All" ? this.setState({displayStocks : this.state.stocks.filter(stock => stock.type === type)}) 
  : this.setState({displayStocks : this.state.stocks})
}


sortStocks = (sortBy) => {

  let arr=[]
  switch(sortBy)  {
    case "Alphabetically" :
     arr= this.state.displayStocks.sort((a,b)=>a.name>b.name ? 1 : -1)
    break;

    case "Price" :
      arr= this.state.displayStocks.sort((a,b)=>a.price>b.price ? 1 : -1)
    break;
    default:
    console.log("wrong choice")

  }

  this.setState({
    displayStocks:arr
  })

}





  render() {
    const{displayStocks,portfolioStocks}=this.state
    const{filterStocks,sortStocks}=this
    // console.log(this.state.portfolioStocks)
    return (
      <div>
        <SearchBar filterStocks={filterStocks} sortStocks={sortStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} addPortfolio={this.addPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
