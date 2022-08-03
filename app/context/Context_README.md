
# Contextos

En esta carpeta se tienen los diferentes contextos que se usan para tener los datos y no hacer demasiadas llamadas a la base de datos.

Como en el artículo de freecodecamp que habla y nos ayuda a colocar bien los contextos, dice que un contexto nos sirve para guardar los datos que no suelen actualizarse frecuentemente.

En este caso pueden ser tanto el correo y los datos de la tienda, aunque pueden cambiar. Estos se pueden mantener un lapso de tiempo para que se quieran cambiar otra vez. 

En cambio los datos que si actualizan a cada rato son lo de los productos, aunque también se puede tener en cuenta como la dirección de envió del usuario, ya que se pueden agrega y/o actualizar los datos.

## Forma de los contextos

Estos contextos se forman de la siguiente manera:

```javascript
import React, { createContext } from "react";

const Context = React.createContext();

export default Context;
```

Claro estos con su respecto nombre al que se le quiera dar al contexto, pero el punto es que de esta manera se crea el contexto.

## Contextos en la carpeta

En esta carpeta existen tres contextos, dos los cuales se usan cuando el usuario ya esta logeado, el otro el cual guarda al objeto de autenticación de usuario, y el cual se usa para ver si cambia con un useEffect.

  - AuthenticatedUserContext
  - StoreContext
  - ProfileContext

### AuthenticatedUserContext

Este contexto es el que guarda el objeto de autenticación del usuario, el cual es usado para ver si se cambia el estado en el archivo **App.js**

### StoreContext

Este sirve para guarda los datos de la tienda del usuario si es que el tipo de cuenta del usuario es vendedor y ya tiene creado su tienda.

### ProfileContext

Es usado para guardar los datos que se muestran frecuentemente en el usuario y que no se pueden acceder mediante el contexto de "AuthenticatedUserContext".

Por ejemplo sería el tipo de cuenta, o también la dirección o direcciones de envió
