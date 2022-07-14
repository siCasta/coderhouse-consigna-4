function $(value) {
    return document.querySelector(value)
}

const form = $('#form')
const showMessage = $('#message')

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault()

        const formData = new FormData(form)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })

        data.price = parseInt(data.price)
        console.log(data)

        const product = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const productDB = await product.json()

        if (!product.ok) throw productDB

        form.reset()

        swal({
            title: 'Producto creado',
            text: productDB.message,
            icon: 'success',
            button: 'Aceptar'
        })
    } catch (err) {
        swal({
            title: 'Error',
            text: err.message,
            icon: 'error',
            button: 'Aceptar'
        })
    }
})
