import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";

function About() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    let history = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name, b = email;
        
        Employees.push({ id: uniqueId, Name: a, Email: b });
        history("/");
    }
    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder='Enter Name' required onChange={(e) => setname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type="text" placeholder='Enter Email' required onChange={(e) => setemail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handelSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>

    )
}

export default About;