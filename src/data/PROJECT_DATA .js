const PROJECT_DATA = {
  ecommerce:{
    id: 1,
    title: 'ecommerce',
    routeName: 'ecommerce',
    description:'A platform to buy items',
    // items: ["react", "redux", "sagas", "thunks", "selectors", "Firebase"],
    items: ["redux","sagas"],
    url:"https://drews-new-app.herokuapp.com/"
},
recipes:{
    id: 2,
    title: 'recipes',
    description:'Create, edit, and delete recipes',
    routeName: 'recipes',
    // items: ["graphql", "Apollo Client", "Apollo Server", "React Hooks"],
    items: ["graphql","apollo"],
    url:"https://drews-react-apollo-recipes.herokuapp.com/"
},
maps:{
    id: 3,
    title: 'maps',
    description:'Create points on a map and comment on them',
    routeName: 'maps',
    // items: ["GraphQL", "MongoDB", "React Hook", "JSON Web Token"],
    items: ["mongo", "redux"],
    url:"https://drews-map.now.sh"
    }
};

export default PROJECT_DATA;