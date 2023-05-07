# TDD

## Tarea 8: Practicar TDD

Luego de realizar un primer ejercicio de TDD para resolver un problema de suma de números romanos, se reduce la complejidad del problema a una conversión de romanos a enteros decimales y viceversa.

Te invitamos a continuar la práctica de TDD con la conversión entre romanos y enteros, e irte adaptando a este paradigma que nos ayuda a tener nuestro código documentado por pruebas, con altos estándares de calidad, probado y validado por escenarios de negocio.

Propuesta:

```javascript
test("Convertir Numero Romano I", () => {
	// Arrange
	const converter = new RomanNumeralConverter();
	// Act
	const result: number = converter.from("I");
	// Assert
	expect(result).toBe(1);
});
```

probar y ver que falla

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
