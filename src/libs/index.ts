export function dividirEnGrupos<T>(arr: Array<T>, tamañoGrupo: number) {
    let resultado = [];

    for (let i = 0; i < arr.length; i += tamañoGrupo) {
        // Cortar el array en trozos de 'tamañoGrupo' y añadirlo al resultado
        resultado.push(arr.slice(i, i + tamañoGrupo));
    }

    return resultado;
}
export function getClassNameVariant(
    variant?: "success" | "error" | "info" | "warning" | "send"
): string {
    switch (variant) {
        case "success":
            return "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
        case "error":
            return "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
        case "info":
            return "text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200"
        case "warning":
            return "text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"
        default:
            return ""
    }
}
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
