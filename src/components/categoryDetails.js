import React, { Component} from 'react';

class CategoryDetails extends Component {
	render() {
		const catName = this.props ? this.props.selCat.short_name : '';
		const catItems = this.props ? this.props.catItems : '';
		return (
			<div>
				<h4>Items in Category: ({catName})</h4>
				<table border="1">
					<thead>
						<tr>
							<td>Item</td>
							<td>Description</td>
						</tr>
					</thead>
					<tbody>
						{catItems && catItems.length > 0 ? 
							catItems.map(function(item,i){
								return (
									<tr>
										<td>{item.name}</td>
										<td>{item.description}</td>
									</tr>
								)
							})
							: null}
					</tbody>
				</table>
			</div>
		)
	}

}

export default CategoryDetails;
