import React,{ Component } from 'react'

const RESET_VALUES = {id:'',name:'',category:'',price:''};
class ProductForm extends Component{

	constructor(props){
		super(props)
		this.state = {
			product : Object.assign({},RESET_VALUES),
			erros:{}
		}
		this.handleSave = this.handleSave.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSave(e){
		this.props.onSave(this.state.product)		
		this.setState({
			product : Object.assign({},RESET_VALUES),
			error : {}
		})
		e.preventDefault()
	}

	handleChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState((prevState) => {
			prevState.product[name] = value
			return {product:prevState.product}
		})
	}

	render(){
		return(
			<div>
				<h3> Enter a new product</h3>

				<label htmlFor="name">Name:</label><br/>
				<input className="form-control" value={this.state.product.name} type="text" name="name" onChange={this.handleChange}/><br/>

				<label htmlFor="category">Category:</label><br/>
				<input className="form-control" value={this.state.product.category} type="text" name="category" onChange={this.handleChange}/><br/>

				<label htmlFor="price">Price:</label><br/>
				<input className="form-control" value={this.state.product.price} type="text" name="price" onChange={this.handleChange} /><br/>
	
				<button type="button" className="btn btn-info" onClick={this.handleSave}> Save </button>				
			</div>
		)
	}
}

export default ProductForm
