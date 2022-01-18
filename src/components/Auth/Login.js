import React from 'react'
import {useRef, useState} from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

    
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            setError('')
            await login(emailRef.current.value, passwordRef.current.value)
            console.log("Logged in successfully")
            navigate("/")
        } catch(error) {
            setError("Failed to sign in")
            console.log(error)
        }
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
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
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
                        </div>
                        <Button className="w-100 mt-3" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup" className="text-decoration-none">Sign up</Link>
            </div>
        </div>
    )
}

export default Login
