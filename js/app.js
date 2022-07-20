const idPost = document.getElementById("idPost");

const obtenerPosts = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await respuesta.json();
  console.log(datos);
};

const obtenerPost = async () => {
  const respuesta = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost.value}`
  );
  const datos = await respuesta.json();
  console.log(datos);
};

const crearPost = async () => {
  const post = {
    userId: 15,
    title: "Nuevo Amanecer",
    body: "El amanecer del ayer",
  };

  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  const datos = await respuesta.json();
  console.log(datos);
};

const actualizarPost = async () => {
  const post = {
    body: "Libro de aventura",
    title: "Aventuras del Tigre feliz",
    userId: 2,
  };

  const respuesta = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost.value}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );
  const datos = await respuesta.json();
  console.log(datos);
};

const eliminarPost = async () => {
  const respuesta = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost.value}`,
    {
      method: "DELETE",
    }
  );
  const datos = await respuesta.json();
  console.log(datos);
};
