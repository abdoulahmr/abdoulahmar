import './assets/css/quote.css';

function Quote(){
    return (
        <section className="quote">
            <div class="quote-container">
                <div class="quote-box">
                    <span class="quote-mark start">&ldquo;</span>
                    <p class="quote-text">With great power comes great electricity bill</p>
                    <span class="quote-mark end">&rdquo;</span>
                </div>
                <div class="author-box">
                    <p class="author">- Dr. Who</p>
                </div>
            </div>
        </section>
    );
}

export default Quote;