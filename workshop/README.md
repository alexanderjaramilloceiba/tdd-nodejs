# TDD

## Tarea 7: Mocks

Comentamos que las pruebas unitarias que tienen dependencias, debemos en la preparación de
la prueba crear un mock que podamos manipular a nuestro antojo, controlando qué devuelve en cada escenario elegido, permitiendo así, solo probar nuestra unidad de código (método `add`
de la clase `Claudiolator`).

1.  En vista que necesitamos convertir romanos a decimales y decimales a romanos, vemos nacer una nueva responsabilidad, la cual por el principio `I` de `S.O.L.I.D.` podemos inyectar la dependencia, algo así:

    ```javascript
    let decimalConverter: DecimalConverter<string>;
    beforeEach(() => {
    	// Jest will wait for this promise to resolve before running tests.
    	claudiolator = new Claudiolator(decimalConverter);
    });
    ```

2.  Ahora que tenemos en mente una inyección de una dependencia que no hemos todavía establecido como contrato (interfaz), procedamos a cambiar la prueba que está en rojo a verde

    -   Creemos entonces la interfaz `DecimalConverter`

        ```javascript
        export interface DecimalConverter<T> {
        	from(num: T): number;
        	to(num: number): T;
        }
        ```

    -   Inyectemos la dependencia por el constructor

        ```javascript
        import { DecimalConverter } from "./decimal-converter";

        export class Claudiolator {
            constructor(private readonly decimalConverter: DecimalConverter<string>) {}
            <!-- methodo add -->
        }
        ```

    -   Importemos el contrato en las pruebas, para terminar de corregir errores de compilación

    En este punto ya tenemos nuevamente nuestras pruebas en verde

3.  Notemos que en el punto en el que estamos, podemos modificar tranquilamente nuestro método bajo prueba, porque ya tenemos unas pruebas que debe satisfacer y que podemos enriquecer

    -   **Busquemos entonces, reducir la complejidad de nuestro problema de suma de romanos, a un problema de conversión entre decimales y números romanos**

    ```javascript
    add(romanNumeral1: string, romanNumeral2: string): string {
    	const num1 = this.decimalConverter.from(romanNumeral1);
    	const num2 = this.decimalConverter.from(romanNumeral2);

    	const sum = num1 + num2;

    	return this.decimalConverter.to(sum);
    }
    ```

    -   En este punto, todas nuestras pruebas están fallando por la misma razón (Falta implementar el contrato)
        ![Resultado Rojo IoC](/workshop/InyeccionDependenciaPendienteImpl.png "IoC")

4.  Llegamos al punto! Usemos los Mocks. Implementemos un primer mock hecho (feito) manualmente

    ```javascript
    let decimalConverter: DecimalConverter<string>;

    beforeEach(() => {
    	decimalConverter = {
    		from: (romanNumeral: string): number =>
    			({
    				["I"]: 1,
    				["II"]: 2,
    			}[romanNumeral] || 0),
    		to: (decimal: number): string =>
    			({
    				[2]: "II",
    				[3]: "III",
    				[4]: "IV",
    			}[decimal] || ""),
    	};

    	claudiolator = new Claudiolator(decimalConverter);
    });
    ```

    **[Siguiente Tarea](../../../../tree/workshop-detail/8/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
