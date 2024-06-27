import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const SpinnerLoading = () => {
    return (
        <Container className="spinner">
            <Spinner animation="border" role="status">
                <span className="sr-only"></span>
            </Spinner>
        </Container>
    )
}

export default SpinnerLoading