import React from "react";
import Box from "@mui/material/Box";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faUnderline,
  faItalic,
  faHeading,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

function ActionButton(props) {
  const { changeClass } = props;
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box borderLeft="1px solid gray" paddingLeft={2}>
      {actionData.map((item) => (
        <button
          key={item.icon}
          className="actionBtn"
          onMouseDown={(evt) => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand(item.action, false); // Send the command to the browser
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </button>
      ))}

      {headingsData.map((item, index) => (
        <button
          key={index}
          className="actionBtn"
          onMouseDown={(evt) => {
            evt.preventDefault();
            document.execCommand(item.action, false, item.arg); // Send the command to the browser
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
      >
        {alignData.map((item) => (
          <button
            key={item.icon}
            className="actionBtn"
            onClick={(e) => changeClass(e, item)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </Box>
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

export default ActionButton;
