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

***

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

### Arbol binario de busqueda

Un arbol binario de busqueda con raiz R es de búsqueda cuando no está vacío

- Si tiene un subárbol izquierdo, la raiz del subárbol izquierdo es menor a R, y a la vez el subárbol izquierdo es un arbol binario de busqueda
- Si tiene un subárbol derecho, la raiz del subárbol derecho es mayor a R, y a la vez el subárbol derecho es un arbol binario de busqueda

Un arbol de busqueda debe almacenar elementos que cumplan con una relacion de orden. Debe haber una forma de ordenar los elementos de un arbol binario de busqueda, como por ejemplo números enteros de menor a mayor o entre un rango, usando palabras por orden lexicografico, etc.

### Estructura de los nodos de un arbol binario de busqueda

```cpp
struct Nodo {
  int dato;
  struct Nodo *izq;
  struct Nodo *der;
};
```

### Operaciones de un arbol binario de busqueda

- Añadir o insertar elementos a un árbol 
- Recorrido de elementos
- Buscar o localizar elementos dentro de un árbol
- Borrar elementos de un árbol
- Conocer el número de elementos de un árbol
- Obtener la altura de un árbol

#### Buscar un elemento en un árbol 

Localizar elementos a partir de su valor o su identificador/clave. Para de esta forma comprobar si existe un elemento en un árbol u obtener el dato de un elemento que estamos buscando.

Para buscar un elemento de un árbol, se pueden dar varios casos:

1. Verificar si la raiz es el elemento buscado (si n == R)
2. En caso contrario, verificar si el elemento está en el subárbol izquierdo (si n < R)
3. En caso contrario, verificar si el elemento está en el subárbol derecho (si n > R)

```cpp

bool buscar(Nodo *nodo, int dato_a_buscar) {
  if (nodo == NULL) {
    return false;
  }
  // CASO 1: Si la raiz es el elemento buscado
  if (nodo -> dato == dato_a_buscar) {
    return true;
  }
  // CASO 2: Si el elemento está en el subárbol izquierdo
  if (nodo -> dato > dato_a_buscar) {
    return buscar(nodo -> izq, dato_a_buscar);
  }
  // CASO 3: Si el elemento está en el subárbol derecho
  return buscar(nodo -> der, dato_a_buscar);
}

```

#### Añadir un elemento a un árbol

Se hace a partir de la logica de búsqueda, ya que es necesario introducir el elemento de forma ordenada.

Al añadir un elemento a un árbol, se pueden dar varios casos:

1. Si el árbol está vacío, se añade el elemento como raiz
2. Si la raiz del árbol es igual al elemento a añadir, no se hace nada o se manda un error
3. Si la raiz del árbol es mayor al elemento a añadir, se añade el elemento en el subárbol izquierdo
4. Si la raiz del árbol es menor al elemento a añadir, se añade el elemento en el subárbol derecho
   
```cpp

void insertar(Nodo *&raiz, int dato) {
  if (raiz == NULL) {
    Nodo *nuevo_nodo = new Nodo();
    nuevo_nodo -> dato = dato;
    nuevo_nodo -> izq = NULL;
    nuevo_nodo -> der = NULL;
  } else if (raiz -> dato == dato) {
    cout << "Error: el elemento ya existe" << endl;
  } else if (raiz -> dato > dato) {
    insertar(raiz -> izq, dato);
  } else {
    insertar(raiz -> der, dato);
  }
}

```

### Ordenación de las estructuras de datos

La ordenación interna es aquella en la que los elementos a componentes del arreglo se encuentran en la memoria principal de la computadora.

La ordenación externa es aquella en al que los elementos se encuentran en archivos que están almacenados en dispositivos de almacenamiento secundario como discos.

- Pueden ser clasificados en metodos directos(cortos y de facil elaboración y compresión) y logaritmicos(son más complejos pero requeren menos comparaciones y movimientos para ordenar elementos)

- Clasificación de los algoritmos de Ordenamiento
  
1. Algoritmos de Inserción
2. Algoritmos de Intercambio
3. Algoritmos de Selección
4. Algoritmos de Enumeración

#### Método de ordenación de burbuja

Se basa en una serie de intercambios entre elementos adyacentes. Estos intercambios dan la impresión de que cada elemento va moviéndose a través del arreglo hasta llegar a su posición final.

El algoritmo se analiza de la siguiente forma:

- Supongamos que tenemos el siguiente arreglo: 
   - [4, 5, 2, 1, 3]
  
1. Empezamos comparando el elemento de la posición 0 con el elemento de la posición 1: 4 vs 5, como están en orden continuamos 
   - [4, 5, 2, 1, 3]
2. Comparamos el elemento de la posición 1 con el elemento de la posición 2: 5 vs 2, como no están en orden, intercambiamos los elementos 
   - [4, 2, 5, 1, 3]
3. Comparamos el elemento de la posición 2 con el elemento de la posición 3: 5 vs 1, como no están en orden, intercambiamos los elementos 
   - [4, 2, 1, 5, 3]
4. Comparamos el elemento de la posición 3 con el elemento de la posición 4: 5 vs 3, como no están en orden, intercambiamos los elementos 
   - [4, 2, 1, 3, 5]
   - Aqui el elemento en la posicion 4 ya está en su posición final. Continuamos con los demas elementos.
5. Comparamos el elemento de la posicion 0 con el elemento de la posicion 1: 4 vs 2, como no están en orden, intercambiamos los elementos 
   - [2, 4, 1, 3, 5]
6. Comparamos el elemento de la posicion 1 con el elemento de la posicion 2: 4 vs 1, como no están en orden, intercambiamos los elementos 
   - [2, 1, 4, 3, 5]
7. Comparamos el elemento de la posicion 2 con el elemento de la posicion 3: 4 vs 3, como no están en orden, intercambiamos los elementos 
   - [2, 1, 3, 4, 5]
   - Aqui el elemento en la posicion 3 ya está en su posición final. Continuamos con los demas elementos.
8. Comparamos el elemento de la posicion 0 con el elemento de la posicion 1: 2 vs 1, como no están en orden, intercambiamos los elementos 
   - [1, 2, 4, 3, 5]
9.  Comparamos el elemento de la posicion 1 con el elemento de la posicion 2: 2 vs 4, como están en orden, continuamos 
    - [1, 2, 4, 3, 5]
10. Comparamos el elemento de la posicion 2 con el elemento de la posicion 3: 4 vs 3, como no están en orden, intercambiamos los elementos 
    - [1, 2, 3, 4, 5]
    - Aquí el arreglo ya está ordenado.

El código se ve de la siguiente manera:
```cpp
void bubbleSort(int arr[], int num_elementos) { 
  for (int i = 0; i < num_elementos - 1; i++) {
    for (int j = 0; j < num_elementos - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(&arr[j], &arr[j + 1]);
      }
    }
  }
}
```


