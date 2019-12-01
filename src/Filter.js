import React,{ Component } from 'react';

class Filters extends Component{
	
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const value = e.target.value;
		const name = e.target.name;
		this.props.onFilter({
			[name]:value
		})
	}

	render(){
		return(
			<div className="col-md-4">
				<input className="form-control filterText" type="text" name="filterText" onChange={this.handleChange} placeholder="Search..."/>
			</div>	
		)
	}
}

export default Filters
