import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase';

export default function ResetPassword() {

    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    
    const handleResetPassword = async() => {
       
        if (!email) {
            alert('Please enter a valid email');
            return;
        }
        if(!validateEmail(email)) {
            alert('please enter a valid email');
            return;
        }

        try {
            let message = `password reset for user with this ${email} has been initiated successfully`;
            alert(message);

            await sendPasswordResetEmail(auth, email);
            
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='signup'>
            <h5>Reset your Account</h5>
            <div className='signform'>
            <input
                type='email'
                placeholder='please enter your email'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
            </div>
            
            <button onClick={handleResetPassword}>Reset Password</button>

        </div>

    )
};
