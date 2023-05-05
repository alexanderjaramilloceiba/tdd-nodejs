# TDD

## Tarea 4: Refactor

Necesitamos realizar pequeños pasos que ayuden a mejorar nuestro código, con foco en que sea limpio, legible y eficiente

1. Trabajemos con POO, y modifiquemos nuestra función `add` por un método de la clase `Claudiolator`

    ```javascript
    test("sumar I y I", () => {
    	expect(new Claudiolator().add("I", "I")).toBe("II");
    });

    class Claudiolator {
    	add(arg0: string, arg1: string): any {
    		return "II";
    	}
    }
    ```

2. Validemos que no se haya roto nada. <span style="color:#13D162; font-style:italic">¿Seguimos en Verde?</span>

    `npm run test`

3. Cuántas responsabilidades tenemos en `add.spec.ts`?

    Separemos responsabilidades

    - Creemos el archivo `claudiolator.ts` y movamos la clase de archivo
    - Importemos la clase `Claudiolator` en `add.spec.ts`
    - Ejecutemos nuevamente nuestros tests y validemos que <span style="color:#13D162">siga en verde</span>

4. Apliquemos el patron AAA en nuestra prueba

    ```javascript
    test("sumar I y I", () => {
    	// Arrange
    	const claudiolator = new Claudiolator();
    	// Act
    	const result = claudiolator.add("I", "I");
    	// Assert
    	expect(result).toBe("II");
    });
    ```

5. ¿Podemos mejorar un poco más?
    - **Recordemos procurar no sobrediseñar**

**[Siguiente Tarea](../../../../tree/workshop-detail/5/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
