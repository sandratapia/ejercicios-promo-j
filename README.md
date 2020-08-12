# Batería de ejercicios de Adalab

_Dentro de estas tres carpetas podréis encontrar los ejercicios que hemos ido desarrollando en cada uno de los módulos de Adalab._

## Módulo 1 🚀

_Aquí podréis encontrar los ejercicios relativos al Módulo 1, que son de HTML, CSS, Gulp, npm y SASS._

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>:)</title>
</head>
<body>

  <div class="smiley">:)</div>

</body>
</html>
```

## Módulo 2 🚀

_En esta carpeta encontraréis los ejercicios del Módulo 2, relativos a JavaScript ES6, condicionales, eventos, funciones, objetos, arrays y bucles y una infinidad más de ejercicios._

```
function media(a,b,c,d){
    return (a+b+c+d)/4;
}
console.log(`La media de estos números es ${media(1,2,3,4)}.`);
document.write(`La media de estos números es ${media(1,2,3,4)}.`);
```

## Módulo 3 🚀

_En la últma carpeta podréis encontrar ejercicios de React, desde los componentes más sencillos hasta algunos con Hooks y estados más complicados. Alternando componentes de clase y funcionales._

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
    this.state = {
      hour: "",
    };
  }

  updateClock() {
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.setState({
      hour: time,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.hour}</p>
      </div>
    );
  }
}

export default Clock;

```

---
⌨️ Con ❤️ por [SandraTapia](https://github.com/sandratapia) 😊
