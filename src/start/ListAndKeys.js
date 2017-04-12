
import React from 'react';
import { render } from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems1 = numbers.map((number) =>
  <li>{number}</li>
);

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
    //Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
		<li key={number.toString() }>
            {number}</li>
	);
	return (
		<ul>{listItems}</ul>
	);
}
export default class ListAndKeys extends Component {
	render() {
		return (
			<div class={style.ListAndKeys}>
				<h1> Lists and Keys </h1>
				<ul>{listItems1}	</ul>
				<NumberList numbers={numbers} />
			</div>
		);
	}
}
