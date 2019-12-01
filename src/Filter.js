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
			<span>
				<input className="form-control" type="text" name="filterText" onChange={this.handleChange} placeholder="Search.."/><br/>
			</span>	
		)
	}
}

export default Filters
