export default class Cl_ISeccion {
  leerCodigo() {
    return prompt("Codigo de la seccion");
  }

  reporteSeccion(codigo, contadorAprobados, promedioSeccion) {
    return `
      <br> Codigo: ${codigo}
      <br> Cantidad de estudiantes aprobados: ${contadorAprobados}
      <br> Promedio de la sección: ${promedioSeccion} 
      `;
  }
}