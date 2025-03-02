const products = [
    {
        title: 'Mens',
        image: 'assets/men.avif',       
    },
    {
        title: 'Womens',
        image: 'assets/women.avif'
    },
    {
        title: 'Kids',
        image: 'assets/kids.jpg'
    },
    {
        title: 'Beauty',
        image: 'assets/beauty.jpeg'
    },
    {
        title: 'Electronics',
        image: 'assets/electronics.jpg'
    }
];

let productHTML =  '';

products.forEach((product) => {
    productHTML += `<div class="product-box">
                        <h2 class="product-title">${product.title}</h2>
                        <div class="product-images">
                            <img src="${product.image}" alt="">
                        </div>
                        <a href="" class="see-more">see more</a>
                    </div>`;
});

document.querySelector('.js-grid-container').innerHTML = productHTML;