# Documentacion

Este es el Knowledge base del proyecto, donde viviran las tareas, objetivos y metricas usadas

El estilo arquitectonico usado es el de **invocacion explicita**

## Index
[Objetivos de negocio](#objetivos-de-negocio)
[¿Como funciona el paginado?](#paginado)

## Objetivos de negocio

- Calcular costos de produccion
- Calcular nominas
- Generar informes sobre los lotes de produccion
- Calcular costos no-marginales
- Calcular el teimpo de ciclo
- Calcular la tasa de defectos
- Calcular la productividad

## Paginado

En `src/pages/Pages.js` se puede modificar el objeto que guarda las paginas, nunca usar dos con el mismo titulo pues este es tambien el valor de la key de cada boton y podria tener un comportamiento inesperado.