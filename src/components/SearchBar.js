import React from "react";

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<strong>Sort by:</strong>
				<label>
					<input
						type="radio"
						value="Alphabetically"
						checked={this.props.Alphabetically}
						onChange={this.props.handleSort}
					/>
					Alphabetically
				</label>
				<label>
					<input
						type="radio"
						value="Price"
						checked={this.props.Price}
						onChange={this.props.handleSort}
					/>
					Price
				</label>
				<br />

				<label>
					<strong>Filter:</strong>
					<select onChange={(e) => this.props.onFilterChange(e.target.value)}>
						<option value="All">All</option>
						<option value="Tech">Tech</option>
						<option value="Sportswear">Sportswear</option>
						<option value="Finance">Finance</option>
					</select>
				</label>
			</div>
		);
	}
}

export default SearchBar;
