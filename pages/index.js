import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/**Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/derian.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Derian AB</h1>
              <h1>FullStack Developer</h1>
              <p>
                Desarrollador web altamente motivado con experiencia en diseño y
                desarrollo de sitios web modernos y receptivos. Mi enfoque se
                centra en crear soluciones atractivas y funcionales para mejorar
                la experiencia del usuario. Tengo habilidades en HTML, CSS,
                JavaScript, React, Node.js y Bootstrap. Además, tengo
                experiencia en desarrollo backend con Node.js, Express y bases
                de datos como MySQL y MongoDB. Mi objetivo es mejorar
                constantemente el rendimiento de los sitios web que desarrollo.
              </p>
              <Link
                href="https://ecommercederian.netlify.app/#/"
                legacyBehavior
              >
                <a className="btn btn-outline-light">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Second section */}
    <div className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {skills?.map(({ skills, porcentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skills}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${porcentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences?.map(({ title, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    Experience Habilidades con Node.js-Express Marzo 2023-2023
                    Soy competente en el desarrollo de aplicaciones web con
                    tecnologías backend como Node.js y Express. También tengo
                    experiencia en el diseño y desarrollo de bases de datos
                    utilizando MySQL y MongoDB. Habilidades con React-Hooks
                    Enero 2023-2023 Mis principales competencias incluyen el
                    dominio de lenguajes de programación y tecnologías como
                    HTML, CSS y JavaScript. Estoy familiarizado con frameworks y
                    bibliotecas populares como React, Node.js, entre otros.
                    Además, tengo experiencia en el uso de herramientas como
                    Bootstrap para crear interfaces modernas y escalables.
                    Habilidades con JavaScript Noviembre 2022-2023 Siempre me
                    esfuerzo por mejorar la velocidad y el rendimiento de los
                    sitios web que desarrollo. Me enfoco en optimizar el
                    rendimiento utilizando técnicas como la compresión de
                    archivos, el almacenamiento en caché y la minimización del
                    tiempo de carga. Habilidades con React-Native Mayo 2023-2023
                    Como desarrollador web altamente motivado, estoy
                    comprometido en ofrecer soluciones atractivas y funcionales
                    que brinden una experiencia óptima a los usuarios. Me
                    capacito dia a dia en diversas tecnologías y me esfuerzo por
                    mejorar constantemente el rendimiento de los sitios web,
                    Apps en Android/IOS. Habilidades con Next.js Mayo 2023- Como
                    desarrollador web altamente motivado, estoy comprometido en
                    ofrecer soluciones atractivas y funcionales que brinden una
                    experiencia óptima a los usuarios. La práctica es
                    fundamental para consolidar tus habilidades. Aplico lo que
                    aprendo en proyectos personales o desafíos de
                    programación... Obteniendo experiencia con las tecnologia
                    Next.js, Apps en Android/IOS.
                  </p>
                </li>
              ))}
            </ul>

            <Link href="https://landingcars.netlify.app/" legacyBehavior>
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {projects.map(({ name, description, Image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${Image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="https://derian-lustrous-speculoos.netlify.app/">
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-12 mt-4">
              <div className="text-center">
                <Link
                  href="https://derianecommercejavascript.netlify.app/"
                  legacyBehavior
                >
                  <a className="btn btn-outline-light">More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
