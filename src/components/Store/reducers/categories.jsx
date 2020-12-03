export const CategoriesReducer = (state =[{
            id: 1, label: "سيارات - مركبات", value: "سيارات - مركبات"
        },
        {
            id: 2, label: "موبايل - تابليت", value: "موبايل - تابليت"
        },
        {
            id: 3, label: "العاب فيديو وملحقاتها", value: "العاب فيديو وملحقاتها"
        },
        {
            id: 4, label: "اجهزة - الكترونيات", value: "اجهزة - الكترونيات"
        },
        {
            id: 5, label: "عقارات للبيع", value: "عقارات للبيع"
        },
        {
            id: 6, label: "عقارات للايجار", value: "عقارات للايجار"
        },
        {
            id: 7, label: "المنزل والحديقة", value: "المنزل والحديقة"
        },
        {
            id: 8, label: "ازياء - موضة نسائية", value: "ازياء - موضة نسائية"
        },
        {
            id: 9, label: "ازياء - موضة رجالي", value: "ازياء - موضة رجالي"
        },
        {
            id: 10, label: "لوازم الاطفال والالعاب", value: "لوازم الاطفال والالعاب"
        },
        {
            id: 11, label: "طعام - غذاء", value: "طعام - غذاء"
        },
        {
            id: 12, label: "التعليم والتدريب", value: "التعليم والتدريب"
        },
        {
            id: 13, label: "الخدمات", value: "الخدمات"
        },
        {
            id: 14, label: "حيوانات للبيع", value: "حيوانات للبيع"
        }
        ], action) => {
            switch (action.type){
                case "GET_CATEGORIES":
                        return state;
                default : return state;  
            }
}

