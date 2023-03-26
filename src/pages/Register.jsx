import AddAvatarIcon from "../assets/add-avatar.png";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Swirl Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Diplay Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" id="file" />
                    <label htmlFor="file">
                        <img src={AddAvatarIcon} />
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Do you already have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
