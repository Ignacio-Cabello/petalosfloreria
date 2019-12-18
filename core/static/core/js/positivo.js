function mensajePositivo() {

    Swal.fire({
        title: 'Flor Agregada Correctamente',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("core/static/core/img/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}