export default class Cl_iEstudiante {

  leerNombre() {
    return prompt("Ingrese su nombre:");
  }

  leerNota1() {
    return prompt("Ingrese su nota (Nota 1)");
  }

  leerNota2() {
    return prompt("Ingrese su nota (Nota 2)");
  }

  leerNota3() {
    return prompt("Ingrese su nota (Nota 3)");
  }

  reporteEstudiante(nombre, notaFinal) {
    return `
      <br> Nombre: ${nombre}
      <br> Nota final: ${notaFinal}
      `;
  }
}