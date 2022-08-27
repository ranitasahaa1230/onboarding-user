 import {SignUpPage} from "../SignUpPage/SignUpPage";
import { Planning } from "../Planning/Planning";
import { EdenUse } from "../EdenUse/EdenUse";
import { SubmittedForm } from "../SubmittedForm/SubmittedForm";

export const DisplayPage = ({FormTitles ,formData, setFormData ,page ,setPage}) => {
   if (page === 0) {
     return (
       <SignUpPage
         formData={formData}
         setFormData={setFormData}
         heading={FormTitles[0].heading}
         subHeading={FormTitles[0].subHeading}
       >
         <button
           className="form-button"
           onClick={() => {
             setPage((prev) => (prev === 3 ? 0 : prev + 1));
           }}
         >
           Create Workspace
         </button>
       </SignUpPage>
     );
   } else if (page === 1) {
     return (
       <Planning
         heading={FormTitles[1].heading}
         subHeading={FormTitles[1].subHeading}
         formData={formData}
         setFormData={setFormData}
       >
         <button
           className="form-button"
           onClick={() => {
             setPage((prev) => (prev === 3 ? 0 : prev + 1));
           }}
         >
           Create Workspace
         </button>
       </Planning>
     );
   } else if (page === 2) {
     return (
       <EdenUse
         heading={FormTitles[2].heading}
         subHeading={FormTitles[2].subHeading}
         formData={formData}
         setFormData={setFormData}
       >
         <button
           className="form-button"
           onClick={() => {
             setPage((prev) => (prev === 3 ? 0 : prev + 1));
           }}
         >
           Create Workspace
         </button>
       </EdenUse>
     );
   } else {
     return (
       <SubmittedForm
         heading={FormTitles[3].heading}
         subHeading={FormTitles[3].subHeading}
         formData={formData}
         setFormData={setFormData}
       >
         <button
           className="form-button"
           onClick={() => {
             setPage((prev) => (prev === 3 ? 0 : prev + 1));
           }}
         >
           Create Workspace
         </button>
       </SubmittedForm>
     );
   }
 };
