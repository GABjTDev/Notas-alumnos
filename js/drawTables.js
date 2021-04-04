import createCard from "./createCard.js";

export default function drawTables(){

    const tbody = document.querySelector('tbody');
    const materias = JSON.parse(localStorage.getItem('materias'));
    const alumnos = JSON.parse(localStorage.getItem('alumnos'));

    while (tbody.firstElementChild) {
        tbody.removeChild(tbody.firstElementChild);
    }

    alumnos.forEach(a => {

        const tr = document.createElement('tr');
        
        const clase = (a.aprobado)?'table-success':'table-danger';
        tr.classList.add(clase);
        tr.setAttribute('data-id', a.id);
        tr.setAttribute('data-bs-toggle', "modal");
        tr.setAttribute('data-bs-target', '#Alumno');
        
        const tdNombre = document.createElement('td');
        tdNombre.textContent = a.nombre;
        tr.appendChild(tdNombre);

        for(let i = 0; i < materias.length; i++){
            const td = document.createElement('td');

            td.textContent = a.notas[i];
            tr.appendChild(td);
        }

        const tdPromedio = document.createElement('td');
        tdPromedio.textContent = a.promedio;
        tr.appendChild(tdPromedio);

        tbody.appendChild(tr);

    })

    const trClick = document.querySelectorAll('tbody tr');
    console.log(trClick);
    trClick.forEach( e => {
        e.addEventListener('click', () => {
            createCard(e);
        })
    });

}