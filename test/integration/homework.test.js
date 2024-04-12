const request = require("supertest");
const app = require("../../index");
const {describe, test, expect} = require("@jest/globals");
const mocks = require("../../test/mocks/tareas.mokc");

describe("Prueba de API", () => {
    test("Debería obtener una respuesta exitosa de la API", async () => {
        const headers = {
            Authorization:
            "Bearer " //Añadir token para que la prueba funcione 
        };

        const body = mocks.tareasIniciale;

        const response = await request(app)
        .post("/api/tareas")
        .set(headers)
        .send(body);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            result: "OK",
            error: "Falta token",
        });
    })
})



describe("Prueba de API", () => {
    test("Debería obtener una respuesta exitosa de la API", async () => {
        const headers = {
            Authorization:
            "Bearer "//No añadir token para que la prueba falle
        };

        const body = mocks.tareasIniciale;

        const response = await request(app)
        .post("/api/tareas")
        .set(headers)
        .send(body);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            error: "Falta token",
        });
    });


describe("Comparación de las tres tareas", () => {
    test("Las tres tareas deben tener la misma estructura", () => {
        expect(mocks.tareasInicial).toEqual(mocks.tareasSecundaria);
        expect(mocks.tareasInicial).toEqual(mocks.tareasTerciaria);
        expect(mocks.tareasSecundaria).toEqual(mocks.tareasTerciaria);
        });
    });
    

test("La longitud del array debe ser igual a un valor específico", async () => {
    const response = await request(app).get("/api/tareas");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5); // Ajusta la longitud esperada según tu caso real
});

test("El valor debe ser menor que otro valor", () => {
    const a = 5;
    const b = 10;

    expect(a).toBeLessThan(b);
});

test("El valor debe ser menor o igual que otro valor", () => {
    const a = 10;
    const b = 10;

    expect(a).toBeLessThanOrEqual(b);
});

test("El valor debe ser mayor o igual que otro valor", () => {
    const a = 10;
    const b = 5;

    expect(a).toBeGreaterThanOrEqual(b);
});

test("El valor debe ser mayor que otro valor", () => {
    const a = 10;
    const b = 5;

    expect(a).toBeGreaterThan(b);
});

test("El valor debe ser verdadero (true)", () => {
    const value = true;

    expect(value).toBeTruthy();
});

test("El valor debe ser falso (false)", () => {
    const value = false;

    expect(value).toBeFalsy();
});

test("El valor debe ser undefined", () => {
    const value = undefined;

    expect(value).toBeUndefined();
});

test("El valor debe ser null", () => {
    const value = null;

    expect(value).toBeNull();
});

test("El array debe contener un elemento específico", () => {
    const array = [1, 2, 3, 4, 5];

    expect(array).toContain(3); // Cambia el valor a buscar según tu caso real
});
});
