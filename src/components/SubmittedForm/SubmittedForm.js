import React from "react";
import { TiTick } from "react-icons/ti";
import "./SubmittedForm.css";

export const SubmittedForm = ({
  heading,
  subHeading,
  formData,
  setFormData,
  children,
}) => {
  return (
    <>
      <div className="tick-wrapper">
        <span className="bg-c-indigo-600 text tick">
          <TiTick />
        </span>
      </div>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper">{children}</div>
    </>
  );
};

