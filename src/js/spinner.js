
export const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
  backdrop: document.querySelector('.backdrop'),
  spinner: document.querySelector('.js-spinner'),
  body: document.querySelector('body'),
  btnUp: document.getElementById('to-top-btn'),
  btnUpWrapper: document.querySelector('.btn-up'),
  like: document.querySelector('.heart'),
  searchInput: document.querySelector('.search-form-input'),
};


export function spinnerPlay() {
  refs.body.classList.add('loading');
}

export function spinnerStop() {
  window.setTimeout(function () {
    refs.body.classList.remove('loading');
    refs.body.classList.add('loaded');
  }, 1500);
}