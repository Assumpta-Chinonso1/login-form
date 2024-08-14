import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Validation
        if (!email || (!password && !isForgotPassword)) {
            setMessage("Please enter both email and password.");
            return;
        }

        //To Simulate successful submission
        setMessage(`Form submitted successfully with Email: ${email}`);
        setEmail("");
        setPassword("");
    };

    const handleSocialLogin = (platform) => {
        let url;
        switch (platform) {
            case "Facebook":
                url = "https://web.facebook.com/profile.php?id=100078599296252&sk=following";
                break;
            case "Twitter":
                url = "https://x.com/settings/profile";
                break;
            case "LinkedIn":
                url = "https://www.linkedin.com/in/assumpta-chinonso-6a7355239/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQXIT5TUvT06%2FxExRR9bx%2Fg%3D%3D";
                break;
            default:
                url = "#";
        }
        window.open(url, "_blank");
    };

    const toggleRegister = () => {
        setIsRegister(!isRegister);
        setIsForgotPassword(false); // Ensure that Forgot Password form is not shown
    };

    const toggleForgotPassword = () => {
        setIsForgotPassword(!isForgotPassword);
        setIsRegister(false); // Ensure that Registration form is not shown
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">iofrm</h1>
                <h1>{isForgotPassword ? "Forgot Password" : isRegister ? "Register a new account" : "Login to your account"}</h1>
                <p className="login-subtitle">
                    {isForgotPassword ? "Enter your email to reset your password." : isRegister ? "Join us to access powerful tools." : "Access the most powerful tools in the entire design and web industry."}
                </p>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="E-mail Address"
                        className='login-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {!isForgotPassword && (
                        <input
                            type="password"
                            placeholder={isRegister ? "Create Password" : "Password"}
                            className='login-input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    )}
                    <button type='submit' className='login-button'>
                        {isForgotPassword ? "Send Reset Link" : isRegister ? "Register" : "Login"}
                    </button>
                </form>
                {message && <p className='message'>{message}</p>}
                {!isRegister && !isForgotPassword && (
                    <>
                        <div className="login-footer">
                            <a href="#" className='login-forgot' onClick={toggleForgotPassword}>Forgot Password?</a>
                            <p>Or Login with</p>
                            <button className="socialLinks facebook" onClick={() => handleSocialLogin("Facebook")}>
                                Facebook
                            </button>
                            <button className="socialLinks linkedin" onClick={() => handleSocialLogin("LinkedIn")}>
                                LinkedIn
                            </button>
                            <button className="socialLinks twitter" onClick={() => handleSocialLogin("Twitter")}>
                                Twitter
                            </button>
                        </div>
                        <a href="#" className='Register-line' onClick={toggleRegister}>
                            Register new account
                        </a>
                    </>
                )}
                {isRegister && (
                    <a href="#" className='login-line' onClick={toggleRegister}>
                        Already have an account? Login here
                    </a>
                )}
                {isForgotPassword && (
                    <a href="#" className='login-line' onClick={toggleForgotPassword}>
                        Back to Login
                    </a>
                )}
            </div>
        </div>
    );
};

export default Login;


