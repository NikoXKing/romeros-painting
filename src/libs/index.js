export function dividirEnGrupos(arr, tamañoGrupo) {
    let resultado = [];

    for (let i = 0; i < arr.length; i += tamañoGrupo) {
        // Cortar el array en trozos de 'tamañoGrupo' y añadirlo al resultado
        resultado.push(arr.slice(i, i + tamañoGrupo));
    }

    return resultado;
}