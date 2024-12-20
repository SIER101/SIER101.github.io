import React from "react";
import Collapsible from 'react-collapsible';

function CU_GCE() {
  const images = import.meta.glob('./images/*.{png,jpg,jpeg,PNG,JPEG}', {eager: true, query: '?url', import: 'default'})
  return (
    <div>
      <h1>Chulalongkorn University Global Collaboration Explorer</h1>
      <div id="row1" className="row e2">
        <div>
          <img src={"." + images['./images/cu_grc1.png']}></img>
        </div>
        <div>
          <img src={"." + images['./images/workflow.png']}></img>
        </div>
      </div>
      <h2>Description</h2>
      <p style={{ maxWidth: "1000px" }}>
        This is my project for in Introduction to Data Science and Data Engineering
        Our project is a platfrom that allows users to search up Scopus for research publications related to the user's keyword using
        Machine Learning and visualized all partner countries and affiliations that collaboration with such topic.
        <br></br>
      </p>
      <h2>Our Work</h2>
      <ol>
        <li>Designed a data scraping pipeline to extract publication and affiliation data from Scopus.</li>
        <li>Processed and loaded the scraped data into PySpark.</li>
        <li>Embedded paper titles and abstracts into vectors for text clustering using K-Means and context-based search using cosine similarity.</li>
        <li>Visualized geospatial map of global research collaborations to display countries associated with papers relevant to the user’s search.</li>
        <li>Deployed the Explorer platform on Hugging Face Spaces</li>
      </ol>
      <Collapsible trigger={React.createElement("h4", null, "Visual Explanation")}>
        <br></br>
        <div id="row2" className="row e2">
          <div>
            <img src={"." + images['./images/textEmbedding.png']}></img>
          </div>
          <div>
            <img src={"." + images['./images/textClustering.png']}></img>
          </div>
        </div>
        <br></br>
        <div id="row3" className="row e2">
          <div>
            <img src={"." + images['./images/contextSearch.png']}></img>
          </div>
          <div>
            <img src={"." + images['./images/schemas.png']}></img>
          </div>
        </div>
      </Collapsible>
      <h2>Result</h2>
      <br></br>
      <div id="row4" className="row e2">
        <div>
          <img src={"." + images['./images/cu_grc2.png']}></img>
          <p>Search by field of study</p>
        </div>
        <div>
          <img src={"." + images['./images/cu_grc3.png']}></img>
          <p>Search by field of study and country</p>
        </div>
      </div>
      <div id="row4" className="row e2">
        <div>
          <img src={"." + images['./images/cu_grc4.png']}></img>
          <p>Search by keyword</p>
        </div>
        <div>
          <img src={"." + images['./images/cu_grc5.png']}></img>
          <p>Search by keyword and country</p>
        </div>
      </div>
      <br></br>
      <div id="row5" className="row e1">
        <div>
          <h3>Presentation Video</h3>
          <iframe
            width="700"
            src="https://www.youtube.com/embed/uILtEA03rBw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: 0, maxWidth: "100%",alignSelf: "center",aspectRatio: "16/9" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default CU_GCE;
