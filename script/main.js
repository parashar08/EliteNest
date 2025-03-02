const products = [
    {
        title: 'Mens',
        image: 'https://assets.grok.com/users/24b352a1-08bc-4f33-8d07-40f940839afe/Ue4vRC83kqamEdqe-generated_image.jpg',       
    },
    {
        title: 'Womens',
        image: 'https://assets.grok.com/users/24b352a1-08bc-4f33-8d07-40f940839afe/6VfnisNkMoYT3wGP-generated_image.jpg'
    },
    {
        title: 'Kids',
        image: 'https://assets.grok.com/users/24b352a1-08bc-4f33-8d07-40f940839afe/KcMtHWxSFk0BFYF1-generated_image.jpg'
    },
    {
        title: 'Beauty',
        image: 'https://assets.grok.com/users/24b352a1-08bc-4f33-8d07-40f940839afe/MwvN2WfPXXn5pO0v-generated_image.jpg'
    },
    {
        title: 'Electronics',
        image: 'https://assets.grok.com/users/24b352a1-08bc-4f33-8d07-40f940839afe/9QtM350bbCKqmLoS-generated_image.jpg'
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