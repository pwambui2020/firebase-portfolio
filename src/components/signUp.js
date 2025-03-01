import React, { useState } from 'react';
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {auth} from '../firebase';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    const validatePassword = (password) => {
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return re.test(password);
    }
    
    const handleSignUp = async() => {
       
        if (!email) {
            alert('Please enter a valid email');
            return;
        }
        if(!validateEmail(email)) {
            alert('please enter a valid email');
            return;
        }
        if (!password) {
            alert('please enter a valid passord');
            return;
        }
        if (!validatePassword(password)) {
            alert('please enter a valid password');
            return;
        } 

        try {
            let message = `Account with this ${email} has been created successfully`;
            alert(message);

            const response = await createUserWithEmailAndPassword(auth, email,password);
            const user =response.user;
            const uid = user.uid;

            await sendEmailVerification(user);

            message = `Account with this uid ${uid} has been created succefuly`

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='signup'>
            <h5>Create your Account</h5>
            <div className='signform'>
            <input
                type='email'
                placeholder='please enter your email'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Please enter a valid password'
                value={password }
                onChange={ (e) => setPassword(e.target.value)}
            />
            </div>
            

            <button onClick={handleSignUp}>Sign Up</button>

        </div>

    )
};
