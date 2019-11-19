import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css' 
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
	render () {
		return (
			<div className="mainPageImage">
				<h1>Weather</h1>
				<div className="form-group col-md-6">
      				<label for="inputCity">City or coordinates</label>
      				<input type="text" className="form-control" id="inputCity" />
    			</div>
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
