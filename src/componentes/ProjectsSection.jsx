import React from 'react';

function ProjectsSection() {
    return (
        <div className="projects-section">
            <div className="project">
                <h2>Proyecto 1</h2>
                <div className="texto-proyecto">
                    <p className="p-proyecto centrado">Primer proyecto destinado a una empresa de ganadería</p>
                    <p className="p-proyecto textoedit">
                        Este sitio web ha sido creado para una empresa ganadera, con el objetivo de llevar un control exhaustivo de todos los animales de la ganadería. En él, se pueden añadir, modificar y, en caso de venta o fallecimiento, marcar como "Inactivo" a los animales, los cuales aparecerán en una sección dedicada exclusivamente a los animales inactivos. Además, se puede consultar la información detallada de cada animal.<br /><br />

                        El sistema también permite gestionar las crías por cada madre. Si una madre fallece o se vende, se mueve a una sección de madres "Inactivas", lo que facilita el seguimiento y control de las crías, incluso cuando sus madres ya no están activas.<br /><br />

                        En cuanto al diseño, el cliente solicitó que fuera muy básico y responsive, para facilitar su uso desde el móvil, ya que se trata de una web de uso privado que no requiere un diseño muy elaborado. La web está adaptada para funcionar en cualquier dispositivo, asegurando una experiencia de usuario óptima tanto en móviles como en tabletas y computadoras de escritorio. <br /> <br />

                        Para ilustrar el funcionamiento del sistema, se han añadido capturas de pantalla, ya que la web está en producción y contiene datos reales que no pueden ser publicados.
                    </p>
                </div>
                <div className="img-proyecto" />
            </div>
            <div className="futuros-proyectos">
                <h2>Aquí iré publicando mis proyectos futuros más profesionales</h2>
                <h3>En GitHub tengo proyectos los cuales no son profesionales</h3>
            </div>
        </div>
    );
}

export default ProjectsSection;
