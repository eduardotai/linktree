const checkbox1 = document.getElementById('checkbox1');

// Função para alternar os estilos do body
function toggleBackground() {
    const body = document.body;
    body.classList.toggle('light', checkbox1.checked);
}

checkbox1.addEventListener('change', toggleBackground);