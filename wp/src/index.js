import _ from 'lodash';
import {test} from './index2.js'

function component() {
		  const element = document.createElement('div');

		    // Lodash, currently included via a script, is required for this line to work
			  element.innerHTML = _.join(['He3i2llo', 'webpack'], ' ');

			    return element;
}

document.body.appendChild(component());
test()
