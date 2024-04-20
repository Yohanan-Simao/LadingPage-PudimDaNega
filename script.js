window.onscroll = function () {
  
  var sobe = document.getElementById('up')
  var catalog = document.getElementById('catalog-show')
  var catalogicon = document.getElementById('catalog-icon')

  if (window.scrollY > 200 && sobe){
    sobe.classList.add('activated-up')
    console.log('icone foi')
  } else {
    sobe.classList.remove('activated-up')
  }
  
  if (window.scrollY > 80 && catalog) {
    catalog.classList.add('catalog-active-up')
    console.log('catalago foi')
  } else {
    catalog.classList.remove('catalog-active-up')
  }

  if (window.scrollY > 70 && catalogicon) {
    catalogicon.classList.add('catalog-icon')
    console.log('ícone do catalogo foi')
  } else {
    catalogicon.classList.remove('catalog-icon')
  }
};