export default class Cl_Seccion {
    constructor(codigo) {
        this.codigo = codigo;
        this.cntAprob = 0;
        this.acNotas = 0;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get codigo() {
        return this._codigo;
    }

    procesarEstudiante(estudiante) {
        if (estudiante.notaFinal() >= 47.5)
            this.cntAprob++;
        this.acNotas += estudiante.notaFinal();
    }

    contadorAprobados() {
        return this.cntAprob;
    }

    acumularNotas() {
        return this.acNotas;
    }

    promedioSeccion() {
        return this.acNotas / 5;
    }
}