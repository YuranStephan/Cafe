// Menu bar 
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Active section with scroll 
let section = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    
  section.forEach(sec => { 
   
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        
      navLinks.forEach(links => { 
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        
      });
    }
  }); 
};

// Search form

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}

// Swiper container Dishes
var swiper = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
}); 
  
// Swiper container Review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  loop: true,
  breakpoints: {
    0: {
            slidesPerView :1,        
    },
    640: {
      slidesPerView :2, 
    },
    768: {
      slidesPerView :2, 
    },
    1024: {
      slidesPerView :3, 
    },
    },
}); 
  

// loader part

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

// Criação do observador de rolagem
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe quando a caixa entra na tela
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Para de observar quando já estiver visível
        }
    });
}, { threshold: 0.5 }); // Ativa quando 50% da caixa estiver visível

// Observando cada caixa
boxes.forEach(box => {
    observer.observe(box);
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-animation');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show'); // Adiciona a classe "show" quando visível
              observer.unobserve(entry.target); // Para de observar após a animação
          }
      });
  }, {
      threshold: 0.1 // Quando 10% do elemento estiver visível
  });

  elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              const target = entry.target;
              if (entry.isIntersecting) {
                  target.classList.add("vibrate"); // Adiciona a classe de vibração
              } else {
                  target.classList.remove("vibrate"); // Remove a classe quando sair de vista
              }
          });
      },
      { threshold: 0.5 } // A animação começa quando 50% da imagem está visível
  );

  const image = document.querySelector(".contact .row .image img.small-image");
  if (image) {
      observer.observe(image); // Observa a imagem para mudanças de visibilidade
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.speciality .box-container .box');
  let lastScrollTop = 0; // Para controlar a direção do scroll

  const revealOnScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Verifica se o scroll é para baixo
      if (currentScroll > lastScrollTop) {
          boxes.forEach((box) => {
              const boxTop = box.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;

              // Quando a caixa estiver dentro da tela, adiciona a classe 'visible'
              if (boxTop < windowHeight - 100 && boxTop > 0) {
                  box.classList.add('visible');
              }
          });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previne valores negativos
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Chama imediatamente para verificar a posição inicial.
});

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
