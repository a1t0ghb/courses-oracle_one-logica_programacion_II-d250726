<!-- Badges:
- Source: 'https://shields.io/docs/static-badges', 'https://shields.io/badges/static-badge'.
- HTML structure followed: 'https://github.com/facebook/docusaurus/blob/main/README.md?plain=1'.
- Badges with logos: 'https://shields.io/docs/logos', 'https://simpleicons.org/', 'https://github.com/simple-icons/simple-icons/blob/master/slugs.md'.
- HTML <a> tag not redirecting: 'https://stackoverflow.com/questions/8260546/make-a-html-link-that-does-nothing-literally-nothing/8260561#8260561', 'https://www.geeksforgeeks.org/html/how-to-create-html-link-that-does-not-follow-the-link/'.
-->
<p align="left">
  <a href="#" onclick="return false;"><img src="https://img.shields.io/badge/STATUS-DONE-green?style=flat"/></a>
</p>

<!-- README structure followed:
- 'https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github/'.
- 'https://github.com/camilafernanda/GlicoCare/'.
- 'https://github.com/nasa/openmct/'.
- 'https://github.com/facebook/docusaurus'.
-->
# Basic JavaScript Game: (en) 'Secret Number Game' / (sp) 'Juego Número Secreto'.

<p align="center">
  🌐 '<a href="https://a1t0ghb.github.io/courses-oracle_one-logica_programacion_II-d250726">https://a1t0ghb.github.io/courses-oracle_one-logica_programacion_II-d250726</a>'
</p>

Final delivery of the 2nd course: '[Lógica de programación: explorar funciones y listas](https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas)', from module (a.k.a. 'formación' in spanish) '[Principiante en Programación G9 - ONE](https://app.aluracursos.com/formacion-programacion-primeros-pasos-grupo9-one)', of [Alura LATAM](https://www.aluracursos.com/). <b>Part of [ORACLE Next Education (ONE)](https://www.oracle.com/co/education/oracle-next-education/) education program, in LATAM</b>.

<!-- Callouts:
- Improved format taken from examples in 'https://github.com/nasa/openmct/blob/master/README.md?plain=1'.
-->
> [!NOTE]
> This README:
> - Is **mainly** written in english (en), but it might have some sections in spanish (sp), since course content is in spanish.
> - Was created via web-browser GUI, not uploading a README.md locally via Git.

# About.
- The course covered topics such as:
  - Basics of web development: HTML files (e.g. as `index.html`) and tags, CSS files (e.g. `style.css`), and JavaScript files (e.g. `app.js`).
  - Basic HTML tags: `<h1>`, `<p>`.
  - Basics of JavaScript language:
    - Document Object Model (DOM) connectors; e.g. functions such as `document.querySelector(...);`.
    - HTML events linking to JavaScript functions; e.g. `<button onclick="intentoDeUsuario();" class="container__boton">Intentar</button>`.
    - Debugging logs; e.g. `console.log(intentos);`.
    - Variables definition; e.g. `let numeroGenerado = Math.floor(Math.random()*((numeroMaximoPosible - numeroMinimoPosible) + 1) + numeroMinimoPosible);`.
    - Functions definition; e.g. `function limpiarCaja() {document.querySelector('#valorUsuario').value = '';}`
    - If-else statements; e.g. `if (...) {...} else {...}`.
    - String templates; e.g. `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`.
    - Use of arrays; e.g. `listaNumerosSorteados.push(numeroGenerado);`
    - Use if recursion in functions.

## 🥇 Course Certificate of Completion.
Available at '<https://app.aluracursos.com/certificate/9a47e8e1-2bce-42d0-b9b0-612483a878d0>'.
- Estimated workload: 8h.
- Activities: 44.
- Topics:
  1. 'Interactuando con HTML'.
  2. 'Funciones'.
  3. 'Reniciando el juego'.
  4. 'Listas'.
  5. 'Publicando el proyecto'.

## Links to program resources.

**PROGRAM STRUCTURE.**
- <b>*[Course]* 'Lógica de programación: explorar funciones y listas'</b>: '<https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas>'.
- *[Module]* 'Principiante en Programación G9 - ONE': '<https://app.aluracursos.com/formacion-programacion-primeros-pasos-grupo9-one>'.
- **ORACLE Next Education (ONE) education program, in LATAM**: '<https://www.oracle.com/co/education/oracle-next-education/>'.
- Alura LATAM education platform: '<https://www.aluracursos.com/>'.

**COURSE RESOURCES.**
- GitHub's project repository: '<https://github.com/alura-es-cursos/2035-logica-programacion-2>'.

# Steps for Publishing Project on GitHub, and Deploying Public URL on GitHub Pages.

> [!NOTE]
> This section is only for reference, for documentation purposes in case of re-visiting procedure of publishing project.

## Upload project files to new GitHub repository.

**CREATE REPO. (SHORT FOR 'REPOSITORY').**
- Log-in into '<https://github.com/>'.
- Create new repo., via '<https://repo.new/>'.
- Define parameters of project creation; e.g.
  - Repo. name: 'courses-oracle_one-logica_programacion_II-d250726'.
  - Description: '2nd course project of JavaScript, focused on basics, from module 'Principiante en Programación', of ONE - ORACLE Next Education program.'.
  - Set visibility as 'Public'. ⚠ NOTE: this is **REQUIRED**, if you want to deploy and publish using GitHub Pages.

> [!NOTE]
> After creating repo., it will create a URL to access it in the format `https://github.com/<username>/<repo_name>`; e.g. '<https://github.com/a1t0ghb/courses-oracle_one-logica_programacion_II-d250726>'.

**UPLOAD PROJECT FILES AND FOLDERS.**
- GOTO Project's Home > 'Add file' > 'Upload files' (also accessible via URL; e.g. '<https://github.com/a1t0ghb/courses-oracle_one-logica_programacion_II-d250726/upload>'). You'll be prompted to create a **COMMIT** for uploading files.
- Drag-and-drop **ALL** files and folders from your PC to the GitHub page.
  - **Validate they were properly upload, and there is no missing folder and/or file**.
- Define parameters of commit; e.g.
  - Commit message: '1st commit: files upload using web-browser GUI.'
  - Commit description: [optional].
- Commit changes, and wait for upload.

## Deploy and Publish Public URL using GitHub Pages.

> [!IMPORTANT]
> 'GitHub Pages' is a **STATIC site hosting service**, included in GitHub's free plan for **PUBLIC repos.**; it takes HTML, CSS and JavaScript files **straight** from a GitHub's repo., *optionally* runs files through a Jekyll build using GitHub Actions, and publishes a website. Ref. '<https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#about-github-pages>'.

- GOTO Project's Home > 'Settings' > 'Code an automation' > 'Pages'.
- Set settings of 'Build and deployment':
  - Source: 'Deploy from a branch'.
  - Branch: [Select appropiate branch; usually 'main', '/root'.]
- Click 'Save', and *wait for some minutes* for URL to be created.
- You can validate the **deployment status** on Project's Home > Right-bar > 'Deployments'. **Usually called 'github-pages'**.

> [!NOTE]
> After waiting some minutes for the deployment, refresh `<F5>` the page, and it will create a URL to access the project in the format `https://<username>.github.io/<repo_name>`; e.g. '<https://a1t0ghb.github.io/courses-oracle_one-logica_programacion_II-d250726/>'.

### Limitations and some notes on GitHub Pages.

- Just like you can create a page / site for a project's repo., you can also can create a page / site for your user (or organization). Ref. '<https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites>'
  - Simply create a repo. with name `<username>.github.io`, instead of the regular `<repo_name>`. 
  - It's default site's location will be `http(s)://<username>.github.io`, instead of the regular `http(s)://<username>.github.io/<repo_name>`
- The entry file for your site MUST comply with following (Ref. '<https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site>'):
  - Be called either: `index.html`, `index.md`, or `README.md`.
  - Be at the TOP LEVEL of the source folder, of the source branch; e.g. in `main` branch: `/docs/index.html`, if publishing source is 'docs' folder.
- You can have MAXIMUM only 1 pages site per repo.; i.e. 1 public URL per repo (regardless of branches). Ref. '<https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites>'
  - But you can add more pages to your site by creating them; e.g. in `main` branch: `/about/contact-us.html` file, will be available at `https://<username>.github.io/<repo_name>/about/contact-us.html`. Ref. '<https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#next-steps>'.

<!-- Embed dynamic content (image) of contributors:
- 'https://dev.to/lacolaco/introducing-contributors-img-keep-contributors-in-readme-md-gci'.
- 'https://contrib.rocks/'.
- 'https://contrib.rocks/preview?repo=a1t0ghb%2Fcourses-oracle_one-logica_programacion_II-d250726'
-->
# Contributors.

<a href="https://github.com/a1t0ghb/courses-oracle_one-logica_programacion_II-d250726/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=a1t0ghb/courses-oracle_one-logica_programacion_II-d250726"/>
</a>

Made with [contrib.rocks](https://contrib.rocks).

<!-- Authors table structure
- From repo: 'https://github.com/camilafernanda/GlicoCare/blob/main/README.md?plain=1'.
-->
# Authors.

| [<img src="https://avatars.githubusercontent.com/u/32377614?v=4" width=70><br><sub>a1t0ghb</sub>](https://github.com/a1t0ghb) |
| :---: |
