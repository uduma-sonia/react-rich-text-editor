import React from "react";
import ActionButtons from "../ActionButtons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ToolBar(props) {
  const { changeClass, changeFamily } = props;

  return (
    <Box borderTop="1px solid #d1dede" borderBottom="1px solid #d1dede">
      <Stack
        direction="row"
        alignItems="center"
        height="60px"
        backgroundColor="#e6f0f0"
      >
        <Typography width="120px" color="#525454" textAlign="center">
          Tool bar
        </Typography>

        <Box>
          <Box>
            <ActionButtons
              changeClass={changeClass}
              changeFamily={changeFamily}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default ToolBar;
