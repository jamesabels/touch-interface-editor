import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Slideout from 'slideout';

import Home from '../routes/home';

var slideout = new Slideout({
	'panel': document.getElementById('panel'),
	'menu': document.getElementById('menu'),
	'padding': 256,
	'tolerance': 70
});

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount () {

		// document.querySelector('.headerButton').addEventListener('click', function() {
		// 	slideout.toggle();
		// });

		// slideout.toggle();
	}

	render() {
		return (
			<div id="app">
				<nav id="menu">
					<header>
						<h2>Menu</h2>
					</header>
					<h1>THIS IS A MENUE</h1>
					<h1>THIS IS A MENUE</h1>
					<h1>THIS IS A MENUE</h1>
					<h1>THIS IS A MENUE</h1>
					<h1>THIS IS A MENUE</h1>
					<h1>THIS IS A MENUE</h1>
				</nav>
				<main id="panel">
					<header>
						<h2>Panel</h2>
						<button class='.headerButton' onClick={() => slideout.toggle()}>Menu</button>
					</header>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
					</Router>
				</main>
			</div>
		);
	}
}
