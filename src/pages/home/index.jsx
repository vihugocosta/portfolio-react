import Navigation from "../../components/navigation";
import "./style.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="home-container">
        <h1>Olá, eu sou o Victor Hugo!</h1>
        <div id="pfp">
            <img id="profile-picture" src="https://avatars.githubusercontent.com/u/196386002?v=4" alt="" />
        </div>
        <p>
        <h4>Estudando Desenvolvimento de Sistemas no Programa Rio Pomba Valley</h4>
        </p>
        <p>Apaixonado por tecnologia e programação desde novo, foco em sempre aprender e evoluir para assim oferecer as melhores soluções para os clientes.</p>
      </div>
    </>
  );
}