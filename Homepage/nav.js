var menuHidden = true;
document.querySelector(document).ready(function(){
    document.querySelector('#menu').click(function(){
      document.querySelector('.menu-hide').classList.toggle('show');
    });
    document.querySelector('a').click(function(){
      document.querySelector('.menu-hide').classList.remove('show');
    });
    document.querySelector('#menu').click(function(){
      document.querySelector('#menu').classList.toggle('ham_move');
    });
    document.querySelector('a').click(function(){
      document.querySelector('#menu').classList.remove('ham_move');
    });
  });