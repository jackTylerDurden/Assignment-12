import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';

class ProductTable extends Component{
	
	constructor(props){
		super(props)
		this.handleDestroy = this.handleDestroy.bind(this)
	}

	handleDestroy(id){
		this.props.onDestroy(id)
	}

	render(){
		
		const products  = this.props.products;
		const filterText = this.props.filterText;
		const productRows = Object.keys(products);
		const handleDestroy = this.handleDestroy;
		const rows =[];
		productRows.forEach(function(index){
			let prodName = products[index].name;
			if(prodName.indexOf(filterText) > -1){
				rows.push(<ProductRow key={index} product={products[index]} onDestroy={handleDestroy}/>);
			}			
		})
		return(
	    	<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">
							<b>Name</b>
						</th>
						<th scope="col">
							<b>Price</b>
						</th>
						<th scope="col">
							<b>Category</b>
						</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>					
					{rows}			 					
				</tbody>
	    	</table>
		)
	}
}

export default ProductTable
