const models = [
  ['Sofia', 'Reykjavík', 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=88'],
  ['Mia', 'Stockholm', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=88'],
  ['Elena', 'Copenhagen', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=88'],
  ['Nora', 'Oslo', 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=88'],
  ['Amelia', 'Reykjavík', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=88'],
  ['Lina', 'Helsinki', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=88']
];

function Header() {
  return <header className="header">
    <a className="logo" href="/"><img src="/logo-white.png" alt="Iceland Models" /></a>
    <nav>
      <a href="/">Home</a><a href="#models">Our Models</a><a href="/book-online">Book Online</a><a href="/blog">Blog</a><a href="#about">About</a><a href="#contact">Contact</a>
    </nav>
    <a className="book-mini" href="/book-online">BOOK ONLINE</a>
  </header>;
}

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <img className="hero-photo" src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90" alt="Iceland Models" />
        <div className="hero-shade" />
        <div className="hero-center">
          <p className="eyebrow">WELCOME TO</p>
          <h1>ICELAND<br/><span>MODELS</span></h1>
          <p>Model representation · Editorial · Fashion · Commercial</p>
          <a className="hero-button" href="#models">DISCOVER OUR MODELS</a>
        </div>
      </section>

      <section id="models" className="models section-white">
        <div className="section-title"><p className="eyebrow black">OUR MODELS</p><h2>Meet our <i>talent</i></h2><p>Discover a selection of the faces represented by Iceland Models.</p></div>
        <div className="model-grid">
          {models.map(([name, city, img]) => <a className="model-card" href="#contact" key={name}>
            <div className="model-photo"><img src={img} alt={name}/><div className="view">VIEW PROFILE +</div></div>
            <div className="model-caption"><strong>{name}</strong><span>{city}</span></div>
          </a>)}
        </div>
        <a className="outline-button" href="#contact">VIEW ALL MODELS</a>
      </section>

      <section id="about" className="about">
        <div className="about-photo"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=88" alt="Fashion editorial"/></div>
        <div className="about-copy"><p className="eyebrow">ALL ABOUT US</p><h2>Independent. <i>Elegant.</i><br/>International.</h2><p>At Iceland Models, we represent distinctive talent and connect models with photographers, fashion brands, productions and creative teams. Our focus is professional representation, clear communication and a personal approach.</p><a className="solid-button" href="#contact">READ MORE</a></div>
      </section>

      <section className="quote"><span className="quote-mark">“</span><blockquote>Be confident. Be authentic.<br/><i>Be unforgettable.</i></blockquote><p>— ICELAND MODELS</p></section>

      <section id="contact" className="contact section-white">
        <div className="contact-copy"><p className="eyebrow black">GET IN TOUCH</p><h2>Let's work <i>together.</i></h2><p>For model bookings, castings, collaborations or general enquiries, send us your details and our team will get back to you.</p><div className="contact-details"><a href="mailto:hello@icelandmodels.com">hello@icelandmodels.com</a><a href="tel:+3540000000">+354 000 0000</a><span>Reykjavík · Iceland</span></div></div>
        <form className="contact-form" action="mailto:hello@icelandmodels.com" method="post" encType="text/plain"><input name="Name" placeholder="Name"/><input name="Email" type="email" placeholder="Email"/><input name="Phone" placeholder="Phone"/><input name="Subject" placeholder="Subject"/><textarea name="Message" placeholder="Message" rows="5"/><button type="submit">SUBMIT</button></form>
      </section>
    </main>
    <footer className="footer"><img src="/logo-white.png" alt="Iceland Models"/><div><a href="/">Home</a><a href="#models">Models</a><a href="/book-online">Book Online</a><a href="/blog">Blog</a><a href="#contact">Contact</a></div><p>© 2026 Iceland Models. All rights reserved.</p></footer>
  </>;
}
