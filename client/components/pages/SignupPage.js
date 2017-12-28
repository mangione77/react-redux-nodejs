import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { userSignUpRequest } from '../../actions/SignUpAction'

import SignUpForm from '../SignUpForm'

class SignupPage extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col lg={4} lgOffset={4}>
						<SignUpForm signUpRequest={this.props.signUpRequest} />
					</Col>
				</Row>
			</Grid>
		)
	}
}


export default connect(state => { return {} }, { userSignUpRequest })(SignupPage)