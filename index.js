const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const { v4: uuidv4 } = require('uuid');
const logger = require('./loggerMiddeleware');
// const http = require('http');
app.use(cors());
app.use(logger);

const home = {
  heroImage: [
    {
      id: uuidv4(),
      hello: 'Hola, soy Damián Vigo',
      description: 'Desarrollador Web',
      image: 'https://i.ibb.co/7tMJwxR/seleccionada-yo-compress.jpg',
      alt: 'imagen retrato de Damián Vigo',
      title: 'Retrato Damian Vigo',
    },
  ],

  perfil: [
    {
      id: uuidv4(),
      perfil: '¿Quién Soy?',
      description:
        'Me llamo Damián Vigo y soy Frontend Developer de Buenos Aires Argentina. Estoy especializado en el desarrollo web de tecnologías Javascript estoy aquí para ayudarte a desarrollar tu idea',
      wsp: 'Escríbeme',
    },
  ],
  cite: [
    {
      id: uuidv4(),
      cite: 'La simplicidad es la máxima sofisticación » Leonardo Da Vinci',
    },
  ],
  lastProyects: [
    {
      id: uuidv4(),
      title: 'Ultimos Proyectos',
      name: 'React',
      description: 'webapp de registro de gastos construido con react y firebase',
      link: 'https://damianvigo-expenses-list.web.app',
      img: 'https://i.ibb.co/XDjzSM1/gastos.jpg',
      alt: 'webapp de control de gastos en react',
      titleImg: 'expenses',
      github: 'https://github.com/damianvigo/expenses-list',
    },
    {
      id: uuidv4(),
      title: 'Ultimos Proyectos',
      name: 'Portfolio',
      description: 'Diseño Responsive en HTML CSS y vanilla Javascript. Slider y modal construido solo con CSS',
      link: 'hhttps://portfolio-dv.netlify.app',
      img: 'https://i.ibb.co/NCjTf5C/portfolio-dv.jpg',
      alt: 'Portafolio CV',
      titleImg: 'Portfolio',
      github: 'https://github.com/damianvigo/portfolio-cv',
      button: 'Ver más',
    },
  ],
};

const proyects = {
  proyects: [
    {
      id: uuidv4(),
      title: 'Proyectos',
    },
    {
      id: uuidv4(),
      link: 'https://damianvigo-expenses-list.web.app',
      img: 'https://i.ibb.co/XDjzSM1/gastos.jpg',
      alt: 'webapp de control de gastos en react',
      titleImg: 'expenses',
      titleCard: 'React',
      descriptionCard: 'webapp de registro de gastos construido con react y firebase',
      githubLink: 'https://github.com/damianvigo/expenses-list',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://damianvigo.vercel.app',
      img: 'https://i.ibb.co/YNxh7yQ/proyect-next.jpg',
      alt: 'pagina web en nextjs',
      titleImg: 'portfolio',
      titleCard: 'Next',
      descriptionCard: 'Portfolio con el framework nextjs',
      githubLink: 'https://github.com/damianvigo/next-portfolio',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://damian-vigo-batatabit.vercel.app',
      img: 'https://i.ibb.co/zRX6dJz/batatabit.jpg',
      alt: 'pagina web batatabit',
      titleImg: 'batatabit',
      titleCard: 'Criptomonedas',
      descriptionCard: 'Maquetación Mobile First',
      githubLink: 'https://github.com/damianvigo/batatabit',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://pugstagram-damian-vigo.netlify.app',
      img: 'https://i.ibb.co/cCmMGK8/svelte-pugstagram.jpg',
      alt: 'Una red social hecha en Svelte',
      titleImg: 'pugstagram',
      titleCard: 'Svelte',
      descriptionCard: 'Página web construida con el framework de javascript Svelte',
      githubLink: 'https://github.com/damianvigo/svelte',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://tech-news-damian-vigo.web.app',
      img: 'https://i.ibb.co/BKJqpZs/tech.jpg',
      alt: 'Un portal de noticias de tecnología hecho con html, css y Javascript',
      titleImg: 'tech-news',
      titleCard: 'Portal de noticias geek',
      descriptionCard: 'Diseño Responsive. Construido con HTML, CSS(SASS) y vanilla Javascript',
      githubLink: 'https://github.com/damianvigo/tech-news',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://cafe-damian-vigo.netlify.app',
      img: 'https://i.ibb.co/Gcd3Thx/restaurante-ddv.jpg',
      alt: 'Un sitio web de un restaurante creado con html, css y javascript',
      titleImg: 'restaurante',
      titleCard: 'Restaurante',
      descriptionCard: 'Diseño Responsive. Construido con HTML CSS(SASS) Javascript y JQuery',
      githubLink: 'https://github.com/damianvigo/restaurante-sitio-web',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://app-manager-ddv.herokuapp.com',
      img: 'https://i.ibb.co/7zK5Wg7/app-manager.jpg',
      alt: 'Una app en react para situar jugadores en una cancha de futbol',
      titleImg: 'app-manager',
      titleCard: 'App Manager',
      descriptionCard: 'Página web en react utilizando redux',
      githubLink: 'https://github.com/damianvigo/javascript/tree/master/otros/app-manager',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://portfolio-dv.netlify.app',
      img: 'https://i.ibb.co/NCjTf5C/portfolio-dv.jpg',
      alt: 'Una app en react para situar jugadores en una cancha de futbol',
      titleImg: 'portfolio',
      titleCard: 'Maquetacion',
      descriptionCard: 'Diseño Responsive en HTML CSS y vanilla Javascript. Slider y modal construido solo con CSS',
      githubLink: 'https://github.com/damianvigo/portfolio-cv',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      id: uuidv4(),
      link: 'https://petgram.damianvigo.vercel.app',
      img: 'https://i.ibb.co/NCjTf5C/portfolio-dv.jpg',
      alt: 'red social de animales llamada Petgram',
      titleImg: 'petgram',
      titleCard: 'Pets App',
      descriptionCard: 'Web app con react',
      githubLink: 'https://github.com/damianvigo/javascript/tree/master/react-avanzado/react-avanzado',
      githubTitle: 'github',
      githubText: 'Código del proyecto',
    },
    {
      dataDescription: 'CRUD de Artículos en React',
      cardFilterImg: 'https://i.ibb.co/hDcTRsq/proyecto-react.png',
      filterImgTitle: 'Blog en React',
      filterAlt: 'Un blog hecho en React',
      cardTitle: 'React',
      githubFilterLink : 'https://github.com/damianvigo/Proyecto-con-React',
      githubFilterTitle: 'github',
    },
    {
      dataDescription: 'CRUD de artículos en Angular',
      cardFilterImg: 'https://i.ibb.co/HKRBSyy/proyecto-angular.png',
      filterImgTitle: 'Blog en Angular',
      filterAlt: 'Un blog hecho en Angular',
      cardTitle: 'Angular',
      githubFilterLink : 'https://github.com/damianvigo/Proyecto-en-Angular',
      githubFilterTitle: 'github',
    },
    {
      dataDescription: 'CRUD de Artículos en Vue',
      cardFilterImg: 'https://i.ibb.co/t2KvLND/crear-articulo-vue.jpg',
      filterImgTitle: 'Blog en Vue',
      filterAlt: 'Un blog hecho en Vue',
      cardTitle: 'Vue',
      githubFilterLink : 'https://github.com/damianvigo/Proyecto-con-Vue',
      githubFilterTitle: 'github',
    },
    {
      dataDescription: 'Tarjetas en React',
      cardFilterImg: 'https://i.ibb.co/rvfXCT4/react-cards.jpg',
      filterImgTitle: 'Tarjetas',
      filterAlt: 'Simples tarjetas de noticias en react',
      cardTitle: 'React',
      githubFilterLink : 'https://github.com/damianvigo/react-cards',
      githubFilterTitle: 'github',
    },
    {
      dataDescription: 'Blog - HTML5 - CSS3(Materialize)',
      cardFilterImg: 'https://i.ibb.co/4ZsZW4P/materialize.jpg',
      filterImgTitle: 'Blog',
      filterAlt: 'Maquetado web de un blog con el framework Materialize',
      cardTitle: 'Materialize',
      githubFilterLink : 'https://github.com/damianvigo/Blog-materialize',
      githubFilterTitle: 'github',
    },
    {
      dataDescription: 'Diseño de una web en construcción, realizado en photoshop',
      cardFilterImg: 'https://i.ibb.co/gr2Vp90/musica-electronica.jpg',
      filterImgTitle: 'Web en construcción',
      filterAlt: 'Web con temática de música electrónica en construcción',
      cardTitle: 'Diseño',
    },
    {
      dataDescription: 'Dibujo realizado en photoshop, utilizando las respectivas leyes de Gestalt',
      cardFilterImg: 'https://i.ibb.co/rt2Mjf9/gato-lineas-planos.jpg',
      filterImgTitle: 'Dibujo',
      filterAlt: 'Boceto de un gato dibujado en photoshop, solo con lineas y planos',
      cardTitle: 'Diseño',
    },
    {
      dataDescription: 'Dibujo realizado en photoshop, utilizando las respectivas leyes de Gestalt',
      cardFilterImg: 'https://i.ibb.co/xHGn1hp/gato-planos-blanco-negro.jpg',
      filterImgTitle: 'Dibujo',
      filterAlt: 'Boceto de un gato dibujado en photoshop, con planos en blanco y negro',
      cardTitle: 'Diseño',
    },
  ]
}

/* const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(infoDamian));
}); */

/* let notes = [
  {
    id: 1,
    content: 'nota 1',
    date: '2019-01-3-T19:20:14.298Z',
    important: true    
  },
  {
    id: 2,
    content: 'nota 2',
    date: '2020-01-3-T19:20:14.298Z',
    important: true    
  },
  {
    id: 3,
    content: 'nota 2',
    date: '2021-01-3-T19:20:14.298Z',
    important: true    
  },
] */

app.get('/', (req, res) => {
  res.send('<h1>Hola dvdev! 🤓</h1>');
});

app.get('/home', (req, res) => {
  res.json(home);
});

app.get('/proyects', (req, res) => {
  res.json(proyects);
});

app.get('/data/:id', (req, res) => {
  const id = Number(req.params.id); // string
  console.log({ id });
  // const note = notes.find(note => note.id === id)
  // cosole.log({note})
  // res.json(note)
  /* if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  } */

  res.send(id);
});

/* app.post('/data', (req, res) => {
  const note = request.body;

  if(!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    })
  }

  console.log(note);

  const newNote = {
    id: uuidv4(),
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  }

  notes = [...notes, newNote]

  res.status(201).json(newNote);
}); */

/*
app.delete('/data/:id', (req, res) => {
  const id = Number(req.params.id); // string
  notes = notes.filter((note) => note.id != id);
  res.status(204).end();
}); */

app.use((request, response) => {
  // console.log(request.path);
  response.status(404).json({
    error: 'Not found',
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
