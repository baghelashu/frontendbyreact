import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';



const Home = () => {

    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
        nampassword:""
    })
    const getdata=(e)=>{
        console.log(e.target.value);


    }
    return (
        <>
            <div className='container' mt-5 >

                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>
                            Signup
                        </h3>


                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='name' onChange={getdata} placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='name'onChange={getdata} placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='date' onChange={getdata} placeholder="Date" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' style={{background:"rgb(67,185,127"}} type="submit">
                                Submit
                            </Button>

                        </Form>
                        <p className='mt-2'> Already account hai then, <span>Go For SignIn </span></p>




                    </div>
                    <Sign_img/>
                  
                </section>

            </div>
        </>
    )
}

export default Home