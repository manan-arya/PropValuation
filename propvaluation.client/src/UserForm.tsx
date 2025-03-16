import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(name !== '' && email !== '' && phone !== '' && description !== '');
    }, [name, email, phone, description]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = { name, email, phone, description };
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit the form.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isFormValid}>
                Submit
            </Button>
        </Form>
    );
};

export default UserForm;
