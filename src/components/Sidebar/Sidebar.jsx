import React from 'react';
import { Logout, BusinessCenter, Dashboard } from '@mui/icons-material';
import './Sidebar.css'; 
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText primary="Manage Subscription" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText primary="Young Brain" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText primary="Mild Career" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText primary="Vendor" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <BusinessCenter />
          </ListItemIcon>
          <ListItemText primary="Consultant" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{color:'white'}}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
