import Navigation from "../../components/navigation";
import "./style.css";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div>
        <div id="contact-container">
          <div className="social-networks">
            <h2>Redes Sociais</h2>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/vihugocosta/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/vihugocosta" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="mailto:victorhugocosta02@gmail.com" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i> E-mail
              </a>
            </div>
          </div>

          <form id="contact-form">
          <h1>Entre em Contato</h1>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
