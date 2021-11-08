
import "./LoginTemporary.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";

import { useEffect } from "react";
import UserDetails from "../../models/UserDetails";


function LoginTemporary(): JSX.Element {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<UserDetails>();
    const [jwtToken, setToken] = useState("")

  
    function send(userDetails: UserDetails) {
console.log(userDetails.userType);
console.log(userDetails.email);
    }


    return (
        <div className="LoginTemporary">
            <div className="LoginBox">
                <form onSubmit={handleSubmit(send)}>
                    <Typography variant="h4" className="HeadLine">Login Form</Typography><br />
                    <TextField label="coupon name" variant="outlined"
                        {...register("email", {
                            required: { value: true, message: "field is required" }
                            , minLength: { value: 10, message: "minimum length must be 5" }
                        })} />
                    <span> {errors.email && <p>{errors.email.message}</p>}</span>
                    <br/>
                    <TextField label="coupon price" variant="outlined"
                        {...register("password", {
                            required: { value: true, message: "field is required" }
                        })} />
                    <span> {errors.password && <p>{errors.password.message}</p>}</span>
                    <TextField label="coupon description" variant="outlined"
                        {...register("userType", {
                            required: { value: false, message: "field is not required" }

                        })} />
                        <ButtonGroup variant="contained" fullWidth>
                        <Button type="submit" color="primary">Send</Button>                    
                    </ButtonGroup>

                </form>
            </div>
        </div>
    );
}

export default LoginTemporary;
