import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import './detailsStyles.css'; // Import the CSS file

const DetailsPage = () => {
  // Dummy hospital data
  const hospital = {
    name: 'Hospital A',
    email: 'hospital@example.com',
    documents: ['Document 1', 'Document 2', 'Document 3'],
  };

  return (
    <Paper className="paper">
      <Typography variant="h5" className="title">
        Hospital Details
      </Typography>
      <List>
        <ListItem className="listItem">
          <ListItemText primary="Hospital Name" secondary={hospital.name} />
        </ListItem>
        <ListItem className="listItem">
          <ListItemText primary="Hospital Email" secondary={hospital.email} />
        </ListItem>
        <ListItem className="listItem">
          <ListItemText primary="Documents Uploaded">
            <List component="div" disablePadding>
              {hospital.documents.map((document, index) => (
                <ListItem key={index} className="listItem">
                  <ListItemText primary={document} />
                </ListItem>
              ))}
            </List>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

export default DetailsPage;
