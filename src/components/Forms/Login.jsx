import React, { useState, useEffect, useMemo } from "react";
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
  TextField,
  Modal,
  Fade
} from "@mui/material";
import logo from "../../assets/images/foodcourt.png";
import ProgressBar from "../Infographics/ProgressBar";

const Login = ({ disableButton }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [level, setLevel] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Memoize regular expressions
  const digitEx = useMemo(() => /\d/, []);
  const lowerCaseEx = useMemo(() => /[a-z]/, []);
  const upperCaseEx = useMemo(() => /[A-Z]/, []);
  const spCharacEx = useMemo(() => /[^a-zA-Z0-9]/, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      setShowSuccessModal(true);
    }
  };

  useEffect(() => {
    const hasMatchingDigits = password.match(digitEx);
    const hasMatchingLowerCase = password.match(lowerCaseEx);
    const hasMatchingUpperCase = password.match(upperCaseEx);
    const hasMatchingSpecialCharacter = password.match(spCharacEx);

    // Password strength check
    if (
      password.length >= 8 &&
      hasMatchingLowerCase &&
      hasMatchingUpperCase &&
      hasMatchingDigits &&
      hasMatchingSpecialCharacter
    ) {
      setLevel("Hard");
      setPercentage(100);
    } else if (
      password.length >= 6 &&
      hasMatchingLowerCase &&
      hasMatchingUpperCase &&
      hasMatchingSpecialCharacter
    ) {
      setLevel("Medium");
      setPercentage(50);
    } else if (password.length > 0) {
      setLevel("Easy");
      setPercentage(30);
    } else {
      setLevel("");
      setPercentage(0);
    }
  }, [password, digitEx, lowerCaseEx, upperCaseEx, spCharacEx]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div className="flex bg-red-200 min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col rounded-md bg-white p-2 md:w-3/4 lg:w-[45%]">
        <div className="flex justify-center">
          <img src={logo} width={180} height={37} alt="FoodCourt Logo" />
        </div>
        <div className="mx-auto flex flex-col justify-center">
          <h3 className="text-3xl font-bold capitalize">
            <span className="text-[#cc4645]">Food</span>
            <span className="text-[#f4c257]">Court</span> Sign UP
          </h3>
          <form className="space-y-3 pb-20 pt-3" onSubmit={handleLogin}>
            <div className="">
              <div className="flex justify-center items-center">
                <AccountCircle sx={{ color: "#cc4645", mr: 1, my: 0.5 }} />
                <TextField
                  error={!!emailError}
                  helperText={emailError}
                  disabled={disableButton}
                  id="input-with-sx"
                  label="Email"
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
              {password.length > 0 && (
                <ProgressBar percentage={percentage} difficulty={level} />
              )}
            </div>
            <div>
              <button
                className={`${
                  disableButton ||
                  !validateEmail(email) ||
                  !(level === "Easy" || level === "Medium" || level === "Hard")
                    ? "bg-[#f1f1f1]"
                    : "bg-[#f4c257]"
                } text-xl font-semibold text-white cursor-pointer rounded-md py-3 w-full`}
                type="submit"
                disabled={
                  disableButton ||
                  !validateEmail(email) ||
                  !(level === "Easy" || level === "Medium" || level === "Hard")
                }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {showSuccessModal && (
        <Fade in={showSuccessModal}>
          <div className="fixed inset-0 flex items-center bg-white bg-opacity-65 justify-center">
            <div className="bg-white p-4 rounded-md text-center">
              <h2 className="text-xl font-bold">Success!</h2>
              <p>Your registration was successful.</p>
              <button
                onClick={handleCloseModal}
                className="bg-[#f4c257] text-white px-4 py-2 mt-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Login;
