import { Col, Container, Row, Tab } from "react-bootstrap"
import ProjectCards from "./ProjectCards"
import projImg1 from "../assets/img/CocktailsPage.png"
import projImg2 from "../assets/img/FakeStore.png"
import projImg3 from "../assets/img/ticTac.png"
import projImg4 from "../assets/img/MemoryGame.png"
import "./Projects.css"


function Projects() {

    const projects = [
        {
            title: "Cocktail Recipes App",
            imgUrl: projImg1,
            url: "https://kimch0.github.io/Project-Vue/#/"
        },
        {
            title: "Fake Store",
            imgUrl: projImg2,
            url: "https://kimch0.github.io/React-Fake-Store/"
        },
        {
            title: "Tic-Tac-Toe",
            imgUrl: projImg3,
            url: "https://kimch0.github.io/tic-tac-toe/"
        },
        {
            title: "Memory Game",
            imgUrl: projImg4,
            url: "https://kimch0.github.io/MemoryGame"
        },

    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>


                        <div className={""}>
                            <h2>Example Projects</h2>
                            <p>
                                My expertise spans both
                                backend and frontend projects, excelling in
                                comprehensive solution development.
                                Additionally, I bring skills in vulnerability
                                analysis and pentesting, ensuring each project
                                is not only functional and efficient but also
                                robust in terms of digital security.

                            </p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">

                                <Tab.Content id="slideInUp" style={{ marginTop: "30px" }}>

                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>


                                </Tab.Content>
                            </Tab.Container>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Projects