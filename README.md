# Rock Paper Scissors

Proyecto de un juego de Piedra, Papel o Tijera desarrollado como aplicación móvil utilizando React Native y Expo.

El jugador puede elegir una de las tres opciones y la computadora selecciona una opción de manera aleatoria. Después de cada ronda se muestra quién ganó, perdió o si hubo empate, además del marcador.

## Tecnologías

* React Native
* Expo
* JavaScript
* Jest
* Git / GitHub

## Arquitectura

Para organizar el proyecto utilizamos el patrón **MVC (Model-View-Controller)**.

### Model

En `models/GameModel.js` se encuentra la lógica principal del juego.

Aquí se manejan:

* Elección del jugador
* Elección de la computadora
* Resultado de la partida
* Marcador del jugador
* Marcador de la computadora

### Controller

En `controllers/GameController.js` se conecta la interacción del jugador con el modelo y se obtiene la información necesaria para mostrar el resultado.

### View

La interfaz de la aplicación se encuentra en los archivos de React Native y es la parte con la que interactúa el jugador.

### Value Object

Se utiliza un **VO (Value Object)** para manejar las opciones válidas del juego y evitar elecciones que no correspondan a Piedra, Papel o Tijera.

## Tests

Utilizamos **Jest** para probar la lógica del juego.

Para ejecutar los tests:

```bash
npm test
```

Los tests comprueban diferentes combinaciones entre la elección del jugador y la de la computadora, incluyendo:

* Piedra vs. Papel
* Piedra vs. Tijera
* Papel vs. Piedra
* Papel vs. Tijera
* Tijera vs. Piedra
* Tijera vs. Papel
* Empates

## Instalación

Primero clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Después entra al proyecto:

```bash
cd rock-paper-scissors
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar la aplicación

Para iniciar Expo:

```bash
npm start
```

También puedes abrir directamente la aplicación en iOS:

```bash
npm run ios
```

o en Android:

```bash
npm run android
```

## Cómo jugar

1. Inicia la aplicación.
2. Selecciona **Piedra**, **Papel** o **Tijera**.
3. La computadora seleccionará una opción.
4. Se mostrará el resultado de la ronda.
5. El marcador se actualiza dependiendo del resultado.

### Reglas

* 🪨 Piedra gana a Tijera.
* 📄 Papel gana a Piedra.
* ✂️ Tijera gana a Papel.
* Si ambos eligen lo mismo, es empate.


Proyecto realizado por Mariana Aguilar
