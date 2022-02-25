import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from "react";
// import ReactDOM from "react-dom";
// import ContentEditable from "react-contenteditable";
// import sanitizeHtml from "sanitize-html";

// class MyComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
//       editable: true,
//     };
//   }
// handleChange = (evt) => {
//   this.setState({ html: evt.target.value });
// };

// sanitizeConf = {
//   allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
//   allowedAttributes: { a: ["href"] },
// };

// sanitize = () => {
//   this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
// };

// toggleEditable = () => {
//   this.setState({ editable: !this.state.editable });
//   };

//   render = () => {
//     return (
//       <div>
//         <h3>editable contents</h3>
//         <ContentEditable
//           className="editable"
//           tagName="pre"
//           html={this.state.html} // innerHTML of the editable div
//           disabled={!this.state.editable} // use true to disable edition
//           onChange={this.handleChange} // handle innerHTML change
//           onBlur={this.sanitize}
//         />
//         <h3>source</h3>
//         {/* <textarea
//           className="editable"
//           value={this.state.html}
//           onChange={this.handleChange}
//           onBlur={this.sanitize}
//         /> */}
//         <h3>actions</h3>
//         <EditButton cmd="italic" />
//         <EditButton cmd="bold" />
//         <EditButton cmd="formatBlock" arg="h1" name="heading" />
//         <EditButton cmd="formatBlock" arg="h2" name="heading2" />
//         <EditButton
//           cmd="createLink"
//           arg="https://github.com/lovasoa/react-contenteditable"
//           name="hyperlink"
//         />
//         <button onClick={this.toggleEditable}>
//           Make {this.state.editable ? "readonly" : "editable"}
//         </button>
//       </div>
//     );
//   };
// }

// function EditButton(props) {
//   return (
//     <button
//       onMouseDown={(evt) => {
//         evt.preventDefault(); // Avoids loosing focus from the editable area
//         document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
//       }}
//     >
//       {props.name || props.cmd}
//     </button>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyComponent />, rootElement);
