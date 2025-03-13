import './assets/css/about-me.css';

function AboutMe() {
    return(
        <section className='about-me'>
            <div className="banner">
                <h2><span className="hash">#</span>About me</h2>
                <div className="line"></div>
            </div>
            <div className="content">
                <p>My name is <spann className="hash">Lahmar Abdessalem</spann>. I'm a passionate developer with experience in various fields such as web development, mobile development, UI/UX design, and game development. Currently, I'm focused on artificial intelligence and always excited to learn new technologies and work on challenging projects.</p>
                <a href='#'>See my resume</a>
            </div>
        </section>
    );
}

export default AboutMe;