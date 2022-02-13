import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div class="loginpage">
                  <div class="container">
                            <div class="card shadow-lg mb-5 bg-white rounded">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="registertext">
                                            <h2>Don't have an account?</h2>
                                            <p>If you don't own an account here, you may create an account by signing up. </p>
                                            <a href="/Register"><button type="button" class="btn btn-outline-signup">Sign Up</button></a>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="registerbody">
                                            <h1 class="regheader">Login</h1>
                                            <p>Please enter the required login details</p>
                                            <div class="inputfields">
                                                <input type="text" class="form-control" placeholder="Name"></input>
                                                <input type="text" class="form-control" placeholder="Email"></input>
                                                <input type="text" class="form-control" placeholder="Password"></input>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Remember me
                                                </label>
                                            </div>
                                            <div>
                                                <a href="/forgot-password"><button type="button" class="btn btn-outline-forgot">Forgot password?</button></a>
                                            </div>
                                            <button type="button" class="btn btn-outline-login">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default login
