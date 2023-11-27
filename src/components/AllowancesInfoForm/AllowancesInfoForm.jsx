
import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Checkbox,
  Typography,
} from '@mui/material';

const AllowanceInfoForm = ({ onSave, onClose }) => {
  const [allowanceData, setAllowanceData] = useState({
    meritocracy: false,
    annualHolidays: false,
    welfareBenefits: false,
    educationAndTraining: false,
    qualificationSupport: false,
    reducedWorkingHours: false,
    maternityCareLeave: false,
    companyHousing: false,
    familyAllowance: false,
    employeeStockOwnership: false,
    sideJob: false,
    mentorSystem: false,
    careerConsulting: false,
  });

  const handleChange = (allowance) => {
    setAllowanceData((prevData) => ({
      ...prevData,
      [allowance]: !prevData[allowance],
    }));
  };

  const handleSave = () => {
    onSave(allowanceData); 
    onClose(); 
  };

  return (
    <div className="allowance-info-form">
      <Grid container spacing={2}>
        {Object.entries(allowanceData).map(([allowance, value]) => (
          <Grid item xs={12} key={allowance}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={() => handleChange(allowance)}
                  name={allowance}
                  color="primary"
                />
              }
              label={
                <Typography style={{ fontSize: '15px', color: 'gray' }}>
                  {allowance.split(/(?=[A-Z])/).join(' ')}
                </Typography>
              }
            />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
       
      </Grid>
    </div>
  );
};

export default AllowanceInfoForm;
