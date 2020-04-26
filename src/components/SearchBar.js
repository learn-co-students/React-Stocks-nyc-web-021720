import React from 'react';

export default class SearchBar extends React.Component{
  render(){
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.radioChecked} onChange={(e)=> this.props.sortStocks(e.target.value)}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.radioChecked1} onChange={(e)=> this.props.sortStocks(e.target.value)}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={(e)=> this.props.filterStocks(e.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    )
  }
}



