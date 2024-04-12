const { describe, test, expect } = require("@jest/globals");
const reportes = require("../../utils/reporte.util");

describe("Promedio de Tareas", () => { 
    test("Deberia obtener la un promedio de tareas por dia", () => { 
        const lista = [2, 6, 8, 9];
        const resultado = reportes.promedio(lista);
        expect(resultado).toBe(6.25); 
    });
}); 