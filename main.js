import deletedClick from './js/deletedClick.js';
import drawTables from './js/drawTables.js';
import uploadAlumnos from './js/uploadAlumnos.js';
import uploadMaterias from './js/uploadMaterias.js';
import drawHead from './js/drawHead.js';


window.addEventListener('DOMContentLoaded', () => {

    // Acciones botones
    uploadMaterias();
    uploadAlumnos();
    deletedClick();

    const materias = JSON.parse(localStorage.getItem('materias'));
    const alumnos = JSON.parse(localStorage.getItem('alumnos'));
    if(materias != null || alumnos != null){
        drawHead();
        drawTables();

        const btnAlumnos = document.querySelector('#uploadAlumnos');
        const btnDeleted = document.querySelector('#deleted');

        btnAlumnos.classList.remove('disabled');
        btnDeleted.classList.remove('disabled');
    }
    

})