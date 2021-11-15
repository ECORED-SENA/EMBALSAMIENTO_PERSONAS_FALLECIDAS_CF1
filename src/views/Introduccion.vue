<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    


    .row.justify-content-center.fondo1
      .col-lg-12.px-md-5.mt-5
        .row.mb-5
          
          p.mb-4 
            b Apreciado aprendiz, 
            b-none pensar en las 
            b prácticas que permiten el traslado intermedio y final de unos restos mortales brinda un acercamiento a una práctica histórica como es la tanatopraxia. 
            b-none En este sentido, se le da la bienvenida, y se le recomienda revisar el siguiente recurso educativo para iniciar su aprendizaje. 
          
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
        .row.mb-5
          .bloque-texto-a.color-primario.p-4.p-lg-5.mb-5 
            .row.m-0.align-items-center.justify-content-center
              .col-7.col-lg-3.mb-4.mb-lg-0
                figure
                  img.mx-auto(src='@/assets/curso/img1.svg', alt='imagen ambiental', style='width:250px;')
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en instalaciones, equipos, materiales y elementos para el 
                    b  proceso de tanatopraxia, 
                    b-none  de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a 
                    b  asuntos básicos de la tanatopraxia y la tanatoestética.
    







</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
