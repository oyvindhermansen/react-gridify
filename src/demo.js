import React, {Component} from 'react';
import { render } from 'react-dom';
import { Row, Column } from '../lib/index';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			items: [
				{ id: 1, text: 'Hello World 1' },
				{ id: 2, text: 'Hello World 2' },
				{ id: 3, text: 'Hello World 3' },
				{ id: 4, text: 'Hello World 4' },
				{ id: 5, text: 'Hello World 5' },
				{ id: 6, text: 'Hello World 6' },
				{ id: 7, text: 'Hello World 7' },
				{ id: 8, text: 'Hello World 8' },
				{ id: 9, text: 'Hello World 9' },
				{ id: 10, text: 'Hello World 10' },
				{ id: 11, text: 'Hello World 11' },
				{ id: 12, text: 'Hello World 12' },
			]
		}
	}

	render() {
		const styles = {
			padding: '1rem',
			margin: '0.5rem',
			backgroundColor: 'orange'
		}
		return (
			<div>
				<Row>
					{
						this.state.items.map((item, index) => {
							return (
								<Column key={item.id} small="2" medium="6" large="12">
									<div style={styles}>{item.text}</div>
								</Column>
							)
						})
					}
				</Row>
			</div>
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('root')
  );
});
