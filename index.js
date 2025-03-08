const fortunes = [
    " Voce e a razao pela qual acredito que o amor pode mudar o mundo.",
    " Nos seus olhos, encontrei o meu lugar no mundo.",
    " Te amo mais do que palavras podem expressar.",
    " Voce e a razao pela qual meu coracao bate mais forte a cada dia.",
    " Meu amor por voce e infinito e cresce a cada segundo.",
    " Voce e minha razao de sorrir, minha forca e a minha maior felicidade.",
    " Cansei, te quero todinha pra mim.",
    " Uma esposa exemplar; feliz quem a encontrar! E muito mais valiosa que os rubis.",
    " Antes de voce tava perdido sem saber.",
    " Voce e meu primeiro e ultimo pensamento do dia.",
    " Se o amor fosse um sonho, eu escolheria estar dormindo ao seu lado para sempre.",
    " Voce e a definicao de beleza em todos os sentidos.",
    " Nada se compara a sua beleza, por dentro e por fora.",
    " Voce e um sonho que eu nunca quero acordar",
    " O seu olhar tem o poder de conquistar o mundo",
    " Nada se compara a sua graca e encanto",
    " Cada detalhe em voce e uma obra de arte",
    " Seu sorriso e a coisa mais preciosa que eu ja vi",
    " A sua beleza me deixa sem palavras",
    " Te olhar e como admirar um por do sol perfeito",
    " Voce e a definicao de elegancia e encanto",
    " A sua presenca transforma qualquer lugar em algo especial",
    " Voce e tao linda que me faz esquecer o tempo",
  ];
  
  // Flip Card Functionality
  function flipCard(cardElement) {
    const cardInner = cardElement.querySelector('.card-inner');
    const isFlipped = cardInner.style.transform === 'rotateY(180deg)';
  
    // Add 'card-flipping' class to temporarily disable shadow
    cardElement.classList.add('card-flipping');
  
    // Trigger stars ONLY when flipping from the front to the back
    if (!isFlipped) {
      createMagicalStars(cardElement);
    }
  
    // Toggle flipping state
    cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  
    // Assign new fortunes if showing the back
    if (!isFlipped) {
      const fortunesText = cardElement.querySelectorAll('.fortune-text');
      const personalizedMessage = cardElement.querySelector('.personalized-message');
      fortunesText.forEach((fortuneText) => {
        fortuneText.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
      });
      personalizedMessage.textContent = `Here’s your fortune:`;
    }
  
    // Remove the 'card-flipping' class after the animation ends
    setTimeout(() => {
      cardElement.classList.remove('card-flipping');
    }, 600); // Match the flip transition duration (0.6s)
  }
  
  // Function to Create Magical Stars
  function createMagicalStars(cardElement) {
    const particleCount = 15; // Number of stars
    const rect = cardElement.getBoundingClientRect(); // Get card position and dimensions
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
  
      // Randomize position: around the card's top and sides
      const edge = Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomize edge
      let startX, startY;
  
      if (edge === 'horizontal') {
        // Horizontal edges (top or bottom)
        startX = rect.left + Math.random() * rect.width; // Random point along the card's width
        startY = rect.top; // Top of the card
      } else {
        // Vertical edges (left or right)
        startX = Math.random() < 0.5 ? rect.left : rect.right; // Left or right of the card
        startY = rect.top + Math.random() * rect.height; // Random point along the card's height
      }
  
      // Random angle and distance for star movement
      const angle = Math.random() * Math.PI * 2; // Random angle (0 to 360 degrees)
      const distance = Math.random() * 150 + 50; // Random distance (50px to 200px)
      const endX = startX + Math.cos(angle) * distance; // Move outward
      const endY = startY + Math.sin(angle) * distance;
  
      // Style the particle
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.position = 'fixed'; // Fixed to ensure proper positioning
      particle.style.transform = `translate(0, 0)`; // Start at the edge
      particle.style.opacity = 1; // Fully visible at the start
  
      // Append the particle to the body
      document.body.appendChild(particle);
  
      // Trigger outward animation
      requestAnimationFrame(() => {
        particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(1.2)`;
        particle.style.opacity = 0; // Gradual fade-out
      });
  
      // Remove the particle after animation ends
      setTimeout(() => {
        particle.remove();
      }, 1500); // Matches the animation duration
    }
  }
  
  