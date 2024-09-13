import React, { useState } from 'react';

function Content() {
  const [activeSection, setActiveSection] = useState(''); // Estado para controlar la sección activa

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(''); // Ocultar la sección si se vuelve a pulsar
    } else {
      setActiveSection(section);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Email copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  return (
    <div className="portfolio">
      <div className="wrapper">
        <div className="nom">
          Hector Burgos Martí
        </div>
        <div className='profesion-personal'>
          Desarrollador Web
        </div>
      </div>

      <div className='info-personal'>
        <h2 className='descripcion'>¡Hola! Soy Hector, apasionado de la informática y la programación.
          <br /><br />
          Tras muchas horas de código y café, obtuve mi título de Desarrollador de Aplicaciones Web (DAW). <br /> <br />
          Aún no he tenido la oportunidad de trabajar en ninguna empresa, pero estoy listo para demostrar mis habilidades.
          <br /><br />
          Mi ordenador y yo estamos ansiosos por resolver problemas y enfrentar nuevos desafíos.
          <br /><br />
          Si buscas a alguien con pasión y humor para tu equipo, ¡aquí estoy!
          <br /> <br />
          En este portafolio, mostraré mis habilidades actuales y las que estoy aprendiendo, para que puedas ver todo lo que puedo ofrecer.</h2>
      </div>

      <div className='portfolio-experiment'>
        <div className='opciones'>
          <a
            className={`btn btn-1 ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleSectionClick('skills')}
          >
            <span className="text">Habilidades</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
          <a
            className={`btn btn-1 ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleSectionClick('projects')}
          >
            <span className="text">Proyectos</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
          <a
            className={`btn btn-1 ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleSectionClick('contact')}
          >
            <span className="text">Contacto</span>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
        </div>
      </div>

      {activeSection === 'skills' && (
        <div className='skills-section'>
          <h2>Tecnologías impartidas durante mi formación</h2>
          <div className='skills-logos'>
            <div className='img-lenguajes'>
              <div className='angular' />
              <div className='javascript' />
              <div className='java' />
              <div className='spring' />
              <div className='html' />
              <div className='css' />
            </div>
          </div>

          <h2>Estoy aprendiendo de manera autodidacta</h2>
          <div className='img-lenguajes'>
            <div className='react' />
            <div className='python' />
          </div>

          <h2>Base de datos</h2>
          <div className='img-lenguajes'>
            <div className='mysql' />
            <div className='oracledb' />
            <div className='firebase' />
            <div className='supabase' />
            <div className='dbeaver' />
          </div>

          <h2>Otras habilidades</h2>
          <div className='img-lenguajes'>
            <div className='docker' />
            <div className='githubb' />
            <div className='git' />
            <div className='virtualbox' />
            <div className='photoshop'></div>
          </div>
        </div>
      )}

      {activeSection === 'projects' && (
        <div className='projects-section'>

          <div className='project'><h2>Proyecto 1</h2>

            <div className='texto-proyecto'>
              <p className='p-proyecto centrado'>Primer proyecto destinado a una empresa de ganadería</p>

              <p className='p-proyecto textoedit'>
                Este sitio web ha sido creado para una empresa ganadera,
                con el objetivo de llevar un control exhaustivo de todos
                los animales de la ganadería. En él, se pueden añadir,
                modificar y, en caso de venta o fallecimiento, marcar
                como "Inactivo" a los animales, los cuales aparecerán
                en una sección dedicada exclusivamente a los animales inactivos. Además, se puede consultar la información detallada de cada animal.

                <br /><br />

                El sistema también permite gestionar las crías por cada madre.
                Si una madre fallece o se vende, se mueve a una sección de
                madres "Inactivas", lo que facilita el seguimiento y control
                de las crías, incluso cuando sus madres ya no están activas.

                <br /><br />

                En cuanto al diseño, el cliente solicitó que fuera muy básico
                y responsive, para facilitar su uso desde el móvil, ya que se
                trata de una web de uso privado que no requiere un diseño muy
                elaborado. La web está adaptada para funcionar en cualquier
                dispositivo, asegurando una experiencia de usuario óptima
                tanto en móviles como en tabletas y computadoras de escritorio.

                <br /><br />

                Para ilustrar el funcionamiento del sistema, se han añadido
                capturas de pantalla, ya que la web está en producción y
                contiene datos reales que no pueden ser publicados. </p>
            </div>
            <div className='img-proyecto' />
          </div>
          <div className='futuros-proyectos'>
            <h2>Aquí iré publicando mis proyectos futuros más profesionales</h2>
            <h3>En GitHub tengo proyectos los cuales no son profesionales</h3>
          </div>
        </div>

      )}

      {activeSection === 'contact' && (
        <div className='contact-section'>
          <div className='email-info'>
            <p className='email-tag'>Email:</p>
            <p className='email'>hectorbmprof@gmail.com</p>

            <div className='copiar' onClick={() => copyToClipboard('hectorbmprof@gmail.com')}></div>
          </div>

          <div className='rrss-info'>
            <a href="https://github.com/Haktor23" target="_blank" rel="noopener noreferrer"><div className='github' /></a>
            <a href="https://www.linkedin.com/in/hector-burgos-mart%C3%AD-39ab182b0/" target="_blank" rel="noopener noreferrer"><div className='linkedin' /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
