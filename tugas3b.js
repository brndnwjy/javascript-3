const getPokemon = () => {
  return new Promise((resolve, reject) => {
    const pokemon = getAPI();
    if (pokemon) {
      resolve(pokemon);
    } else {
      reject(pokemon);
    }
  });
};

const getAPI = async () => {
  try {
    const index = Math.ceil(Math.random() * 151);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const res = data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

getPokemon()
  .then((res) => {
    const name = res.name;
    const index = res.id;
    const types = [];
    const abilities = [];

    console.log(name);
    console.log(`index   : ${index}`);

    if (res.abilities) {
      for (abs of res.abilities) {
        abilities.push(abs);
      }

      const absRoulette = Math.floor(Math.random() * abilities.length);
      const ability = abilities[absRoulette].ability.name;

      console.log(`ability : ${ability}`);
    } else {
      console.log("ability : none");
    }

    for (type of res.types) {
      types.push(type.type.name);
    }

    if (types.length > 1) {
      console.log(`types   : ${types.join(", ")}`);
    } else {
      console.log(`type    : ${types.join("")}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
