export default function getAlumno(id){

    let alumnos = JSON.parse(localStorage.getItem('alumnos'));
    let alumno = alumnos.filter(alumno => alumno.id === id);

    return alumno;

}