window.onscroll = function () {
  
  var sobe = document.querySelector('#up')
  var catalog = document.querySelector('#catalog-show')
  var catalog2 = document.querySelector('#catalog-show2')
  var catalog3 = document.querySelector('#catalog-show3')
  var catalog4 = document.querySelector('#catalog-show4')
  var catalog5 = document.querySelector('#catalog-show5')
  var catalogicon = document.querySelector('#catalog-icon')
  var catalogL = document.querySelector('#catalog-show')
  
  if (window.scrollY > 1200){
    sobe.classList.add('activated-up')
    sobe.classList.remove('.catalog-icon')
  } else {
    sobe.classList.remove('activated-up')
    console.log('deu erro')
  }
  
  if (window.scrollY > 50 && catalog) {
    catalog.classList.add('catalog-active-up')
    catalog2.classList.add('catalog-active-up')
    catalog3.classList.add('catalog-active-up')
    catalog4.classList.add('catalog-active-up')
    catalog5.classList.add('catalog-active-up')
  } else {
    catalog.classList.remove('catalog-active-up')
    catalog2.classList.remove('catalog-active-up')
    catalog3.classList.remove('catalog-active-up')
    catalog4.classList.remove('catalog-active-up')
    catalog5.classList.remove('catalog-active-up')
  }

  if (window.scrollY > 50 && catalogicon) {
    catalogicon.classList.add('catalog-icon')
  } else {
    catalogicon.classList.remove('catalog-icon')
  }

  if (window.scroll = 0 && catalogL) {
    catalogL.classList.add('invisible')
  } else {
    console.log('deu pau')
  }
};
