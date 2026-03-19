import { useState } from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
    const { register, handleSubmit } = useForm();
    function onSubmit(event) {
        event.preventDefault();
        alert('onSubmit called');
    }

    return (
        <div style={{maxWidth:400, margin:'2rem auto',alignItems:'center'}}>
            <h2 style={{fontWeight:'bold'}}>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <div style={{marginBottom:'1rem'}}>
                    <label>Email</label>
                    <input type='email' placeholder='You@example.com' {...register('email')}/>
                </div> 
                <div style={{marginBottom:'1rem'}}>
                    <label>Password</label>
                    <input type='password' placeholder='************' {...register('password')}/>
                </div>
                <button type='submit'>Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;
