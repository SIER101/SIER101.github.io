import React from "react";
import Collapsible from 'react-collapsible';

function Achievement() {
    const images = import.meta.glob('./images/*.{png,jpg,jpeg,PNG,JPEG}', {eager: true, query: '?url', import: 'default'})
    return (
        <div>
            <h1>My Achievements</h1>
            <div>Here's all my achievement I've received</div>
            <h2>Achievements within CEDT</h2>
            <ul>
                <li>
                    <p>Subjects that I've scored within top ten</p>
                    <ul>
                        <Collapsible trigger={React.createElement("li", null, "Statistics for Computer Engineering - 1st")}>
                            <br></br>
                            <div className="flex">
                                <div style={{ maxWidth: "1000px"}}>
                                    <img src={"." + images['./images/stats.png']}></img>
                                </div>
                            </div>
                        </Collapsible>
                        <br></br>
                        <Collapsible trigger={React.createElement("li", null, "Discrete Structures - 2nd")}>
                            <br></br>
                            <div className="flex">
                                <div style={{ maxWidth: "1000px"}}>
                                    <img src={"." + images['./images/discrete.jpg']}></img>
                                </div>
                            </div>
                        </Collapsible>
                        <br></br>
                        <Collapsible trigger={React.createElement("li", null, "Programming Methodology I - 10th")}>
                            <br></br>
                            <div className="flex">
                                <div style={{ maxWidth: "1000px"}}>
                                    <img src={"." + images['./images/progMeth.png']}></img>
                                </div>
                            </div>
                        </Collapsible>
                        <br></br>
                    </ul>
                </li>
                <Collapsible trigger={React.createElement("li", null, "Got 1st place for Digital Logic Competition")}>
                    <p>1st place for designing the fastest sorting circuit</p>
                    <div className="flex">
                        <div style={{ maxWidth: "1000px"}}>
                            <img src={"." + images['./images/digSort.png']}></img>
                        </div>
                    </div>
                </Collapsible>
            </ul>
            <h2>Other Achievements</h2>
            <ul>
                <li>
                    <p>IPST<br></br>
                    Qualify in regional-level IPST Mathematics camp (2nd camp) at Sri Ayudhya School in 2017 and 2018.</p>
                    <div className="row e2">
                        <div>
                            <img src={"." + images['./images/ipst2019.jpg']}></img>
                        </div>
                        <div>
                            <img src={"." + images['./images/ipst2018.jpg']}></img>
                        </div>
                    </div>
                </li>
                <li>
                    <p>POSN<br></br>
                    Qualify in regional-level POSN Computer camp (2nd camp) at Mahidol Wittayanusorn School in 2020 and 2021.</p>
                    <div className="row e2">
                        <div>
                            <img src={"." + images['./images/posn2020.jpg']}></img>
                        </div>
                        <div>
                            <img src={"." + images['./images/posn2021.jpg']}></img>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Achievement;