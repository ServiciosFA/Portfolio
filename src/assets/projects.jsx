import htmlIcon from "./Images/iconos/Icon-html.png";
import cssIcon from "./Images/iconos/Icon-css.png";
import jsIcon from "./Images/iconos/Icon-js.png";
import reactIcon from "./Images/iconos/Icon-react.png";
import firebaseIcon from "./Images/iconos/Icon-firebase.png";
import reactRouIcon from "./Images/iconos/Icon-reactrouter.png";
import muiIcon from "./Images/iconos/Icon-mui.png";
import reduxIcon from "./Images/iconos/Icon-redux.png";
import sassIcon from "./Images/iconos/Icon-sass.svg";
import imageMediaplayer from "./Images/proyectos/image-3-mediaPlayer.png";
import tailwindIcon from "./Images/iconos/Icon-tailwind.png";
import imageChat from "./Images/proyectos/image-5-chatApp.png";
import imagePizza from "./Images/proyectos/image-1-fast-pizza.png";

export const projects = [
  {
    id: 1,
    name: "Media Player",
    description:
      "Proyecto propio de un reproductor de música que utiliza la API de Spotify. Puedes buscar recomendaciones de Spotify, acceder a tus favoritos, así como a tus listas de reproducción y disfrutar de sus previsualizaciones.",
    iconsUrl: [
      htmlIcon,
      sassIcon,
      jsIcon,
      reactIcon,
      reactRouIcon,
      muiIcon,
      reduxIcon,
    ],
    image: imageMediaplayer,
    ref: "https://github.com/ServiciosFA/mediaplayer-app.github.io",
  },
  {
    id: 2,
    name: "Chat App",
    description:
      "Este es un proyecto propio de una app para tener conversaciones. Permite registrarnos y buscar a otros usuarios para comenzar una conversación con texto e imágenes. También podrás retomar la charla en cualquier momento, ya que quedará guardada.",
    iconsUrl: [
      htmlIcon,
      sassIcon,
      jsIcon,
      reactIcon,
      reactRouIcon,
      muiIcon,
      reduxIcon,
      firebaseIcon,
    ],
    image: imageChat,
    ref: "https://github.com/ServiciosFA/Chat-app.github.io",
  },
  {
    id: 3,
    name: "Fast React Pizza",
    description:
      "Proyecto realizado en un curso para adquirir conocimientos en Tailwind. Se trata de una aplicación que ofrece un menú para seleccionar pizzas, agregarlas al carrito y realizar un pedido con una dirección real. La aplicación utiliza APIs para obtener los datos de las pizzas y otra para guardar los pedidos. ",
    iconsUrl: [htmlIcon, tailwindIcon, jsIcon, reactIcon, reactRouIcon],
    image: imagePizza,
    ref: "https://github.com/ServiciosFA/React-fast-pizza",
  },
];
