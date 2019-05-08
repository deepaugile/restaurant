import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// https://stream-restaurant-menu-svc.herokuapp.com/item?category=F
// https://stream-restaurant-menu-svc.herokuapp.com/category 

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			catItems: [],
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

	render() {
		return (
			<div className="catList">
				<h4>Menu Categories</h4>

				{this.state.categories.map((category) => (
					<li key={category.id}>
						<Link to={`#/items/${category.short_name}`}>
							{category.name} - ({category.short_name})
						</Link>
					</li>
				))}
			</div>
		)
	}

}

export default Categories;
