document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Giày', price: 50.00, description: 'Giày là một vật dụng đi vào bàn chân con người để bảo vệ và làm êm chân trong khi thực hiện các hoạt động khác nhau.', image: 'Hình/20230619_g56PqYH9vP.jpeg' },
        { name: 'Áo', price: 20.00, description: 'Áo là phần trang phục được mặc ở phần trên của cơ thể.', image: 'Hình/20571729-8b13-4f5d-a61e-c50bf4cb7de3.webp' },
        { name: 'Túi xách', price: 45.00, description: 'Túi xách là vật giúp bạn mang được nhiều vật dụng cần thiết do đó các thiết kế trong túi xách rất thông minh và cực kì tiện dụng.', image: 'Hình/Túi-xách-da-nữ-handmade-Velisa-560-3.jpeg' },
        { name: 'Trang sức', price: 80.00, description: 'Trang sức (hay còn gọi là nữ trang), là những đồ dùng trang trí cá nhân, ví dụ như: vòng cổ, nhẫn, vòng đeo tay, khuyên, thường được làm từ đá quý, kim loại ...', image: 'Hình/Mat-day-chuyen-bac-nu-dinh-kim-cương-Moissanite-tron-cách-dieu-LILI_413898_6.jpeg' },
        { name: 'Quần', price: 40.00, description: 'Quần là một loại trang phục che phần thân dưới của con người. Quần có nhiều kiểu dáng và chất liệu khác nhau, được sử dụng cho nhiều mục đích và trong nhiều ...', image: 'Hình/Quan-Baggy-Jean-nam-nu-2b-1-Quan-ong-rong-xanh-classic-ZiZoou-Store.webp' },
        { name: 'Nhẫn', price: 90.00, description: 'Nhẫn là một vòng tròn nhỏ, thường làm bằng kim loại, được đeo ở ngón tay như một vật phẩm trang sức, thỉnh thoảng là ngón chân. Một cặp nhẫn cưới.', image: 'Hình/nhẫn.webp' },
        { name: 'Đồ thể thao', price: 25.00, description: 'Quần áo thể thao là một phần quan trọng trong cuộc sống của nhiều người. Nó giúp chúng ta tập luyện hiệu quả hơn, thoải mái hơn và tự tin', image: 'Hình/dothethao.jpeg' },
        { name: 'Đồng hồ', price: 100.00, description: 'Đồng hồ là một dụng cụ thường dùng để đo khoảng thời gian dưới một ngày; khác với lịch, là một dụng cụ đo thời gian một ngày trở lên.', image: 'Hình/dongho.jpeg' },
        { name: 'Balo', price: 30.00, description: 'Balo là một loại hành lý có quai đeo trên lưng, có thể dùng để chứa vật dụng cá nhân, quần áo,… ', image: 'Hình/balo.jpeg' },
        { name: 'Máy ảnh', price: 120.00, description: 'Máy ảnh hay máy chụp hình là một dụng cụ dùng để thu ảnh thành một ảnh tĩnh hay thành một loạt các ảnh chuyển động', image: 'Hình/mayanh2.jpeg' },
        { name: 'Áo khoác', price: 70.00, description: 'Áo khoác là loại áo mặc bên ngoài, được sử dụng bởi cả nam và nữ, nhằm mục đích giữ ấm hoặc tạo tính thời trang', image: 'Hình/aokhoac.webp' },
        { name: 'Mắt Kính', price: 82.00, description: 'Kính mắt thường được dùng chữa các tật khúc xạ của mắt như cận thị, loạn thị và viễn thị.', image: 'Hình/matkinh.jpeg' }
    ];

    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total h3');
    const checkoutButton = document.querySelector('.cart-total button');
    const checkoutForm = document.querySelector('#checkout-form');

    let cart = [];

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function checkout() {
        // Implement checkout functionality here
        alert('Checkout functionality is not implemented yet.');
        // You can implement more detailed checkout process here
    }

    checkoutButton.addEventListener('click', checkout);

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(checkoutForm);
        const customerInfo = {};
        formData.forEach((value, key) => {
            customerInfo[key] = value;
        });
        console.log('Customer Info:', customerInfo);
        alert('Form submitted successfully! (Check console for details)');
        // Process customerInfo and cart data here (e.g., send to server, save to database)
        // Reset cart and clear form after successful submission
        cart = [];
        updateCart();
        checkoutForm.reset();
    });

    document.querySelectorAll('.product button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const productName = products[index].name;
            const productPrice = products[index].price;
            addToCart(productName, productPrice);
        });
    });

    // Populate products section in products.html
    const productsContainer = document.querySelector('#products');
    if (productsContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toFixed(2)}</p>
                <button>Add to Cart</button>
            `;
            productElement.querySelector('button').addEventListener('click', () => {
                addToCart(product.name, product.price);
            });
            productsContainer.appendChild(productElement);
        });
    }

    // Populate product detail page if applicable
    const productDetailContainer = document.querySelector('#product-detail');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get('product');
        const product = products.find(p => p.name === productName);
        if (product) {
            productDetailContainer.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <button>Add to Cart</button>
            `;
            productDetailContainer.querySelector('button').addEventListener('click', () => {
                addToCart(product.name, product.price);
            });
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const loginIcon = document.querySelector('.icon-shopee');
    const loginModal = document.querySelector('.login-modal');
    const closeModalButton = document.querySelector('.close-modal');

    loginIcon.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    closeModalButton.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });


});

