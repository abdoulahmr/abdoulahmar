import "./assets/css/home.css";

function Home(){
    return (
        <section className="home">
            <div className="first">
                <div className="first-left">
                    <h1>Abdessalem is a <span className="hash">Software engineer</span> and <span className="hash">Full stack developer</span></h1> 
                    <h3>He crafts responsive websites where technologies meet creativity</h3>
                    <button className="btn">Contact me</button>
                </div>
                <div className="first-right">
                    <img src="/img/pfp.png" alt="Abdessalem" className="pfp"/>
                    <img src="/img/overlayer.png" alt="overlayer" className="overlayer"/>
                    <img src="/img/dots.png" alt="dots" className="dots"/>
                    <div className="current-project">
                        <div className="squar"></div>
                        <h2>Currently working on <span>AI project</span></h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;