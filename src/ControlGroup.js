import React from "react";
import Template from "./Template";
import GraphicsArray from "./GraphicsArray";
import FullSizeViewer from "./FullSizeViewer";

class ControlGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: "March Break Campus Visit Day",
      subheading: "Algonquin College",
      graphic: "https://www.ucalgary.ca/brand/system/files/uc-vert-rgb-sml.jpg"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const templateComponents = GraphicsArray.map(template => (
      <Template
        key={template.id}
        heading={this.state.heading}
        subheading={this.state.subheading}
        graphic={template.imageURL}
        basetemplate={template.basetemplate}
      />
    ));

    return (
      <div className="controlGroup">
        <div className="controllers">
          <h1>Insert text into these fields to generate templates live</h1>
          <div className="inputItemContainer">
            <label>Heading</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="heading"
              placeholder="March Break Campus Visit Day"
            />
          </div>
          <div className="inputItemContainer">
            <label>Subheading</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="subheading"
              placeholder="Algonquin College"
            />
          </div>
        </div>
        <div className="templatesGrid">{templateComponents}</div>
        <div className="fullSizeViewerContainer">
          <div className="fullSizeViewer" />
        </div>
      </div>
    );
  }
}

export default ControlGroup;
