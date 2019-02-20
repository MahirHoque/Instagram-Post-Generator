import React from "react";
import ReactDOM from "react-dom";
import Template from "./Template";
import "./styles.css";
import ControlGroup from "./ControlGroup";
import $ from "jquery";

class App extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".viewFull").on("click", function() {
        $(".fullSizeViewer")
          .children()
          .remove();
        $(".fullSizeViewer").addClass("active");
        $(this)
          .prev()
          .clone()
          .css("transform", "scale(1.9)")
          .appendTo(".fullSizeViewer");
      });
      $(".fullSizeViewer").on("click", function() {
        $(".fullSizeViewer")
          .children()
          .remove();
        $(".fullSizeViewer").removeClass("active");
      });
    });
  }
  render() {
    return (
      <div className="App">
        <ControlGroup />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
