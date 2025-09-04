export function inicializarTema(btnModoNoturno, icon) {
    const preferenciaTema = localStorage.getItem('preferencia-tema');
    if (preferenciaTema) {
        if (preferenciaTema === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    if (document.body.classList.contains('dark-mode')) {
        btnModoNoturno.classList.add('dark');
        icon.className = 'icon moon';
    } else {
        btnModoNoturno.classList.remove('dark');
        icon.className = 'icon sun';
    }

    btnModoNoturno.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        btnModoNoturno.classList.toggle('dark');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'icon moon';
            localStorage.setItem('preferencia-tema', 'dark');
        } else {
            icon.className = 'icon sun';
            localStorage.setItem('preferencia-tema', 'light');
        }
    });
}