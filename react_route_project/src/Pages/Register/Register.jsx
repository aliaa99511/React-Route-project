import React from "react";
import { useFormik } from 'formik';

const Register = () => {


    return (
        <div className="register mt-30">
            <h4 className="mb-25">Register Now</h4>
            <form>
                <div>
                    <label htmlFor="name" className="form-label">name :</label>
                    <input type="name" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">email :</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormContropasswordlInput1" className="form-label">password :</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rePassword" className="form-label">rePassword :</label>
                    <input type="password" className="form-control" id="rePassword" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">phone :</label>
                    <input type="tel" className="form-control" id="phone" />
                </div>
            </form>
        </div>
    );
};

export default Register;
