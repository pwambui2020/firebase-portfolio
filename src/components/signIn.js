import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignIn() {

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
    
    const handleSignIn = async() => {
       
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

            const response = await signInWithEmailAndPassword(auth, email,password);
            const user =response.user;

            const isVerified =user.emailVerified;
            if (!isVerified) {
                alert(`please verify your email ${email}`)
            }
            // const uid = user.uid;
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='signin'>
            <h5>Log In to your Account</h5>
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
            

            <button onClick={handleSignIn}>Log In</button>

        </div>

    )
};
