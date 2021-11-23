export default {
  global: {
    componenteFormativo: 'Introducción a la tanatopraxia',
    descripcionCurso:
      'El presente componente de formación se desarrolla en torno a un contexto básico sobre los fundamentos de la tanatopraxia. Una práctica que ha evolucionado a lo largo de la historia humana en torno a los procedimientos y las normas de bioseguridad.  Durante este proceso se espera que usted reconozca el proceso de embalsamamiento teniendo en cuenta los procesos, procedimientos y lineamientos normativos. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la tanatopraxia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conceptos y generalidades para el sector funerario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normas de Bioseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Microbiología',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Canal Capital Bogotá. (2019). Profesiones Insólitas -Tanatólogo y restauradora de libros [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=FeF0Qls1iq8',
    },
    {
      referencia:
        'Díaz, G. (2018). Guía para las empresas con exposición de riesgo biológico. Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+EMPRESAS.pdf/d37bb562-af8e-a51b-106e-60c7784f645b',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Requisitos (NTC 5840).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Términos y definiciones (NTC 6212).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=6002A697B3F03F6282B108144F0748A3&Req=',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Mayer, R. (2006). <em>Embalming: History, Theory, and Practice.</em> McGraw-Hill Education.',
    },
    {
      referencia:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020, 21 abril). Equipo de protección personal [Video]. YouTube.',
      link: 'https://youtu.be/iDnhA8nPFsM',
    },
    {
      referencia:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020a, mayo 3). ¿Cómo lavarse las manos de una forma segura? [Video]. YouTube.',
      link: 'https://youtu.be/N5iWzjNWh8A',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'Según ICONTEC (2017), es un conjunto de medidas preventivas que tienen como objetivo minimizar y controlar factores de riesgo que puedan afectar la seguridad, la salud humana y el ambiente.',
    },

    {
      termino: 'Descomposición',
      significado:
        'Es la separación de compuestos en sustancias más simples mediante la acción de enzimas microbianas y/o autolíticaas.',
    },

    {
      termino: 'Embalsamar',
      significado:
        'Es tratar un cadáver con productos químicos para retardar el proceso de descomposición y restablecer un aspecto físico aceptable.',
    },
    {
      termino: 'Servicios funerarios',
      significado:
        'Según ICONTEC (2017), es un conjunto de actividades organizadas para la realización de rituales fúnebres. Pueden constar de servicios básicos (tales como preparación del cadáver, restos humanos, restos óseos o cenizas; obtención de licencias de inhumación o cremación; traslados, suministros de carroza fúnebre para el servicio; ataúd, urna, sala de velación y trámites civiles y eclesiásticos), servicios complementarios (tales como arreglos florales, avisos de murales y prensa, transporte de acompañantes, acompañamientos musicales) y destino final (inhumación o cremación).',
    },
  ],
  complementario: [
    {
      texto:
        'Canal Capital Bogotá. (2019). Profesiones Insólitas -Tanatólogo y restauradora de libros [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FeF0Qls1iq8',
    },
    {
      texto:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020, 21 abril). Equipo de protección personal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/iDnhA8nPFsM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz María Uribe Lotero',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'John Alejandro Carmona Escobar',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder Desarrollo Curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de diseño y Producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: '',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
