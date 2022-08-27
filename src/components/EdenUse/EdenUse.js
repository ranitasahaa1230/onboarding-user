import React, { useState } from "react";
import { FilledPerson, FilledsPerson, Person, Persons } from "../../icons";
import "./EdenUse.css";

export const EdenUse = ({ heading, subHeading, formData, setFormData, children }) => {
  const [select, setSelect] = useState({
    myself: true,
    team: false,
  });
  return (
    <>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper">
        <div className="input-card-wrapper mb-3">
          <div
            className={
              select.myself ? "input-card border-active__input" : "input-card"
            }
            onClick={() => {
              setSelect((prev) => ({ myself: !prev.myself, team: !prev.team }));
              setFormData((prev) => ({
                ...prev,
                plan: "MYSELF",
              }));
            }}
          >
            {select.myself ? <FilledPerson /> : <Person />}
            <p className="weight-700">For myself</p>
            <p className="text-netural-500">
              White better. Think more clearly. Stay organized.
            </p>
          </div>
          <div
            className={
              select.team ? "input-card border-active__input" : "input-card"
            }
            onClick={() => {
              setSelect((prev) => ({ myself: !prev.myself, team: !prev.team }));
              setFormData((prev) => ({
                ...prev,
                plan: "MYTEAM",
              }));
            }}
          >
            {select.team ? <FilledsPerson /> : <Persons />}
            <p className="weight-700">With my team</p>
            <p className="text-netural-500">
              Wikis, docs, tasks, & projects, all in one place.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
