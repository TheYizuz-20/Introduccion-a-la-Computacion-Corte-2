export default class Cl_Estudiante {
    constructor(nombre,nota1,nota2,nota3){
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nota1(nota1) {
        this._nota1 = +nota1;
    }

    get nota1() {
        return this._nota1;
    }
    set nota2(nota2) {
        this._nota2 = +nota2;
    }

    get nota2() {
        return this._nota2;
    }

    set nota3(nota3) {
        this._nota3 = +nota3;
    }

    get nota3() {
        return this._nota3;
    }

    notaFinal(){
        return this.nota1 + this.nota2 + this.nota3;
    }
}