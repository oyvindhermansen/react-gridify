import React, {Component} from 'react'
import { render } from 'react-dom'
import { Row, Column } from '../lib/index'

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
		const defaultStyles = {
			fontFamily: 'sans-serif'
		}

		const styles = {
			padding: '1rem',
			backgroundColor: 'orange',
			marginBottom: '0.5rem',
		}
		return (
			<div style={defaultStyles}>
				<Row>
						{
							this.state.items.map((item, index) => {
								return (
									<Column
										className="someOtherClass"
										key={item.id}
										xSmall="1"
										small="2"
										medium="3"
										large="4"
										padding="10px"
									>
										<div style={styles}>{item.text}</div>
									</Column>
								)
							})
						}
				</Row>
				<hr />
				<Row>
					<Column centered small="1" medium="2" large="2">
						<Row>
							<Column small="1">
								<h1>This is a title</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</Column>
						</Row>
					</Column>
				</Row>
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('root')
  );
})
