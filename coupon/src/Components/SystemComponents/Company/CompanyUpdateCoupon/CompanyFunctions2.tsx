import { Button, ButtonGroup, createStyles, InputLabel, makeStyles, MenuItem, Select, TextField, Theme } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Coupon from "../../../models/Coupon";
import store from "../../../redux/store";
import globals from "../../../utils/Globals";
import JwtAxios from "../../../utils/JwtAxios";
import notify from "../../../utils/Notify";
import "./CompanyFunctions2.css";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 250,
        },
    }),
);


    

function CompanyFunctions2(): JSX.Element {
    const classes = useStyles();
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Coupon>();
    const history = useHistory();

    //when the component loads
    useEffect(() => {
        if (store.getState().authState.token == "") {
            notify.error("Unauthorized - Log in the system");
            history.push("/Login");
        }
    });

    function sendDetails(couponDetails: Coupon) {
        console.log(couponDetails);
        JwtAxios.post(globals.urls.company + "Company/updateCoupon", couponDetails)
            .then((response) => {
                console.log(response.data);
                notify.success("Coupon was updated");
            })
            .catch(error => {
                console.log(error.data);
                notify.error("Entered id does not exist");
            })
    }

    return (
        <div className="CompanyFunctions2">
            Update an existing coupon
            <br /> <br />
            <form onSubmit={handleSubmit(sendDetails)}>
                <TextField label="Coupon Id" variant="outlined"
                    {...register("id", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.title && <p> {errors.title.message} </p>} </span> <br /> <br />
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select label="UserType" style={{ width: 250 }} {...register("category", { required: { value: true, message: "field is required" } })}>
                    <MenuItem value={"Electric"} >Electrical</MenuItem>
                    <MenuItem value={"Vacation"}>Vacation</MenuItem>
                    <MenuItem value={"Food"}>Food</MenuItem>
                    <MenuItem value={"Fitness"}>Fitness</MenuItem>
                    <MenuItem value={"Clothing"}>Clothing</MenuItem>
                </Select>
                <span> {errors.category && <p> {errors.category.message} </p>} </span>
                <br /> <br /> <br />
                <TextField label="Title" variant="outlined"
                    {...register("title", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 5, message: "minimum length over 5 chars" }
                    })} />
                <span> {errors.title && <p> {errors.title.message} </p>} </span>
                <br /> <br />
                <TextField label="Description" variant="outlined"
                    {...register("description", {
                        required: { value: true, message: "field is required" }
                        , minLength: { value: 10, message: "minimum length over 10 chars" }
                    })} />
                <span> {errors.description && <p> {errors.description.message} </p>} </span>
                <br /> <br />
                <TextField label="Amount" variant="outlined"
                    {...register("amount", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.amount && <p> {errors.amount.message} </p>} </span> <br /> <br />
                <TextField label="Price" variant="outlined"
                    {...register("price", {
                        required: { value: true, message: "field is required" }
                    })} />
                <span> {errors.price && <p> {errors.price.message} </p>} </span> 
                <br /> <br />
                <TextField
                    {...register("startDate", {
                        required: { value: true, message: "field is required" }
                    })}

                    id="datetime-local"
                    label="Coupon Activation Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />
                <span> {errors.startDate && <p> {errors.startDate.message} </p>} </span>
                <br /> <br />
                <TextField
                    {...register("endDate", {
                        required: { value: true, message: "field is required" }
                    })}

                    id="datetime-local"
                    label="Coupon Expiration Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />
                <span> {errors.endDate && <p> {errors.endDate.message} </p>} </span>
                <br /> <br />
                
                <ButtonGroup variant="contained" >
                    <Button type="submit" color="primary">Send</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default CompanyFunctions2;
