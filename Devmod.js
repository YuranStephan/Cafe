// Bloqueando o clique direito
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Bloqueando o uso de teclas para abrir as ferramentas de desenvolvedor
document.addEventListener('keydown', function (e) {
    // Previne Ctrl+Shift+I, Ctrl+Shift+J, F12
    if (e.ctrlKey && (e.key === 'I' || e.key === 'J') || e.key === 'F12') {
        e.preventDefault();
    }
});

// Bloqueando o acesso às ferramentas de desenvolvedor com F12
document.onkeydown = function(e) {
    if (e.keyCode === 123) { // F12
        return false;
    }
};

// Detectando a abertura das ferramentas de desenvolvedor (técnica simples)
(function() {
    var devtools = /./;
    devtools.toString = function() {
        // Não faz nada, apenas evita que as ferramentas de desenvolvedor sejam abertas
    };
    console.log(devtools);
})();

// Monitorando redimensionamento de janela (para detectar abertura das ferramentas de desenvolvedor)
window.addEventListener('resize', function() {
    if (window.innerWidth < 100 || window.innerHeight < 100) {
        // Evita redimensionamento suspeito sem exibir alertas
        return false;
    }
});
