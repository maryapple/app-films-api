import React, { Component} from 'react';
import Table from './components/table'
import getData from './actions/PageActions'
import { connect } from 'react-redux';

class App extends Component {
	gettingData = () => {
		this.props.getData()
	}
	render () {
		return (
			<div className="container">
				<h1>The table of films</h1>
				<Table data={this.gettingData} />
			</div>
		)
	}
	
}

const mapDispatchToProps = dispatch => {
	return {
		getData: () => dispatch(getData())
	}
}

export default connect(null, mapDispatchToProps)(App)
