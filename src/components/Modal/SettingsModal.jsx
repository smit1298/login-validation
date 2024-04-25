import React, { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const SettingsModal = ({ isOpen, closeModal }) => {
  const [requirements, setRequirements] = useState({
    upperCaseValue: false,
    lowerCaseValue: false,
    figure: false,
    specialCharacter: false,
    minLength: false
  });

  useEffect(() => {
    const storedRequirements =
      JSON.parse(localStorage.getItem("requirements")) || {};
    setRequirements((prevRequirements) => ({
      ...prevRequirements,
      ...storedRequirements
    }));
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setRequirements((prevRequirements) => ({
      ...prevRequirements,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("requirements", JSON.stringify(requirements));
    closeModal();
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed inset-0 flex bg-white bg-opacity-85 w-full">
          <FormGroup className="bg-white absolute w-[90%] md:w-1/2 lg:w-1/4 min-h-full right-4 top-2 p-4">
            <div className="flex md:hidden justify-end">
              <Close
                onClick={closeModal}
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "#cc4645",
                  my: 0.5
                }}
              />
            </div>
            <div className="hidden md:flex justify-end">
              <Close
                onClick={closeModal}
                sx={{
                  width: "70px",
                  height: "70px",
                  color: "#cc4645",
                  my: 0.5
                }}
              />
            </div>
            {Object.entries(requirements).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value}
                    onChange={handleCheckboxChange}
                    name={key}
                    style={{ color: "#cc4645" }}
                  />
                }
                label={labelMap[key]}
              />
            ))}
            <div>
              <button
                onClick={handleSubmit}
                className="bg-[#cc4645] text-xl font-semibold text-white cursor-pointer rounded-md py-3 w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </FormGroup>
        </div>
      )}
    </div>
  );
};

export default SettingsModal;

const labelMap = {
  upperCaseValue: "At least 1 uppercase",
  lowerCaseValue: "At least 1 lowercase",
  figure: "At least 1 figure",
  specialCharacter: "At least 1 special character - !@#$%^&*()",
  minLength: "At least 8 characters long"
};
