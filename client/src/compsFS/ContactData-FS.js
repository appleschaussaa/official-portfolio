
import { Contact } from "./components/index";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const ContactData = () => {
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem("contactData");
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Box>
      <Typography variant="h6">Saved Data:</Typography>
      {savedData ? (
        <>
          <Typography>{`First Name: ${savedData.firstName}`}</Typography>
          <Typography>{`Last Name: ${savedData.lastName}`}</Typography>
          <Typography>{`Feedback: ${savedData.feedback}`}</Typography>
        </>
      ) : (
        <Typography>No data available</Typography>
      )}
    </Box>
  );
};

export default ContactData;