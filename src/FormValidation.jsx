import React, { useState } from 'react'
import './App.css'
const FormValidation = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        gender: "",
        password: "",
        confirmpassword: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.firstname.trim()){
            validationErrors.firstname = 'Firstname is required'
        } else if(formData.firstname.length<3 || formData.firstname.length>30){
            validationErrors.firstname = 'Firstname should be in between 3 and 30'
        }

        if(!formData.lastname.trim()){
            validationErrors.lastname = 'Lastname is required'
        } else if(formData.lastname.length<3 || formData.lastname.length>30){
            validationErrors.lastname = 'Lastname should be in between 3 and 30'
        }

        if(!formData.email.trim()){
            validationErrors.email = 'Email is required'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(formData.email)){
            validationErrors.email = 'Email is not valid'
        }

        if(!formData.phonenumber.trim()){
            validationErrors.phonenumber = 'Phonenumber is required'
        } else if(!/^\d{10}$/.test(formData.phonenumber)){
            validationErrors.phonenumber = 'Phonenumber is not valid'
        }
        
        if(!formData.gender){
            validationErrors.gender = "Gender is required"
        }
        if(!formData.password.trim()){
            validationErrors.password = 'Password is required'
        } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password)){
            validationErrors.password = 'Password is not valid'
        }

        if(!formData.confirmpassword){
            validationErrors.confirmpassword = 'Confirm Password is required'
        }
        else if(formData.confirmpassword !== formData.password){
            validationErrors.confirmpassword = 'Password is not matched'
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            alert("Form submitted successfully")
            console.log(formData)
        }
    }
    const handleKeyPress = (e) => {
        // Prevent typing if the key is not a digit
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };
    
    
  return (
    <div id="container">
        <form onSubmit={handleSubmit}>
        <div className='form_container'>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" placeholder='Enter Your First Name' name='firstname' id='firstname' value={formData.firstname} onChange={handleChange}/>
            <hr />
        </div>
        {errors.firstname && <span>{errors.firstname}</span>}
        <div className='form_container'>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" placeholder='Enter Your Last Name' name='lastname' id='lastname' value={formData.lastname} onChange={handleChange}/>
            <hr />
        </div>
        {errors.lastname && <span>{errors.lastname}</span>}
        <div className='form_container'>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Email' name='email' id='email' value={formData.email} onChange={handleChange}/>
            <hr />
        </div>
        {errors.email && <span>{errors.email}</span>}
        <div className='form_container'>
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="tel" placeholder='Enter your Phone Number' name='phonenumber' id='phonenumber' value={formData.phonenumber} onChange={handleChange} onKeyPress={handleKeyPress}/>
            <hr />
        </div>
        {errors.phonenumber && <span>{errors.phonenumber}</span>}
        <div className='form_container'>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <hr />
        </div>
        {errors.gender && <span>{errors.gender}</span>}
        <div className='form_container'>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='********' name='password' id='password' value={formData.password} onChange={handleChange}/>
            <hr />
        </div>
        {errors.password && <span>{errors.password}</span>}
        <div className='form_container'>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input type="password" placeholder='********' name='confirmpassword' id='confirmpassword' value={formData.confirmpassword} onChange={handleChange}/>
            <hr />
        </div>
        {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
        <div className="btn">
            <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default FormValidation
