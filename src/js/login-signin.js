const LoginButton = document.querySelector('.login-btn');
const signupButton = document.querySelector('.signup-btn');
const genralModalContainer = document.querySelectorAll(
  '.login-sign-modual-container',
);
const loginModualContainer = document.querySelector('.login-modual-container');
const signUpModualContainer = document.querySelector(
  '.signup-modual-container',
);
const modalCloseBtns = document.querySelectorAll('.close-btn');

LoginButton.onclick = () => {
  modalOpen(loginModualContainer);
};

signupButton.onclick = () => {
  modalOpen(signUpModualContainer);
};

const modalOpen = (element) => {
  element.classList.remove('hidden');
  element.classList.add('flex');
};
const modalClose = (element) => {
  element.classList.add('hidden');
  element.classList.remove('flex');
};

modalCloseBtns.forEach((closeBtn) => {
  closeBtn.onclick = () => {
    genralModalContainer.forEach((modals) => {
      modalClose(modals);
    });
  };
});
