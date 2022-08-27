import React, { useState } from "react";
import "./Form.css";
import { DisplayPage } from "./DisplayPage";

export const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    plan: "MYSELF",
  });
  const [page, setPage] = useState(0);
  const FormTitles = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
    },
    {
      subHeading: "You can always create another workspace later",
      heading: "Let's set up a home for all your work",
    },
    {
      heading: "How are you planning to us Eden?",
      subHeading: "We'll streamline your setup experience accordingly",
    },
    {
      heading: "Congratulations,",
      subHeading: `We have completed onboarding, you can start using the ${formData.fullName}`,
    },
  ];

  return (
    <div className="form-hero__wrapper">
      <section className="form-hero__content">
        <h1 className="align-center text-3xl text-grey-800 m-1 ">
          <img src={require("./../../assets/edenLogo.png")} alt="eden logo"></img>
          Eden</h1>
      </section>
      <section className="horizontal-stepper__wrapper">
        <span
          className="horizontal-stepper__step"
          style={{
            backgroundColor: page >= 0 && "#4f46e5",
            color: page >= 0 && "#f8fafc",
          }}
        >
          1
        </span>
        <span
          className="horizontal-stepper__step"
          style={{
            backgroundColor: page >= 1 && "#4f46e5",
            color: page >= 1 && "#f8fafc",
          }}
        >
          2
        </span>
        <span
          className="horizontal-stepper__step"
          style={{
            backgroundColor: page >= 2 && "#4f46e5",
            color: page >= 2 && "#f8fafc",
          }}
        >
          3
        </span>
        <span
          className="horizontal-stepper__step"
          style={{
            backgroundColor: page >= 3 && "#4f46e5",
            color: page >= 3 && "#f8fafc",
          }}
        >
          4
        </span>
        <div className="horizontal-stepper__progress-bar">
          <div
            className="horizontal-stepper__progress-bar"
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "80%"
                  : "100%",
              backgroundColor: "#4f46e5",
            }}
          ></div>
        </div>
      </section>
      <DisplayPage
        FormTitles={FormTitles}
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
