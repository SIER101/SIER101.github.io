import awarded from "./images/awarded.jpg";
import groupPicture from "./images/groupPicture.jpg";
import demonstration1 from "./images/demonstration1.png";
import demonstration2 from "./images/demonstration2.png";
import parcel1 from "./images/parcel1.png";
import idea from "./images/idea.jpg";
import parcelNotification from "./images/parcelNotification.png";
import present from "./images/presentation.jpg";

function PS_OCR() {
  return (
    <div>
      <h1>Parcel Sorting OCR</h1>
      <div
        id="row1"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + idea}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + present}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
        </div>
      </div>
      <h2>Description</h2>
      <p style={{ maxWidth: "1000px" }}>
        This is a project for STEM Challenge 2022, which is a problem-solving
        innovation contest in MWIT.
        <br></br>
        The topic of this contest is "Quality of Life in MWIT". Since our school
        is a dormitory and have a very slow method of delivering package.
        <br></br>
        Our team came up with an idea to make a Parcel Identifier. Which will
        scans parcels and identidies the owner of the parcel in order to
        classify them into classes they're in. and makes the method of sorting
        parcels much faster.
        <br></br>
      </p>
      <h2>Our Work</h2>
      <p style={{ maxWidth: "1000px" }}>
        <b>Arduino</b>
        <br></br>
      </p>
      <ul>
        <li>
          Capture image via LiveOV7670 camera module and sent it to host laptop.
        </li>
      </ul>
      <b>Python (my part)</b>
      <ol>
        <li>Extract text from captured image with Google Cloud Vision</li>
        <li>Identify name and provide what classes (M.4/5/6) they're in</li>
        <li>Send notification email to the parcel owner</li>
      </ol>
      <br></br>
      <div
        id="row2"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + parcel1}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            Example photo of parcel info taken by OV7670
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + parcelNotification}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            The receiver of the parcel will be notified by email
          </p>
        </div>
      </div>
      <br></br>
      <div
        id="row3"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + demonstration1}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            Text extracted from parcel photo
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + demonstration2}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            <br></br>
          </p>
        </div>
      </div>
      <h2>Result</h2>
      <p>
        After we finished the prototype and presented our project to everyone
        we've recieved The Best Design Award for our work.
      </p>
      <br></br>
      <div
        id="row4"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + groupPicture}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            This is me and my friends at the booth
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <img
            src={"." + awarded}
            style={{
              height: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          ></img>
          <p style={{ textAlign: "center" }}>
            Here is our group receiving The Best Design Award
          </p>
        </div>
      </div>
      <br></br>
      <div
        id="row5"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "45%",
            justifyContent: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Presentation Video</h3>
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/8OvxkKQ0oQE?si=-2oLXYH1cm1wgrYK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      <br></br>Repository:{" "}
      <a href="https://github.com/KanDokTaThai-New/STEM-Challenge-2022">
        https://github.com/KanDokTaThai-New/STEM-Challenge-2022
      </a>
    </div>
  );
}

export default PS_OCR;
