const fetchAPI = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    data.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.log("error data fetch");
    console.log(error);
  }
};

fetchAPI();
