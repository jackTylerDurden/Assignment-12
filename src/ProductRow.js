import React,{ Component } from 'react';

class ProductRow extends Component{
	constructor(props){
		super(props)
		this.destroy = this.destroy.bind(this);
	}

	destroy(){
		console.log(this.props)
		this.props.onDestroy(this.props.product.id);
	}
	render(){
		const product = this.props.product;
		return(
			<tr>
				<td>
					{product.name}
				</td>
				<td>
					{product.price}
				</td>
				<td>
					{product.category}
				</td>
				<td>
					<button type="button" className="btn btn-info" onClick={this.destroy}>Delete</button>
				</td>
			</tr>
		)
	}
}

export default ProductRow
