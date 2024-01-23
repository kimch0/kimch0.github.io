import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import './EmailForm.css'
import { useState } from 'react';
import Popup from './Popup';
import toast, { Toaster } from 'react-hot-toast';

function EmailForm() {

    const [data, setData] = useState({ name: '', email: '', subject: '', message: '' });
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const validateForm = () => {
        // Realiza validaciones aquí
        if (!data.name || !data.email || !data.message) {
            toast.error('Please fill in all required fields', {
                style: {
                    borderRadius: '10px',
                    background: '#121212',
                    color: '#C9A7FE',
                    border: '3px solid #3f02a1',
                    padding: '16px',
                },
            });
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(data.email)) {
            toast.error('Please enter a valid email address', {
                style: {
                    borderRadius: '10px',
                    background: '#121212',
                    color: '#C9A7FE',
                    border: '3px solid #3f02a1',
                    padding: '16px',
                },
            });
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            const response = await fetch('https://formspree.io/f/moqgvrod', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error);
            }

            setData({ name: '', email: '', subject: '', message: '' });
            toast.success('Your message has been sent', {
                style: {
                    borderRadius: '10px',
                    background: '#121212',
                    color: '#84c5fa',
                    border: '3px solid #013a69',
                    padding: '16px',
                },
            })
            
        } catch (error) {
            setError(error.message);
            toast.error('Something went wrong, please try again later', {
                style: {
                    borderRadius: '10px',
                    background: '#121212',
                    color: '#C9A7FE',
                    border: '3px solid #3f02a1',
                    padding: '16px',
                },
            });

        } finally {
            setLoading(false);
        }
    }



    return (
        <>
            <Toaster />
            <Container className="mt-5 mb-3" id="contact">
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <h2>Contact</h2>
                        <Form
                            className="emailForm"
                            onSubmit={handleSubmit}
                            method='POST'
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    value={data.name}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    value={data.email}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control
                                    name="message"
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    onChange={handleChange}
                                    value={data.message}
                                />
                            </Form.Group>

                            <Button
                                variant="outline-info"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {
                loading &&
                <Popup
                    error={error !== null}
                />
            }


        </>
    );
}

export default EmailForm;