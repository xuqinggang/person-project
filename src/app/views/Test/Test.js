import React, { Component } from 'react';
import Test2 from './Test2';
import TestDecorator from './TestDecorator';
import { Modal } from 'react-bootstrap';
// import styles from './styles.scss'
@TestDecorator
class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
	}
	test() {
		console.log('test')
	}
	componentWillMount() {
		// this.setState({
		// 	count: 2
		// })
		// console.log('Test', this.state.count)
	}
	componentDidMount() {
		this.setState({
			count: this.state.count + 1,
		})
		this.setState({
			count: this.state.count + 1,
		})
		setTimeout(() => {
			console.log('state', this.state.count);
			this.setState({
				count: this.state.count + 1,
			});
			console.log('state', this.state.count);
			this.setState({
				count: this.state.count + 1,
			})
			console.log('state', this.state.count);
		},0)
	}
	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		});
	}
	render() {
		console.log('test render')
        return(
            <div>
                <div>123</div>
                <Modal show={ true }>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        footer
                    </Modal.Footer>

                </Modal>	
    </div>
            // <div className={ styles.test } onClick={this.handleClick}>
			// 	qwe{this.state.count}
			// 	<Test2 />
			// </div>
		)
	}
}

export default Test;
