import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './common/Header'
import Footer from './common/Footer'

const Register = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Input Change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        // React Validation
        if (!form.name) {
            newErrors.name = ["Name is required"];
        }

        if (!form.email) {
            newErrors.email = ["Email is required"];
        }

        if (!form.password) {
            newErrors.password = ["Password is required"];
        }

        // If error exists stop API call
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:8000/api/register",
                form
            );

            if (response.data.status === 200) {
                alert(response.data.message);
                navigate('/login');
            }

        } catch (error) {

            if (error.response && error.response.status === 400) {
                setErrors(error.response.data.errors);
            }

        }
    };

  return (
    <>
        <Header/>

        <div className='container py-5 mt-5'>
            <div className='d-flex align-items-center justify-content-center'>

                <form onSubmit={handleSubmit}>

                    <div className='card border-0 shadow register'>
                        <div className='card-body p-4'>

                            <h3 className='border-bottom pb-3 mb-3'>
                                Register
                            </h3>

                            {/* Name */}
                            <div className='mb-3'>
                                <label className='form-label'>Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder='Name'
                                    required
                                />

                                {errors.name && (
                                    <small className='text-danger'>
                                        {errors.name[0]}
                                    </small>
                                )}

                            </div>


                            {/* Email */}
                            <div className='mb-3'>

                                <label className='form-label'>Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder='Email'
                                    required
                                />

                                {errors.email && (
                                    <small className='text-danger'>
                                        {errors.email[0]}
                                    </small>
                                )}

                            </div>


                            {/* Password */}
                            <div className='mb-3'>

                                <label className='form-label'>Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder='Password'
                                    required
                                />

                                {errors.password && (
                                    <small className='text-danger'>
                                        {errors.password[0]}
                                    </small>
                                )}

                            </div>


                            <div>
                                <button
                                    type="submit"
                                    className='btn btn-primary w-100'
                                >
                                    Register
                                </button>
                            </div>


                            <div className='d-flex justify-content-center py-3'>

                                Already have account? &nbsp;

                                <Link className='text-secondary' to={`/login`}>
                                    Login
                                </Link>

                            </div>

                        </div>
                    </div>

                </form>

            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Register