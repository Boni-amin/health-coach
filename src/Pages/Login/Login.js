import React from 'react';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div className="login-area my-5">
            <div className="container">
                <div className="row text-center">
                    <div className="w-75 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                           <div className="mt-5">
                                <div><button className="btn all-button" onClick={signInUsingGoogle}>Google</button></div>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;