import { Settings } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Login from "../Forms/Login";
import SettingsModal from "../Modal/SettingsModal";

const Registration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const localStorageData = JSON.parse(localStorage.getItem("requirements"));

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (
      !localStorageData ||
      Object.values(localStorageData).every((value) => !value)
    ) {
      setTimeout(() => {
        setDisableButton(true);
        openModal();
      }, 1600);
    }
  }, [localStorageData]);

  useEffect(() => {
    if (localStorageData) {
      setDisableButton(false);
    } else setDisableButton(true);
  }, [localStorageData]);

  return (
    <div className="relative">
      {!isOpen && (
        <div>
          <div className="absolute cursor-pointer flex md:hidden w-fit top-1 right-2">
            <Settings
              onClick={openModal}
              sx={{
                width: "40px",
                height: "40px",
                color: "#cc4645",
                mr: 1,
                my: 0.5
              }}
            />
          </div>
          <div className="absolute cursor-pointer w-fit top-10 hidden md:flex md:top-0 right-10">
            <Settings
              onClick={openModal}
              sx={{
                width: "70px",
                height: "70px",
                color: "#cc4645",
                mr: 1,
                my: 0.5
              }}
            />
          </div>
        </div>
      )}

      <div>
        <Login disableButton={disableButton} />
      </div>

      {isOpen && <SettingsModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
};

export default Registration;
