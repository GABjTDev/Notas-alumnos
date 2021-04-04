export default function deleted(){

    const thead = document.querySelector('thead tr');
    const tbody = document.querySelector('tbody');

    while (thead.firstElementChild) {
        thead.removeChild(thead.firstElementChild);
    }

    while (tbody.firstElementChild) {
        tbody.removeChild(tbody.firstElementChild);
    }

    const btnAlumnos = document.querySelector('#uploadAlumnos');
    const btnDeleted = document.querySelector('#deleted');

    btnAlumnos.classList.add('disabled');
    btnDeleted.classList.add('disabled');
    localStorage.removeItem('alumnos');
    localStorage.removeItem('materias');

}