import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

export default function Register() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confpassword: '',
            photo: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .required('Required'),

            email: Yup.string().email('Invalid email address').required('Required'),

            password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .max(12, 'Must be 12 characters or less')
            .required('Required'),

            confpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),

            photo: Yup.string()
            .required('Required')
        }),
        
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    })
    return (
        <form className="w-25 border border shadow m-auto p-4 mt-3" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="form-label">Name</label>
        <input
            name="name"
            id="name"
            type="name"
            className="form-control"
            {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ?
         <div className="text-danger">{formik.errors.name}</div> : null}
    
        <br/>
        <label htmlFor="email" className="form-label">Email</label>
        <input
            name="email"
            id="email"
            type="email"
            className="form-control"
            {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email 
        ? <div className="text-danger">{formik.errors.email}</div> : null}


        <br/>
        
        <label htmlFor="password" className="form-label">Password</label>
        <input
            name="password"
            id="password"
            type="password"
            className="form-control"
            {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ?
         <div className="text-danger">{formik.errors.password}</div> : null}
        <br/>

        <label htmlFor="confpassword" className="form-label">Confirm Password</label>
        <input
            name="confpassword"
            id="confpassword"
            type="password"
            className="form-control"
            {...formik.getFieldProps('confpassword')}
        />
        {formik.touched.confpassword && formik.errors.confpassword ? 
        <div className="text-danger">{formik.errors.confpassword}</div> : null}
        <br/>

        <label htmlFor="photo" className="form-label">Photo</label>
        <input
            name="photo"
            id="photo"
            type="file"
            className="form-control"
            {...formik.getFieldProps('photo')}
        />
        {formik.errors.photo ? <div className="text-danger">{formik.errors.photo}</div> : null}
        <br/>
    
        <button type="submit" className="btn btn-primary w-100">Register</button><br/>
        <span>Already have an account? <Link to="/">Login!</Link></span>
    </form>
  )
}

