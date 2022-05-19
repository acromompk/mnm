function explicAlert() {
    (async() => {


        const { value: pais } = await Swal.fire({

            title: "Workday",

            html: "<p>Es un sistema donde podras:</p><br>- Abrir Meta4<p></p><br><p>-Acceder al comparto</p><br><p>-Acceder a aplicaciones extra segun tus permisos</p>",

            icon: 'none',

            backdrop: true,

            imageUrl: "imagenes/citrix.png",

            allowOutsideClick: false,

            showCancelButton: true,

            imageHeight: 200,
            imageWidth: 200,

        });




    })()

}