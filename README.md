# Astro Starter Kit: Basics

# 🎬 The Simpsons - Recreación de Animación de Fortnite

<div align="center">
  <img src="/src/assets/simpsons-title.svg" alt="The Simpsons Logo" width="600"/>
</div>

## 🌟 Motivación del Proyecto

 Fortnite acaba de lanzar su temporada con Los Simpsons y que pasada lo que hicieron 🤯 y una de las animaciones que más me encantaron fue la de al iniciar la partida. Al ver esa transición tan fluida y creativa, surgió la curiosidad de replicar y entender cómo funciona ese tipo de animación, aplicando técnicas modernas de desarrollo web.

ME encantan Los Simpsons asi que aproveche para aprender y experimentar con animaciones avanzadas usando **GSAP (GreenSock Animation Platform)** y **Astro**.

## 🎯 Objetivos

- ✅ Recrear la animación de transición inspirada en Fortnite x Los Simpsons
- 🚧 Integrar contenido dinámico usando [The Simpsons API](https://thesimpsonsapi.com/)
- 📚 Aprender y documentar el uso de GSAP con ScrollTrigger
- 🎨 Experimentar con animaciones sincronizadas al scroll

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **GSAP 3** - Librería de animación profesional
- **ScrollTrigger** - Plugin de GSAP para animaciones con scroll
- **Tailwind CSS** - Framework de estilos
- **The Simpsons API** - API REST para contenido de Los Simpsons (próximamente)

## 🎓 Conceptos de GSAP Aprendidos

### 1. **gsap.timeline()**
Permite crear una secuencia de animaciones que se ejecutan en orden o simultáneamente:

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});
```

### 2. **ScrollTrigger**
Plugin que sincroniza animaciones con el scroll del usuario:

- **`trigger`**: Elemento que activa la animación
- **`start`**: Punto donde inicia la animación (`"top top"` = cuando el top del trigger toca el top del viewport)
- **`end`**: Punto donde termina la animación (`"bottom bottom"` = cuando el bottom del trigger toca el bottom del viewport)
- **`scrub`**: Vincula la animación con la posición del scroll (valor numérico suaviza la transición)

### 3. **Animaciones Simultáneas**
Uso del operador `"<"` para ejecutar múltiples animaciones al mismo tiempo:

```javascript
tl.to("#img-log", { scale: 100, duration: 3 })
  .to("#img-log", { y: 4000, duration: 3 }, "<")
  .to("#img-log", { x: -800, duration: 3 }, "<")
  .to("#scroll-content", { opacity: 1, duration: 1 }, "<1");
```

- Primera animación: escala el logo de 1 a 100
- Segunda animación (`"<"`): mueve el logo en el eje Y simultáneamente
- Tercera animación (`"<"`): mueve el logo en el eje X simultáneamente
- Cuarta animación (`"<1"`): aparece el contenido 1 segundo después del inicio

### 4. **Parámetros Clave de GSAP**

| Parámetro | Descripción |
|-----------|-------------|
| `scale` | Escala el elemento (1 = tamaño normal) |
| `x` / `y` | Traslada el elemento en píxeles |
| `opacity` | Controla la transparencia (0-1) |
| `duration` | Duración de la animación en segundos |
| `scrub` | Sincroniza la animación con el scroll |

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AlanSan1195/the-simpsons.git

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## 🚀 Comandos

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia el servidor en `localhost:4321` |
| `pnpm build` | Construye el proyecto para producción |
| `pnpm preview` | Previsualiza el build localmente |

## 🔮 Próximas Características

- 🎭 Integración completa con [The Simpsons API](https://thesimpsonsapi.com/)
- 🖼️ Galería de personajes animada
- 🎬 Más transiciones inspiradas en la serie
- 📱 Optimización para dispositivos móviles

## 🎨 Recursos

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [The Simpsons API](https://thesimpsonsapi.com/)
- [Fortnite x The Simpsons](https://www.fortnite.com/)

## 📝 Notas de Aprendizaje

Este proyecto es principalmente educativo y experimental. El objetivo es entender cómo funcionan las animaciones complejas sincronizadas con scroll, y cómo se pueden combinar múltiples transformaciones para crear efectos visuales impactantes.

La elección de Los Simpsons como tema no es casualidad - es una de mis series favoritas, y su API pública es perfecta para practicar la integración de datos externos con animaciones frontend.

---

**Dhuo! 💛**
