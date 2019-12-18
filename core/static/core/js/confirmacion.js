function confirmarEliminacion(id) {

    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras deshacer la accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      //  cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
            //redirigir a la ruta de eliminar
            window.location.href = "/eliminar-flor/"+id+"/";
        }
      })
}