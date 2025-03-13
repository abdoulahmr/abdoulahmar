import "./assets/css/skills.css";

function Skills() {
    return(
        <section className="skills">
            <div className="banner">
                <h2><span className="hash">#</span>Skills</h2>
                <div className="line"></div>
            </div>
            <div className="skills-container">
                <div className="left">
                    <img src="/img/dots.png" alt="dots" className="skills-dot1"/>
                    <div className="skills-squar1"></div>
                    <img src="/img/overlayer.png" alt="overlayer" className="skills-overlayer"/>
                    <img src="/img/dots.png" alt="dots" className="skills-dot2"/>
                    <div className="skills-squar2"></div>
                </div>
                <div className="right">
                    <div className="skill-continer">
                        <div className="skill-banner">
                            <h2>Languages</h2>
                        </div>
                        <hr></hr>
                        <div className="skill-content">
                            <ul>
                                <li>C/C++</li>
                                <li>Python</li>
                                <li>Dart</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-continer">
                        <div className="skill-banner">
                            <h2>DataBases</h2>
                        </div>
                        <hr></hr>
                        <div className="skill-content">
                            <ul>
                                <li>MySql</li>
                                <li>SqlAlchemy</li>
                                <li>Sqlite</li>
                                <li>PostgreSql</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>Micosoft Access</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-continer">
                        <div className="skill-banner">
                            <h2>Framworks</h2>
                        </div>
                        <hr></hr>
                        <div className="skill-content">
                            <ul>
                                <li>Flutter</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-continer">
                        <div className="skill-banner">
                            <h2>Tools</h2>
                        </div>
                        <hr></hr>
                        <div className="skill-content">
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS Code</li>
                                <li>Android Studio</li>
                                <li>PyCharm</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;