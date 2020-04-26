import React from 'react'

export default class Stock extends React.Component{
  render(){
    return(
  <div>
    <div className="card" onClick={()=>this.props.buyStocks? this.props.buyStocks(this.props.stock): this.props.sellStocks(this.props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            this.props.stock.name
          }</h5>
        <p className="card-text" >
          {this.props.stock.ticker}: {this.props.stock.price}
        </p>
      </div>
    </div>
  </div>

    )
  }
}


