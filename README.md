# CV Online

Curriculum vitae estático: **dark terminal soft**, minimalista, bilingüe ES/EN.

## Stack

- HTML / CSS / JS puro
- Sin frameworks, sin build

## Ver local

```bash
cd ~/cv-online
python3 -m http.server 5173
# → http://localhost:5173
```

O abre `index.html` en el navegador.

## Personalizar

Edita el objeto `CONTENT` y los strings de `I18N` en:

```
js/app.js
```

Campos clave:

| Campo | Qué es |
|--------|--------|
| `name` | Nombre |
| `email` | Email (botón copiar + tecla `e`) |
| `roles` | Frases del typewriter |
| `experience` | Trayectoria (ES + EN) |
| `skills` | Grupos de skills |
| `projects` | Proyectos seleccionados |

En `index.html` también puedes cambiar enlaces de GitHub / LinkedIn y la meta `loc/tz/stack` del hero.

## Deploy (GitHub Pages)

```bash
cd ~/cv-online
git init
git add .
git commit -m "feat: online cv"
# crea repo en GitHub y:
# git remote add origin git@github.com:USER/cv-online.git
# git push -u origin main
```

En el repo: **Settings → Pages → Deploy from branch `main` / root**.

## Diseño

- Fondo near-black + grid sutil + noise
- Acento phosphor (`#3dff9a`)
- Boot sequence (una vez por sesión)
- Typewriter en el rol
- Timeline estilo commits
- Toggle ES/EN persistente
- `prefers-reduced-motion` respetado
