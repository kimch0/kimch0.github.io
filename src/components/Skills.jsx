import { useState } from "react";
import "./Skills.css"

function Skills() {
    const [activeTab, setActiveTab] = useState("winter");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>

            <div className="wrapper" id="skills">
                <h2>What do I offer?</h2>
                <div className="containerSkills">
                    <input
                        type="radio"
                        name="slide"
                        id="c1"
                        checked={activeTab === "winter"}
                        onChange={() => handleTabChange("winter")}
                    />
                    <label htmlFor="c1" className="card">
                        <div className="rowSkill">

                            <div className="description">
                                <h4>BackEnd Development</h4>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        name="slide"
                        id="c2"
                        checked={activeTab === "tech"}
                        onChange={() => handleTabChange("tech")}
                    />
                    <label htmlFor="c2" className="card">
                        <div className="rowSkill">
                            <div className="description">
                                <h4>FrontEnd Development</h4>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        name="slide"
                        id="c3"
                        checked={activeTab === "third"}
                        onChange={() => handleTabChange("third")}
                    />
                    <label htmlFor="c3" className="card">
                        <div className="rowSkill">
                            <div className="description">
                                <h4>Cybersecurity</h4>
                            </div>
                        </div>
                    </label>

                </div>
            </div>
        </>
    );
}

export default Skills

