import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import resumeImage from "../images/resume-image.webp";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Typography from "@mui/material/Typography";
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column" // Forces vertical stacking
          justifyContent="center"
          spacing={2} // Adds spacing between rows
          sx={{ marginLeft: "auto" }} // Pushes this container to the right
        >
          {/* Phone */}
          <Grid item container alignItems="center" spacing={1}>
            <Grid item>
              <PhoneIphoneRoundedIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">0491/909015</Typography>
            </Grid>
          </Grid>

          {/* Address */}
          <Grid item container alignItems="center" spacing={1}>
            <Grid item>
              <AlternateEmailOutlinedIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                themis.cocomazzi@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
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
