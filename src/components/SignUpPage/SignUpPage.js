import React from 'react';
import "./SignUpPage.css";

export const SignUpPage = ({
  heading,
  subHeading,
  formData,
  setFormData,
  children,
}) => {
  return (
    <>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper">
        <label className="input-label">
          Full Name
          <input
            type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName:e.target.value}))
              }
            placeholder="Steve Jobs"
            className="input-text"
          />
        </label>
        <label className="input-label">
          Display Name
          <input
            type="text"
              value={formData.displayName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, displayName: e.target.value }))
              }
            placeholder="Steve"
            className="input-text"
          />
        </label>
      <div className="sign-up__btn">  {children}</div>
      </div>
    </>
  );
};
