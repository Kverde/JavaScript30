const inputs = document.querySelectorAll('.controls input');

function onChange() {
  const sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach((e) => e.addEventListener('change', onChange));
inputs.forEach((e) => e.addEventListener('mousemove', onChange));
