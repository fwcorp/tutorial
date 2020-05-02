import _ from 'lodash';

function component() {
		  const element = document.createElement('div');

		    // Lodash, currently included via a script, is required for this line to work
			  element.innerHTML = _.join(['He3i2llo', 'webpacksecond'], ' ');

			    return element;
}

export function test(){document.body.appendChild(component())};
