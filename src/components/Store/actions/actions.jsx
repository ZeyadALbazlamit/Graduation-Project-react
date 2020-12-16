export function getCategories  () {
    return {
        type: "GET_CATEGORIES"
    };
};

export  function getCategoriesOf  (id) {
    return {
        type: "GET_CATEGORIES_OF"+id
    };
};
