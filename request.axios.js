const axios = require('axios');

async function fetchData() {
    const products = await axios.get('http://localhost:8000/product', {
        params: {
            filter: {
                in_stock: true,
                search: "sony"
            },
            page: 2
        }
    })

    console.log(products.data);
}


fetchData();