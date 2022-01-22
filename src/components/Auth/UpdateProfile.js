import React from 'react'
import {useRef, useState} from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import { Container } from 'react-bootstrap'

const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { user, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }
        try{
            setError('')
            if (emailRef.current.value !== user.email) {
                await updateEmail(emailRef.current.value)
            }
            if (passwordRef.current.value) {
                await updatePassword(passwordRef.current.value)
            }
            navigate("/profile")
        } catch {
            setError("Failed to update your profile")
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
          <div className="w-100" style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id = "email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id = "confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required></Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
            </div>
            </div>
        </Container>
    )
}

export default UpdateProfile
