import deleted from "./deleted.js";

export default function drawHead(){

    const materias = JSON.parse(localStorage.getItem('materias'));

    const thead = document.querySelector('thead tr');

    while (thead.firstElementChild) {
        deleted();
    }

    const thNombre = document.createElement('th');
    thNombre.textContent = 'Nombre';

    thead.appendChild(thNombre);

    materias.forEach(m => {
        const th = document.createElement('th');
        th.textContent = m;

        thead.appendChild(th);
    })

    const thPromedio = document.createElement('th');
    thPromedio.textContent = "Promedio";

    thead.appendChild(thPromedio);
    
    const btnAlumnos = document.querySelector('#uploadAlumnos');
    const btnDeleted = document.querySelector('#deleted');

    if(btnAlumnos.classList.contains('disabled') && btnDeleted.classList.contains('disabled')){
        btnAlumnos.classList.remove('disabled');
        btnDeleted.classList.remove('disabled');
    }

}