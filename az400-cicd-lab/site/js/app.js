const components = [
  "student-01.html",
  "student-02.html",
  "student-03.html",
  "student-04.html",
  "student-05.html",
  "student-06.html",
  "student-07.html"
];

const container = document.getElementById("components-container");

function renderPending(componentName) {
  const pendingCard = document.createElement("article");
  pendingCard.className = "component-pending";
  pendingCard.innerHTML = `
    <h2>${componentName}</h2>
    <p>Este componente esta pendiente de contenido.</p>
  `;
  container.appendChild(pendingCard);
}

function renderError(componentName) {
  const errorCard = document.createElement("article");
  errorCard.className = "component-error";
  errorCard.innerHTML = `
    <h2>Error de carga</h2>
    <p>No fue posible cargar el componente ${componentName}.</p>
  `;
  container.appendChild(errorCard);
}

async function loadComponent(componentName) {
  try {
    const response = await fetch(`components/${componentName}`);

    if (!response.ok) {
      renderError(componentName);
      return;
    }

    const content = await response.text();

    if (content.trim() === "") {
      renderPending(componentName);
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = content;
    container.appendChild(wrapper);
  } catch (error) {
    renderError(componentName);
  }
}

async function init() {
  for (const component of components) {
    await loadComponent(component);
  }
}

init();
