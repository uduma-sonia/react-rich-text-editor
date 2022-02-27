import React from "react";
import ToolBar from "../ToolBar";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: `<p></p>`,
      alignClass: "text-left",
      fontFamily: "roboto",
    };
  }

  // update local storage while user types
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ texts: value });
    localStorage.setItem("text_edits", JSON.stringify(value));
  };

  specifyTags = {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "li",
      "hr",
    ],
    allowedAttributes: {
      a: ["href"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
    },
  };

  sanitizeTexts = () => {
    this.setState({ texts: sanitizeHtml(this.state.texts, this.specifyTags) });
  };

  // change text alignment
  handleChangeAlign = (e, item) => {
    const align = item.class;
    this.setState({ alignClass: align });
    localStorage.setItem("text_alignment", JSON.stringify(align));
  };

  // change font family
  handleChangeFamily = (e, item) => {
    const family = item.family;
    this.setState({ fontFamily: family });
    localStorage.setItem("text_family", JSON.stringify(family));
  };

  // update state to local storage values when component mounts
  updateStateOnload = () => {
    let localEdit = JSON.parse(localStorage.getItem("text_edits"));
    let localAlignment = JSON.parse(localStorage.getItem("text_alignment"));
    let localFamily = JSON.parse(localStorage.getItem("text_family"));

    this.setState({ alignClass: localAlignment });
    this.setState({ fontFamily: localFamily });

    if (localEdit) {
      this.setState({ texts: localEdit });
    } else {
      this.setState({ texts: `<p>Start Editing...</p>` });
    }
  };

  componentDidMount() {
    this.updateStateOnload();
  }

  render() {
    return (
      <div className="editor-container">
        <ToolBar
          changeAlign={this.handleChangeAlign}
          changeFamily={this.handleChangeFamily}
        />

        <div className="editor-container-inner">
          <div
            className={`text-area-container ${this.state.alignClass} ${this.state.fontFamily}`}
          >
            <ContentEditable
              className="editable"
              onChange={this.handleInputChange}
              html={this.state.texts}
              onBlur={this.sanitizeTexts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;

// Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
