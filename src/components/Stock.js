import React from 'react'
// import PropTypes from 'prop-types'

const Stock = (props) => (
  <div>

    <div className="card"   >
      <div className="card-body" onClick={ () =>  props.addPortfolio ? props.addPortfolio(props.stock) : props.removeStock(props.stock)} >
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>

        <p className="card-text">{
            //ticker: stock price
            `${props.stock.ticker}: $${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

// Stock.propTypes={
//   stock :PropTypes.object.isRequired,
//   addPortfolio :PropTypes.func.isRequired,
//   removeStock :PropTypes.func.isRequired
// }
export default Stock
