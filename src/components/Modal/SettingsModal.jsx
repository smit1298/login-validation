import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const SettingsModal = ({ isOpen, closeModal }) => {
  const [requirements, setRequirements] = useState({
    uppercase: false,
    lowercase: false,
    figure: false,
    specialCharacter: false,
    minLength: false
  });

  const handleCheckboxChange = (event) => {
    setRequirements({
      ...requirements,
      [event.target.name]: event.target.checked
    });
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
          <FormGroup className=" bg-white absolute w-1/4  min-h-full right-4 top-2 p-4">
            <div className="flex justify-end">
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirements.uppercase}
                  onChange={handleCheckboxChange}
                  name="uppercase"
                  style={{ color: "#cc4645" }}
                />
              }
              label="At least 1 uppercase"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirements.lowercase}
                  onChange={handleCheckboxChange}
                  name="lowercase"
                  style={{ color: "#cc4645" }}
                />
              }
              label="At least 1 lowercase"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirements.figure}
                  onChange={handleCheckboxChange}
                  name="figure"
                  style={{ color: "#cc4645" }}
                />
              }
              label="At least 1 figure"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirements.specialCharacter}
                  onChange={handleCheckboxChange}
                  name="specialCharacter"
                  style={{ color: "#cc4645" }}
                />
              }
              label="At least 1 special character - !@#$%^&*()"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={requirements.minLength}
                  onChange={handleCheckboxChange}
                  name="minLength"
                  style={{ color: "#cc4645" }}
                />
              }
              label="At least 8 characters long"
            />
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
