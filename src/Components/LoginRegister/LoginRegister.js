import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


import firebase from '../../services/firebase';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";
import { db } from '../../services/firebase';

import Navbar from '../Navbar';
import Header from "../Header";
import Menu from "../Menu";

import { FcBusinessman, FcBusinesswoman, FcCloseUpMode } from 'react-icons/fc';
import { FcOrganization, FcGlobe, FcPlanner } from 'react-icons/fc';
import { FaCat } from 'react-icons/fa';
import { GiElephant } from 'react-icons/gi';
import axios from 'axios';
import bcrypt from 'bcryptjs'



class LoginRegister extends Component {
    constructor(props) {
        super(props);

        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.Flogin = this.Flogin.bind(this);

        this.state = {
            LoginUserName: "",
            LoginPassword: "",

            strErrMessage: "",
            RegisterUserName: "",
            RegisterPassword: "",
        }
    }

    HandleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }


    HandleSubmit(e) {
        let strErr = "";
        if (this.state.RegisterUserName == "") {
            strErr = strErr + "Please enter Username\n";
        }
        if (this.state.RegisterPassword == "") {
            strErr = strErr + "Please enter Password\n";
        }
        if (strErr != "") {
            alert(strErr);
        }
        else {
            const data = {
                RegisterUserName: this.state.RegisterUserName,
                RegisterPassword: this.state.RegisterPassword,
            }
            axios.post('http://localhost:4000/app/validate', data)
                .then(response => {
                })
            axios.post('http://localhost:4000/app/register', data)
                .then(response => {
                    console.log(response.data);
                    alert("User Registered Successfully!");
                })
            }
    }

    Flogin(e) {
        let strErr = "";
        if (this.state.LoginUserName == "") {
            strErr = strErr + "Please enter Username\n";
        }
        if (this.state.LoginPassword == "") {
            strErr = strErr + "Please enter Password\n";
        }
        if (strErr != "") {
            alert(strErr);
        }
        else {
            const data = {
                LoginUserName: this.state.LoginUserName,
                LoginPassword: this.state.LoginPassword,
            }
           axios.post('http://localhost:4000/app/login', data)
                .then(response => {
                    console.log(response);
                    alert("User logged in successfully")
                    // this.props.history.push('../QuestionDisplay')
                }).catch((err)=>{console.log('Axios Error',err)})
            }
    }

    render() {
        return (
            <div >

                <Header></Header>
                <div class="Main_div_content">
                    <div style={{ textAlign: 'center', verticalAlign: 'center', }}>
                        <div class="label-heading">

                        </div>
                        <div class="label-heading">
                            This is Login/Register Component
                        </div>

                        <div >
                            <ul class="horizontal_list">

                                <li class="List_item_red">
                                    <ul>
                                        <li>
                                            Register
                                        </li>
                                        <li>
                                            <div>
                                                <TextField
                                                    label="Register User Name"
                                                    variant="outlined"
                                                    id='RegisterUserName'
                                                    value={this.state.RegisterUserName}
                                                    onChange={this.HandleChange}
                                                    name="RegisterUserName"
                                                />
                                                <TextField
                                                    label="Register Password"
                                                    variant="outlined"
                                                    id='RegisterPassword'
                                                    value={this.state.RegisterPassword}
                                                    onChange={this.HandleChange}
                                                    name="RegisterPassword"
                                                />
                                            </div>
                                            <div>
                                                <Button
                                                    style={{
                                                        width: "230px",
                                                    }}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.HandleSubmit}
                                                >
                                                    Register
                                                </Button>
                                            </div>
                                        </li>
                                        <li>
                                            <ul>
                                                <li >Key Feature 1.</li>
                                                <li >Key Feature 2.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="List_item_red">

                                    <ul>
                                        <li>
                                            Login
                                        </li>
                                        <li>
                                            <div>
                                                <TextField
                                                    label="Login User Name"
                                                    variant="outlined"
                                                    id='LoginUserName'
                                                    value={this.state.LoginUserName}
                                                    onChange={this.HandleChange}
                                                    name="LoginUserName"
                                                />
                                                <TextField
                                                    label="Login Password"
                                                    variant="outlined"
                                                    id='LoginPassword'
                                                    value={this.state.LoginPassword}
                                                    onChange={this.HandleChange}
                                                    name="LoginPassword"

                                                />
                                            </div>
                                            <div>
                                                <Button
                                                    style={{
                                                        width: "230px",
                                                    }}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.Flogin}

                                                >
                                                    Login
                                                </Button>
                                            </div>
                                        </li>
                                        <li>

                                            <ul>

                                                <li >Key Feature 1.</li>
                                                <li >Key Feature 2.</li>
                                            </ul>

                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>


                        <div class="label-heading">

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default LoginRegister