import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const Base_URL = "http://localhost:3001";
const Stocks_URL = `${Base_URL}/stocks`;

class MainContainer extends Component {
	state = {
		stocks: [],
		myPortfolio: [],
		Alphabetically: false,
		Price: false,
		filteredStocks: [],
	};

	componentDidMount() {
		fetch(Stocks_URL)
			.then((res) => res.json())
			.then((parsedStocks) =>
				this.setState({
					stocks: parsedStocks,
					filteredStocks: parsedStocks,
				})
			);
	}

	handleStockClick = (id) => {
		console.log(id);
		const purchasedStock = this.state.stocks.find((stock) => stock.id === id);
		this.setState({ myPortfolio: [...this.state.myPortfolio, purchasedStock] });
	};

	onPortfolioClick = (id) => {
		const newPortfolio = this.state.myPortfolio.filter(
			(stock) => stock.id !== id
		);
		this.setState({ myPortfolio: newPortfolio });
	};

	handleSort = (e) => {
		if (e.target.value === "Alphabetically") {
			const alphaSort = this.state.stocks.sort((a, b) =>
				a.name > b.name ? 1 : -1
			);
			this.setState({
				stocks: alphaSort,
				Alphabetically: true,
				Price: false,
			});
		} else if (e.target.value === "Price") {
			const priceSort = this.state.stocks.sort((a, b) =>
				a.price > b.price ? 1 : -1
			);
			this.setState({ stocks: priceSort, Price: true, Alphabetically: false });
		}
	};
	// list.sort((a, b) => (a.color > b.color) ? 1 : -1)

	onFilterChange = (value) => {
		if (value !== "All") {
			const filteredStocks = this.state.stocks.filter(
				(stock) => stock.type === value
			);
			this.setState({
				filteredStocks: filteredStocks,
			});
		} else {
			this.setState({
				filteredStocks: this.state.stocks,
			});
		}
	};
	render() {
		console.log(this.state.myPortfolio);
		return (
			<div>
				<SearchBar
					onFilterChange={this.onFilterChange}
					Alphabetically={this.state.Alphabetically}
					Price={this.state.Price}
					handleSort={this.handleSort}
				/>

				<div className="row">
					<div className="col-8">
						<StockContainer
							stocks={this.state.filteredStocks}
							handleStockClick={this.handleStockClick}
						/>
					</div>
					<div className="col-4">
						<PortfolioContainer
							onPortfolioClick={this.onPortfolioClick}
							myPortfolio={this.state.myPortfolio}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
