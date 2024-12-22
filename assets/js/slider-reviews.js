let users = [];
let currentReview = 0;
let maxReviews = 0;

// Obter avaliações aleatórias através de: https://randomuser.me/documentation#howto
$(document).ready(function () {
  $.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: function (data) {
      users = data.results;
      maxReviews = users.length;

      showReview(users);
    }
  });
});

// Função para exibir a próxima avaliação
function nextReview() {
  currentReview++;
  if (currentReview >= maxReviews) {
    currentReview = 0;
  }
  showReview(users);
}

// Função para exibir a avaliação anterior
function previousReview() {
  currentReview--;
  if (currentReview < 0) {
    currentReview = maxReviews - 1;
  }
  showReview(users);
}

// Função para exibir a avaliação atual
function showReview(data) {
  let review = document.querySelector('.review');
  let image = document.querySelector('.review-image');
  let name = review.querySelector('.review-name');
  let text = review.querySelector('.review-text'); // Criar uma função que retorne um texto aleatorio

  image.src = data[currentReview].picture.large;
  name.textContent = `${data[currentReview].name.first} ${data[currentReview].name.last}`;
  text.textContent = randomText();
}

// Função para gerar um texto aleatório combinando palavras
function randomText() {
  let words = [
    `A WoofWorks transformou completamente a forma como gerimos a nossa creche! 
    Antes, passávamos horas a organizar reservas e a comunicar com os tutores, mas agora tudo está centralizado e super simples. 
    Os tutores adoram receber atualizações sobre os seus cães em tempo real, e nós poupamos imenso tempo. Recomendo sem dúvida!`,

    `Desde que implementámos a WoofWorks na nossa creche, notámos um aumento na satisfação dos nossos clientes. 
    A funcionalidade de check-in/check-out é fantástica, e o calendário integrado facilitou muito a nossa organização. 
    Além disso, a equipa de suporte da WoofWorks está sempre disponível para ajudar. É um investimento que vale cada cêntimo!`,

    `Adoro o quão intuitiva é a WoofWorks! Não sou muito bom com tecnologia, mas consegui aprender a usar o sistema em pouco tempo. 
    Os relatórios detalhados ajudam-me a entender as preferências dos nossos clientes e a melhorar o serviço.
    Obrigado por facilitarem tanto o meu trabalho!`,

    `A funcionalidade de registo digital dos cães foi uma revolução para nós. 
    Já não perdemos tempo com papelada, e podemos facilmente aceder ao histórico de cada cão, incluindo alergias ou preferências. 
    E ainda mais, os tutores adoram o sistema de notificações e as fotos do dia. Obrigada, WoofWorks!`,

    `A WoofWorks deu-nos a organização que precisávamos! Com a integração de pagamentos e a gestão de reservas, conseguimos reduzir 
    os erros e melhorar a experiência tanto para os tutores quanto para os cães. O feedback dos tutores tem sido muito positivo, 
    especialmente sobre as fotos e os relatórios diários.`
  ];

  return words[Math.floor(Math.random() * words.length)];
}