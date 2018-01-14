import '../sass/main.scss';
import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';

let preloadedImages = [];

// Get modal content async
const modalContent = import('../work-data.js').then(({ default: data }) => {
  // Preload images that are in the modal
  const images = Object.keys(data)
    .map(entry => data[entry].images)
    .filter(Boolean)
    .reduce((images, array) => images.concat(array), []);

  preload(...images);

  return data;
});

function preload(...images) {
  images.forEach((item, i) => {
    let image = new Image();
    image.src = images[i];
    preloadedImages = preloadedImages.concat(image);
  });
}

// Init Scroll reveal plugin
window.sr = ScrollReveal();

// Init Smooth scroll plugin
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  offset: 40,
  easing: 'easeInOutCubic'
});

let content = document.getElementsByClassName('content')[0];

// Content translated to center it, while some elements go outside the visible area
const translateContent = () => {
  const windowWidth = window.innerWidth;
  const screenWidt = screen.width;
  let width;

  // Width on desktop
  if (windowWidth <= screenWidt) {
    width = windowWidth;
    // Width on touch devices
  } else {
    width = screenWidt;
  }

  console.log(width);
  var ratio = window.devicePixelRatio || 1;
  var w = screen.width * ratio;
  var h = screen.height * ratio;
  var we = screen.width;
  var he = screen.height;

  console.log(ratio, w, h, we, he);

  // 1350 is content width
  let translate = (1350 - width) / 2;

  if (width < 1340 && width > 620) {
    content.style.transform = 'translateX(-' + translate + 'px)';
    content.style.width = '1350px';
  } else if (width > 1340) {
    content.style.transform = 'none';
  } else if (width < 620 && width > 420) {
    content.style.width = 'auto';
    content.style.transform = 'none';
  } else if (width < 420) {
    translate = (380 - width) / 2;
    content.style.transform = 'translateX(-' + translate + 'px)';
    content.style.width = '420px';
  }
};

// Translate content on page load and on resize
window.requestAnimationFrame(translateContent);

window.addEventListener('resize', () => {
  window.requestAnimationFrame(translateContent);
});

// Show and hide modals
const readMoreLinks = document.getElementsByClassName('read-more');

for (let i = 0; i < readMoreLinks.length; i++) {
  readMoreLinks[i].addEventListener('click', openModal, false);
}

const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const modalContainer = document.getElementById('modal-content');
const closeButton = document.querySelector('#close-button');

[closeButton, modalOverlay].forEach(item => {
  item.addEventListener('click', closeModal);
});

function closeModal() {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  document.body.classList.toggle('modal-open');
  const imageCol = document.getElementsByClassName('image-col')[0];
  if (imageCol !== undefined) {
    imageCol.parentNode.removeChild(imageCol);
  }
  setTimeout(() => {
    modal.classList.remove('no-images');
    modalContainer.scrollTop = 0;
  }, 500);
}

function openModal(e) {
  e.preventDefault();
  document.body.classList.toggle('modal-open');
  // Get id from href, remove the first character #
  const id = e.target.hash.substring(1);
  modalContent.then(data => {
    document.getElementById('modal-title').innerHTML = data[id].title;
    document.getElementById('modal-text').innerHTML = data[id].text;

    addContent('challenges', data[id]);
    addContent('differently', data[id]);

    createLink(data[id], 'href', 'preview-link', data[id].href, data[id].linkText);
    createLink(data[id], 'code', 'code-link', data[id].code);

    // Add images
    if (data[id].hasOwnProperty('images')) {
      modalContainer.insertAdjacentHTML('beforeend', '<div class="modal-col image-col"></div>');
      const imageCol = document.getElementsByClassName('image-col')[0];
      const images = data[id].images;
      images.forEach(image => {
        imageCol.insertAdjacentHTML('beforeend', `<img src="${image}" alt="">`);
      });
    } else {
      modal.classList.add('no-images');
    }
  });
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
}

function addContent(id, data) {
  const element = document.getElementById('modal-' + id);
  const elements = document.getElementsByClassName(id);

  if (data.hasOwnProperty(id)) {
    element.innerHTML = data[id];
    // Show text and title
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'block';
    }
  } else {
    // Hide text and title
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }
}

function createLink(data, property, id, link, linkText) {
  const element = document.getElementById(id);
  if (data.hasOwnProperty(property)) {
    element.setAttribute('href', link);
    if (linkText !== undefined) {
      element.innerHTML = linkText;
    }
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Define elements shown with Scroll reveal
sr.reveal('.row-reveal');
