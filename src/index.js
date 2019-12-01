import React  from 'react';
import { render } from 'react-dom';
import Products from './Product';
import './index.css'
render(
	<div className="container-fluid">
		<h1>My Inventory</h1><br/>		
		<Products/>
	</div>
	, document.getElementById('root'))