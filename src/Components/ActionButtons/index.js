import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faParagraph,
  faUnderline,
  faItalic,
  faHeading,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faLink,
  faList,
  faListNumeric,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

function ActionButtons(props) {
  const { changeAlign, changeFamily } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box borderLeft="1px solid gray" paddingLeft={2}>
      {actionData.map((item, index) => (
        <button
          key={index}
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand(item.action, false);
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </button>
      ))}

      {headingsData.map((item, index) => (
        <button
          key={item.name}
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand(item.action, false, item.arg); // Sends the command to the browser
          }}
        >
          <FontAwesomeIcon icon={faHeading} />
          <span
            style={{ fontWeight: "500", fontSize: "12px", marginLeft: "2px" }}
          >
            {index + 1}
          </span>
        </button>
      ))}

      <Box
        display="inline"
        borderLeft="1px solid gray"
        paddingLeft={2}
        paddingRight={2}
        className="align-box"
      >
        {alignData.map((item, index) => (
          <button
            key={index}
            className="actionBtn"
            onClick={(e) => changeAlign(e, item)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </Box>

      <Box
        display="inline"
        borderLeft="1px solid gray"
        paddingLeft={2}
        paddingRight={2}
      >
        <button className="font-family-btn" onClick={handleClick}>
          Font family
        </button>
      </Box>

      <Box
        display="inline"
        borderLeft="1px solid gray"
        paddingLeft={2}
        paddingRight={2}
      >
        <button
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("createLink", false, " ");
          }}
        >
          <FontAwesomeIcon icon={faLink} />
        </button>

        <button
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("insertUnorderedList", false);
          }}
        >
          <FontAwesomeIcon icon={faList} />
        </button>

        <button
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("insertOrderedList", false);
          }}
        >
          <FontAwesomeIcon icon={faListNumeric} />
        </button>
        <button
          className="actionBtn"
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("insertImage", false, " ");
          }}
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {fontFamilyData.map((item) => (
          <MenuItem key={item.name}>
            <button
              className={`heading-btn ${item.family}`}
              onClick={(e) => changeFamily(e, item)}
            >
              {item.name}
            </button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

const actionData = [
  {
    icon: faBold,
    action: "bold",
  },
  {
    icon: faUnderline,
    action: "underline",
  },
  {
    icon: faItalic,
    action: "italic",
  },
  {
    icon: faParagraph,
    action: "insertParagraph",
  },
];

const headingsData = [
  {
    name: "Heading 1",
    action: "formatBlock",
    arg: "h1",
  },
  {
    name: "Heading 2",
    action: "formatBlock",
    arg: "h2",
  },
  {
    name: "Heading 3",
    action: "formatBlock",
    arg: "h3",
  },
];

const alignData = [
  {
    icon: faAlignLeft,
    class: "text-left",
  },
  {
    icon: faAlignRight,
    class: "text-right",
  },
  {
    icon: faAlignCenter,
    class: "text-center",
  },
];

const fontFamilyData = [
  {
    name: "Roboto",
    family: "roboto",
  },
  {
    name: "Monospace",
    family: "monospace",
  },
  {
    name: "Segoe",
    family: "segoe",
  },
  {
    name: "Times new roman",
    family: "times-roman",
  },
  {
    name: "Lobster",
    family: "lobster",
  },
  {
    name: "Courier",
    family: "courier",
  },
  {
    name: "Haettenschweiler",
    family: "haettenschweiler",
  },
];

export default ActionButtons;
