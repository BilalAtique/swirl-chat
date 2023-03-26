const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Swirl Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                <p>Don't have an account? Signup</p>
            </div>
        </div>
    );
};

export default Login;
