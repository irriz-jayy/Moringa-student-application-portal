import "./Form.css"

function Login(){


    return (
        <div className="page container-flex">
            <div className="form">
                
                <h1 className="form-title">Login</h1>

                <form>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" name="username" type='text' placeholder="Username"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" name="email" type='email' placeholder="Email"/>
                    </div>

                    <div className="form-submit">
                        <button type="submit" className="btn">Log In</button>
                    </div>

                </form>

                {/* Switch to Signing Up */}
                <p className="container">
                    Don't have an account?<a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login;
