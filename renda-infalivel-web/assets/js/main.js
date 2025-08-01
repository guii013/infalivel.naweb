// Este arquivo contém o código JavaScript que gerencia a interação da página, como a navegação entre as partes do ebook e a manipulação de eventos.

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const paginationLinks = document.querySelectorAll('.pagination-link');

    // Função para mostrar a seção selecionada
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Adiciona eventos de clique aos links de paginação
    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            showSection(index);
        });
    });

    // Mostra a primeira seção por padrão
    showSection(0);

    document.getElementById('leadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('leadMsg').textContent = 'Obrigado! Seus dados foram enviados com sucesso.';
        document.getElementById('leadForm').reset();
    });

    document.getElementById('btnComprar').addEventListener('click', function() {
        const msg = document.getElementById('compraMsg');
        msg.textContent = 'Parabéns! Você está a um passo de transformar sua renda. Clique no botão acima para finalizar sua compra.';
        msg.classList.add('show');
        setTimeout(() => {
            msg.classList.remove('show');
            msg.textContent = '';
        }, 5000);
    });

    // Cronômetro de oferta limitada (exemplo: 15 minutos)
    function iniciarCronometro(duracaoMinutos) {
        const cronometroElement = document.getElementById('cronometro');
        let tempoRestante = duracaoMinutos * 60; // Converter minutos para segundos

        function atualizarCronometro() {
            const minutos = Math.floor(tempoRestante / 60);
            const segundos = tempoRestante % 60;

            // Formatar com zero à esquerda se necessário
            const minutosFormatados = String(minutos).padStart(2, '0');
            const segundosFormatados = String(segundos).padStart(2, '0');

            // Atualizar o display
            cronometroElement.innerHTML = `${minutosFormatados}:${segundosFormatados}`;

            // Verificar se o tempo acabou
            if (tempoRestante === 0) {
                clearInterval(interval);
                cronometroElement.innerHTML = "Oferta Expirada!";
                cronometroElement.style.color = "#FF0000";
            } else {
                tempoRestante--;
            }
        }

        // Iniciar o cronômetro imediatamente e depois a cada segundo
        atualizarCronometro();
        const interval = setInterval(atualizarCronometro, 1000);
    }

    // Iniciar o cronômetro quando a página carregar
    iniciarCronometro(15); // 15 minutos
});

// Estilos para os botões de mídia social
const style = document.createElement('style');
style.textContent = `
.social-buttons {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
}

.social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    transition: transform 0.2s;
}

.social-btn svg {
    display: block;
    transition: stroke 0.2s, transform 0.2s;
}

.social-btn:hover svg,
.social-btn:focus svg {
    stroke: #A5FF00;
    transform: scale(1.15);
}
`;
document.head.append(style);

<footer>
    <p>&copy; 2025 Renda Infalível na Web</p>
    <div class="social-buttons">
        <a href="https://instagram.com/infalivel.naweb" target="_blank" aria-label="Instagram" class="social-btn">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#1C2D4A" stroke-width="2"/>
                <path d="M21 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm2.5-5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="#1C2D4A" stroke-width="2" fill="none"/>
            </svg>
        </a>
        <a href="https://facebook.com/infalivelnaweb" target="_blank" aria-label="Facebook" class="social-btn">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#1C2D4A" stroke-width="2"/>
                <path d="M18 12h2v-3h-2c-2 0-3 1-3 3v2h-2v3h2v7h3v-7h2l1-3h-3v-2c0-0.5 0.5-1 1-1z" stroke="#1C2D4A" stroke-width="2" fill="none"/>
            </svg>
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" aria-label="WhatsApp" class="social-btn">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#1C2D4A" stroke-width="2"/>
                <path d="M21 19c-1-1-2-1-3-2s-1-2-2-3c-1-1-2-1-3-2s-1-2-2-3c-1-1-2-1-3-2" stroke="#1C2D4A" stroke-width="2" fill="none"/>
            </svg>
        </a>
    </div>
</footer>