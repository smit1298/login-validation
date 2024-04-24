import React, { useState } from "react";
import {
  AccountCircle,
  Password,
  Visibility,
  VisibilityOff
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField
} from "@mui/material";
import AlertComponent from "../../components/Alert";
import logo from "../../assets/images/foodcourt.png";
import { grey } from "@mui/material/colors";

const Login = ({ disableButton }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  console.log(disableButton);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex bg-red-200 min-h-screen flex-col">
      <div className="mx-auto my-[10%] flex flex-col rounded-md bg-white p-2 md:w-3/4 lg:w-[45%]">
        <div className="flex ">
          <img src={logo} width={180} height={37} alt="" priority />
        </div>
        <div className="mx-auto flex flex-col justify-center">
          <h3 className="text-3xl font-bold capitalize">
            <span className="text-[#cc4645]">Food</span>
            <span className="text-[#f4c257]">Court</span> Login Validation
          </h3>
          <form className="space-y-3 pb-20 pt-3" onSubmit={handleLogin}>
            <div className="">
              <div className="flex justify-center items-center">
                <AccountCircle sx={{ color: "#cc4645", mr: 1, my: 0.5 }} />
                <TextField
                  disabled={disableButton}
                  id="input-with-sx"
                  label="Username"
                  variant="standard"
                  sx={{ m: 1, width: "28ch" }}
                  color="warning"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center">
                <Password sx={{ color: "#cc4645", mr: 1, my: 0.5 }} />
                <FormControl sx={{ m: 1, width: "28ch" }} variant="standard">
                  <InputLabel
                    color="warning"
                    htmlFor="standard-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    color="warning"
                    sx={{ width: "28ch" }}
                    value={password}
                    disabled={disableButton}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          sx={{ color: "#cc4645" }}
                          disabled={disableButton}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </div>

              {/* <AlertComponent message={"Error"} /> */}
            </div>
            <div>
              <button
                className={`${
                  disableButton ? "bg-[#f1f1f1]" : "bg-[#f4c257]"
                } text-xl font-semibold text-white cursor-pointer rounded-md py-3 w-full`}
                type="submit"
                disabled={disableButton}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
