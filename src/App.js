import "./App.css";
import Appbody from "./Appbody";
import { FaHeart, FaProjectDiagram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import app_logo from "./app_logo.png";
import { Doughnut } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import Line_chart from "./line_chart.tsx";

const App = () => {

  return (
    <div className="App">
      <div className="main">
        <div className="flex_container">
          <div className="glass">
            <div className="side_nav">
              <div className="side_nav_header">
                <div className="side_nav_header_content">
                  <div className="side_nav_header_content_logo">
                    <img
                      src={app_logo}
                      alt="Image not loading..."
                      id="app_logo"
                    />
                  </div>
                  <div className="side_nav_header_content_name">
                    <h3>Subhra</h3>
                  </div>
                </div>
              </div>
              <div className="side_nav_list">
                <div className="side_nav_list_content">
                  <div className="side_nav_list_content_item">
                    <div className="side_nav_list_content_item_icon">
                      <FaProjectDiagram />
                    </div>
                    <div className="side_nav_list_content_item_text">
                      <h5>Dashboard</h5>
                    </div>
                  </div>
                  <div className="side_nav_list_content_item">
                    <div className="side_nav_list_content_item_icon">
                      <GrProjects />
                    </div>
                    <div className="side_nav_list_content_item_text">
                      <h5>Project</h5>
                    </div>
                  </div>
                  <div className="side_nav_list_content_item">
                    <div className="side_nav_list_content_item_icon">
                      <FaHeart />
                    </div>
                    <div className="side_nav_list_content_item_text">
                      <h5>Calendar</h5>
                    </div>
                  </div>
                  <div className="side_nav_list_content_item">
                    <div className="side_nav_list_content_item_icon">
                      <FaHeart />
                    </div>
                    <div className="side_nav_list_content_item_text">
                      <h5>Logout</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="b">
              <div className="c">
                <h1 className="logo">
                  <a href="#">c</a>
                </h1>
              </div>
              <div className="d">
                <div className="e">
                  <div className="g">
                    <div className="j">
                      <h1 className="logo">
                        <a href="#">j</a>
                      </h1>
                    </div>
                    <div className="k">
                      <h1 className="logo">
                        <a href="#">k</a>
                      </h1>
                    </div>
                  </div>
                  <div className="h">
                    <Line_chart/>
                  </div>
                  <div className="i">
                    <h1 className="logo">
                      <a href="#">i </a>
                    </h1>
                  </div>
                </div>
                <div className="f">
                  <div className="l">
                    <h1 className="logo">
                      <a href="#">l</a>
                    </h1>
                  </div>
                  <div className="m">
                    <h1 className="logo">
                      <a href="#">m</a>
                    </h1>
                  </div>
                  <div className="n">
                    <h1 className="logo">
                      <a href="#">n</a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
