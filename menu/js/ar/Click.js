function Click() {
    (async() => {


        const { value: pais } = await Swal.fire({



            html: "<p>Es un sistema donde podras:</p><br>- Solicitar Adhesión al beneficio OSDE<p></p><br><p>-Solicitar credencial de acceso</p><br><p>-Gestionar tus vacaciones</p>",


            icon: 'none',

            backdrop: true,

            imageUrl: "imagenes/click.png",

            allowOutsideClick: false,

            confirmButtonText: 'Entendido',

            imageHeight: 200,
            imageWidth: 200,

        });




    })()

}