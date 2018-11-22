var html = document.querySelector('html');
html.classList.remove('no-js');
html.classList.add('js');

var navigation = document.querySelector('#navigation');
var nav_list = document.querySelector('.pages');

var nav_heading = document.createElement('h2');
var heading_link = document.createElement('a');
heading_link.textContent = "Menu";
heading_link.setAttribute('id', 'menu-button');

nav_heading.append(heading_link);

navigation.insertBefore(nav_heading, nav_list);

var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function() {
  nav_list.classList.toggle('visible');
})
