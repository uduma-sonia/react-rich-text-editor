import React from "react";
import ActionButtons from "../ActionButtons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ToolBar(props) {
  const { changeAlign, changeFamily } = props;

  return (
    <Box
      borderTop="1px solid #d1dede"
      borderBottom="1px solid #d1dede"
      className="toolbar"
    >
      <Stack
        direction="row"
        alignItems="center"
        height="60px"
        backgroundColor="#e6f0f0"
        className="toolbar-inner"
      >
        <Typography
          width="120px"
          color="#525454"
          textAlign="center"
          className="tool-text"
        >
          Tool bar
        </Typography>

        <Box className="action-btn-container">
          <ActionButtons
            changeAlign={changeAlign}
            changeFamily={changeFamily}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default ToolBar;
