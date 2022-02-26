import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Navbar() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "12px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: ["Roboto"].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height="70px"
        padding="0px 7px"
      >
        <Typography
          color="#001427"
          fontWeight="500"
          fontSize="28px"
          className="logo"
        >
          Word Editor
        </Typography>

        <Box>
          <BootstrapButton
            variant="contained"
            disableRipple
            className="save-btn"
          >
            SAVE CHANGES
          </BootstrapButton>
        </Box>
      </Stack>

      <Box
        borderTop="1px solid #d1dede"
        backgroundColor="#e6f0f0"
        paddingLeft={4}
        display="flex"
        py="3px"
      >
        <Typography fontSize="16px" color="#525454">
          File
        </Typography>
        <Typography fontSize="16px" color="#525454" mx={3}>
          Edit
        </Typography>
        <Typography fontSize="16px" color="#525454">
          View
        </Typography>
        <Typography fontSize="16px" color="#525454" ml={3}>
          Format
        </Typography>
        <Typography fontSize="16px" color="#525454" ml={3}>
          Help
        </Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
