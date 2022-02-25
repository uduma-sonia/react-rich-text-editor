import React from "react";
import ToolBar from "../ToolBar";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: `<h3>Start Editing</h3>`,
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

  render() {
    return (
      <div>
        <ToolBar />

        <div className="text-area-container">
          <ContentEditable
            className="editable"
            tagName="pre"
            onChange={this.handleInputChange}
            html={this.state.texts} // innerHTML of the editable div
            onBlur={this.sanitizeTexts}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
