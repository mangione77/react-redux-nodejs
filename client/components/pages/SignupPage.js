import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SignUpForm from '../SignUpForm'

class SignupPage extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col lg={4} lgOffset={4}>
						<SignUpForm />
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default SignupPage