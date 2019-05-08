import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryDetails from './categoryDetails.js';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			catItems: [],
			selCat: [],
		}
	}

	componentDidMount() {
		axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
			.then(response => {
				this.setState({
					categories: response.data
				})
			})
			.catch(error => console.log(error))
	}

	getCatItems = (category) => {
		axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${category.short_name}`)
			.then(response => {
				this.setState({
					catItems: response.data,
					selCat: category,
				})
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div>
				<div className="catList">
					<h4>Menu Categories</h4>

					{this.state.categories.map((category) => (
						<li key={category.id}>
							<Link to={`#/items/${category.short_name}`} onClick={() => this.getCatItems(category)}>
								{category.name} - ({category.short_name})
							</Link>
						</li>
					))}
				</div>
				<CategoryDetails catItems={this.state.catItems} selCat={this.state.selCat}></CategoryDetails>
			</div>
		)
	}

}

export default Categories;
