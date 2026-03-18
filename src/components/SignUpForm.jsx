import { useState } from 'react';

function SignupForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div style={{maxWidth:400, margin:'2rem auto'}}>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:'1rem'}}>
                    <label>Email</label>
                    <input type='email' placeholder='You@example.com'/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label>Password</label>
                    <input type='password' placeholder='Enter your password'/>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
