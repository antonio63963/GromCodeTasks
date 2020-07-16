const favorites = ['id-6', 'id-17'];
const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [{
            id: 'id-2',
            name: "Food",
            nodes: [{
                id: 'id-6',
                name: 'Drinks',
                nodes: []
            }]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ]
};

export const markFavorites = (tree, fav) => {
   const isFavorite = fav.includes(tree.id);
   console.log(isFav, '  ', tree.id);

   return {
       ...tree,
       isFavorite,
       nodes: tree.nodes.map(childNodes => markFavorites(childNodes, favorites))
   };
};

markFav(tree, favorites);