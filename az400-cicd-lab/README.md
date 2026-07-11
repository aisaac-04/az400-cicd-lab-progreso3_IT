# az400-cicd-lab

## Proposito general
Este repositorio contiene un sitio web estatico para un laboratorio academico de integracion continua con GitHub y Azure Pipelines. Cada estudiante trabajara sobre un componente especifico y lo validara con su propia pipeline.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript

## Estructura del repositorio

```text
az400-cicd-lab/
|-- site/
|   |-- index.html
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   `-- app.js
|   `-- components/
|       |-- student-01.html
|       |-- student-02.html
|       |-- student-03.html
|       |-- student-04.html
|       |-- student-05.html
|       |-- student-06.html
|       `-- student-07.html
|-- pipelines/
|   `-- README.md
|-- evidence/
|   `-- README.md
`-- README.md
```

## Ejecucion con Live Server
1. Abrir la carpeta del proyecto en VS Code.
2. Ir al archivo site/index.html.
3. Ejecutar Live Server desde VS Code para abrir el sitio en el navegador.

## Relacion estudiante-componente

| Estudiante | Componente |
|---|---|
| student-01 | student-01.html |
| student-02 | student-02.html |
| student-03 | student-03.html |
| student-04 | student-04.html |
| student-05 | student-05.html |
| student-06 | student-06.html |
| student-07 | student-07.html |

## Alcance de modificacion por estudiante
Cada estudiante solo debe modificar:
- Su componente asignado dentro de site/components.
- Su archivo de pipeline dentro de pipelines.
- Su archivo de evidencias dentro de evidence.
