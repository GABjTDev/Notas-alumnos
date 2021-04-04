import drawTables from './drawTables.js';
import promedios from './promedios.js';

export default function uploadAlumnos(){

    const btn = document.querySelector('#uploadAlumnos');

    btn.addEventListener('click', () => {

        let confirm;
        let alumnos = [];
        localStorage.removeItem('alumnos');
        const materias = JSON.parse(localStorage.getItem('materias'));

        do{
            
            let nombre;
            let legajo;

            do{

                nombre = prompt('Ingresa el nombre y tiene que tener mas de 3 letras');

            }while(nombre.length < 3 || !isNaN(nombre))

            do{
                legajo = prompt('Ingresa el numero de legajo 8 numeros');
            }while(legajo.length < 8 || isNaN(parseInt(legajo)))
            
            let notas = [];

            for(let i = 0; i < materias.length; i++){

                do{

                    notas[i] = prompt(`Ingresa la nota de ${materias[i]} puede ser del 1 al 10`);

                }while(parseInt(notas[i]) <= 0 || parseInt(notas[i]) > 10 || isNaN(parseInt(notas[i])))

            }

            let promedio = promedios(notas);
            let aprobado = (promedio >= 6)? true : false;

            const alumno = {
                id: `${legajo}-${new Date().getMilliseconds()}`,
                nombre,
                notas,
                promedio,
                aprobado
            }
            
            alumnos.push(alumno);

            confirm = window.confirm('Quieres ingresar otro alumno');

        }while( confirm );

         
        localStorage.setItem('alumnos', JSON.stringify(alumnos));
        drawTables(alumnos);
    });

}