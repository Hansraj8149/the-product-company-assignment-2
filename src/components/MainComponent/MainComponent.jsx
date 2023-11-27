
import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Grid, Paper, Typography, Button } from "@mui/material";
import "./MainComponent.css";
import CorporateInfoForm from "../../CorporateInfoForm/CorporateInfoForm";
import AllowanceInfoForm from "../AllowancesInfoForm/AllowancesInfoForm";
const MainComponent = () => {
  const [isEditingCorporateInfo, setIsEditingCorporateInfo] = useState(false);
  const [savedCorporateInfo, setSavedCorporateInfo] = useState(null);

  const [isEditingAllowances, setIsEditingAllowances] = useState(false);
  const [savedAllowances, setSavedAllowances] = useState(null);
  const handleEditCorporateInfo = () => {
    setIsEditingCorporateInfo(true);
    setSavedCorporateInfo(null);
  };

  const handleCloseForm = () => {
    setIsEditingCorporateInfo(false);
  };

  const handleSaveForm = (formData) => {
    setSavedCorporateInfo(formData);
    setIsEditingCorporateInfo(false);
  };

  const handleEditAllowances = () => {
    setIsEditingAllowances(true);
  };

  const handleCloseAllowanceForm = () => {
    setIsEditingAllowances(false);
  };

  const handleSaveAllowanceForm = (formData) => {
    if (isEditingAllowances) {
      setSavedAllowances(formData);
      setIsEditingAllowances(false);
    } else {
      setIsEditingAllowances(true);
    }
  };

  return (
    <>
      <Grid container spacing={2} className="main-component">
        <Grid item xs={12}>
          <div className="corporate-info">
            <Typography>Corporate Information</Typography>
            <Edit className="edit" onClick={handleEditCorporateInfo} />
          </div>
          {savedCorporateInfo && (
            <Grid item xs={12}>
              <Grid container spacing={2} style={{ marginLeft: "0px" }}>
                <Grid
                  item
                  xs={4}
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <Typography className="text-style">
                    Business Description:
                  </Typography>
                  <Typography className="text-style">
                    Corporate Philosophy:
                  </Typography>
                  <Typography className="text-style">Company Name:</Typography>
                  <Typography className="text-style">Industry:</Typography>
                  <Typography className="text-style">Mail ID:</Typography>
                  <Typography className="text-style">Phone Number:</Typography>
                  <Typography className="text-style">Location:</Typography>
                  <Typography className="text-style">Website:</Typography>
                  <Typography className="text-style">Working Hours:</Typography>
                  <Typography className="text-style">
                    Estblishment Date:
                  </Typography>
                  <Typography className="text-style">
                    Initial capital:
                  </Typography>
                  <Typography className="text-style">
                    Representative:
                  </Typography>
                  <Typography className="text-style">Branch:</Typography>
                  <Typography className="text-style">
                    Number Of Employees:
                  </Typography>
                  <Typography className="text-style">Sales Revenue:</Typography>
                  <Typography className="text-style">
                    Operation Profit:
                  </Typography>
                  <Typography className="text-style">
                    Average Age Of Employees:
                  </Typography>
                  <Typography className="text-style">Stock:</Typography>
                  <Typography className="text-style">LinkedIn Link:</Typography>
                  <Typography className="text-style">Twitter Link:</Typography>
                  <Typography className="text-style">Facebook Link:</Typography>
                  <Typography className="text-style">
                    Instagram Link:
                  </Typography>
                  <Typography className="text-style">Youtube Link:</Typography>
                  <Typography className="text-style">Foriegn Owned:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography className="text-style">
                    {savedCorporateInfo.businessDescription}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.corporatePhilosophy || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.companyName}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.industry || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.mailId}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.phoneNumber}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.location}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.website || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.workingHours}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.establishmentDate}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.initialCapital}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.representative}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.branch}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.numberOfEmployees}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.salesRevenue}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.operationProfit}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.averageAgeOfEmployees || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.stock || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.linkedinLink || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.twitterLink || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.facebookLink || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.instagramLink || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.youtubeLink || "None"}
                  </Typography>
                  <Typography className="text-style">
                    {savedCorporateInfo.foriegnOwned || "NO"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          {isEditingCorporateInfo ? (
            <CorporateInfoForm
              onSave={handleSaveForm}
              onClose={handleCloseForm}
            />
          ) : (
            <div>
             
            </div>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="corporate-info">
            <Typography>Allowances</Typography>
            <Edit className="edit" onClick={handleEditAllowances} />
          </div>
          {savedAllowances && (
            <Grid item xs={12}>
              <Grid container spacing={2} style={{ marginLeft: "0px" }}>
                <Grid
                  item
                  xs={8}
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <Typography className="text-style">
                    Salary System based On Meritocracy:
                  </Typography>
                  <Typography className="text-style">
                    120 or More ANuual Holidays:
                  </Typography>
                  <Typography className="text-style">
                    Generous Welfare Benifits:
                  </Typography>
                  <Typography className="text-style">
                    Enhanced Education And Training:
                  </Typography>

                  <Typography className="text-style">
                    Support System For Acquriring Qualification:
                  </Typography>
                  <Typography className="text-style">
                    Reduced Working Hours System :
                  </Typography>
                  <Typography className="text-style">
                    Maternity Care Leave System:
                  </Typography>
                  <Typography className="text-style">
                    Company Housing / Rent Subsidy:
                  </Typography>
                  <Typography className="text-style">
                    Family Allowance:
                  </Typography>
                  <Typography className="text-style">
                    Employee Stock Ownership:
                  </Typography>
                  <Typography className="text-style">
                    Side Job Available:
                  </Typography>
                  <Typography className="text-style">Mentor System:</Typography>
                  <Typography className="text-style">
                    Career Consulting:
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className="text-style">
                    {savedAllowances.meritocracy == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.annualHolidays == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.educationAndTraining == true
                      ? "Yes"
                      : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.qualificationSupport == true
                      ? "Yes"
                      : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.welfareBenefits == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.reducedWorkingHours == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.maternityCareLeave == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.companyHousing == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.familyAllowance == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.employeeStockOwnership == true
                      ? "Yes"
                      : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.sideJob == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.mentorSystem == true ? "Yes" : "No"}
                  </Typography>
                  <Typography className="text-style">
                    {savedAllowances.careerConsulting == true ? "Yes" : "No"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12}>
            {isEditingAllowances ? (
              <AllowanceInfoForm
                onSave={handleSaveAllowanceForm}
                onClose={handleCloseAllowanceForm}
              />
            ) : (
              <div>
              
              </div>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="corporate-info">
                <Typography>Others</Typography>
                <Edit className="edit" />
              </div>

              <Grid container spacing={2} style={{ marginLeft: "0px" }}>
                <Grid
                  item
                  xs={6}
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <Typography className="text-style">
                    Retention Rate Of new Graduate hires:
                  </Typography>
                  <Typography className="text-style">
                    Work Style (Overseas Bases):
                  </Typography>
                  <Typography className="text-style">
                    Working Environment:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="text-style">Over 50%</Typography>
                  <Typography className="text-style">Yes</Typography>
                  <Typography className="text-style">Not Working</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <div className="corporate-info">
                <Typography>Holidays</Typography>
                <Edit className="edit" />
              </div>

              <Grid container spacing={2} style={{ marginLeft: "0px" }}>
                <Grid
                  item
                  xs={6}
                  style={{ backgroundColor: "rgb(247, 247, 247)" }}
                >
                  <Typography className="text-style">
                    Summer Holidays:
                  </Typography>
                  <Typography className="text-style">Golden Weeks:</Typography>
                  <Typography className="text-style">
                    Other Holidays:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="text-style">Yes</Typography>
                  <Typography className="text-style">Yes</Typography>
                  <Typography className="text-style">Yes</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainComponent;
