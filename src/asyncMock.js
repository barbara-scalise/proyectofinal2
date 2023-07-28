const products = [
  {
    id: 1,
    title: "Chiusa",
    price: 19.56,
    description:
      "Cartera de hombro con cierre.1 bolsillo externo con cierre.1 bolsillo interno con cierre.1 bolsillo interno sin cierre. Herrajes gun metal.",
    category: "Mujer",
    img: "./img/chiusa.jpg",
    stock: 30,
  },
  {
    id: 2,
    title: "Gemma ",
    price: 22.49,
    description:
      "Cartera de mano con cierre.1 bolsillo interno con cierre.1 bolsillo interno sin cierre.Herrajes gun metal.Forrería blanca y negra estampada con logo de la marca.",
    category: "Mujer",
    image: "./img/gemma.jpg",
    stock: 10,
  },
  {
    id: 3,
    title: "Francesa",
    price: 28.99,
    description:
      "Bandolera con broche magnético.1 bolsillo externo con broche magnético.1 compartimiento internos con cierre. 2 compartimientos internos sin cierre.1 bolsillo interno con cierre.Herrajes plateados.",
    category: "Mujer",
    image: "./img/francesa.jpg",
    stock: 11,
  },

  {
    id: 4,
    title: "Perla",
    price: 26.49,
    description:
      "Cartera de mano.2 compartimientos con broche magnético.1 compartimiento central con cierre.1 bolsillo interno con cierre.1 bolsillo interno sin cierre.Herrajes gun metal.",
    category: "Mujer",
    image: "./img/perla.jpg",
    stock: 5,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
