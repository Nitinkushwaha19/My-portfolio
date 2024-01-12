import "./Component.css";
import { useState } from "react";
import InfoBox from "./InfoBox/InfoBox";
import Nav from "./Nav/Nav";
import Projects from "./ProjectCard/Projects";
import SideBar from "./SideBar/SideBar";
import HrScrollBar from "./Certificates/HrScrollBar";
import Footer from "./Footer/Footer";
import Summary from "./Summary/Summary";
import Contact from "./Contact/Contact";
import NavBar from "./Navbar/NavBar";
import MenuBar from "./MenuBar/MenuBar";
import NavMenuBar from "./Navbar/NavMenuBar";
import ImageBox from "./ImageBox/ImageBox";

export default function Component() {
  let [showSummary, setShowSummary] = useState(false);
  let [showContact, setShowContact] = useState(false);
  let [showSidebar, setShowSidebar] = useState(false);
  let [navMenuBar, setNavMenuBar] = useState(false);
  let [showImage, setShowImage] = useState(false);

  let summaryBtn = () => {
    setShowSummary(!showSummary);
    setShowContact(false);
  };

  let contactBtn = () => {
    setShowContact(!showContact);
    setShowSummary(false);
    setNavMenuBar(false);
  };

  let projectBtn = () => {
    setShowSummary(false);
    setShowContact(false);
    setNavMenuBar(false);
  };

  let sidebarBtn = () => {
    setShowSidebar(!showSidebar);
  };

  let navMenuBarBtn = () => {
    setNavMenuBar(!navMenuBar);
  };

  let showImageBtn = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <ImageBox showImageBtn={showImageBtn} showImage={showImage} />

      <div
        className="MainBox container-xxl"
        style={{ opacity: showImage ? "0.5" : "1" }}
      >
        <NavBar
          sidebarBtn={sidebarBtn}
          showSidebar={showSidebar}
          navMenuBarBtn={navMenuBarBtn}
          navMenuBar={navMenuBar}
        />

        <div className="component">
          <div
            className="sideBar-content"
            style={{ left: showSidebar ? "0" : "-290px" }}
          >
            <SideBar sidebarBtn={sidebarBtn} showImageBtn={showImageBtn} />
          </div>

          <div
            className=" Info-box "
            style={{ opacity: showSidebar ? "0.3" : "1" }}
          >
            <InfoBox summaryBtn={summaryBtn} />
            <Nav contactBtn={contactBtn} projectBtn={projectBtn} />

            <div
              style={{
                display:
                  showSummary == true || showContact == true ? "none" : "block",
              }}
            >
              <Projects />
              <HrScrollBar />
            </div>

            <Summary showSummary={showSummary} summaryBtn={summaryBtn} />
            <Contact showContact={showContact} />
            <Footer />
          </div>
          <NavMenuBar
            navMenuBar={navMenuBar}
            navMenuBarBtn={navMenuBarBtn}
            contactBtn={contactBtn}
            projectBtn={projectBtn}
          />
          <div className="MenuBar-container">
            <MenuBar contactBtn={contactBtn} projectBtn={projectBtn} />
          </div>
        </div>
      </div>
    </>
  );
}
