import React from "react";
import ActionButton from "../Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ToolBar(props) {
  const { changeClass } = props;

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

        <Box flexGrow="1">
          <Box>
            <ActionButton changeClass={changeClass} />
          </Box>
        </Box>

        <Box width="120px">
          <FontAwesomeIcon icon={faChevronDown} />
        </Box>
      </Stack>
    </Box>
  );
}

export default ToolBar;
