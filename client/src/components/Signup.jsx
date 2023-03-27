function Signup(){


    return(
        <div>
            <div>
                <form>
                    <h1>SignUp</h1>
                        <input type='text' placeholder="first name"/>
                        <input type='text' placeholder="last name"/>
                        <input type='text' placeholder="username"/>
                        <input type='email' placeholder="email"/>
                        <input type='date' placeholder="DOB"/>
                        <input type='submit'/>

                </form>
                    {/* button for switching accounts */}
                    <button>already have an account? login</button>

            </div>
        </div>
    )
}

export default Signup;
