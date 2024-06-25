import React from "react";
import { useFormik } from 'formik';
import axios from "axios";

const Register = () => {
    const handleRegisterSubmit = async (values) => {
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 4) {
            errors.name = 'Must be 4 characters or more';
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more';
        }

        if (!values.rePassword) {
            errors.rePassword = "Required";
        } else if (values.rePassword !== values.password) {
            errors.rePassword = 'Passwords must match';
        }

        if (!values.phone) {
            errors.phone = "Required";
        } else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone)) {
            errors.phone = 'Invalid phone number format';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        validate,
        onSubmit: handleRegisterSubmit,
    });

    return (
        <div className="register mt-30">
            <h4 className="mb-25">Register Now</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className={`mb-3 ${formik.touched.name && formik.errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        {...formik.getFieldProps('name')}
                    />
                    <div className="invalid-feedback">
                        {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                    </div>
                </div>
                <div className={`mb-3 ${formik.touched.email && formik.errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        {...formik.getFieldProps('email')}
                    />
                    <div className="invalid-feedback">
                        {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                    </div>
                </div>
                <div className={`mb-3 ${formik.touched.password && formik.errors.password ? 'has-error' : ''}`}>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        {...formik.getFieldProps('password')}
                    />
                    <div className="invalid-feedback">
                        {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                    </div>
                </div>
                <div className={`mb-3 ${formik.touched.rePassword && formik.errors.rePassword ? 'has-error' : ''}`}>
                    <label htmlFor="rePassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`}
                        id="rePassword"
                        {...formik.getFieldProps('rePassword')}
                    />
                    <div className="invalid-feedback">
                        {formik.touched.rePassword && formik.errors.rePassword ? formik.errors.rePassword : ''}
                    </div>
                </div>
                <div className={`mb-3 ${formik.touched.phone && formik.errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        {...formik.getFieldProps('phone')}
                    />
                    <div className="invalid-feedback">
                        {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Register</button>
            </form>
        </div>
    );
};

export default Register;


// import React from "react";
// import { useFormik } from 'formik';

// const Register = () => {
//     const handleRegisterSubmit = (values) => {
//         console.log('values', values);
//     };

//     const validate = (values) => {
//         const errors = {};
//         if (!values.name) {
//             errors.name = "Required";
//         } else if (values.name.length < 4) {
//             errors.name = 'Must be 4 characters or more';
//         }

//         if (!values.email) {
//             errors.email = "Required";
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//         }

//         if (!values.password) {
//             errors.password = "Required";
//         } else if (values.password.length < 8) {
//             errors.password = 'Must be 8 characters or more';
//         }

//         if (!values.rePassword) {
//             errors.rePassword = "Required";
//         } else if (values.rePassword !== values.password) {
//             errors.rePassword = 'Passwords must match';
//         }

//         if (!values.phone) {
//             errors.phone = "Required";
//         } else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone)) {
//             errors.phone = 'Invalid phone number format';
//         }

//         return errors;
//     };

//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             password: "",
//             rePassword: "",
//             phone: ""
//         },
//         validate,
//         onSubmit: handleRegisterSubmit,
//     });

//     return (
//         <div className="register mt-30">
//             <h4 className="mb-25">Register Now</h4>
//             <form onSubmit={formik.handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name:</label>
//                     <input
//                         type="text"
//                         className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
//                         id="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         {...formik.getFieldProps('name')}
//                     />
//                     <div className="invalid-feedback">
//                         {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         {...formik.getFieldProps('email')}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         {...formik.getFieldProps('password')}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="rePassword" className="form-label">Confirm Password:</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="rePassword"
//                         value={formik.values.rePassword}
//                         onChange={formik.handleChange}
//                         {...formik.getFieldProps('rePassword')}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="phone" className="form-label">Phone:</label>
//                     <input
//                         type="tel"
//                         className="form-control"
//                         id="phone"
//                         value={formik.values.phone}
//                         onChange={formik.handleChange}
//                         {...formik.getFieldProps('phone')}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;
