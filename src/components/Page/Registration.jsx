import { Close, Settings } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Login from "../Forms/Login";
import SettingsModal from "../Modal/SettingsModal";

const Registration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const localStorageData = localStorage.getItem("requirements");

  const removeItem = () => {
    localStorage.removeItem("requirements");
  };

  const openModal = () => {
    // removeItem();
    setIsOpen(true);
    // if (!localStorageData) {
    //   setIsOpen(true);
    // }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(localStorageData);

  useEffect(() => {
    if (!localStorageData) {
      openModal();
    } else setDisableButton(true);
  }, [localStorageData]);

  return (
    <div className="relative">
      {!isOpen && (
        <div className="absolute cursor-pointer w-fit top-0 right-10">
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
      )}

      <div>
        <Login disableButton={disableButton} />
      </div>

      {isOpen && <SettingsModal isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
};

export default Registration;
