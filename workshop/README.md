# TDD

## Tarea 2: Escribir la primera prueba

1. Instalar las dependencias

    `npm i`

2. Crear el archivo

    `__tests__/claudiolator/add.spec.ts`

3. Escribir dentro del archivo creado `add.spec.ts`

```javascript
test("sumar I y I", () => {
	expect(add("I", "I")).toBe("II");
});
```

4. Correr las pruebas y validar que solo esta prueba, falla

    `npm run test`

5. Antes de pasar a la siguiente tarea, pensemos...
    - **¿Por qué falla?**
    - ¿Cuál es el mínimo código posible para que satisfaga la prueba?

**[Siguiente Tarea](../../../../tree/workshop-detail/3/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
