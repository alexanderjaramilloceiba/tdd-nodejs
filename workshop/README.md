# TDD

## Tarea 1: Diseñe la Claudiolator (claudioladora)

**_CARD:_**

    Yo como gladiador
    Quiero una Claudioladora que me permita sumar números romanos,
    Para poder contar cabezas en la arena.

**_CONFIRMATION:_**

-   Dado que estoy en la calculadora, cuando ingrese dos números romanos\
    entre 1 y 3000, entonces obtendré la suma.
-   Dado que estoy en la calculadora, cuando ingrese el número MCCCLXXXIII y el número\
    MDXIV entonces obtendré MMDCCCXCVII.
-   Dado que estoy en la calculadora, cuando ingrese el número CMXCIX y el número\
    MCCXCIX entonces obtendré MMCCXCVIII.
-   Dado que estoy en la calculadora, cuando ingrese el número IX y el número IV entonces\
    obtendré XIII.

**_CONVERSATION:_**

-   El sistema romano utiliza los siguientes siete símbolos para la representación:\
    I​, V​, X​, L​, C​, D​ y M. ​Independientemente de donde estén colocadas las cifras tienen el\
    mismo valor.
-   Los símbolos se escriben y leen de izquierda a derecha, de mayor a menor valor.
-   Si a la derecha de una cifra romana de escribe otra igual o menor, el valor de ésta se\
    suma a la anterior.
-   Si un símbolo está a la izquierda inmediata de otro de mayor valor, se resta al valor del\
    segundo el valor del primero.
-   Se permiten a lo sumo tres repeticiones consecutivas del mismo símbolo I​, X​ y C​.\
    (Muchos relojes usan IIII​ para el numeral 4, en lugar del correcto IV​.)
-   No se permite la repetición consecutiva de los símbolos V​, L​ y D​.
-   La cifra I​ colocada delante de la V​ o la X​, les resta una unidad; la X​, precediendo\
    a la L o a la C​, les resta diez unidades y la C​, delante de la D​ o la M​, les resta cien unidades.

Fuente:\
[convertidor números romanos](http://www.periodni.com/es/convertidor_numeros_romanos.html)\
Si necesita más información, incluyendo los pasos requeridos para sumar, vaya a\
[Wikipedia: Numeración Romana](https://es.wikipedia.org/wiki/Numeraci%C3%B3n_romana)

**[Siguiente Tarea](https://github.com/alexanderjaramilloceiba/tdd-nodejs/tree/workshop-detail/2/workshop)**

[Ceiba Software House S.A.S. © 2016](https://www.ceiba.com.co/)

Certified Scrum Developer Course, Lab Guide
