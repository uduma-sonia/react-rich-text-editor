import React from "react";
import ToolBar from "../ToolBar";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: `<p>Start Editing</p>`,
      alignClass: "text-left",
    };
  }

  handleInputChange = (e) => {
    this.setState({ texts: e.target.value });
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
    ],
    allowedAttributes: { a: ["href"] },
  };

  sanitizeTexts = () => {
    this.setState({ texts: sanitizeHtml(this.state.texts, this.specifyTags) });
  };

  handleChangeClass = (e, item) => {
    this.setState({ alignClass: item.class });
  };

  render() {
    return (
      <div>
        <ToolBar changeClass={this.handleChangeClass} />

        <div className={`text-area-container ${this.state.alignClass}`}>
          <ContentEditable
            className="editable"
            tagName="pre"
            onChange={this.handleInputChange}
            html={this.state.texts}
            onBlur={this.sanitizeTexts}
          />
        </div>
      </div>
    );
  }
}

export default Editor;

// Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
