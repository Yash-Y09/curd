import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";

function Edit() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handelSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Email = email;

        history("/");
    }
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))
    },[]);

    return(
        <div>
             <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type="text" placeholder='Enter Email' value={email} required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handelSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit;