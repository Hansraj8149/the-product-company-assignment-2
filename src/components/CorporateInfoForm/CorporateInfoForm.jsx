import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Flare } from "@mui/icons-material";

const CorporateInfoForm = ({ onSave, onClose }) => {
  const [formData, setFormData]= useState({
    businessDescription:"",
    corporatePhilosophy: "",
    companyName: "",
    industry: "",
    mailId: "",
    phoneNumber: "",
    location: "",
    website: "",
    workingHours: "",
    establishmentDate: "",
    initialCapital: "",
    representative: "",
    branch: "",
    numberOfEmployees: "",
    salesRevenue: "",
    operationProfit: "",
    averageAgeOfEmployees: "",
    stock: "",
    linkedinLink: "",
    twitterLink: "",
    facebookLink: "",
    instagramLink: "",
    youtubeLink: "",
    foreignOwned: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target || event; 
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
      const requiredFields = ["businessDescription",
      "companyName",
      "mailId",
      "phoneNumber",
      "location",
      "workingHours",
      "establishmentDate",
      "initialCapital",
      "representative",
      "branch",
      "numberOfEmployees",
      "salesRevenue",
      "operationProfit"];
      const isAllFieldsFilled = requiredFields.every(field => !!formData[field]);
    
      if (isAllFieldsFilled) {
        onSave(formData); 
        onClose(); 
      } else {
        alert('Please fill in all required fields.');
      }
  };

  return (
    <div className="corporate-info-form">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Business Description{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            multiline
            rows={4}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.businessDescription}
            onChange={(e) =>
              handleChange({
                name: "businessDescription",
                value: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Corporate Philosophy
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.corporatePhilosophy}
            onChange={(e) =>
              handleChange({
                name: "corporatePhilosophy",
                value: e.target.value,
              })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs={4} md={4}>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Commpany Name
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.companyName}
            onChange={(e) =>
              handleChange({
                name: "companyName",
                value: e.target.value,
              })
            }
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Phone Number
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            type="Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              handleChange({
                name: "phoneNumber",
                value: e.target.value,
              })
            }
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Working Hourse{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.workingHours}
            onChange={(e) =>
              handleChange({
                name: "workingHours",
                value: e.target.value,
              })
            }
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Representative{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.representative}
            onChange={(e) =>
              handleChange({
                name: "representative",
                value: e.target.value,
              })
            }
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Sales Revenue{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.salesRevenue}
            onChange={(e) =>
              handleChange({
                name: "salesRevenue",
                value: e.target.value,
              })
            }
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Stock
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined" value={formData.stock}
            onChange={(e) =>
              handleChange({
                name: "stock",
                value: e.target.value,
              })
            } />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Facebook Link
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined"  value={formData.facebookLink}
            onChange={(e) =>
              handleChange({
                name: "facebookLink",
                value: e.target.value,
              })
            }/>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Industry
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined"  value={formData.industry}
            onChange={(e) =>
              handleChange({
                name: "industry",
                value: e.target.value,
              })
            }/>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Location{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.location}
            onChange={(e) =>
              handleChange({
                name: "location",
                value: e.target.value,
              })}
            
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Establishment Date{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            type="date"
            
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"  value={formData.establishmentDate}
            onChange={(e) =>
              handleChange({
                name: "establishmentDate",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Branch{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.branch}
            onChange={(e) =>
              handleChange({
                name: "branch",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Operation Profit{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.operationProfit}
            onChange={(e) =>
              handleChange({
                name: "operationProfit",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            LinkedIn Link
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined"  value={formData.linkedinLink}
            onChange={(e) =>
              handleChange({
                name: "linkedinLink",
                value: e.target.value,
              })}/>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Instagram Link
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined"   value={formData.instagramLink}
            onChange={(e) =>
              handleChange({
                name: "instagramLink",
                value: e.target.value,
              })}/>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Mail ID{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            type="Emial"
            value={formData.mailId}
            onChange={(e) =>
              handleChange({
                name: "mailId",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Website
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined" 
           value={formData.website}
           onChange={(e) =>
             handleChange({
               name: "website",
               value: e.target.value,
             })}/>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Initial Capital{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.initialCapital}
            onChange={(e) =>
              handleChange({
                name: "initialCapital",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Number of Employees{" "}
            <Flare fontSize="sx" style={{ marginRight: "4px", color: "red" }} />
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={formData.numberOfEmployees}
            onChange={(e) =>
              handleChange({
                name: "numberOfEmployees",
                value: e.target.value,
              })}
          />
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Average Age Of Employees
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined" 
           value={formData.averageAgeOfEmployees}
           onChange={(e) =>
             handleChange({
               name: "averageAgeOfEmployees",
               value: e.target.value,
             })}/>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Twitter Link
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined" 
           value={formData.twitterLink}
           onChange={(e) =>
             handleChange({
               name: "twitterLink",
               value: e.target.value,
             })}/>
          <Typography style={{ fontSize: "15px", color: "gray" }}>
            Youtube Link
          </Typography>
          <TextField fullWidth id="outlined-basic" variant="outlined" 
           value={formData.youtubeLink}
           onChange={(e) =>
             handleChange({
               name: "youtubeLink",
               value: e.target.value,
             })}/>
        </Grid>
      </Grid>

   
     <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.foreignOwned}
              onChange={handleChange}
              name="foreignOwned"
            />
          }
          label="Foreign Owned"
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </div>
  );
};

export default CorporateInfoForm;
