---
title: 'Estructuras de Arboles'
date: '2022-05-12'
image: arboles.png
excerpt: Conoce las bases de una de las estructuras mas utilizadas dentro del mundo de las ciencias de la computacion   
isFeatured: true
---
### Modelos lineales y jerarquicos de datos

Dentro de los lineales podemos encontrar estructuras de datos que mantienen una relacion entre ellos y sus elementos.
Ahora, dentro de los jerarquicos podemos encontrar estructuras de datos en las que se presentan una jerarquia entre conjuntos de datos.

### Arboles

Es una estructura de datos en la que los datos se organizan de modo que los elementos deinformacion estan relacionados entre si a traves de ramas
En forma gráfica sería como ver un árbol invertido, la raíz en la parte más alta de la que salenlas ramas que llegan a las hojas que están en la parte más baja.
Un árbol consta de un conjunto finito de elementos denominado nodos y un conjunto finito delineas dirigidas denominadas ramas, que conectan a los nodos.

### Algunos ejemplos de aplicación

- Dentro de los árboles, existe la aplicación de las expresiones aritméticas
- Se utilizan para representar diagramas de organizaciones, como una organización de empresas, entre otros.
- En el area de informática, se utilizan en la Teoría de Compiladores durante la fase de análisis de código fuente. Dentro de esta misma teoría se encuentra la busqueda por árboles binarios, los cuales también se encuentran aplicaciones en la inteligencia artificial para encontrar caminos.

### Conceptos básicos de un árbol

Como ya lo dijimos, un árbol es una estructura que se puede definir por medio de un conjunto de nodos y aristas (ramas), tal que:
- Cualquier nodo H, a excepcion de la raiz, está conectado por medio de una arista a un único nodo P. Se dice que P es el nodo padre y en nodo H el hijo.
- Un nodo sin hijos se denomina hoja.
- Un nodo que no es hoja, se denomina nodo interno o interior.
- Los nodos que tienen el mismo padre se llaman nodos hermanos.
- El grado de un árbol se refiere al mayor numero de descendientes que tiene algun nodo dentro del árbol.
- La altura de un árbol se refiere al numero de nodos que hay entre la raíz y el nodo más bajo.
- Peso es el numero total de nodos en un árbol.

### Como convertir de un árbol general a uno binario
1. Enlazar los hijos de de cada nodo en forma horizontal (los hermanos)
2. Enlazar en forma vertical el nodo padre con el hijo que encuentra mas a la izquierda, eliminando el vinculo de ese padre con el resto de sus hijos.
3. Rotar el diagrama resultante (Flechas hacia abajo se rotan a la izquierda, flechas a la derecha se rotan a la derecha)

### Recorrido de un arbol

1. Recorrido Preorden
   - Raiz
   - Subarbol izquierdo en preorden
   - Subarbol derecho en preorden
2. Recorrido Postorden
   - Subarbol izquierdo en orden final
   - Subarbol derecho en orden final
   - Raiz
3. Recorrido Inorden
   - Subarbol izquierdo 
   - Raiz
   - Subarbol derecho