import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Customer from "../../models/Customer";
import globals from "../../utils/Globals";
import notify from "../../utils/Notify";
import "./SignUp.css";

function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Customer>();
  const history = useHistory();

  function sendDetails(customerDetails: Customer) {
    axios
      .post(globals.urls.guest + "Guest/CreateCustomer", customerDetails)
      .then((response) => {
        notify.success("you have created an account");
        history.push("/MainScreen");
      })
      .catch((error) => {});
  }

  return (
    <div className="SignUp my-20 h-screen">
      <form
        onSubmit={handleSubmit(sendDetails)}
        className="bg-white shadow-xl p-8 w-5/6 sm:w-1/4 mx-auto "
      >
        <h2 className="HeadLine text-gray-900 font-bold text-3xl">
          {" "}
          Create an account
        </h2>
        <br />
        <TextField
          label="First Name"
          variant="outlined"
          {...register("firstName", {
            required: { value: true, message: "field is required" },
          })}
        />
        <span> {errors.firstName && <p> {errors.firstName.message} </p>} </span>
        <br /> <br />
        <TextField
          label="Last Name"
          variant="outlined"
          {...register("lastName", {
            required: { value: true, message: "field is required" },
          })}
        />
        <span> {errors.lastName && <p> {errors.lastName.message} </p>} </span>
        <br /> <br />
        <TextField
          label="Email"
          variant="outlined"
          {...register("email", {
            required: { value: true, message: "field is required" },
            minLength: { value: 10, message: "minimum length over 10 chars" },
            maxLength: { value: 30, message: "maximum length less then 30 chars" },
          })}
        />
        <span> {errors.email && <p> {errors.email.message} </p>} </span>
        <br /> <br />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          {...register("password", {
            required: { value: true, message: "field is required" },
            minLength: { value: 6, message: "minimum length over 6 chars" },
          })}
        />
        <span> {errors.password && <p> {errors.password.message} </p>} </span>
        <br /> <br />
        <ButtonGroup variant="contained">
          <Button type="submit" color="primary">
            Send
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default SignUp;
