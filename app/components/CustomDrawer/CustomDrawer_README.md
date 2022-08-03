# Custom Drawer

En este documento o carpeta se va a guardar la parte para diseñar nuestro drawer que es importante para mostrar la siguientes cosas:

- Fotografía de la cuenta
- Nombre de la cuenta
- Tipo de cuenta

## Composición y modulos

Esta se compone de un contendor principal es cual es un **View** normal con la propiedad de flex.
Adentro viene lo relativamente importante para iniciar a modificar el diseño de nuestrto ***Drawer***.

Este el cuál es un componente del modulo:
- @react-navigation/drawer

En este se destructuran los componentes que se la van a pasar al HOC cuando se coloque en el Drawer.

Podemos seccionar este **CustomDrawer** en dos partes, los cuales serían el componente principal ***DrawerContentScrollView** y luego el **View**.
Estos van a contener diferentes cosas para diseñar el drawer.

### DrawerContentScrollView

Este como dice es una vista scrollable, pero en esta se destructura los parametros, los cuales son las listas o pantallas que tenemos en nuestro Drawer, lo cuales serían los "items".

Podemos hacer varias cosas, pero en este caso, la parte que contiene la lista de items del drawer, esta en un contenedor el cual se puede modificar y esta separado de otras cosas que podríamos hacer arriba o abajo de esta lista.

### View Final

Esta parte aunque no es de mucha relevancia, es la parte en la que se va a poner el logout

## Documentación referencial

Se puede checar más de los componentes usados [aquí](https://reactnavigation.org/docs/5.x/drawer-navigator/#providing-a-custom-drawercontent)