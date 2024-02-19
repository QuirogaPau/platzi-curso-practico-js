const productList = [];
productList.push({
  id: 1,
  name: 't-shirt',
  price: 40,
  image:
    'https://images.pexels.com/photos/11911031/pexels-photo-11911031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Una elegante camisa de mujer en tono celeste, con mangas cortas, que brinda un aspecto fresco y moderno.',
});
productList.push({
  id: 2,
  name: 'dress',
  price: 20,
  image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg',
  description: 'Un encantador vestido rosado, largo y confeccionado en una tela liviana ideal para la primavera o el verano. Destaca por su escote en V, que añade un toque de elegancia y feminidad a la prenda.',
});
productList.push({
  id: 3,
  name: 'shoes',
  price: 100,
  image:
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un par de zapatillas Nike urbanas, predominantemente blancas con toques de amarillo, que añaden un toque vibrante y moderno. Su diseño combina estilo y comodidad para el uso diario en entornos urbanos.',
});
productList.push({
    id: 4,
    name: 'bikinis',
    price: 75,
    image:
      'https://images.pexels.com/photos/8157744/pexels-photo-8157744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Estos bikinis están confeccionados con telas de alta calidad que ofrecen comodidad y durabilidad. La suavidad y elasticidad de la tela proporcionan un ajuste perfecto y una sensación de lujo al usarlos, mientras que los colores vibrantes como el naranja y el verde añaden un toque de frescura y estilo. Perfectos para disfrutar del sol y el agua con confianza y confort.',
});
productList.push({
    id: 5,
    name: 'warm jacket',
    price: 80,
    image:
      'https://images.pexels.com/photos/833170/pexels-photo-833170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Una llamativa campera rompevientos dividida en dos tonos contrastantes: mitad roja y mitad negra. Fabricada con materiales resistentes al viento, esta prenda no solo ofrece protección contra las ráfagas, sino que también destaca por su diseño moderno y audaz. Perfecta para añadir estilo y funcionalidad a tus actividades al aire libre.',
});
productList.push({
    id: 6,
    name: 'skate',
    price: 100,
    image:
      'https://images.pexels.com/photos/5069290/pexels-photo-5069290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un skateboard en un tono amarillo limón que irradia energía y estilo. Con su color llamativo, este skateboard no solo es un medio de transporte urbano, sino también una declaración de moda. Listo para deslizarse por las calles con un toque de audacia y diversión.',
});
productList.push({
    id: 7,
    name: 'shoes',
    price: 100,
    image:
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un par de zapatillas Nike urbanas, predominantemente blancas con toques de amarillo, que añaden un toque vibrante y moderno. Su diseño combina estilo y comodidad para el uso diario en entornos urbanos',
});
productList.push({
   id: 8, 
    name: 'shoes',
    price: 100,
    image:
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un par de zapatillas Nike urbanas, predominantemente blancas con toques de amarillo, que añaden un toque vibrante y moderno. Su diseño combina estilo y comodidad para el uso diario en entornos urbanos',
});
productList.push({
    id: 9, 
    name: 'shoes',
    price: 100,
    image:
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un par de zapatillas Nike urbanas, predominantemente blancas con toques de amarillo, que añaden un toque vibrante y moderno. Su diseño combina estilo y comodidad para el uso diario en entornos urbanos',
});

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClosed = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleShoppingCartContainer);
productDetailClosed.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  
  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  menuMobile.classList.toggle('inactive');
  closeProductDetailAside();
}

function toggleShoppingCartContainer() {
  const isMobileMenuClosed = menuMobile.classList.contains('inactive');
  const isMenuDesktopclosed = desktopMenu.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    menuMobile.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');

  if (!isMenuDesktopclosed) {
    desktopMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');  
  if (!isProductDetailClosed) {
    closeProductDetailAside();
  }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive'); //Esto se puede hacer porque la funcion openProductDetailAside solo funciona para abrir el detalle de producto, si tuviese un toggle no se podria.
  productDetailContainer.classList.remove('inactive');

}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
  if(productDetailContainer.classList.contains('inactive')){
    document.querySelector("#closeButton").remove();
    document.querySelector("#productImage").remove();
    document.querySelector("#productInfo").remove();
  } 
  
}


function renderProducts(arr) {
    for (let product of arr) {
        // Creamos elementos HTML y agregamos clases a los mismos.
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      
      const productImageCard = document.createElement('img');
      productImageCard.setAttribute('src', product.image);
      productImageCard.addEventListener('click', () => renderProductDetail(product));
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');

      const productPrice = document.createElement('p');
      productPrice.innerText = `$ ${product.price}`;

      const productName = document.createElement('p');
      productName.innerText = product.name;
        // Creamos la dependencia de productPrice y name de productInfoDiv
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
     const productInfoFigure = document.createElement('figure');
     const productImg = document.createElement('img');
     productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
     productInfoFigure.appendChild(productImg);
    
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfoFigure);
    
     productCard.appendChild(productImageCard);
     productCard.appendChild(productInfo);
    
     cardsContainer.appendChild(productCard);
    }
}

function renderProductDetail(product) {
  if(!productDetailContainer.classList.contains('inactive')){
    document.querySelector("#closeButton").remove();
    document.querySelector("#productImage").remove();
    document.querySelector("#productInfo").remove();
  } 
  
  productDetailContainer.classList.remove('inactive');

  //Icono para cerrar
  const closeButton = document.createElement('img');
  closeButton.setAttribute('id', 'closeButton');
  closeButton.src = './icons/icon_close.png';
  closeButton.alt = 'close';
  
  //Imagen del producto
  const productImageDetail = document.createElement('img');
  productImageDetail.setAttribute('src', product.image);
  productImageDetail.setAttribute('id', 'productImage');
  productImageDetail.alt = product.name;
  
  // Precio del producto
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  productInfo.setAttribute('id', 'productInfo');

  const productPrice = document.createElement('p');
  productPrice.innerText = `$ ${product.price}`;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  const productDescription = document.createElement('p');
  productDescription.innerText = product.description;

  productInfo.appendChild(productPrice);
  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);

  const addButton = document.createElement('button');
  addButton.classList.add('primary-button', 'add-to-cart-button');
  
  const iconAddButton = document.createElement('img');
  iconAddButton.src = './icons/bt_add_to_cart.svg';
  iconAddButton.alt = 'add to cart';

  const textNode = document.createTextNode('Add to cart');

  // Agrega el icono y el texto al botón
  productDetailClosed.appendChild(closeButton);
  addButton.appendChild(iconAddButton);
  addButton.appendChild(textNode);
  productInfo.appendChild(addButton);
  
  productDetailContainer.appendChild(productImageDetail);
  productDetailContainer.appendChild(productInfo);

}


renderProducts(productList);