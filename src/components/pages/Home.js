import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    let history = useNavigate();

    const handelEdit = (id, name, email) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Id',id);
    }

    const handelDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }
    return (
        <>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Email}
                                            </td>
                                            <td><Button onClick={() => handelDelete(item.id)}>Delete</Button>
                                                &nbsp; &nbsp;
                                                <Link to={'Edit'}><Button onClick={()=> handelEdit(item.id, item.Name, item.Email)}> Edit</Button></Link></td>
                                        </tr>
                                    )
                                })
                                :
                                "No Data Save"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-gird gap-2' to={`/About`}>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </>
    )
}

export default Home;