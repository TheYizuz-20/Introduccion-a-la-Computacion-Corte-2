import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_iEstudiante from "./Cl_iEstudiante.js";
import Cl_Seccion from "./Cl_Seccion.js";
import Cl_iSeccion from "./Cl_iSeccion.js";

let iSeccion = new Cl_iSeccion(),
    seccion = new Cl_Seccion(iSeccion.leerCodigo()),
    iEstudiante = new Cl_iEstudiante(),
    salida = document.getElementById("salida");

for (let i = 0; i < 5; i++){
    let estudiante = new Cl_Estudiante(iEstudiante.leerNombre(),iEstudiante.leerNota1(),iEstudiante.leerNota2(),iEstudiante.leerNota3());
    salida.innerHTML += iEstudiante.reporteEstudiante(estudiante.nombre,estudiante.notaFinal());
    seccion.procesarEstudiante(estudiante);
}
salida.innerHTML += iSeccion.reporteSeccion(seccion.codigo,seccion.contadorAprobados(),seccion.promedioSeccion());