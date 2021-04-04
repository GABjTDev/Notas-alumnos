import drawHead from './drawHead.js';

export default function uploadMaterias(){

    const btn = document.querySelector('#uploadMateria');

    btn.addEventListener('click', () => {

        localStorage.removeItem('alumnos');
        localStorage.removeItem('materias');

        let materias = [];
        let confirm;
        let materia;
        do{
            
            do{
                materia = prompt('Ingresa una materia? Tiene que contener mas de 5 letras');

            }while(!isNaN(materia) && materia.length <= 5);

            materias.push(materia);

            confirm = window.confirm("Quiere Ingresar mas materias");
        }while( confirm );

        localStorage.setItem('materias', JSON.stringify(materias));
        drawHead();
    })

}