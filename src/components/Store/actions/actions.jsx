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

export  function getUserInfo  (id) {
    return {
        type: "GET_USER_INFO"+id
    };
};