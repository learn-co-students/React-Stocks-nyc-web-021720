import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
	render() {
		return (
			<div>
				<h2>My Portfolio</h2>
				{this.props.myPortfolio.map((stock) => (
					<Stock
						onPortfolioClick={this.props.onPortfolioClick}
						stock={stock}
						key={stock.id}
					/>
				))}
			</div>
		);
	}
}

export default PortfolioContainer;
