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
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt iaculis arcu et pretium. Nulla facilisi.
    Aenean suscipit quis sapien ullamcorper hendrerit. Vivamus viverra convallis elit, nec mattis tellus egestas sed.`,
    `Integer interdum vulputate dolor, in faucibus turpis viverra sed. Vestibulum sed posuere arcu. Quisque interdum 
    sem sed consectetur blandit. Integer ipsum nunc, fermentum eget est sed, posuere pellentesque nibh.`,
    `Fusce quis aliquet ante, ultrices venenatis nulla. Curabitur in est et lacus hendrerit suscipit. Vivamus ultricies convallis velit vel elementum.`
  ];

  return words[Math.floor(Math.random() * words.length)];
}