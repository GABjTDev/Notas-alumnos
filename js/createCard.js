import getAlumno from "./getAlumno.js";

export default function createCard(e){

    let id = e.getAttribute('data-id');
    let alumno = getAlumno(id);
    let materias = JSON.parse(localStorage.getItem('materias'));

    const title = document.getElementById('exampleModalLabel');
    title.textContent = alumno[0].nombre + ' N° de legajo ' + alumno[0].id;

    const ul = document.querySelector('.modal-body ul');
    while (ul.firstElementChild) {
        ul.removeChild(ul.firstElementChild);
    }
    const li = document.createElement('li');
    li.textContent = 'NOTAS';
    ul.appendChild(li);

    for(let i = 0; i < materias.length; i++){

        const li = document.createElement('li');
        li.textContent = materias[i] + ': ';

        const span = document.createElement('span');
        span.textContent = alumno[0].notas[i];
        li.appendChild(span);
        ul.appendChild(li);
    }

    const aprobadoDiv = document.createElement('li');
    aprobadoDiv.innerHTML = `Promedio: <span>${alumno[0].promedio}</span>`;
    ul.appendChild(aprobadoDiv);

    const status = document.querySelector('.status');
    
    while (status.firstElementChild) {
        status.removeChild(status.firstElementChild);
    }

    if(status.classList.contains('aprobado') || status.classList.contains('desaprobado')){
        status.classList.remove('aprobado');
        status.classList.remove('desaprobado');
    }

    const aprobado = (alumno[0].aprobado)? 'aprobado' : 'desaprobado';
    status.classList.add(aprobado);

    const p = document.createElement('p');
    p.textContent = aprobado;

    status.appendChild(p);
    
    
}