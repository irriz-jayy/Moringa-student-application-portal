function Login(){


    return (
        <div>
            <div>
                <form>
                    <h1>LOGIN</h1>
                        <input type='text' placeholder="username"/>
                        <input type='password' placeholder="password"/>
                        <input type='submit'/>
                </form>
                       {/* button for switching accounts */}
                       <button>do not have an account? Signup</button>
            </div>
        </div>
    )
}

export default Login;
