# TDD

## Tarea 6: Refactoring de pruebas

1.  Antes de continuar, hagamos un pequeño refactoring en las pruebas. Pero antes de comenzar, los invito a reflexionar sobre lo siguiente:

    -   Si notamos, el arrange en las 3 pruebas que tenemos es igual en cada una de ellas
    -   En las 3 pruebas, estamos probando el mismo método de la misma clase
    -   Veamos en el siguiente paso qué nos ofrece jest para esto

2.  Para reutilizar algunos pasos previos a cada prueba, podemos hacer uso de [`beforeEach`](https://jestjs.io/docs/api#beforeeachfn-timeout)

    ```javascript
    let claudiolator: Claudiolator;
    beforeEach(() => {
    	// Jest will wait for this promise to resolve before running tests.
    	claudiolator = new Claudiolator();
    });
    ```

    <span style="color:#C9514B; font-style:italic">¿falla?</span>
    no, continuemos

3.  Para crear un bloque que agrupe las pruebas relacionadas, podemos utilizar [`describe`](https://jestjs.io/docs/api#describename-fn)

    ```javascript
    describe(Claudiolator.name, () => {
    	/* movemos aquí nuestras pruebas */
    });
    ```

4.  Incluso, podemos refactorizar un poco más nuestras pruebas

    -   Analicemos qué es lo que se repite en cada prueba y qué es lo que cambia (principio de refactoring)
    -   El principio de refactoring, nos dice, que creemos una función que tenga lo que está igual y parametrizamos lo que cambia
    -   Para lo anterior, podemos hacer uso de [`describe.each`](https://jestjs.io/docs/api#describeeachtablename-fn-timeout)

        ```javascript
        describe.each(params)(testDescription, (...testParams) => {
        	/* contenido de lo que no cambia */
        });
        ```

    Así:

    ```javascript
    describe.each([
    	["I", "I", "II"],
    	["I", "II", "III"],
    	["II", "II", "IV"],
    ])(
    	"sumar %s y %s",
    	(romanNumeral1: string, romanNumeral2: string, expected: string) => {
    		test(`retorna ${expected}`, () => {
    			// Act
    			const result = claudiolator.add(romanNumeral1, romanNumeral2);
    			// Assert
    			expect(result).toBe(expected);
    		});
    	}
    );
    ```

    ![Resultado tests agrupados](/workshop/refactoring-tests.png "Resultado Pruebas Agrupadas")

    **[Siguiente Tarea](../../../../tree/workshop-detail/7/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
