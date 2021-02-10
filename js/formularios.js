function Procesar(params) {
    event.preventDefault();
    var apagar = document.getElementById('comprar');
    if (document.getElementById('nombre').value.length == 0 || document.getElementById('cedula').value.length == 0 || document.getElementById('correo').value.length == 0 || document.getElementById('codigos').value.length == 0) {
        alertify
        .alert("Rellene todos los datos antes de realizar el pedido", function(){
        alertify.error('Informacion incompleta');
        });
    }else{
        alertify.success('Pedido enviado');
        apagar.setAttribute('disabled', 'true');
    }
}
function Borrar(params) {
    event.preventDefault();
    document.getElementById('formulario-pedido').reset();
}