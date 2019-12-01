import React  from 'react';
import { render } from 'react-dom';
import Products from './Product';
import './index.css'
render(
	<div className="container-fluid">
				
		<Products/>
	</div>
	, document.getElementById('root'))