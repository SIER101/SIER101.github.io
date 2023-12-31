import bugBuzzleHome from "./images/bugBuzzleHome.png";
import gameplay from "./images/gameplay.png";
import massiveLogicGate from "./images/massiveLogicGate.jpg";
import figma from "./images/figma.png";
import scoreboard from "./images/scoreboard.png";
import mobileVersion from "./images/mobileVersion.png";

function CEDT_FP() {
  return (
    <div>
      <h1>CEDT Web Project</h1>
      <div className="row e2">
        <div>
          <img src={"." + bugBuzzleHome}></img>
        </div>
        <div>
          <img src={"." + gameplay}></img>
        </div>
      </div>
      <h2>Description</h2>
      <p>
        This is a Single-page Web Application for my final project in
        Introduction to CEDT course<br></br>
        The goal of this assignment is for us to learn how to create and host
        website.<br></br>
      </p>
      <h2>Our Work</h2>
      <div className="row e2">
        <div>
          <img src={"." + massiveLogicGate}></img>
          <p>(I got mental trauma just from seeing this image)</p>
        </div>
        <div>
          <img src={"." + figma}></img>
          <p>We use Figma to design our pages</p>
        </div>
      </div>
      <p>
        With our brilliance ideas combined, we come up with a kahoot-like kind
        of game with a parody theme of our previous course... Digital Computer
        Logic
        <br></br>
        <br></br>
        Our web server was initially designed to run on Amazon EC2 with two
        ports, front and back (since it is an assignment condition).
        <br></br>
        But now that we don't have access to EC2 anymore since the assignment is
        over, we migrate the project to our group Github Page
        <br></br>
        and have a live website there (no server btw as well as the scoreboard
        since Github Page only allowed static site T_T)
        <br></br>
      </p>
      <div className="row e2">
        <div>
          <img src={"." + mobileVersion}></img>
          <p>We also design for the mobile version;</p>
        </div>
        <div>
          <img src={"." + scoreboard}></img>
          <p>The old Scoreboard (RIP)</p>
        </div>
      </div>
      <br></br>Live Preview:{" "}
      <a href="https://cedt-final-project-group.github.io/CEDT_Final_Project/">
        https://cedt-final-project-group.github.io/CEDT_Final_Project/
      </a>
      <br></br>Repository:{" "}
      <a href="https://github.com/CEDT-Final-Project-Group/CEDT_Final_Project">
        https://github.com/CEDT-Final-Project-Group/CEDT_Final_Project
      </a>
    </div>
  );
}

export default CEDT_FP;
