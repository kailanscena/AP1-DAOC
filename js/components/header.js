export function criarHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';

    const logoTitulo = document.createElement('div');
    logoTitulo.style.display = 'flex';
    logoTitulo.style.alignItems = 'center';
    logoTitulo.style.gap = '12px';

    const logo = document.createElement('img');
    logo.src = 'assets/img/logo.jpg';
    logo.alt = 'Logo Loja dos Guri';
    logo.style.width = '48px';
    logo.style.height = '48px';
    logo.style.objectFit = 'contain';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Loja dos Guri';
    titulo.style.margin = '0';

    logoTitulo.appendChild(logo);
    logoTitulo.appendChild(titulo);

    const switchDiv = document.createElement('div');
    switchDiv.className = 'header-switch';

    const btnModoNoturno = document.createElement('button');
    btnModoNoturno.id = 'btn-modo-noturno';
    btnModoNoturno.className = 'switch-btn';

    const icon = document.createElement('div');
    icon.className = 'icon sun'; // Começa com o ícone do sol

    btnModoNoturno.appendChild(icon);
    switchDiv.appendChild(btnModoNoturno);

    header.appendChild(logoTitulo);
    header.appendChild(switchDiv);

    return header;
}