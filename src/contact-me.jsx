import './assets/css/contact-me.css';

function ContactMe() {
    return(
        <section className="contact-me" id="contact-me">
            <div className="banner" data-aos="slide-left">
                <h2><span className="hash">#</span>Contact me</h2>
                <div className="line"></div>
            </div>
            <div className="contact-content" data-aos="fade-up">
                <div className='contact-left'>
                    <p>Feel free to contact me for any inquiries or collaboration opportunities. I'm always open to new projects and challenges.</p>
                </div>
                <div className='contact-right'>
                    <form>
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Email' required />
                        <textarea placeholder='Message' required></textarea>
                        <button type='submit'>Send message</button>
                    </form>                    
                </div>
            </div>
        </section>
    );
}

export default ContactMe;