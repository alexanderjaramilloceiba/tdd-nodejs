# TDD

## Tarea 5: Siguiente Prueba

En este punto, si todavía estamos aprendiendo TDD, deseamos poder escribir más código para producción.
Recordemos que una regla, nos dice que no debemos escribir código para producción, hasta que haya primero un test que falle.

1. ¿Cuál sería un siguiente test? (hagamos que falle)

    ```javascript
    test("sumar I y II"...
    ```

    ![Resultado Rojo Test 2](/workshop/2-SegundoTestQueFalle.png "Resultado Pruebas Rojo")

2. ¿Cuál es el mínimo código que satisface la prueba?

    ```javascript
    export class Claudiolator {
    	add(arg0: string, arg1: string): any {
    		if (arg0 == "I" && arg1 == "I") {
    			return "II";
    		}
    		return "III";
    	}
    }
    ```

3. ¿Qué podemos refactorizar?
    > tal vez los nombres de los argumentos del método `add`?
4. ¿Qué mas probar para dar el siguiente paso?

    ```javascript
    test("sumar II y II"...

    ```

    <span style="color:#C9514B; font-style:italic">¿falla?</span>, entonces podemos crear un código mínimo nuevo que satisfaga la prueba

5. ¿Cómo podemos satisfacer solo lo que falla?

    ```javascript
    add(romanNumeral1: string, romanNumeral2: string): any {
    	if (romanNumeral1 == "I" && romanNumeral2 == "I") {
    		return "II";
    	}
    	if (romanNumeral1 == "I" && romanNumeral2 == "II") {
    		return "III";
    	}
    	return "IV";
    }
    ```

    ¿Y Ahora qué hacemos?\
    ¿Nos vamos a llenar de condicionales?\
    ¿Vemos algún patrón que nos permita reducir, reutilizar, optimizar nuestro código?

    **¿Hay una forma simple de sumar IV+CIX que conozcamos?**

    Vamos a lo que conocemos\
    ¿Qué tal si **convertimos** los número **romanos a decimales**, realizamos la operación de suma y luego convertimos nuevamente el resultado decimal a romano?

    Lo trabajaremos en la siguiente tarea

**[Siguiente Tarea](../../../../tree/workshop-detail/6/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
