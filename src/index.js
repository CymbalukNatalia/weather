import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css' 
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
	render () {
		return (
			<div>
				Weather
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
