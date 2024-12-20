function HotelViz() {
  const images = import.meta.glob('./images/*.{png,jpg,jpeg,PNG,JPEG}', {eager: true, query: '?url', import: 'default'})
  return (
    <div>
      <h1>HotelViz: Hotel Booking</h1>
      <div id="row4" className="row e2">
        <div>
          <img src={"." + images['./images/HotelViz1.png']}></img>
          <p>Front Page</p>
        </div>
        <div>
          <img src={"." + images['./images/HotelViz2.png']}></img>
          <p>Hotels Page</p>
        </div>
      </div>
      <h2>Description</h2>
      <p style={{ maxWidth: "1000px" }}>
        This is a Web Application for my final project in Software Development Practice II and Software Engineering
        Our product is a Hotel Booking Website where the user can use to create and manage their bookings.
        <br></br>
      </p>
      <h2>Our Work</h2>
      <p>
        <ol>
          <li>Designed and implemented the frontend architecture of the hotel booking website.</li>
          <li>Developed a robust backend system for the backend of the website.</li>
          <li>Integrated MongoDB for scalable data storage and management of booking information.</li>
          <li>Conducted automatic testing using Jest and Cypress to ensure functionality across the application.</li>
          <li>Containerized the application with Docker, enabling streamlined development workflows.</li>
          <li>Deploy the Hotel Booking website on Vercel</li>
        </ol>
      </p>
      <h2>Result</h2>
      <div id="row2" className="row e2">
        <div>
          <img src={"." + images['./images/HotelViz3.png']}></img>
          <p>Create Booking Page</p>
        </div>
        <div>
          <img src={"." + images['./images/HotelViz4.png']}></img>
          <p>Manage Booking Page</p>
        </div>
      </div>
      <br></br>
      <div id="row3" className="row e2">
        <div>
          <img src={"." + images['./images/HotelViz5.png']}></img>
          <p>Manage Hotel Page (For Admin)</p>
        </div>
      </div>
      <br></br>
      Repository:{" "}
      <a href="https://github.com/2110503TACEDT66/cedt-se-project-hotelviz">
      https://github.com/2110503TACEDT66/cedt-se-project-hotelviz
      </a>
    </div>
  );
}

export default HotelViz;
