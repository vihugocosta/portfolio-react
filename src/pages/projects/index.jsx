import Navigation from "../../components/navigation";
import "./style.css";

export default function Projects() {
  return (
    <>
      <Navigation />
      <div id="projects-container">
        <h1>Meus Projetos</h1>
        <p>
          Confira alguns dos meus projetos:
        </p>
        <div id="projects-list">
          <div className="project-item">
            <h2>Formulário ViaCEP</h2>
            <img src="https://raw.githubusercontent.com/vihugocosta/portfolio-react/refs/heads/main/src/assets/form.png" alt="Formulário ViaCEP" />
            <p>Formulário de cadastro de usuário com validação de CEP via API do ViaCEP.</p>
            <a href="https://github.com/vihugocosta/viacep-form-example">Ver no GitHub</a>
            <a href="https://viacep-form-victor.netlify.app/">Visitar projeto</a>
          </div>
          <div className="project-item">
            <h2>Portfólio 1.0</h2>
            <img src="https://raw.githubusercontent.com/vihugocosta/portfolio-react/refs/heads/main/src/assets/port.png" alt="Portfólio 1.0" />
            <p>Meu primeiro portfólio criado com HTML e CSS.</p>
            <a href="https://github.com/vihugocosta/portfolio-dev">Ver no GitHub</a>
            <a href="https://portfolio-dev-victor.netlify.app/">Visitar projeto</a>
          </div>
          <div className="project-item">
            E mais por vir!
            <em>Stay tuned!</em>
          </div>
        </div>
      </div>
    </>
  );
}
