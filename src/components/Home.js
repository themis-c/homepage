import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import resumeImage from "../images/resume-image.webp";
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}></Grid>
        <Grid
          size={8}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90vh" }}
        >
          <Avatar src={resumeImage} alt="TC" sx={{ width: 600, height: 600 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
