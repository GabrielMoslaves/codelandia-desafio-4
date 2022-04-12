import "./styles.css";
import Header from "./header";
import Card from "../../components/card";
import CardNews from "./CardNews";

function Home() {
  return (
    <div>
      <Header />
      <div className="cards-background">
        <div className="cards-wrapper">
          <CardNews
            date="12/04/2022"
            title="Agora é oficial: o Windows 11 está vindo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
          />

          <CardNews
            date="12/04/2022"
            title="Tim Berners-Lee vai leiloar código-fonte da web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
          />
          <CardNews
            date="12/04/2022"
            title="Tem Firefox novo no pedaço e você vai querer migrar"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
          />
          <CardNews
            date="12/04/2022"
            title="John McAfee, criador do antivírus McAfee, morre"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
