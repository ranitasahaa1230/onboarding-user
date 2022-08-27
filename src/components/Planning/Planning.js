import React from 'react'
import "./Planning.css";
export const Planning = ({ heading, subHeading, formData, setFormData, children }) => {
  return (
    <>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper ">
        <label className="input-label mb-4">
          Workspace Name
          <input
            type="text"
            value={formData.workspaceName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                workspaceName: e.target.value,
              }))
            }
            placeholder="Eden"
            className="input-text"
          />
        </label>
        <div className="input-label__wrapper relative">
          <label
            className="input-label absolute left-5"
            
          >
            Workspace URL
            <span className="text-grey-400" htmlFor="workspaceUrl">
              (optional)
            </span>
          </label>
          <p className="w-100">
            <span className="input-text text-grey-400 w-40 pb-3 bg-c-slate-50 p-2">
              www.eden.com/
            </span>
            <input
              id="workspaceUrl"
              type="url"
              value={formData.workspaceUrl}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  workspaceUrl: e.target.value,
                }))
              }
              placeholder="Steve"
              className="input-text w-60"
            />
          </p>
        </div>
        {children}
      </div>
    </>
  );
};

