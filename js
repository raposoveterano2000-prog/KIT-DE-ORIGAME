document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu mobile se estiver aberto
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Menu Hamburguer (Mobile)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburgerMenu.classList.toggle('active'); // Adiciona/remove classe para animação do ícone
    });

    // Chatbot Interativo
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotBox = document.getElementById('chatbot-box');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotOptionBtns = document.querySelectorAll('.chatbot-option-btn');

    chatbotToggle.addEventListener('click', () => {
        chatbotBox.classList.toggle('open');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotBox.classList.remove('open');
    });

    chatbotOptionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.textContent;
            const dataQuestion = button.dataset.question;
            addMessage(question, 'user-message');
            simulateBotResponse(dataQuestion);
        });
    });

    function addMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = text; // Permite emojis e formatação básica
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Rola para a mensagem mais recente
    }

    function simulateBotResponse(questionType) {
        let botResponse = '';
        switch (questionType) {
            case 'confiavel':
                botResponse = 'Sim! Nosso Kit de Origamis é 100% confiável. 🏆 Milhares de pessoas já transformaram papel em arte e relaxamento conosco. Sua satisfação é nossa prioridade!';
                break;
            case 'garantia':
                botResponse = 'Oferecemos uma garantia de 7 dias! 😊 Se você não amar o Kit de Origamis por qualquer motivo, devolvemos seu dinheiro. Sua compra é sem riscos!';
                break;
            case 'saber-mais':
                botResponse = 'O Kit inclui PDFs passo a passo, vídeos tutoriais exclusivos, modelos 3D incríveis (como o Gato 3D) e até dicas para você vender suas criações! 🌟 Explore as seções "Sobre" e "Benefícios" para mais detalhes.';
                break;
            case 'testar':
                botResponse = 'Com certeza! 🎉 Você pode baixar nosso modelo gratuito do <a href="https://drive.google.com/file/d/1LkUyGoVki1regg7SbQY9OHgRyTJHFC77/view?usp=sharing" target="_blank" style="color: white; text-decoration: underline;">Gato 3D de Papel (PDF)</a> e experimentar a mágica do origami agora mesmo! É só clicar no link. 😊';
                break;
            default:
                botResponse = 'Hmm, não entendi essa pergunta. Você pode escolher uma das opções acima? Ou explore nosso site para mais informações! 😉';
        }

        setTimeout(() => {
            addMessage(botResponse, 'bot-message');
        }, 800);
    }

    // Floating Buy Button
    const floatingBuyBtn = document.getElementById('floating-buy-btn');
    const heroSection = document.getElementById('hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight) { // Mostra o botão após a seção Hero
            floatingBuyBtn.classList.add('show');
        } else {
            floatingBuyBtn.classList.remove('show');
        }
    });

    // Animate on Scroll (observador de interseção)
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Opcional: para animar apenas uma vez
            }
        });
    }, { threshold: 0.2 }); // Elemento visível em 20%

    animateElements.forEach(element => {
        observer.observe(element);
    });
});
