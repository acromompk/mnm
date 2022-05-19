function Afip() {
    (async() => {


        const { value: pais } = await Swal.fire({



            html: "<p>En esta página podras:</p><br>- Realizar Altas y bajas<p></p><br><p>-Modificar ver nuevos ingresos</p><br><p>-Loren Ipsun</p>",

            icon: 'none',

            backdrop: true,

            imageUrl: "imagenes/afip.png",

            allowOutsideClick: false,

            confirmButtonText: 'Entendido',

            imageHeight: 200,
            imageWidth: 200,

        });




    })()

}