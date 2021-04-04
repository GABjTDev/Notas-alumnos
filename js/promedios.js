export default function promedios(notas){

    let cantidad = notas.length;
    let suma = notas.reduce((acumulador, n) => acumulador + parseInt(n), 0);

    let promedio = Math.floor(suma / cantidad);

    return promedio;
}