
export const subCategoriesReducer = (state =[{
    id: 1, label: "سيارات للبيع", value: "سيارات للبيع" , properties: [
       [
           { id: 0, kind: "النوع", name: "carType"},
           { id: 1, label: "هيونداي", value: "هيونداي"},
           { id: 2, label: "تويوتا", value: "تويوتا"},
           { id: 3, label: "كيا", value: "كيا"},
           { id: 4, label: "بي ام دابليو", value: "بي ام دابليو"},
           { id: 5, label: "مرسيدس بنز", value: "مرسيدس بنز"},
           { id: 6, label: "استون مارتن", value: "استون مارتن"},
           { id: 7, label: "الفا روميو", value: "الفا روميو"},
           { id: 8, label: "اودي", value: "اودي"},
           { id: 9, label: "ايسوزو", value: "ايسوزو"},
           { id: 10, label: "انفنتي", value: "انفنتي"},
           { id: 11, label: "اوبل", value: "اوبل"},
           { id: 12, label: "بنتلي", value: "بنتلي"},
           { id: 13, label: "بورش", value: "بورش"},
           { id: 14, label: "بونتياك", value: "بونتياك"},
           { id: 15, label: "بيجو", value: "بيجو"},
           { id: 16, label: "جاكوار", value: "جاكوار"},
           { id: 17, label: "جربت وول", value: "جربت وول"},
           { id: 18, label: "جي ام سي", value: "جي ام سي"},
           { id: 19, label: "جيب", value: "جيب"},
           { id: 20, label: "دايهاتسو", value: "دايهاتسو"},
           { id: 21, label: "دايو", value: "دايو"},
           { id: 22, label: "دودج", value: "دودج"},
           { id: 23, label: "روفر", value: "روفر"},
           { id: 24, label: "رولز رويس", value: "رولز رويس"},
           { id: 25, label: "رينو", value: "رينو"},
           { id: 26, label: "ساب", value: "ساب"},
           { id: 27, label: "ساتورن", value: "ساتورن"},
           { id: 28, label: "سانغ يونغ", value: "سانغ يونغ"},
           { id: 29, label: "ستيرون", value: "ستيرون"},
           { id: 30, label: "سكودا", value: "سكودا"},
           { id: 31, label: "سوبارو", value: "سوبارو"},
           { id: 32, label: "سوزوكي", value: "سوزوكي"},
           { id: 33, label: "سيات", value: "سيات"},
           { id: 34, label: "شيري", value: "شيري"},
           { id: 35, label: "شيفروليه", value: "شيفروليه"},
           { id: 36, label: "فورد", value: "فورد"},
           { id: 37, label: "فولو", value: "فولو"},
           { id: 38, label: "فولكسفاغن", value: "فولكسفاغن"},
           { id: 39, label: "فيات", value: "فيات"},
           { id: 40, label: "فيراي", value: "فيراي"},
           { id: 41, label: "كاديلاك", value: "كاديلاك"},
           { id: 42, label: "كرايسلر", value: "كرايسلر"},
           { id: 43, label: "لادا", value: "لادا"},
           { id: 44, label: "لامبورغيني", value: "لامبورغيني"},
           { id: 45, label: "لاند روفر", value: "لاند روفر"},
           { id: 46, label: "لكزس", value: "لكزس"},
           { id: 47, label: "لوتس", value: "لوتس"},
           { id: 48, label: "لينكولن", value: "لينكولن"},
           { id: 49, label: "مازدا", value: "مازدا"},
           { id: 50, label: "مازيراتي", value: "مازيراتي"},
           { id: 51, label: "مورغان", value: "مورغان"},
           { id: 52, label: "ميتسوبيشي", value: "ميتسوبيشي"},
           { id: 53, label: "ميركوري", value: "ميركوري"},
           { id: 54, label: "ميني", value: "ميني"},
           { id: 55, label: "نيسان", value: "نيسان"},
           { id: 56, label: "هامر", value: "هامر"},
           { id: 57, label: "هوندا", value: "هوندا"},
           { id: 58, label: "جيلي", value: "جيلي"},
           { id: 59, label: "رد اكس اتو", value: "رد اكس اتو"},
           { id: 60, label: "ام جي", value: "ام جي"},
           { id: 61, label: "بروتون", value: "بروتون"},
           { id: 62, label: "بريليانس", value: "بريليانس"},
           { id: 63, label: "بي واي دي", value: "بي واي دي"},
           { id: 64, label: "سامسونج", value: "سامسونج"},
           { id: 65, label: "تيسلا", value: "تيسلا"},
           { id: 66, label: "ايران خودرو", value: "ايران خودرو"},
           { id: 67, label: "تاتا", value: "تاتا"},
           { id: 68, label: "بوغاتي", value: "بوغاتي"},
           { id: 69, label: "بويك", value: "بويك"},
           { id: 70, label: "اكيورا", value: "اكيورا"},
           { id: 71, label: "سيون", value: "سيون"},
           { id: 72, label: "مكلارين", value: "مكلارين"},
           { id: 73, label: "باجاني", value: "باجاني"},
           { id: 74, label: "لانسيا", value: "لانسيا"},
           { id: 75, label: "جيه ايه سي", value: "جيه ايه سي"},
           { id: 76, label: "ليفان", value: "ليفان"},
           { id: 77, label: "فاو", value: "فاو"},
           { id: 78, label: "فوتون", value: "فوتون"},
           { id: 79, label: "ماروتي سوزوكي", value: "ماروتي سوزوكي"},
           { id: 80, label: "سايبا", value: "سايبا"},
           { id: 81, label: "برايفت", value: "برايفت"},
           { id: 82, label: "بايك", value: "بايك"},
           { id: 83, label: "شانجان", value: "شانجان"},
           { id: 84, label: "هونغهاي", value: "هونغهاي"},
           { id: 85, label: "دي اف ام", value: "دي اف ام"},
           { id: 86, label: "بورجوارد", value: "بورجوارد"},
           { id: 87, label: "ايفيكو", value: "ايفيكو"},
           { id: 88, label: "هافال", value: "هافال"},
           { id: 89, label: "اخرى", value: "اخرى"}  
        ],
        [
            { id: 0, kind: "سنة الصنع", name: "carYear"},
            { id: 1, label: "2020", value: "2020"},
            { id: 2, label: "2019", value: "2019"},
            { id: 3, label: "2018", value: "2018"},
            { id: 4, label: "2017", value: "2017"},
            { id: 5, label: "2016", value: "2016"},
            { id: 6, label: "2015", value: "2015"},
            { id: 7, label: "2014", value: "2014"},
            { id: 8, label: "2013", value: "2013"},
            { id: 9, label: "2012", value: "2012"},
            { id: 10, label: "2011", value: "2011"},
            { id: 11, label: "2010", value: "2010"},
            { id: 12, label: "2009", value: "2009"},
            { id: 13, label: "2008", value: "2008"},
            { id: 14, label: "2007", value: "2007"},
            { id: 15, label: "2006", value: "2006"},
            { id: 16, label: "2005", value: "2005"},
            { id: 17, label: "2004", value: "2004"},
            { id: 18, label: "2003", value: "2003"},
            { id: 19, label: "2002", value: "2002"},
            { id: 20, label: "2001", value: "2001"},
            { id: 21, label: "2000", value: "2000"},
            { id: 22, label: "1999", value: "1999"},
            { id: 23, label: "1998", value: "1998"},
            { id: 24, label: "1997", value: "1997"},
            { id: 25, label: "1996", value: "1996"},
            { id: 26, label: "1995", value: "1995"},
            { id: 27, label: "1994", value: "1994"},
            { id: 28, label: "1993", value: "1993"},
            { id: 29, label: "1992", value: "1992"},
            { id: 30, label: "1991", value: "1991"},
            { id: 31, label: "1990", value: "1990"},
            { id: 32, label: "1989", value: "1989"},
            { id: 33, label: "1988", value: "1988"},
            { id: 34, label: "1987", value: "1987"},
            { id: 35, label: "1986", value: "1986"},
            { id: 36, label: "1985", value: "1985"},
            { id: 37, label: "1984", value: "1984"},
            { id: 38, label: "1983", value: "1983"},
            { id: 39, label: "1982", value: "1982"},
            { id: 40, label: "1981", value: "1981"},
            { id: 41, label: "1980", value: "1980"},
            { id: 42, label: "1979", value: "1979"},
            { id: 43, label: "1978", value: "1978"},
            { id: 44, label: "1977", value: "1977"},
            { id: 45, label: "1976", value: "1976"},
            { id: 46, label: "1975", value: "1975"},
            { id: 47, label: "1974", value: "1974"},
            { id: 48, label: "1973", value: "1973"},
            { id: 49, label: "1972", value: "1972"},
            { id: 50, label: "1971", value: "1971"},
            { id: 51, label: "1970", value: "1970"},
            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
        ],
        [
           { id: 0, kind: "الحالة", name: "carCondition"},
           { id: 1, label: "مستعمل", value: "مستعمل"},
           { id: 2, label: "جديد", value: "جديد"},
          
        ],
        [
            { id: 0, kind: "الكيلومترات", name: "carKilometers"},
            { id: 1, label: "0", value: "0"},
            { id: 2, label: "1 - 9,999", value: "1 - 9,999"},
            { id: 3, label: "10,000 - 19,999", value: "10,000 - 19,999"},
            { id: 4, label: "20,000 - 29,999", value: "20,000 - 29,999"},
            { id: 5, label: "30,000 - 39,999", value: "30,000 - 39,999"},
            { id: 6, label: "40,000 - 49,999", value: "40,000 - 49,999"},
            { id: 7, label: "50,000 - 59,999", value: "50,000 - 59,999"},
            { id: 8, label: "60,000 - 69,999", value: "60,000 - 69,999"},
            { id: 9, label: "70,000 - 79,999", value: "70,000 - 79,999"},
            { id: 10, label: "80,000 - 89,999", value: "80,000 - 89,999"},
            { id: 11, label: "90,000 - 99,999", value: "90,000 - 99,999"},
            { id: 12, label: "100,000 - 109,999", value: "100,000 - 109,999"},
            { id: 13, label: "110,000 - 119,999", value: "110,000 - 119,999"},
            { id: 14, label: "120,000 - 129,999", value: "120,000 - 129,999"},
            { id: 15, label: "130,000 - 139,999", value: "130,000 - 139,999"},
            { id: 16, label: "140,000 - 149,999", value: "140,000 - 149,999"},
            { id: 17, label: "150,000 - 159,999", value: "150,000 - 159,999"},
            { id: 18, label: "160,000 - 169,999", value: "160,000 - 169,999"},
            { id: 19, label: "170,000 - 179,999", value: "170,000 - 179,999"},
            { id: 20, label: "180,000 - 189,999", value: "180,000 - 189,999"},
            { id: 21, label: "190,000 - 199,999", value: "190,000 - 199,999"},
            { id: 22, label: "200,000 +", value: "200,000 +"}
        ],
        [
            { id: 0, kind: "نوع ناقل الحركة", name: "carTransmission"},
            { id: 1, label: "اتوماتيك", value: "اتوماتيك"},
            { id: 2, label: "عادي", value: "عادي"},
            { id: 3, label: "اخرى", value: "اخرى"}
        ],
        [
            { id: 0, kind: "نوع الوقود", name: "carFuel"},
            { id: 1, label: "بنزين", value: "بنزين"},
            { id: 2, label: "ديزل", value: "ديزل"},
            { id: 3, label: "هايبرد", value: "هايبرد"},
            { id: 4, label: "كهربائي", value: "كهربائي"}
        ],
        [
            { id: 0, kind: "اللون", name: "color"},
            { id: 1, label: "ابيض", value: "ابيض"},
            { id: 2, label: "اسود", value: "اسود"},
            { id: 3, label: "احمر", value: "احمر"},
            { id: 4, label: "ازرق", value: "ازرق"},
            { id: 5, label: "فضي", value: "فضي"},
            { id: 6, label: "زيتي", value: "زيتي"},
            { id: 7, label: "بنفسجي", value: "بنفسجي"},
            { id: 8, label: "اصفر", value: "اصفر"},
            { id: 9, label: "خمري", value: "خمري"}
        ],
        [
            { id: 0, kind: "الجمرك", name: "carCustoms"},
            { id: 1, label: "مجمركة", value: "مجمركة"},
            { id: 2, label: "غير مجمركة", value: "غير مجمركة"}
        ],
        [
            { id: 0, kind: "الترخيص", name: "carLicense"},
            { id: 1, label: "مرخصة", value: "مرخصة"},
            { id: 2, label: "غير مرخصة", value: "غير مرخصة"}
        ],
        [
            { id: 0, kind: "التأمين", name: "carInsurance"},
            { id: 1, label: "تأمين الزامي", value: "تأمين الزامي"},
            { id: 2, label: "تأمين شامل", value: "تأمين شامل"},
            { id: 3, label: "غير مؤمنة", value: "غير مؤمنة"}
        ]
        
    ]
},
{
    id: 2, label: "سيارات للايجار", value: "سيارات للايجار", properties:[
        [
            { id: 0, kind: "النوع", name: "carType2"},
            { id: 1, label: "هيونداي", value: "هيونداي"},
            { id: 2, label: "تويوتا", value: "تويوتا"},
            { id: 3, label: "كيا", value: "كيا"},
            { id: 4, label: "بي ام دابليو", value: "بي ام دابليو"},
            { id: 5, label: "مرسيدس بنز", value: "مرسيدس بنز"},
            { id: 6, label: "استون مارتن", value: "استون مارتن"},
            { id: 7, label: "الفا روميو", value: "الفا روميو"},
            { id: 8, label: "اودي", value: "اودي"},
            { id: 9, label: "ايسوزو", value: "ايسوزو"},
            { id: 10, label: "انفنتي", value: "انفنتي"},
            { id: 11, label: "اوبل", value: "اوبل"},
            { id: 12, label: "بنتلي", value: "بنتلي"},
            { id: 13, label: "بورش", value: "بورش"},
            { id: 14, label: "بونتياك", value: "بونتياك"},
            { id: 15, label: "بيجو", value: "بيجو"},
            { id: 16, label: "جاكوار", value: "جاكوار"},
            { id: 17, label: "جربت وول", value: "جربت وول"},
            { id: 18, label: "جي ام سي", value: "جي ام سي"},
            { id: 19, label: "جيب", value: "جيب"},
            { id: 20, label: "دايهاتسو", value: "دايهاتسو"},
            { id: 21, label: "دايو", value: "دايو"},
            { id: 22, label: "دودج", value: "دودج"},
            { id: 23, label: "روفر", value: "روفر"},
            { id: 24, label: "رولز رويس", value: "رولز رويس"},
            { id: 25, label: "رينو", value: "رينو"},
            { id: 26, label: "ساب", value: "ساب"},
            { id: 27, label: "ساتورن", value: "ساتورن"},
            { id: 28, label: "سانغ يونغ", value: "سانغ يونغ"},
            { id: 29, label: "ستيرون", value: "ستيرون"},
            { id: 30, label: "سكودا", value: "سكودا"},
            { id: 31, label: "سوبارو", value: "سوبارو"},
            { id: 32, label: "سوزوكي", value: "سوزوكي"},
            { id: 33, label: "سيات", value: "سيات"},
            { id: 34, label: "شيري", value: "شيري"},
            { id: 35, label: "شيفروليه", value: "شيفروليه"},
            { id: 36, label: "فورد", value: "فورد"},
            { id: 37, label: "فولو", value: "فولو"},
            { id: 38, label: "فولكسفاغن", value: "فولكسفاغن"},
            { id: 39, label: "فيات", value: "فيات"},
            { id: 40, label: "فيراي", value: "فيراي"},
            { id: 41, label: "كاديلاك", value: "كاديلاك"},
            { id: 42, label: "كرايسلر", value: "كرايسلر"},
            { id: 43, label: "لادا", value: "لادا"},
            { id: 44, label: "لامبورغيني", value: "لامبورغيني"},
            { id: 45, label: "لاند روفر", value: "لاند روفر"},
            { id: 46, label: "لكزس", value: "لكزس"},
            { id: 47, label: "لوتس", value: "لوتس"},
            { id: 48, label: "لينكولن", value: "لينكولن"},
            { id: 49, label: "مازدا", value: "مازدا"},
            { id: 50, label: "مازيراتي", value: "مازيراتي"},
            { id: 51, label: "مورغان", value: "مورغان"},
            { id: 52, label: "ميتسوبيشي", value: "ميتسوبيشي"},
            { id: 53, label: "ميركوري", value: "ميركوري"},
            { id: 54, label: "ميني", value: "ميني"},
            { id: 55, label: "نيسان", value: "نيسان"},
            { id: 56, label: "هامر", value: "هامر"},
            { id: 57, label: "هوندا", value: "هوندا"},
            { id: 58, label: "جيلي", value: "جيلي"},
            { id: 59, label: "رد اكس اتو", value: "رد اكس اتو"},
            { id: 60, label: "ام جي", value: "ام جي"},
            { id: 61, label: "بروتون", value: "بروتون"},
            { id: 62, label: "بريليانس", value: "بريليانس"},
            { id: 63, label: "بي واي دي", value: "بي واي دي"},
            { id: 64, label: "سامسونج", value: "سامسونج"},
            { id: 65, label: "تيسلا", value: "تيسلا"},
            { id: 66, label: "ايران خودرو", value: "ايران خودرو"},
            { id: 67, label: "تاتا", value: "تاتا"},
            { id: 68, label: "بوغاتي", value: "بوغاتي"},
            { id: 69, label: "بويك", value: "بويك"},
            { id: 70, label: "اكيورا", value: "اكيورا"},
            { id: 71, label: "سيون", value: "سيون"},
            { id: 72, label: "مكلارين", value: "مكلارين"},
            { id: 73, label: "باجاني", value: "باجاني"},
            { id: 74, label: "لانسيا", value: "لانسيا"},
            { id: 75, label: "جيه ايه سي", value: "جيه ايه سي"},
            { id: 76, label: "ليفان", value: "ليفان"},
            { id: 77, label: "فاو", value: "فاو"},
            { id: 78, label: "فوتون", value: "فوتون"},
            { id: 79, label: "ماروتي سوزوكي", value: "ماروتي سوزوكي"},
            { id: 80, label: "سايبا", value: "سايبا"},
            { id: 81, label: "برايفت", value: "برايفت"},
            { id: 82, label: "بايك", value: "بايك"},
            { id: 83, label: "شانجان", value: "شانجان"},
            { id: 84, label: "هونغهاي", value: "هونغهاي"},
            { id: 85, label: "دي اف ام", value: "دي اف ام"},
            { id: 86, label: "بورجوارد", value: "بورجوارد"},
            { id: 87, label: "ايفيكو", value: "ايفيكو"},
            { id: 88, label: "هافال", value: "هافال"},
            { id: 89, label: "اخرى", value: "اخرى"}  
         ],
        [
            { id: 0, kind: "سنة الصنع", name: "carYear2"},
            { id: 1, label: "2020", value: "2020"},
            { id: 2, label: "2019", value: "2019"},
            { id: 3, label: "2018", value: "2018"},
            { id: 4, label: "2017", value: "2017"},
            { id: 5, label: "2016", value: "2016"},
            { id: 6, label: "2015", value: "2015"},
            { id: 7, label: "2014", value: "2014"},
            { id: 8, label: "2013", value: "2013"},
            { id: 9, label: "2012", value: "2012"},
            { id: 10, label: "2011", value: "2011"},
            { id: 11, label: "2010", value: "2010"},
            { id: 12, label: "2009", value: "2009"},
            { id: 13, label: "2008", value: "2008"},
            { id: 14, label: "2007", value: "2007"},
            { id: 15, label: "2006", value: "2006"},
            { id: 16, label: "2005", value: "2005"},
            { id: 17, label: "2004", value: "2004"},
            { id: 18, label: "2003", value: "2003"},
            { id: 19, label: "2002", value: "2002"},
            { id: 20, label: "2001", value: "2001"},
            { id: 21, label: "2000", value: "2000"},
            { id: 22, label: "1999", value: "1999"},
            { id: 23, label: "1998", value: "1998"},
            { id: 24, label: "1997", value: "1997"},
            { id: 25, label: "1996", value: "1996"},
            { id: 26, label: "1995", value: "1995"},
            { id: 27, label: "1994", value: "1994"},
            { id: 28, label: "1993", value: "1993"},
            { id: 29, label: "1992", value: "1992"},
            { id: 30, label: "1991", value: "1991"},
            { id: 31, label: "1990", value: "1990"},
            { id: 32, label: "1989", value: "1989"},
            { id: 33, label: "1988", value: "1988"},
            { id: 34, label: "1987", value: "1987"},
            { id: 35, label: "1986", value: "1986"},
            { id: 36, label: "1985", value: "1985"},
            { id: 37, label: "1984", value: "1984"},
            { id: 38, label: "1983", value: "1983"},
            { id: 39, label: "1982", value: "1982"},
            { id: 40, label: "1981", value: "1981"},
            { id: 41, label: "1980", value: "1980"},
            { id: 42, label: "1979", value: "1979"},
            { id: 43, label: "1978", value: "1978"},
            { id: 44, label: "1977", value: "1977"},
            { id: 45, label: "1976", value: "1976"},
            { id: 46, label: "1975", value: "1975"},
            { id: 47, label: "1974", value: "1974"},
            { id: 48, label: "1973", value: "1973"},
            { id: 49, label: "1972", value: "1972"},
            { id: 50, label: "1971", value: "1971"},
            { id: 51, label: "1970", value: "1970"},
            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
         ],
        [
            { id: 0, kind: "نوع ناقل الحركة", name: "carTransmission2"},
            { id: 1, label: "اتوماتيك", value: "اتوماتيك"},
            { id: 2, label: "عادي", value: "عادي"},
            { id: 3, label: "اخرى", value: "اخرى"}
        ],
        [
            { id: 0, kind: "نوع الوقود", name: "carFuel2"},
            { id: 1, label: "بنزين", value: "بنزين"},
            { id: 2, label: "ديزل", value: "ديزل"},
            { id: 3, label: "هايبرد", value: "هايبرد"},
            { id: 4, label: "كهربائي", value: "كهربائي"}
         ],
        [
            { id: 0, kind: "مدة الإيجار", name: "carPeriod"},
            { id: 1, label: "يومي", value: "يومي"},
            { id: 2, label: "اسبوعي", value: "اسبوعي"},
            { id: 3, label: "شهري", value: "شهري"},
            { id: 4, label: "سنوي", value: "سنوي"}
        ],
        [
            { id: 0, kind: "اللون", name: "color"},
            { id: 1, label: "ابيض", value: "ابيض"},
            { id: 2, label: "اسود", value: "اسود"},
            { id: 3, label: "احمر", value: "احمر"},
            { id: 4, label: "ازرق", value: "ازرق"},
            { id: 5, label: "فضي", value: "فضي"},
            { id: 6, label: "زيتي", value: "زيتي"},
            { id: 7, label: "بنفسجي", value: "بنفسجي"},
            { id: 8, label: "اصفر", value: "اصفر"},
            { id: 9, label: "خمري", value: "خمري"}
        ]
    ]
},
{
    id: 3, label: "دراجات نارية", value: "دراجات نارية", properties:[
        [
            { id: 0, kind: "النوع", name: "motorType"},
            { id: 1, label: "ابريليا", value: "ابريليا"},
            { id: 2, label: "بي ام دابليو", value: "بي ام دابليو"},
            { id: 3, label: "بوجي", value: "بوجي"},
            { id: 4, label: "كان ام", value: "كان ام"},
            { id: 5, label: "دوكاتي", value: "دوكاتي"},
            { id: 6, label: "هارلي ديفيدسون", value: "هارلي ديفيدسون"},
            { id: 7, label: "هوندا", value: "هوندا"},
            { id: 8, label: "هايوسنج", value: "هايوسنج"},
            { id: 9, label: "كاواساكي", value: "كاواساكي"},
            { id: 10, label: "كاي تي ام", value: "كاي تي ام"},
            { id: 11, label: "موتو جوزي", value: "موتو جوزي"},
            { id: 12, label: "بياجيو", value: "بياجيو"},
            { id: 13, label: "سوزوكي", value: "سوزوكي"},
            { id: 14, label: "تريمف", value: "تريمف"},
            { id: 15, label: "فيسبا", value: "فيسبا"},
            { id: 16, label: "ياماها", value: "ياماها"},
            { id: 17, label: "سي اف موتو", value: "سي اف موتو"},
            { id: 18, label: "ام في اجوستا", value: "ام في اجوستا"},
            { id: 19, label: "اس واي ام", value: "اس واي ام"},
            { id: 20, label: "فيكتوري", value: "فيكتوري"},
            { id: 21, label: "بينتلي", value: "بينتلي"},
            { id: 22, label: "تي في سي", value: "تي في سي"},
            { id: 23, label: "دايليم", value: "دايليم"},
            { id: 24, label: "جيانشي", value: "جيانشي"},
            { id: 25, label: "انديان", value: "انديان"},
            { id: 26, label: "رويال انفليد", value: "رويال انفليد"},
            { id: 27, label: "اخرى", value: "اخرى"}  
         ],
        [
            { id: 0, kind: "سنة الصنع", name: "motorYear"},
            { id: 1, label: "2020", value: "2020"},
            { id: 2, label: "2019", value: "2019"},
            { id: 3, label: "2018", value: "2018"},
            { id: 4, label: "2017", value: "2017"},
            { id: 5, label: "2016", value: "2016"},
            { id: 6, label: "2015", value: "2015"},
            { id: 7, label: "2014", value: "2014"},
            { id: 8, label: "2013", value: "2013"},
            { id: 9, label: "2012", value: "2012"},
            { id: 10, label: "2011", value: "2011"},
            { id: 11, label: "2010", value: "2010"},
            { id: 12, label: "2009", value: "2009"},
            { id: 13, label: "2008", value: "2008"},
            { id: 14, label: "2007", value: "2007"},
            { id: 15, label: "2006", value: "2006"},
            { id: 16, label: "2005", value: "2005"},
            { id: 17, label: "2004", value: "2004"},
            { id: 18, label: "2003", value: "2003"},
            { id: 19, label: "2002", value: "2002"},
            { id: 20, label: "2001", value: "2001"},
            { id: 21, label: "2000", value: "2000"},
            { id: 22, label: "1999", value: "1999"},
            { id: 23, label: "1998", value: "1998"},
            { id: 24, label: "1997", value: "1997"},
            { id: 25, label: "1996", value: "1996"},
            { id: 26, label: "1995", value: "1995"},
            { id: 27, label: "1994", value: "1994"},
            { id: 28, label: "1993", value: "1993"},
            { id: 29, label: "1992", value: "1992"},
            { id: 30, label: "1991", value: "1991"},
            { id: 31, label: "1990", value: "1990"},
            { id: 32, label: "1989", value: "1989"},
            { id: 33, label: "1988", value: "1988"},
            { id: 34, label: "1987", value: "1987"},
            { id: 35, label: "1986", value: "1986"},
            { id: 36, label: "1985", value: "1985"},
            { id: 37, label: "1984", value: "1984"},
            { id: 38, label: "1983", value: "1983"},
            { id: 39, label: "1982", value: "1982"},
            { id: 40, label: "1981", value: "1981"},
            { id: 41, label: "1980", value: "1980"},
            { id: 42, label: "1979", value: "1979"},
            { id: 43, label: "1978", value: "1978"},
            { id: 44, label: "1977", value: "1977"},
            { id: 45, label: "1976", value: "1976"},
            { id: 46, label: "1975", value: "1975"},
            { id: 47, label: "1974", value: "1974"},
            { id: 48, label: "1973", value: "1973"},
            { id: 49, label: "1972", value: "1972"},
            { id: 50, label: "1971", value: "1971"},
            { id: 51, label: "1970", value: "1970"},
            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
        ],
        [
            { id: 0, kind: "الحالة", name: "motorCondition"},
            { id: 1, label: "مستعمل", value: "مستعمل"},
            { id: 2, label: "جديد", value: "جديد"},
        ],
        [
            { id: 0, kind: "الكيلومترات", name: "motorKilometers"},
            { id: 1, label: "0", value: "0"},
            { id: 2, label: "1 - 9,999", value: "1 - 9,999"},
            { id: 3, label: "10,000 - 19,999", value: "10,000 - 19,999"},
            { id: 4, label: "20,000 - 29,999", value: "20,000 - 29,999"},
            { id: 5, label: "30,000 - 39,999", value: "30,000 - 39,999"},
            { id: 6, label: "40,000 - 49,999", value: "40,000 - 49,999"},
            { id: 7, label: "50,000 - 59,999", value: "50,000 - 59,999"},
            { id: 8, label: "60,000 - 69,999", value: "60,000 - 69,999"},
            { id: 9, label: "70,000 - 79,999", value: "70,000 - 79,999"},
            { id: 10, label: "80,000 - 89,999", value: "80,000 - 89,999"},
            { id: 11, label: "90,000 - 99,999", value: "90,000 - 99,999"},
            { id: 12, label: "100,000 - 109,999", value: "100,000 - 109,999"},
            { id: 13, label: "110,000 - 119,999", value: "110,000 - 119,999"},
            { id: 14, label: "120,000 - 129,999", value: "120,000 - 129,999"},
            { id: 15, label: "130,000 - 139,999", value: "130,000 - 139,999"},
            { id: 16, label: "140,000 - 149,999", value: "140,000 - 149,999"},
            { id: 17, label: "150,000 - 159,999", value: "150,000 - 159,999"},
            { id: 18, label: "160,000 - 169,999", value: "160,000 - 169,999"},
            { id: 19, label: "170,000 - 179,999", value: "170,000 - 179,999"},
            { id: 20, label: "180,000 - 189,999", value: "180,000 - 189,999"},
            { id: 21, label: "190,000 - 199,999", value: "190,000 - 199,999"},
            { id: 22, label: "200,000 +", value: "200,000+"}
        ],
        [
            { id: 0, kind: "المحرك (سي سي)", name: "motorEngine"},
            { id: 1, label: "اقل من 250 سي سي", value: "اقل من 250 سي سي"},
            { id: 2, label: "250 - 499 سي سي", value: "250 - 499 سي سي"},
            { id: 3, label: "500 - 599 سي سي", value: "500 - 599 سي سي"},
            { id: 4, label: "600 - 749 سي سي", value: "600 - 749 سي سي"},
            { id: 5, label: "750 - 999 سي سي", value: "750 - 999 سي سي"},
            { id: 6, label: "1000 + سي سي", value: "1000+ سي سي"}
        ], 
    ]
},
{
    id: 4, label: "ارقام سيارات مميزة للبيع", value: "ارقام سيارات مميزة للبيع",properties:[""]
},
{
    id: 5, label: "قطع غيار - اكسسوارات السيارات", value: "قطع غيار - اكسسوارات السيارات",properties:[
        [
            { id: 0, kind: "الحالة", name: "condition5"},
            { id: 1, label: "مستعمل", value: "مستعمل"},
            { id: 2, label: "جديد", value: "جديد"}
           
        ],
        [
            { id: 0, kind: "النوع", name: "type5"},
            { id: 1, label: "جرافة", value: "جرافة"},
            { id: 2, label: "حافلة", value: "حافلة"},
            { id: 3, label: "شاحنة", value: "شاحنة"},
            { id: 4, label: "سيارة نقل", value: "سيارة نقل"},
            { id: 5, label: "جرار زراعي", value: "جرار زراعي"},
            { id: 6, label: "مرافع", value: "مرافع"},
            { id: 7, label: "مقطورة", value: "مقطورة"},
            { id: 8, label: "عربات سكنية", value: "عربات سكنية"},
            { id: 9, label: "الرافعات الشوكية", value: "الرافعات الشوكية"},
            { id: 10, label: "اخرى", value: "اخرى"}
        ]
    ] 
},
{
    id: 6, label: "قطع غيار - اكسسوارات الدراجات", value: "قطع غيار - اكسسوارات الدراجات", properties:[
        [
            { id: 0, kind: "النوع", name: "type6"},
            { id: 1, label: "خوذ", value: ""},
            { id: 2, label: "مستلزمات واكسسوارات", value: ""},
            { id: 3, label: "قطع غيار", value: ""},
            { id: 4, label: "اخرى", value: "اخرى"}
         ] 
    ]
},
{
    id: 7, label: "اطارات جنطات", value: "اطارات جنطات",properties:[
        [
            { id: 0, kind: "النوع", name: "type7"},
            { id: 1, label: "جنط", value: "جنط"},
            { id: 2, label: "كوشوك", value: "كوشوك"},
            { id: 3, label: "جنط - كوشوك", value: "جنط - كوشوك"}
         ],
        [
            { id: 0, kind: "المقاس", name: "size7"},
            { id: 1, label: "10", value: "10"},
            { id: 2, label: "12", value: "12"},
            { id: 3, label: "13", value: "13"},
            { id: 4, label: "14", value: "14"},
            { id: 5, label: "15", value: "15"},
            { id: 6, label: "16", value: "16"},
            { id: 7, label: "17", value: "17"},
            { id: 8, label: "17.5", value: "17.5"},
            { id: 9, label: "18", value: "18"},
            { id: 10, label: "19", value: "19"},
            { id: 11, label: "19.5", value: "19.5"},
            { id: 12, label: "20", value: "20"},
            { id: 13, label: "21", value: "21"},
            { id: 14, label: "22", value: "22"},
            { id: 15, label: "22.5", value: "22.5"},
            { id: 16, label: "23", value: "23"},
            { id: 17, label: "24", value: "24"},
            { id: 18, label: "25", value: ""},
            { id: 19, label: "26", value: "26"},
            { id: 20, label: "28", value: "28"},
            { id: 21, label: "30", value: "30"},
            { id: 23, label: "اخرى", value: "اخرى"},
         ],
        [
            { id: 0, kind: "الارتفاع", name: "height7"},
            { id: 1, label: "20", value: "20"},
            { id: 2, label: "25", value: "25"},
            { id: 3, label: "30", value: "30"},
            { id: 4, label: "35", value: "35"},
            { id: 5, label: "40", value: "40"},
            { id: 6, label: "45", value: "45"},
            { id: 7, label: "50", value: "50"},
            { id: 8, label: "55", value: "55"},
            { id: 9, label: "60", value: "60"},
            { id: 10, label: "65", value: "65"},
            { id: 11, label: "70", value: "70"},
            { id: 12, label: "75", value: "75"},
            { id: 13, label: "80", value: "80"},
            { id: 14, label: "85", value: "85"},
            { id: 15, label: "90", value: "90"},
            { id: 16, label: "95", value: "95"},
            { id: 17, label: "اخرى", value: "اخرى"}
            
         ],
        [
            { id: 0, kind: "العرض", name: "width7"},
            { id: 1, label: "105", value: "105"},
            { id: 2, label: "115", value: "115"},
            { id: 3, label: "125", value: "125"},
            { id: 4, label: "135", value: "135"},
            { id: 5, label: "145", value: "145"},
            { id: 6, label: "155", value: "155"},
            { id: 7, label: "165", value: "165"},
            { id: 8, label: "175", value: "175"},
            { id: 9, label: "185", value: "185"},
            { id: 10, label: "195", value: "195"},
            { id: 11, label: "205", value: "205"},
            { id: 12, label: "215", value: "215"},
            { id: 13, label: "225", value: "225"},
            { id: 14, label: "235", value: "235"},
            { id: 15, label: "245", value: "245"},
            { id: 16, label: "255", value: "255"},
            { id: 17, label: "265", value: "265"},
            { id: 18, label: "275", value: "275"},
            { id: 19, label: "285", value: "285"},
            { id: 20, label: "295", value: "295"},
            { id: 21, label: "305", value: "305"},
            { id: 22, label: "315", value: "315"},
            { id: 23, label: "325", value: "325"},
            { id: 24, label: "335", value: "335"},
            { id: 25, label: "345", value: "345"},
            { id: 26, label: "355", value: "355"},
            { id: 27, label: "365", value: "365"},
            { id: 28, label: "375", value: "375"},
            { id: 29, label: "385", value: "385"},
            { id: 40, label: "395", value: "395"},
            { id: 41, label: "405", value: "405"},
            { id: 42, label: "اخرى", value: "اخرى"}
         ],
        [
            { id: 0, kind: "الماركة", name: "brand7"},
            { id: 1, label: "افون", value: "افون"},
            { id: 2, label: "بي اف قودريتش", value: "بي اف قودريتش"},
            { id: 3, label: "بريدجستون", value: "بريدجستون"},
            { id: 4, label: "كونتيننتال", value: "كونتيننتال"},
            { id: 5, label: "كوبر", value: "كوبر"},
            { id: 6, label: "ديبيكا", value: "ديبيكا"},
            { id: 7, label: "ديك سيبيك", value: "ديك سيبيك"},
            { id: 8, label: "دنلوب", value: "دنلوب"},
            { id: 9, label: "فالكون", value: "فالكون"},
            { id: 10, label: "فايرستون", value: "فايرستون"},
            { id: 11, label: "جنرال تاير", value: "جنرال تاير"},
            { id: 12, label: "جوديير", value: "جوديير"},
            { id: 13, label: "هانكوك", value: "هانكوك"},
            { id: 14, label: "هوزير", value: "هوزير"},
            { id: 15, label: "كومهو", value: "كومهو"},
            { id: 16, label: "لاسا", value: "لاسا"},
            { id: 17, label: "لوفن", value: "لوفن"},
            { id: 18, label: "ميشلين", value: "ميشلين"},
            { id: 19, label: "نيكسين", value: "نيكسين"},
            { id: 20, label: "نوكيا", value: "نوكيا"},
            { id: 21, label: "نوكيان", value: "نوكيان"},
            { id: 22, label: "بيرللي", value: "بيرللي"},
            { id: 23, label: "باور كينج", value: "باور كينج"},
            { id: 24, label: "ريكن", value: "ريكن"},
            { id: 25, label: "سوميتومو", value: "سوميتومو"},
            { id: 26, label: "تويو", value: "تويو"},
            { id: 27, label: "يونيرويال", value: "يونيرويال"},
            { id: 28, label: "فريدشتاين", value: "فريدشتاين"},
            { id: 29, label: "يوكومهاما", value: "يوكومهاما"},
            { id: 30, label: "اخرى", value: "اخرى"}
         ],
        [
            { id: 0, kind: "الحالة", name: "condition7"},
            { id: 1, label: "مستعمل", value: "مستعمل"},
            { id: 2, label: "جديد", value: "جديد"}
           
         ],
    ]
},
{
    id: 8, label: "دراجات هوائية - اكسسوارات", value: "دراجات هوائية - اكسسوارات",properties:[
        [
            { id: 0, kind: "نوع", name: "type10"},
            { id: 1, label: "بي ام اكس", value: "بي ام اكس"},
            { id: 2, label: "دراجات جبلية", value: "دراجات جبلية"},
            { id: 3, label: "دراجات الاطفال", value: "دراجات الاطفال"},
            { id: 4, label: "درجات على الطرق", value: "درجات على الطرق"},
            { id: 5, label: "قطع غيار واكسسوارات", value: "قطع غيار واكسسوارات"},
            { id: 6, label: "دراجات كهربائية", value: "دراجات كهربائية"},
            { id: 7, label: "اخرى", value: "اخرى"}
        ],
        [
            { id: 0, kind: "الحالة", name: "condition10"},
            { id: 1, label: "جديد", value: "جديد"},
            { id: 2, label: "مستعمل", value: "مستعمل"}
        ]
    ]
},
{
    id: 9, label: "شاحنات - اليات ثقيلة", value: "شاحنات - اليات ثقيلة",properties:[
        [
            { id: 0, kind: "النوع", name: "type11"},
            { id: 1, label: "جرافة", value: "ونشات"},
            { id: 2, label: "حافلة", value: ""},
            { id: 3, label: "شاحنة", value: ""},
            { id: 4, label: "سيارة نقل", value: "اخرى"},
            { id: 5, label: "جرار زراعي", value: "ونشات"},
            { id: 6, label: "مرافع", value: ""},
            { id: 7, label: "مقطورة", value: ""},
            { id: 8, label: "عربات سكنية", value: "اخرى"},
            { id: 9, label: "الرافعات الشوكية", value: "ونشات"},
            { id: 10, label: "اخرى", value: "اخرى"},
        ],
        [
             { id: 0, kind: "الحالة", name: "condition11"},
             { id: 1, label: "جديد", value: "جديد"},
             { id: 2, label: "مستعمل", value: "مستعمل"}
        ]
    ]
},
{
    id: 10, label: "قوارب - جت سكي", value: "قوارب - جت سكي",properties:[
        [
            { id: 0, kind: "النوع", name: "type12"},
            { id: 1, label: "قوارب مع محرك", value: "قوارب مع محرك"},
            { id: 2, label: "جيت سكي", value: "جيت سكي"},
            { id: 3, label: "قوارب التجديف", value: "قوارب التجديف"},
            { id: 4, label: "المراكب الشراعية", value: "المراكب الشراعية"},
            { id: 5, label: "اخرى", value: "اخرى"},
        ],
        [
             { id: 0, kind: "الحالة", name: "condition12"},
             { id: 1, label: "جديد", value: "جديد"},
             { id: 2, label: "مستعمل", value: "مستعمل"}
        ]
    ]
},
{
    id: 11, label: "سكراب - سيارات ومركبات اخرى", value: "سكراب - سيارات ومركبات اخرى",properties:[""]
}
], action) =>  {
        switch(action.type){
            
            case "GET_CATEGORIES_OF1" :
                return [{
                    id: 1, label: "سيارات للبيع", value: "سيارات للبيع" , properties: [
                       [
                           { id: 0, kind: "النوع", name: "carType"},
                           { id: 1, label: "هيونداي", value: "هيونداي"},
                           { id: 2, label: "تويوتا", value: "تويوتا"},
                           { id: 3, label: "كيا", value: "كيا"},
                           { id: 4, label: "بي ام دابليو", value: "بي ام دابليو"},
                           { id: 5, label: "مرسيدس بنز", value: "مرسيدس بنز"},
                           { id: 6, label: "استون مارتن", value: "استون مارتن"},
                           { id: 7, label: "الفا روميو", value: "الفا روميو"},
                           { id: 8, label: "اودي", value: "اودي"},
                           { id: 9, label: "ايسوزو", value: "ايسوزو"},
                           { id: 10, label: "انفنتي", value: "انفنتي"},
                           { id: 11, label: "اوبل", value: "اوبل"},
                           { id: 12, label: "بنتلي", value: "بنتلي"},
                           { id: 13, label: "بورش", value: "بورش"},
                           { id: 14, label: "بونتياك", value: "بونتياك"},
                           { id: 15, label: "بيجو", value: "بيجو"},
                           { id: 16, label: "جاكوار", value: "جاكوار"},
                           { id: 17, label: "جربت وول", value: "جربت وول"},
                           { id: 18, label: "جي ام سي", value: "جي ام سي"},
                           { id: 19, label: "جيب", value: "جيب"},
                           { id: 20, label: "دايهاتسو", value: "دايهاتسو"},
                           { id: 21, label: "دايو", value: "دايو"},
                           { id: 22, label: "دودج", value: "دودج"},
                           { id: 23, label: "روفر", value: "روفر"},
                           { id: 24, label: "رولز رويس", value: "رولز رويس"},
                           { id: 25, label: "رينو", value: "رينو"},
                           { id: 26, label: "ساب", value: "ساب"},
                           { id: 27, label: "ساتورن", value: "ساتورن"},
                           { id: 28, label: "سانغ يونغ", value: "سانغ يونغ"},
                           { id: 29, label: "ستيرون", value: "ستيرون"},
                           { id: 30, label: "سكودا", value: "سكودا"},
                           { id: 31, label: "سوبارو", value: "سوبارو"},
                           { id: 32, label: "سوزوكي", value: "سوزوكي"},
                           { id: 33, label: "سيات", value: "سيات"},
                           { id: 34, label: "شيري", value: "شيري"},
                           { id: 35, label: "شيفروليه", value: "شيفروليه"},
                           { id: 36, label: "فورد", value: "فورد"},
                           { id: 37, label: "فولو", value: "فولو"},
                           { id: 38, label: "فولكسفاغن", value: "فولكسفاغن"},
                           { id: 39, label: "فيات", value: "فيات"},
                           { id: 40, label: "فيراي", value: "فيراي"},
                           { id: 41, label: "كاديلاك", value: "كاديلاك"},
                           { id: 42, label: "كرايسلر", value: "كرايسلر"},
                           { id: 43, label: "لادا", value: "لادا"},
                           { id: 44, label: "لامبورغيني", value: "لامبورغيني"},
                           { id: 45, label: "لاند روفر", value: "لاند روفر"},
                           { id: 46, label: "لكزس", value: "لكزس"},
                           { id: 47, label: "لوتس", value: "لوتس"},
                           { id: 48, label: "لينكولن", value: "لينكولن"},
                           { id: 49, label: "مازدا", value: "مازدا"},
                           { id: 50, label: "مازيراتي", value: "مازيراتي"},
                           { id: 51, label: "مورغان", value: "مورغان"},
                           { id: 52, label: "ميتسوبيشي", value: "ميتسوبيشي"},
                           { id: 53, label: "ميركوري", value: "ميركوري"},
                           { id: 54, label: "ميني", value: "ميني"},
                           { id: 55, label: "نيسان", value: "نيسان"},
                           { id: 56, label: "هامر", value: "هامر"},
                           { id: 57, label: "هوندا", value: "هوندا"},
                           { id: 58, label: "جيلي", value: "جيلي"},
                           { id: 59, label: "رد اكس اتو", value: "رد اكس اتو"},
                           { id: 60, label: "ام جي", value: "ام جي"},
                           { id: 61, label: "بروتون", value: "بروتون"},
                           { id: 62, label: "بريليانس", value: "بريليانس"},
                           { id: 63, label: "بي واي دي", value: "بي واي دي"},
                           { id: 64, label: "سامسونج", value: "سامسونج"},
                           { id: 65, label: "تيسلا", value: "تيسلا"},
                           { id: 66, label: "ايران خودرو", value: "ايران خودرو"},
                           { id: 67, label: "تاتا", value: "تاتا"},
                           { id: 68, label: "بوغاتي", value: "بوغاتي"},
                           { id: 69, label: "بويك", value: "بويك"},
                           { id: 70, label: "اكيورا", value: "اكيورا"},
                           { id: 71, label: "سيون", value: "سيون"},
                           { id: 72, label: "مكلارين", value: "مكلارين"},
                           { id: 73, label: "باجاني", value: "باجاني"},
                           { id: 74, label: "لانسيا", value: "لانسيا"},
                           { id: 75, label: "جيه ايه سي", value: "جيه ايه سي"},
                           { id: 76, label: "ليفان", value: "ليفان"},
                           { id: 77, label: "فاو", value: "فاو"},
                           { id: 78, label: "فوتون", value: "فوتون"},
                           { id: 79, label: "ماروتي سوزوكي", value: "ماروتي سوزوكي"},
                           { id: 80, label: "سايبا", value: "سايبا"},
                           { id: 81, label: "برايفت", value: "برايفت"},
                           { id: 82, label: "بايك", value: "بايك"},
                           { id: 83, label: "شانجان", value: "شانجان"},
                           { id: 84, label: "هونغهاي", value: "هونغهاي"},
                           { id: 85, label: "دي اف ام", value: "دي اف ام"},
                           { id: 86, label: "بورجوارد", value: "بورجوارد"},
                           { id: 87, label: "ايفيكو", value: "ايفيكو"},
                           { id: 88, label: "هافال", value: "هافال"},
                           { id: 89, label: "اخرى", value: "اخرى"}  
                        ],
                        [
                            { id: 0, kind: "سنة الصنع", name: "carYear"},
                            { id: 1, label: "2020", value: "2020"},
                            { id: 2, label: "2019", value: "2019"},
                            { id: 3, label: "2018", value: "2018"},
                            { id: 4, label: "2017", value: "2017"},
                            { id: 5, label: "2016", value: "2016"},
                            { id: 6, label: "2015", value: "2015"},
                            { id: 7, label: "2014", value: "2014"},
                            { id: 8, label: "2013", value: "2013"},
                            { id: 9, label: "2012", value: "2012"},
                            { id: 10, label: "2011", value: "2011"},
                            { id: 11, label: "2010", value: "2010"},
                            { id: 12, label: "2009", value: "2009"},
                            { id: 13, label: "2008", value: "2008"},
                            { id: 14, label: "2007", value: "2007"},
                            { id: 15, label: "2006", value: "2006"},
                            { id: 16, label: "2005", value: "2005"},
                            { id: 17, label: "2004", value: "2004"},
                            { id: 18, label: "2003", value: "2003"},
                            { id: 19, label: "2002", value: "2002"},
                            { id: 20, label: "2001", value: "2001"},
                            { id: 21, label: "2000", value: "2000"},
                            { id: 22, label: "1999", value: "1999"},
                            { id: 23, label: "1998", value: "1998"},
                            { id: 24, label: "1997", value: "1997"},
                            { id: 25, label: "1996", value: "1996"},
                            { id: 26, label: "1995", value: "1995"},
                            { id: 27, label: "1994", value: "1994"},
                            { id: 28, label: "1993", value: "1993"},
                            { id: 29, label: "1992", value: "1992"},
                            { id: 30, label: "1991", value: "1991"},
                            { id: 31, label: "1990", value: "1990"},
                            { id: 32, label: "1989", value: "1989"},
                            { id: 33, label: "1988", value: "1988"},
                            { id: 34, label: "1987", value: "1987"},
                            { id: 35, label: "1986", value: "1986"},
                            { id: 36, label: "1985", value: "1985"},
                            { id: 37, label: "1984", value: "1984"},
                            { id: 38, label: "1983", value: "1983"},
                            { id: 39, label: "1982", value: "1982"},
                            { id: 40, label: "1981", value: "1981"},
                            { id: 41, label: "1980", value: "1980"},
                            { id: 42, label: "1979", value: "1979"},
                            { id: 43, label: "1978", value: "1978"},
                            { id: 44, label: "1977", value: "1977"},
                            { id: 45, label: "1976", value: "1976"},
                            { id: 46, label: "1975", value: "1975"},
                            { id: 47, label: "1974", value: "1974"},
                            { id: 48, label: "1973", value: "1973"},
                            { id: 49, label: "1972", value: "1972"},
                            { id: 50, label: "1971", value: "1971"},
                            { id: 51, label: "1970", value: "1970"},
                            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
                        ],
                        [
                           { id: 0, kind: "الحالة", name: "carCondition"},
                           { id: 1, label: "مستعمل", value: "مستعمل"},
                           { id: 2, label: "جديد", value: "جديد"},
                          
                        ],
                        [
                            { id: 0, kind: "الكيلومترات", name: "carKilometers"},
                            { id: 1, label: "0", value: "0"},
                            { id: 2, label: "1 - 9,999", value: "1 - 9,999"},
                            { id: 3, label: "10,000 - 19,999", value: "10,000 - 19,999"},
                            { id: 4, label: "20,000 - 29,999", value: "20,000 - 29,999"},
                            { id: 5, label: "30,000 - 39,999", value: "30,000 - 39,999"},
                            { id: 6, label: "40,000 - 49,999", value: "40,000 - 49,999"},
                            { id: 7, label: "50,000 - 59,999", value: "50,000 - 59,999"},
                            { id: 8, label: "60,000 - 69,999", value: "60,000 - 69,999"},
                            { id: 9, label: "70,000 - 79,999", value: "70,000 - 79,999"},
                            { id: 10, label: "80,000 - 89,999", value: "80,000 - 89,999"},
                            { id: 11, label: "90,000 - 99,999", value: "90,000 - 99,999"},
                            { id: 12, label: "100,000 - 109,999", value: "100,000 - 109,999"},
                            { id: 13, label: "110,000 - 119,999", value: "110,000 - 119,999"},
                            { id: 14, label: "120,000 - 129,999", value: "120,000 - 129,999"},
                            { id: 15, label: "130,000 - 139,999", value: "130,000 - 139,999"},
                            { id: 16, label: "140,000 - 149,999", value: "140,000 - 149,999"},
                            { id: 17, label: "150,000 - 159,999", value: "150,000 - 159,999"},
                            { id: 18, label: "160,000 - 169,999", value: "160,000 - 169,999"},
                            { id: 19, label: "170,000 - 179,999", value: "170,000 - 179,999"},
                            { id: 20, label: "180,000 - 189,999", value: "180,000 - 189,999"},
                            { id: 21, label: "190,000 - 199,999", value: "190,000 - 199,999"},
                            { id: 22, label: "200,000 +", value: "200,000 +"}
                        ],
                        [
                            { id: 0, kind: "نوع ناقل الحركة", name: "carTransmission"},
                            { id: 1, label: "اتوماتيك", value: "اتوماتيك"},
                            { id: 2, label: "عادي", value: "عادي"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "نوع الوقود", name: "carFuel"},
                            { id: 1, label: "بنزين", value: "بنزين"},
                            { id: 2, label: "ديزل", value: "ديزل"},
                            { id: 3, label: "هايبرد", value: "هايبرد"},
                            { id: 4, label: "كهربائي", value: "كهربائي"}
                        ],
                        [
                            { id: 0, kind: "اللون", name: "color"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"}
                        ],
                        [
                            { id: 0, kind: "الجمرك", name: "carCustoms"},
                            { id: 1, label: "مجمركة", value: "مجمركة"},
                            { id: 2, label: "غير مجمركة", value: "غير مجمركة"}
                        ],
                        [
                            { id: 0, kind: "الترخيص", name: "carLicense"},
                            { id: 1, label: "مرخصة", value: "مرخصة"},
                            { id: 2, label: "غير مرخصة", value: "غير مرخصة"}
                        ],
                        [
                            { id: 0, kind: "التأمين", name: "carInsurance"},
                            { id: 1, label: "تأمين الزامي", value: "تأمين الزامي"},
                            { id: 2, label: "تأمين شامل", value: "تأمين شامل"},
                            { id: 3, label: "غير مؤمنة", value: "غير مؤمنة"}
                        ]
                        
                    ]
                },
                {
                    id: 2, label: "سيارات للايجار", value: "سيارات للايجار", properties:[
                        [
                            { id: 0, kind: "النوع", name: "carType2"},
                            { id: 1, label: "هيونداي", value: "هيونداي"},
                            { id: 2, label: "تويوتا", value: "تويوتا"},
                            { id: 3, label: "كيا", value: "كيا"},
                            { id: 4, label: "بي ام دابليو", value: "بي ام دابليو"},
                            { id: 5, label: "مرسيدس بنز", value: "مرسيدس بنز"},
                            { id: 6, label: "استون مارتن", value: "استون مارتن"},
                            { id: 7, label: "الفا روميو", value: "الفا روميو"},
                            { id: 8, label: "اودي", value: "اودي"},
                            { id: 9, label: "ايسوزو", value: "ايسوزو"},
                            { id: 10, label: "انفنتي", value: "انفنتي"},
                            { id: 11, label: "اوبل", value: "اوبل"},
                            { id: 12, label: "بنتلي", value: "بنتلي"},
                            { id: 13, label: "بورش", value: "بورش"},
                            { id: 14, label: "بونتياك", value: "بونتياك"},
                            { id: 15, label: "بيجو", value: "بيجو"},
                            { id: 16, label: "جاكوار", value: "جاكوار"},
                            { id: 17, label: "جربت وول", value: "جربت وول"},
                            { id: 18, label: "جي ام سي", value: "جي ام سي"},
                            { id: 19, label: "جيب", value: "جيب"},
                            { id: 20, label: "دايهاتسو", value: "دايهاتسو"},
                            { id: 21, label: "دايو", value: "دايو"},
                            { id: 22, label: "دودج", value: "دودج"},
                            { id: 23, label: "روفر", value: "روفر"},
                            { id: 24, label: "رولز رويس", value: "رولز رويس"},
                            { id: 25, label: "رينو", value: "رينو"},
                            { id: 26, label: "ساب", value: "ساب"},
                            { id: 27, label: "ساتورن", value: "ساتورن"},
                            { id: 28, label: "سانغ يونغ", value: "سانغ يونغ"},
                            { id: 29, label: "ستيرون", value: "ستيرون"},
                            { id: 30, label: "سكودا", value: "سكودا"},
                            { id: 31, label: "سوبارو", value: "سوبارو"},
                            { id: 32, label: "سوزوكي", value: "سوزوكي"},
                            { id: 33, label: "سيات", value: "سيات"},
                            { id: 34, label: "شيري", value: "شيري"},
                            { id: 35, label: "شيفروليه", value: "شيفروليه"},
                            { id: 36, label: "فورد", value: "فورد"},
                            { id: 37, label: "فولو", value: "فولو"},
                            { id: 38, label: "فولكسفاغن", value: "فولكسفاغن"},
                            { id: 39, label: "فيات", value: "فيات"},
                            { id: 40, label: "فيراي", value: "فيراي"},
                            { id: 41, label: "كاديلاك", value: "كاديلاك"},
                            { id: 42, label: "كرايسلر", value: "كرايسلر"},
                            { id: 43, label: "لادا", value: "لادا"},
                            { id: 44, label: "لامبورغيني", value: "لامبورغيني"},
                            { id: 45, label: "لاند روفر", value: "لاند روفر"},
                            { id: 46, label: "لكزس", value: "لكزس"},
                            { id: 47, label: "لوتس", value: "لوتس"},
                            { id: 48, label: "لينكولن", value: "لينكولن"},
                            { id: 49, label: "مازدا", value: "مازدا"},
                            { id: 50, label: "مازيراتي", value: "مازيراتي"},
                            { id: 51, label: "مورغان", value: "مورغان"},
                            { id: 52, label: "ميتسوبيشي", value: "ميتسوبيشي"},
                            { id: 53, label: "ميركوري", value: "ميركوري"},
                            { id: 54, label: "ميني", value: "ميني"},
                            { id: 55, label: "نيسان", value: "نيسان"},
                            { id: 56, label: "هامر", value: "هامر"},
                            { id: 57, label: "هوندا", value: "هوندا"},
                            { id: 58, label: "جيلي", value: "جيلي"},
                            { id: 59, label: "رد اكس اتو", value: "رد اكس اتو"},
                            { id: 60, label: "ام جي", value: "ام جي"},
                            { id: 61, label: "بروتون", value: "بروتون"},
                            { id: 62, label: "بريليانس", value: "بريليانس"},
                            { id: 63, label: "بي واي دي", value: "بي واي دي"},
                            { id: 64, label: "سامسونج", value: "سامسونج"},
                            { id: 65, label: "تيسلا", value: "تيسلا"},
                            { id: 66, label: "ايران خودرو", value: "ايران خودرو"},
                            { id: 67, label: "تاتا", value: "تاتا"},
                            { id: 68, label: "بوغاتي", value: "بوغاتي"},
                            { id: 69, label: "بويك", value: "بويك"},
                            { id: 70, label: "اكيورا", value: "اكيورا"},
                            { id: 71, label: "سيون", value: "سيون"},
                            { id: 72, label: "مكلارين", value: "مكلارين"},
                            { id: 73, label: "باجاني", value: "باجاني"},
                            { id: 74, label: "لانسيا", value: "لانسيا"},
                            { id: 75, label: "جيه ايه سي", value: "جيه ايه سي"},
                            { id: 76, label: "ليفان", value: "ليفان"},
                            { id: 77, label: "فاو", value: "فاو"},
                            { id: 78, label: "فوتون", value: "فوتون"},
                            { id: 79, label: "ماروتي سوزوكي", value: "ماروتي سوزوكي"},
                            { id: 80, label: "سايبا", value: "سايبا"},
                            { id: 81, label: "برايفت", value: "برايفت"},
                            { id: 82, label: "بايك", value: "بايك"},
                            { id: 83, label: "شانجان", value: "شانجان"},
                            { id: 84, label: "هونغهاي", value: "هونغهاي"},
                            { id: 85, label: "دي اف ام", value: "دي اف ام"},
                            { id: 86, label: "بورجوارد", value: "بورجوارد"},
                            { id: 87, label: "ايفيكو", value: "ايفيكو"},
                            { id: 88, label: "هافال", value: "هافال"},
                            { id: 89, label: "اخرى", value: "اخرى"}  
                         ],
                        [
                            { id: 0, kind: "سنة الصنع", name: "carYear2"},
                            { id: 1, label: "2020", value: "2020"},
                            { id: 2, label: "2019", value: "2019"},
                            { id: 3, label: "2018", value: "2018"},
                            { id: 4, label: "2017", value: "2017"},
                            { id: 5, label: "2016", value: "2016"},
                            { id: 6, label: "2015", value: "2015"},
                            { id: 7, label: "2014", value: "2014"},
                            { id: 8, label: "2013", value: "2013"},
                            { id: 9, label: "2012", value: "2012"},
                            { id: 10, label: "2011", value: "2011"},
                            { id: 11, label: "2010", value: "2010"},
                            { id: 12, label: "2009", value: "2009"},
                            { id: 13, label: "2008", value: "2008"},
                            { id: 14, label: "2007", value: "2007"},
                            { id: 15, label: "2006", value: "2006"},
                            { id: 16, label: "2005", value: "2005"},
                            { id: 17, label: "2004", value: "2004"},
                            { id: 18, label: "2003", value: "2003"},
                            { id: 19, label: "2002", value: "2002"},
                            { id: 20, label: "2001", value: "2001"},
                            { id: 21, label: "2000", value: "2000"},
                            { id: 22, label: "1999", value: "1999"},
                            { id: 23, label: "1998", value: "1998"},
                            { id: 24, label: "1997", value: "1997"},
                            { id: 25, label: "1996", value: "1996"},
                            { id: 26, label: "1995", value: "1995"},
                            { id: 27, label: "1994", value: "1994"},
                            { id: 28, label: "1993", value: "1993"},
                            { id: 29, label: "1992", value: "1992"},
                            { id: 30, label: "1991", value: "1991"},
                            { id: 31, label: "1990", value: "1990"},
                            { id: 32, label: "1989", value: "1989"},
                            { id: 33, label: "1988", value: "1988"},
                            { id: 34, label: "1987", value: "1987"},
                            { id: 35, label: "1986", value: "1986"},
                            { id: 36, label: "1985", value: "1985"},
                            { id: 37, label: "1984", value: "1984"},
                            { id: 38, label: "1983", value: "1983"},
                            { id: 39, label: "1982", value: "1982"},
                            { id: 40, label: "1981", value: "1981"},
                            { id: 41, label: "1980", value: "1980"},
                            { id: 42, label: "1979", value: "1979"},
                            { id: 43, label: "1978", value: "1978"},
                            { id: 44, label: "1977", value: "1977"},
                            { id: 45, label: "1976", value: "1976"},
                            { id: 46, label: "1975", value: "1975"},
                            { id: 47, label: "1974", value: "1974"},
                            { id: 48, label: "1973", value: "1973"},
                            { id: 49, label: "1972", value: "1972"},
                            { id: 50, label: "1971", value: "1971"},
                            { id: 51, label: "1970", value: "1970"},
                            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
                         ],
                        [
                            { id: 0, kind: "نوع ناقل الحركة", name: "carTransmission2"},
                            { id: 1, label: "اتوماتيك", value: "اتوماتيك"},
                            { id: 2, label: "عادي", value: "عادي"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "نوع الوقود", name: "carFuel2"},
                            { id: 1, label: "بنزين", value: "بنزين"},
                            { id: 2, label: "ديزل", value: "ديزل"},
                            { id: 3, label: "هايبرد", value: "هايبرد"},
                            { id: 4, label: "كهربائي", value: "كهربائي"}
                         ],
                        [
                            { id: 0, kind: "مدة الإيجار", name: "carPeriod"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ],
                        [
                            { id: 0, kind: "اللون", name: "color"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"}
                        ]
                    ]
                },
                {
                    id: 3, label: "دراجات نارية", value: "دراجات نارية", properties:[
                        [
                            { id: 0, kind: "النوع", name: "motorType"},
                            { id: 1, label: "ابريليا", value: "ابريليا"},
                            { id: 2, label: "بي ام دابليو", value: "بي ام دابليو"},
                            { id: 3, label: "بوجي", value: "بوجي"},
                            { id: 4, label: "كان ام", value: "كان ام"},
                            { id: 5, label: "دوكاتي", value: "دوكاتي"},
                            { id: 6, label: "هارلي ديفيدسون", value: "هارلي ديفيدسون"},
                            { id: 7, label: "هوندا", value: "هوندا"},
                            { id: 8, label: "هايوسنج", value: "هايوسنج"},
                            { id: 9, label: "كاواساكي", value: "كاواساكي"},
                            { id: 10, label: "كاي تي ام", value: "كاي تي ام"},
                            { id: 11, label: "موتو جوزي", value: "موتو جوزي"},
                            { id: 12, label: "بياجيو", value: "بياجيو"},
                            { id: 13, label: "سوزوكي", value: "سوزوكي"},
                            { id: 14, label: "تريمف", value: "تريمف"},
                            { id: 15, label: "فيسبا", value: "فيسبا"},
                            { id: 16, label: "ياماها", value: "ياماها"},
                            { id: 17, label: "سي اف موتو", value: "سي اف موتو"},
                            { id: 18, label: "ام في اجوستا", value: "ام في اجوستا"},
                            { id: 19, label: "اس واي ام", value: "اس واي ام"},
                            { id: 20, label: "فيكتوري", value: "فيكتوري"},
                            { id: 21, label: "بينتلي", value: "بينتلي"},
                            { id: 22, label: "تي في سي", value: "تي في سي"},
                            { id: 23, label: "دايليم", value: "دايليم"},
                            { id: 24, label: "جيانشي", value: "جيانشي"},
                            { id: 25, label: "انديان", value: "انديان"},
                            { id: 26, label: "رويال انفليد", value: "رويال انفليد"},
                            { id: 27, label: "اخرى", value: "اخرى"}  
                         ],
                        [
                            { id: 0, kind: "سنة الصنع", name: "motorYear"},
                            { id: 1, label: "2020", value: "2020"},
                            { id: 2, label: "2019", value: "2019"},
                            { id: 3, label: "2018", value: "2018"},
                            { id: 4, label: "2017", value: "2017"},
                            { id: 5, label: "2016", value: "2016"},
                            { id: 6, label: "2015", value: "2015"},
                            { id: 7, label: "2014", value: "2014"},
                            { id: 8, label: "2013", value: "2013"},
                            { id: 9, label: "2012", value: "2012"},
                            { id: 10, label: "2011", value: "2011"},
                            { id: 11, label: "2010", value: "2010"},
                            { id: 12, label: "2009", value: "2009"},
                            { id: 13, label: "2008", value: "2008"},
                            { id: 14, label: "2007", value: "2007"},
                            { id: 15, label: "2006", value: "2006"},
                            { id: 16, label: "2005", value: "2005"},
                            { id: 17, label: "2004", value: "2004"},
                            { id: 18, label: "2003", value: "2003"},
                            { id: 19, label: "2002", value: "2002"},
                            { id: 20, label: "2001", value: "2001"},
                            { id: 21, label: "2000", value: "2000"},
                            { id: 22, label: "1999", value: "1999"},
                            { id: 23, label: "1998", value: "1998"},
                            { id: 24, label: "1997", value: "1997"},
                            { id: 25, label: "1996", value: "1996"},
                            { id: 26, label: "1995", value: "1995"},
                            { id: 27, label: "1994", value: "1994"},
                            { id: 28, label: "1993", value: "1993"},
                            { id: 29, label: "1992", value: "1992"},
                            { id: 30, label: "1991", value: "1991"},
                            { id: 31, label: "1990", value: "1990"},
                            { id: 32, label: "1989", value: "1989"},
                            { id: 33, label: "1988", value: "1988"},
                            { id: 34, label: "1987", value: "1987"},
                            { id: 35, label: "1986", value: "1986"},
                            { id: 36, label: "1985", value: "1985"},
                            { id: 37, label: "1984", value: "1984"},
                            { id: 38, label: "1983", value: "1983"},
                            { id: 39, label: "1982", value: "1982"},
                            { id: 40, label: "1981", value: "1981"},
                            { id: 41, label: "1980", value: "1980"},
                            { id: 42, label: "1979", value: "1979"},
                            { id: 43, label: "1978", value: "1978"},
                            { id: 44, label: "1977", value: "1977"},
                            { id: 45, label: "1976", value: "1976"},
                            { id: 46, label: "1975", value: "1975"},
                            { id: 47, label: "1974", value: "1974"},
                            { id: 48, label: "1973", value: "1973"},
                            { id: 49, label: "1972", value: "1972"},
                            { id: 50, label: "1971", value: "1971"},
                            { id: 51, label: "1970", value: "1970"},
                            { id: 52, label: "اقدم من 1970", value: "اقدم من 1970"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "motorCondition"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"},
                        ],
                        [
                            { id: 0, kind: "الكيلومترات", name: "motorKilometers"},
                            { id: 1, label: "0", value: "0"},
                            { id: 2, label: "1 - 9,999", value: "1 - 9,999"},
                            { id: 3, label: "10,000 - 19,999", value: "10,000 - 19,999"},
                            { id: 4, label: "20,000 - 29,999", value: "20,000 - 29,999"},
                            { id: 5, label: "30,000 - 39,999", value: "30,000 - 39,999"},
                            { id: 6, label: "40,000 - 49,999", value: "40,000 - 49,999"},
                            { id: 7, label: "50,000 - 59,999", value: "50,000 - 59,999"},
                            { id: 8, label: "60,000 - 69,999", value: "60,000 - 69,999"},
                            { id: 9, label: "70,000 - 79,999", value: "70,000 - 79,999"},
                            { id: 10, label: "80,000 - 89,999", value: "80,000 - 89,999"},
                            { id: 11, label: "90,000 - 99,999", value: "90,000 - 99,999"},
                            { id: 12, label: "100,000 - 109,999", value: "100,000 - 109,999"},
                            { id: 13, label: "110,000 - 119,999", value: "110,000 - 119,999"},
                            { id: 14, label: "120,000 - 129,999", value: "120,000 - 129,999"},
                            { id: 15, label: "130,000 - 139,999", value: "130,000 - 139,999"},
                            { id: 16, label: "140,000 - 149,999", value: "140,000 - 149,999"},
                            { id: 17, label: "150,000 - 159,999", value: "150,000 - 159,999"},
                            { id: 18, label: "160,000 - 169,999", value: "160,000 - 169,999"},
                            { id: 19, label: "170,000 - 179,999", value: "170,000 - 179,999"},
                            { id: 20, label: "180,000 - 189,999", value: "180,000 - 189,999"},
                            { id: 21, label: "190,000 - 199,999", value: "190,000 - 199,999"},
                            { id: 22, label: "200,000 +", value: "200,000+"}
                        ],
                        [
                            { id: 0, kind: "المحرك (سي سي)", name: "motorEngine"},
                            { id: 1, label: "اقل من 250 سي سي", value: "اقل من 250 سي سي"},
                            { id: 2, label: "250 - 499 سي سي", value: "250 - 499 سي سي"},
                            { id: 3, label: "500 - 599 سي سي", value: "500 - 599 سي سي"},
                            { id: 4, label: "600 - 749 سي سي", value: "600 - 749 سي سي"},
                            { id: 5, label: "750 - 999 سي سي", value: "750 - 999 سي سي"},
                            { id: 6, label: "1000 + سي سي", value: "1000+ سي سي"}
                        ], 
                    ]
                },
                {
                    id: 4, label: "ارقام سيارات مميزة للبيع", value: "ارقام سيارات مميزة للبيع",properties:[""]
                },
                {
                    id: 5, label: "قطع غيار - اكسسوارات السيارات", value: "قطع غيار - اكسسوارات السيارات",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition5"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                           
                        ],
                        [
                            { id: 0, kind: "النوع", name: "type5"},
                            { id: 1, label: "جرافة", value: "جرافة"},
                            { id: 2, label: "حافلة", value: "حافلة"},
                            { id: 3, label: "شاحنة", value: "شاحنة"},
                            { id: 4, label: "سيارة نقل", value: "سيارة نقل"},
                            { id: 5, label: "جرار زراعي", value: "جرار زراعي"},
                            { id: 6, label: "مرافع", value: "مرافع"},
                            { id: 7, label: "مقطورة", value: "مقطورة"},
                            { id: 8, label: "عربات سكنية", value: "عربات سكنية"},
                            { id: 9, label: "الرافعات الشوكية", value: "الرافعات الشوكية"},
                            { id: 10, label: "اخرى", value: "اخرى"}
                        ]
                    ] 
                },
                {
                    id: 6, label: "قطع غيار - اكسسوارات الدراجات", value: "قطع غيار - اكسسوارات الدراجات", properties:[
                        [
                            { id: 0, kind: "النوع", name: "type6"},
                            { id: 1, label: "خوذ", value: ""},
                            { id: 2, label: "مستلزمات واكسسوارات", value: ""},
                            { id: 3, label: "قطع غيار", value: ""},
                            { id: 4, label: "اخرى", value: "اخرى"}
                         ] 
                    ]
                },
                {
                    id: 7, label: "اطارات جنطات", value: "اطارات جنطات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type7"},
                            { id: 1, label: "جنط", value: "جنط"},
                            { id: 2, label: "كوشوك", value: "كوشوك"},
                            { id: 3, label: "جنط - كوشوك", value: "جنط - كوشوك"}
                         ],
                        [
                            { id: 0, kind: "المقاس", name: "size7"},
                            { id: 1, label: "10", value: "10"},
                            { id: 2, label: "12", value: "12"},
                            { id: 3, label: "13", value: "13"},
                            { id: 4, label: "14", value: "14"},
                            { id: 5, label: "15", value: "15"},
                            { id: 6, label: "16", value: "16"},
                            { id: 7, label: "17", value: "17"},
                            { id: 8, label: "17.5", value: "17.5"},
                            { id: 9, label: "18", value: "18"},
                            { id: 10, label: "19", value: "19"},
                            { id: 11, label: "19.5", value: "19.5"},
                            { id: 12, label: "20", value: "20"},
                            { id: 13, label: "21", value: "21"},
                            { id: 14, label: "22", value: "22"},
                            { id: 15, label: "22.5", value: "22.5"},
                            { id: 16, label: "23", value: "23"},
                            { id: 17, label: "24", value: "24"},
                            { id: 18, label: "25", value: ""},
                            { id: 19, label: "26", value: "26"},
                            { id: 20, label: "28", value: "28"},
                            { id: 21, label: "30", value: "30"},
                            { id: 23, label: "اخرى", value: "اخرى"},
                         ],
                        [
                            { id: 0, kind: "الارتفاع", name: "height7"},
                            { id: 1, label: "20", value: "20"},
                            { id: 2, label: "25", value: "25"},
                            { id: 3, label: "30", value: "30"},
                            { id: 4, label: "35", value: "35"},
                            { id: 5, label: "40", value: "40"},
                            { id: 6, label: "45", value: "45"},
                            { id: 7, label: "50", value: "50"},
                            { id: 8, label: "55", value: "55"},
                            { id: 9, label: "60", value: "60"},
                            { id: 10, label: "65", value: "65"},
                            { id: 11, label: "70", value: "70"},
                            { id: 12, label: "75", value: "75"},
                            { id: 13, label: "80", value: "80"},
                            { id: 14, label: "85", value: "85"},
                            { id: 15, label: "90", value: "90"},
                            { id: 16, label: "95", value: "95"},
                            { id: 17, label: "اخرى", value: "اخرى"}
                            
                         ],
                        [
                            { id: 0, kind: "العرض", name: "width7"},
                            { id: 1, label: "105", value: "105"},
                            { id: 2, label: "115", value: "115"},
                            { id: 3, label: "125", value: "125"},
                            { id: 4, label: "135", value: "135"},
                            { id: 5, label: "145", value: "145"},
                            { id: 6, label: "155", value: "155"},
                            { id: 7, label: "165", value: "165"},
                            { id: 8, label: "175", value: "175"},
                            { id: 9, label: "185", value: "185"},
                            { id: 10, label: "195", value: "195"},
                            { id: 11, label: "205", value: "205"},
                            { id: 12, label: "215", value: "215"},
                            { id: 13, label: "225", value: "225"},
                            { id: 14, label: "235", value: "235"},
                            { id: 15, label: "245", value: "245"},
                            { id: 16, label: "255", value: "255"},
                            { id: 17, label: "265", value: "265"},
                            { id: 18, label: "275", value: "275"},
                            { id: 19, label: "285", value: "285"},
                            { id: 20, label: "295", value: "295"},
                            { id: 21, label: "305", value: "305"},
                            { id: 22, label: "315", value: "315"},
                            { id: 23, label: "325", value: "325"},
                            { id: 24, label: "335", value: "335"},
                            { id: 25, label: "345", value: "345"},
                            { id: 26, label: "355", value: "355"},
                            { id: 27, label: "365", value: "365"},
                            { id: 28, label: "375", value: "375"},
                            { id: 29, label: "385", value: "385"},
                            { id: 40, label: "395", value: "395"},
                            { id: 41, label: "405", value: "405"},
                            { id: 42, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "الماركة", name: "brand7"},
                            { id: 1, label: "افون", value: "افون"},
                            { id: 2, label: "بي اف قودريتش", value: "بي اف قودريتش"},
                            { id: 3, label: "بريدجستون", value: "بريدجستون"},
                            { id: 4, label: "كونتيننتال", value: "كونتيننتال"},
                            { id: 5, label: "كوبر", value: "كوبر"},
                            { id: 6, label: "ديبيكا", value: "ديبيكا"},
                            { id: 7, label: "ديك سيبيك", value: "ديك سيبيك"},
                            { id: 8, label: "دنلوب", value: "دنلوب"},
                            { id: 9, label: "فالكون", value: "فالكون"},
                            { id: 10, label: "فايرستون", value: "فايرستون"},
                            { id: 11, label: "جنرال تاير", value: "جنرال تاير"},
                            { id: 12, label: "جوديير", value: "جوديير"},
                            { id: 13, label: "هانكوك", value: "هانكوك"},
                            { id: 14, label: "هوزير", value: "هوزير"},
                            { id: 15, label: "كومهو", value: "كومهو"},
                            { id: 16, label: "لاسا", value: "لاسا"},
                            { id: 17, label: "لوفن", value: "لوفن"},
                            { id: 18, label: "ميشلين", value: "ميشلين"},
                            { id: 19, label: "نيكسين", value: "نيكسين"},
                            { id: 20, label: "نوكيا", value: "نوكيا"},
                            { id: 21, label: "نوكيان", value: "نوكيان"},
                            { id: 22, label: "بيرللي", value: "بيرللي"},
                            { id: 23, label: "باور كينج", value: "باور كينج"},
                            { id: 24, label: "ريكن", value: "ريكن"},
                            { id: 25, label: "سوميتومو", value: "سوميتومو"},
                            { id: 26, label: "تويو", value: "تويو"},
                            { id: 27, label: "يونيرويال", value: "يونيرويال"},
                            { id: 28, label: "فريدشتاين", value: "فريدشتاين"},
                            { id: 29, label: "يوكومهاما", value: "يوكومهاما"},
                            { id: 30, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "الحالة", name: "condition7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                           
                         ],
                    ]
                },
                {
                    id: 8, label: "دراجات هوائية - اكسسوارات", value: "دراجات هوائية - اكسسوارات",properties:[
                        [
                            { id: 0, kind: "نوع", name: "type10"},
                            { id: 1, label: "بي ام اكس", value: "بي ام اكس"},
                            { id: 2, label: "دراجات جبلية", value: "دراجات جبلية"},
                            { id: 3, label: "دراجات الاطفال", value: "دراجات الاطفال"},
                            { id: 4, label: "درجات على الطرق", value: "درجات على الطرق"},
                            { id: 5, label: "قطع غيار واكسسوارات", value: "قطع غيار واكسسوارات"},
                            { id: 6, label: "دراجات كهربائية", value: "دراجات كهربائية"},
                            { id: 7, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition10"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 9, label: "شاحنات - اليات ثقيلة", value: "شاحنات - اليات ثقيلة",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type11"},
                            { id: 1, label: "جرافة", value: "ونشات"},
                            { id: 2, label: "حافلة", value: ""},
                            { id: 3, label: "شاحنة", value: ""},
                            { id: 4, label: "سيارة نقل", value: "اخرى"},
                            { id: 5, label: "جرار زراعي", value: "ونشات"},
                            { id: 6, label: "مرافع", value: ""},
                            { id: 7, label: "مقطورة", value: ""},
                            { id: 8, label: "عربات سكنية", value: "اخرى"},
                            { id: 9, label: "الرافعات الشوكية", value: "ونشات"},
                            { id: 10, label: "اخرى", value: "اخرى"},
                        ],
                        [
                             { id: 0, kind: "الحالة", name: "condition11"},
                             { id: 1, label: "جديد", value: "جديد"},
                             { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 10, label: "قوارب - جت سكي", value: "قوارب - جت سكي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type12"},
                            { id: 1, label: "قوارب مع محرك", value: "قوارب مع محرك"},
                            { id: 2, label: "جيت سكي", value: "جيت سكي"},
                            { id: 3, label: "قوارب التجديف", value: "قوارب التجديف"},
                            { id: 4, label: "المراكب الشراعية", value: "المراكب الشراعية"},
                            { id: 5, label: "اخرى", value: "اخرى"},
                        ],
                        [
                             { id: 0, kind: "الحالة", name: "condition12"},
                             { id: 1, label: "جديد", value: "جديد"},
                             { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 11, label: "سكراب - سيارات ومركبات اخرى", value: "سكراب - سيارات ومركبات اخرى",properties:[""]
                }
        ] ;
            case "GET_CATEGORIES_OF2" :
                    return [{
                    id: 1, label: "موبايل", value: "موبايل",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand1-2"},
                            { id: 1, label: "ابل", value: "ابل"},
                            { id: 2, label: "سامسونج", value: "سامسونج"},
                            { id: 3, label: "هواوي", value: "هواوي"},
                            { id: 4, label: "اتش تي سي", value: "اتش تي سي"},
                            { id: 5, label: "سوني", value: "سوني"},
                            { id: 6, label: "ال جي", value: "ال جي"},
                            { id: 7, label: "الكاتيل", value: "الكاتيل"},
                            { id: 8, label: "اسوس", value: "اسوس"},
                            { id: 9, label: "نوكيا", value: "نوكيا"},
                            { id: 10, label: "شاومي", value: "شاومي"},
                            { id: 11, label: "اوبو", value: "اوبو"},
                            { id: 12, label: "لينوفو", value: "لينوفو"},
                            { id: 13, label: "بلاك بيري", value: "بلاك بيري"},
                            { id: 14, label: "موتورولا", value: "موتورولا"},
                            { id: 15, label: "بلاك فيو", value: "بلاك فيو"},
                            { id: 16, label: "بلو", value: "بلو"},
                            { id: 17, label: "كات", value: "كات"},
                            { id: 18, label: "دوجي", value: "دوجي"},
                            { id: 19, label: "ايليفون", value: "ايليفون"},
                            { id: 20, label: "جوجل", value: "جوجل"},
                            { id: 21, label: "ستار L8", value: "ستار L8"},
                            { id: 22, label: "ابريت", value: "ابريت"},
                            { id: 23, label: "لياجو", value: "لياجو"},
                            { id: 24, label: "ميزو", value: "ميزو"},
                            { id: 25, label: "ميكروماكس", value: "ميكروماكس"},
                            { id: 26, label: "اوكيتيل", value: "اوكيتيل"},
                            { id: 27, label: "بوش", value: "بوش"},
                            { id: 28, label: "تكنو", value: "تكنو"},
                            { id: 29, label: "فيفو", value: "فيفو"},
                            { id: 30, label: "زي تي اي", value: "زي تي اي"},
                            { id: 31, label: "فيرتو", value: "فيرتو"},
                            { id: 32, label: "ون بلس", value: "ون بلس"},
                            { id: 33, label: "انفينيكس", value: "انفينيكس"},
                            { id: 31, label: "ريلمي", value: "ريلمي"},
                            { id: 32, label: "تي سي ال", value: "تي سي ال"},
                            { id: 33, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "سعة التخزين", value: "storage1-2"},
                            { id: 1, label: "4GB", value: "4GB"},
                            { id: 2, label: "8GB", value: "8GB"},
                            { id: 3, label: "16GB", value: "16GB"},
                            { id: 4, label: "32GB", value: "32GB"},
                            { id: 5, label: "64GB", value: "64GB"},
                            { id: 6, label: "128GB", value: "128GB"},
                            { id: 7, label: "256GB", value: "256GB"},
                            { id: 8, label: "512GB", value: "512GB"},
                            { id: 9, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "اللون", name: "color1-2"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-2"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 2, label: "تابلت", value: "تابلت",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand2-2"},
                            { id: 1, label: "ابل", value: "ابل"},
                            { id: 2, label: "سامسونج", value: "سامسونج"},
                            { id: 3, label: "سوني", value: "سوني"},
                            { id: 4, label: "مايكروسوفت", value: "مايكروسوفت"},
                            { id: 5, label: "ايسر", value: "ايسر"},
                            { id: 6, label: "لينوفو", value: "لينوفو"},
                            { id: 7, label: "اسوس", value: "اسوس"},
                            { id: 8, label: "امازون", value: "امازون"},
                            { id: 9, label: "اروكس", value: "اروكس"},
                            { id: 10, label: "بلاك بيري", value: "بلاك بيري"},
                            { id: 11, label: "ديل", value: "ديل"},
                            { id: 12, label: "اي نت", value: "اي نت"},
                            { id: 13, label: "جوجل", value: "جوجل"},
                            { id: 14, label: "HP", value: "HP"},
                            { id: 15, label: "هواوي", value: "هواوي"},
                            { id: 16, label: "توشيبا", value: "توشيبا"},
                            { id: 17, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "سعة التخزين", value: "storage1-2"},
                            { id: 1, label: "4GB", value: "4GB"},
                            { id: 2, label: "8GB", value: "8GB"},
                            { id: 3, label: "16GB", value: "16GB"},
                            { id: 4, label: "32GB", value: "32GB"},
                            { id: 5, label: "64GB", value: "64GB"},
                            { id: 6, label: "128GB", value: "128GB"},
                            { id: 7, label: "256GB", value: "256GB"},
                            { id: 8, label: "512GB", value: "512GB"},
                            { id: 9, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "اللون", name: "color1-2"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition2-2"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 3, label: "ارقام هواتف مميزة", value: "ارقام هواتف مميزة",properties:[
                        [
                            { id: 0, kind: "مزود الخدمة", name: "isp"},
                            { id: 1, label: "زين", value: "زين"},
                            { id: 2, label: "اورونج", value: "اورونج"},
                            { id: 3, label: "امنية", value: "امنية"},
                        ]
                    ]
                },
                {
                    id: 4, label: "اكسسوارات موبايل - تابلت", value: "اكسسوارات موبايل - تابلت",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-2"},
                            { id: 1, label: "شواحن وكوابل", value: "شواحن وكوابل"},
                            { id: 2, label: "سماعات", value: "سماعات"},
                            { id: 3, label: "كفرات وحقائب واقي الشاشة", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 4, label: "اكسسوارات التصوير حمالات", value: "اكسسوارات التصوير حمالات"},
                            { id: 5, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition4-2"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 5, label: "صيانة موبايل - تابلت", value: "صيانة موبايل - تابلت",properties:[""]
                },
                {
                    id: 6, label: "قطع غيار موبايل - تابليت", value: "قطع غيار موبايل - تابليت",properties:[""]
                },
                {
                    id: 7, label: "التكنولوجيا القابلة للارتداء", value: "التكنولوجيا القابلة للارتداء",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type7-2"},
                            { id: 1, label: "ساعات ذكية", value: "شواحن وكوابل"},
                            { id: 2, label: "نظارات الواقع الافتراضي", value: "سماعات"},
                            { id: 3, label: "السوار الذكي", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 4, label: "اكسسوارات - اخرى", value: "اكسسوارات التصوير حمالات"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition7-2"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 8, label: "موبايل - تابلت اخرى", value: "موبايل - تابلت اخرى",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type8-2"},
                            { id: 1, label: "قطع غيار", value: "شواحن وكوابل"},
                            { id: 2, label: "اجهزة بلوتوث", value: "سماعات"},
                            { id: 3, label: "كروت ذاكرة", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition8-2"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                }];
            case "GET_CATEGORIES_OF3" :
                    return [{
                    id: 1, label: "اجهزة", value: "اجهزة",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type1-3"},
                            { id: 1, label: "بلايستيشين 4", value: "شواحن وكوابل"},
                            { id: 2, label: "بلايستيشين 3", value: "سماعات"},
                            { id: 3, label: "بلايستيشين 2", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 4, label: "اكس بوكس ون", value: "اخرى"},
                            { id: 5, label: "اكس بوكس 360", value: "شواحن وكوابل"},
                            { id: 6, label: "اكس بوكس ون اس", value: "سماعات"},
                            { id: 7, label: "اكس بوكس ون اكس", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 8, label: "نينتدو وي", value: "اخرى"},
                            { id: 9, label: "نينتندو وي يو", value: "اخرى"},
                            { id: 10, label: "DS نينتندو 3", value: "شواحن وكوابل"},
                            { id: 11, label: "نينتندو سويتش", value: "سماعات"},
                            { id: 12, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 2, label: "العاب فيديو", value: "العاب فيديو",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition2-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 3, label: "اكسسوارات وقطع غيار", value: "اكسسوارات وقطع غيار",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type3-3"},
                            { id: 1, label: "هارد ديسك وميموري", value: "هارد ديسك وميموري"},
                            { id: 2, label: "اسلاك ووصلات شواحن", value: "اسلاك ووصلات شواحن"},
                            { id: 3, label: "اجهزة استشعار الحركة كاميرات", value: "اجهزة استشعار الحركة كاميرات"},
                            { id: 4, label: "عجلات قيادة جيتار", value: "عجلات قيادة جيتار"},
                            { id: 5, label: "يد تحكم", value: "يد تحكم"},
                            { id: 6, label: "سماعات مايك", value: "سماعات مايك"},
                            { id: 7, label: "لوحات مفاتيح ماوس", value: "لوحات مفاتيح ماوس"},
                            { id: 8, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition3-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 4, label: "بطاقات شراء", value: "بطاقات شراء",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-3"},
                            { id: 1, label: "سوق بلاي", value: "هارد ديسك وميموري"},
                            { id: 2, label: "اي تونز", value: "اسلاك ووصلات شواحن"},
                            { id: 3, label: "بلايستيشن", value: "اجهزة استشعار الحركة كاميرات"},
                            { id: 4, label: "اكس بوكس", value: "عجلات قيادة جيتار"},
                            { id: 5, label: "ستيم", value: "يد تحكم"},
                            { id: 6, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition3-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 5, label: "بيع حسابات وشخصيات", value: "بيع حسابات وشخصيات",properties:[""]
                },
                {
                    id: 6, label: "صيانة لابتوب - كمبيوتر", value: "صيانة لابتوب - كمبيوتر",properties:[""]
                },
                {
                    id: 7, label: "شخصيات اكشن فيجرز", value: "شخصيات اكشن فيجرز",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition7-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 8, label: "العاب فيديو - اخرى", value: "العاب فيديو - اخرى",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition8-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                }];
            case "GET_CATEGORIES_OF4" :
                        return [{
                    id: 1, label: "لابتوب - كمبيوتر", value: "لابتوب - كمبيوتر",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type1-4"},
                            { id: 1, label: "كومبيوتر مكتبي", value: "كومبيوتر مكتبي"},
                            { id: 2, label: "لابتوب", value: "لابتوب"},
                            { id: 3, label: "اكسسوارات - قطع غيار", value: "اكسسوارات - قطع غيار"},
                            { id: 4, label: "اكسسوارات - اخرى", value: "اكسسوارات - اخرى"},
                            
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 2, label: "تلفزيون - شاشات", value: "تلفزيون - شاشات",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand2-4"},
                            { id: 1, label: "ال جي", value: "ال جي"},
                            { id: 2, label: "سوني", value: "سوني"},
                            { id: 3, label: "سامسونج", value: "سامسونج"},
                            { id: 4, label: "باناسونيك", value: "باناسونيك"},
                            { id: 5, label: "شارب", value: "شارب"},
                            { id: 6, label: "فيليبس", value: "فيليبس"},
                            { id: 7, label: "توشيبا", value: "توشيبا"},
                            { id: 8, label: "هايسنس", value: "هايسنس"},
                            { id: 9, label: "هيتاشي", value: "هيتاشي"},
                            { id: 10, label: "دايو", value: "دايو"},
                            { id: 11, label: "جيه في سي", value: "جيه في سي"},
                            { id: 12, label: "سانيو", value: "سانيو"},
                            { id: 13, label: "فيزيو", value: "فيزيو"},
                            { id: 14, label: "ناشونال اليكترك", value: "ناشونال اليكترك"},
                            { id: 15, label: "افترون", value: "افترون"},
                            { id: 16, label: "بينكون", value: "بينكون"},
                            { id: 17, label: "ايفولي", value: "ايفولي"},
                            { id: 18, label: "فوناي", value: "فوناي"},
                            { id: 19, label: "جي جارد", value: "جي جارد"},
                            { id: 20, label: "جنرال ديلوكس", value: "جنرال ديلوكس"},
                            { id: 21, label: "جولد سكاي", value: "جولد سكاي"},
                            { id: 22, label: "جولد ستار", value: "جولد ستار"},
                            { id: 23, label: "هاير", value: "هاير"},
                            { id: 24, label: "ناشونال سونيك", value: "ناشونال سونيك"},
                            { id: 25, label: "نيكاي", value: "نيكاي"},
                            { id: 26, label: "اوبن ستار", value: "اوبن ستار"},
                            { id: 27, label: "ساميكس", value: "ساميكس"},
                            { id: 28, label: "سكاي وورث", value: "سكاي وورث"},
                            { id: 29, label: "ستار اكس", value: "ستار اكس"},
                            { id: 30, label: "ثومسون", value: "ثومسون"},
                            { id: 31, label: "تايجر", value: "تايجر"},
                            { id: 32, label: "تي ال سي", value: "تي ال سي"},
                            { id: 33, label: "فيستل", value: "فيستل"},
                            { id: 34, label: "كوندور", value: "كوندور"},
                            { id: 35, label: "ماجيك", value: "ماجيك"},
                            { id: 36, label: "يونيون اير", value: "يونيون اير"},
                            { id: 37, label: "بيكو", value: "بيكو"},
                            { id: 38, label: "جرين هوم", value: "جرين هوم"},
                            { id: 39, label: "اي فيو", value: "اي فيو"},
                            { id: 40, label: "ستار سات", value: "ستار سات"},
                            { id: 41, label: "غزال", value: "غزال"},
                            { id: 42, label: "روى", value: "روى"},
                            { id: 43, label: "كونكا", value: "كونكا"},
                            { id: 44, label: "ناشونال جولد", value: "ناشونال جولد"},
                            { id: 45, label: "ناشونال دريم", value: "ناشونال دريم"},
                            { id: 46, label: "ايوا", value: "ايوا"},
                            { id: 47, label: "ميديا ستارز", value: "ميديا ستارز"},
                            { id: 48, label: "ستار تراك", value: "ستار تراك"},
                            { id: 49, label: "سيمور", value: "سيمور"},
                            { id: 50, label: "تكنوسات", value: "تكنوسات"},
                            { id: 51, label: "كونتي", value: "كونتي"},
                            { id: 52, label: "جنرال", value: "جنرال"},
                            { id: 53, label: "ميتسوبيشي", value: "ميتسوبيشي"},
                            { id: 54, label: "باور سات", value: "باور سات"},
                            { id: 55, label: "جنرال لايف", value: "جنرال لايف"},
                            { id: 56, label: "لايك-I", value: "لايك-I"},
                            { id: 57, label: "هنت كس", value: "هنت كس"},
                            { id: 58, label: "MEC", value: "MEC"},
                            { id: 59, label: "سونا", value: "سونا"},
                            { id: 60, label: "جنرال فيو", value: "جنرال فيو"},
                            { id: 61, label: "شاومي", value: "شاومي"},
                            { id: 62, label: "هانزG", value: "هانزG"},
                            { id: 63, label: "تيكV", value: "تيكV"},
                            { id: 64, label: "ميسترال", value: "ميسترال"},
                            { id: 65, label: "ايكون", value: "ايكون"},
                            { id: 66, label: "هونداي", value: "هونداي"},
                            { id: 67, label: "اكاي", value: "اكاي"},
                            { id: 68, label: "TCL", value: "TCL"},
                            { id: 69, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "النوع", name: "type2-4"},
                            { id: 1, label: "LCD", value: "LCD"},
                            { id: 2, label: "LED", value: "LED"},
                            { id: 3, label: "OLD", value: "OLD"},
                            { id: 4, label: "QLED", value: "QLED"},
                            { id: 5, label: "بلازما", value: "بلازما"},
                            { id: 6, label: "سمارت", value: "سمارت"},
                            { id: 6, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "حجم الشاشة", name: "size2-4"},
                            { id: 1, label: "23انش", value: "23انش"},
                            { id: 2, label: "30انش", value: "30انش"},
                            { id: 3, label: "32انش", value: "32انش"},
                            { id: 4, label: "36انش", value: "36انش"},
                            { id: 5, label: "42انش", value: "42انش"},
                            { id: 6, label: "43انش", value: "43انش"},
                            { id: 7, label: "46انش", value: "46انش"},
                            { id: 8, label: "48انش", value: "48انش"},
                            { id: 9, label: "50انش", value: "50انش"},
                            { id: 10, label: "55انش", value: "55انش"},
                            { id: 11, label: "65انش", value: "65انش"},
                            { id: 12, label: "70انش", value: "70انش"},
                            { id: 13, label: "75انش", value: "75انش"},
                            { id: 14, label: "80انش", value: "80انش"},
                            { id: 15, label: "85انش", value: "85انش"},
                            { id: 16, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-3"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 3, label: "سماعات - مكبرات صوت", value: "سماعات - مكبرات صوت",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type3-4"},
                            { id: 1, label: "سماعات راس", value: "سماعات راس"},
                            { id: 2, label: "مسرح منزلي", value: "مسرح منزلي"},
                            { id: 3, label: "مكبرات", value: "مكبرات"},
                            { id: 4, label: "سماعات ذكية", value: "سماعات ذكية"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                            
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition3-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 4, label: "ستيرو - مسجلات - راديو", value: "ستيرو - مسجلات - راديو",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-4"},
                            { id: 1, label: "ستيريو", value: "ستيريو"},
                            { id: 2, label: "مسجل", value: "مسجل"},
                            { id: 3, label: "راديو", value: "راديو"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition4-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 5, label: "ريسيفر - دي في دي", value: "ريسيفر - دي في دي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type5-4"},
                            { id: 1, label: "ريسسفر", value: "ريسسفر"},
                            { id: 2, label: "دي في دي", value: "دي في دي"},
                            { id: 3, label: "مشغل وسائط متعددة", value: "مشغل وسائط متعددة"}
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition5-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 6, label: "مودم - راوتر", value: "مودم - راوتر",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition6-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 7, label: "كاميرات - تصوير", value: "كاميرات - تصوير",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type7-4"},
                            { id: 1, label: "كاميرات تصوير", value: "ريسسفر"},
                            { id: 2, label: "عدسات", value: "دي في دي"},
                            { id: 3, label: "كاميرات مراقبة", value: "مشغل وسائط متعددة"},
                            { id: 4, label: "اكسسوارات ومعدات", value: "دي في دي"},
                            { id: 5, label: "قطع غيار", value: "دي في دي"},
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition7-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 8, label: "مكيفات - مراوح", value: "مكيفات - مراوح",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type8-4"},
                            { id: 1, label: "مكيفات", value: "مكيفات"},
                            { id: 2, label: "مراوح", value: "مراوح"}
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition8-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 9, label: "ثلاجات - فريزر", value: "ثلاجات - فريزر",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type9-4"},
                            { id: 1, label: "ثلاجات", value: "ثلاجات"},
                            { id: 2, label: "فريزر", value: "فريزر"},
                            { id: 3, label: "قطع غيار", value: "قطع غيار"}
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition9-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 10, label: "غسالات - نشافات - جلايات", value: "غسالات - نشافات - جلايات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type10-4"},
                            { id: 1, label: "غسالات", value: "غسالات"},
                            { id: 2, label: "نشافات", value: "نشافات"},
                            { id: 3, label: "قطع غيار", value: "قطع غيار"},
                            { id: 4, label: "جلايات", value: "جلايات"}
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition10-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 11, label: "افران - ميكرويف", value: "افران - ميكرويف",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type11-4"},
                            { id: 1, label: "افران", value: "غسالات"},
                            { id: 2, label: "ميكرويف", value: "نشافات"},
                            { id: 3, label: "شفاطات مطابخ", value: "قطع غيار"},
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition11-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 12, label: "كولر - فلاتر ماء", value: "كولر - فلاتر ماء",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type12-4"},
                            { id: 1, label: "كولر", value: "كولر"},
                            { id: 2, label: "فلاتر ماء", value: "نشافات"},
                        ],  
                        [
                            { id: 0, kind: "الحالة", name: "condition12-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 13, label: "اجهزة صغيره", value: "اجهزة صغيره",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition12-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 14, label: "التكنلوجيا القابلة للارتداء", value: "التكنلوجيا القابلة للارتداء",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type14-4"},
                            { id: 1, label: "ساعات ذكية", value: "شواحن وكوابل"},
                            { id: 2, label: "نظارات الواقع الافتراضي", value: "سماعات"},
                            { id: 3, label: "السوار الذكي", value: "كفرات وحقائب واقي الشاشة"},
                            { id: 4, label: "اكسسوارات - اخرى", value: "اكسسوارات التصوير حمالات"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition14-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 15, label: "سكوتر - هوفر بورد", value: "سكوتر - هوفر بورد",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition15-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 16, label: "سخانات - كيزر - بويلر", value: "سخانات - كيزر - بويلر",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type16-4"},
                            { id: 1, label: "بويلر", value: "بويلر"},
                            { id: 2, label: "كيزر", value: "كيزر"},
                            { id: 3, label: "سخانات شمسة", value: "سخانات شمسة"},
                            { id: 4, label: "خلايا شمسية", value: "خلايا شمسية"},
                            { id: 5, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition16-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 17, label: "دفايات - صوبات", value: "دفايات - صوبات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type17-4"},
                            { id: 1, label: "مدفاة كهربائية", value: "مدفاة كهربائية"},
                            { id: 2, label: "مدفاة غاز", value: "مدفاة غاز"},
                            { id: 3, label: "مدفاة كاز", value: "مدفاة كاز"},
                            { id: 4, label: "قطع غيار", value: "قطع غيار"},
                            { id: 5, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition17-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 18, label: "مكانس كهربائية", value: "مكانس كهربائية",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand18-4"},
                            { id: 1, label: "بيسل", value: "بيسل"},
                            { id: 2, label: "باناسونيك", value: "باناسونيك"},
                            { id: 3, label: "فيليبس", value: "فيليبس"},
                            { id: 4, label: "سامسونج", value: "سامسونج"},
                            { id: 5, label: "هوفر", value: "هوفر"},
                            { id: 6, label: "امجوي باور", value: "امجوي باور"},
                            { id: 7, label: "بلاك اند ديكر", value: "بلاك اند ديكر"},
                            { id: 8, label: "كونتي", value: "كونتي"},
                            { id: 9, label: "دايو", value: "دايو"},
                            { id: 10, label: "الكترا", value: "الكترا"},
                            { id: 11, label: "الكترولوكس", value: "الكترولوكس"},
                            { id: 12, label: "جزبلن", value: "جزبلن"},
                            { id: 13, label: "هيتاشي", value: "هيتاشي"},
                            { id: 14, label: "كارشر", value: "كارشر"},
                            { id: 15, label: "كيربي", value: "كيربي"},
                            { id: 16, label: "قطع غيار", value: "قطع غيار"},
                            { id: 17, label: "روبوكلين", value: "روبوكلين"},
                            { id: 18, label: "ساميكس", value: "ساميكس"},
                            { id: 19, label: "سانيو", value: "سانيو"},
                            { id: 20, label: "شارب", value: "شارب"},
                            { id: 21, label: "سونا", value: "سونا"},
                            { id: 22, label: "فاكس", value: "فاكس"},
                            { id: 23, label: "فيستل", value: "فيستل"},
                            { id: 24, label: "غزال", value: "غزال"},
                            { id: 25, label: "روى", value: "روى"},
                            { id: 26, label: "بلوماتيك", value: "بلوماتيك"},
                            { id: 27, label: "ميلي", value: "ميلي"},
                            { id: 28, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition18-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 19, label: "طابعة - فاكس - بروجيكتر", value: "طابعة - فاكس - بروجيكتر",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type19-4"},
                            { id: 1, label: "طابعات", value: "طابعات"},
                            { id: 2, label: "ماسح ضوئي", value: "ماسح ضوئي"},
                            { id: 3, label: "متعددة الاستخدامات", value: "متعددة الاستخدامات"},
                            { id: 4, label: "بروجيكتر", value: "بروجيكتر"},
                            { id: 5, label: "اخرى", value: "اخرى"},
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition19-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 20, label: "تلفونات ارضي - لاسلكي", value: "تلفونات ارضي - لاسلكي",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition20-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 21, label: "قطع غيار - اكسسوارات", value: "قطع غيار - اكسسوارات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type21-4"},
                            { id: 1, label: "بطاريات", value: "بطاريات"},
                            { id: 2, label: "هاردسك خارجي", value: "هاردسك خارجي"},
                            { id: 3, label: "سماعات راس", value: "سماعات راس"},
                            { id: 4, label: "ماوس", value: "ماوس"},
                            { id: 5, label: "سماعات", value: "سماعات"},
                            { id: 6, label: "فلاش ميموري", value: "فلاش ميموري"},
                            { id: 7, label: "وصلات كوابل", value: "وصلات كوابل"},
                            { id: 8, label: "رامات", value: "رامات"},
                            { id: 9, label: "ذاكرة", value: "ذاكرة"},
                            { id: 10, label: "كيبورد", value: "كيبورد"},
                            { id: 11, label: "بوردات", value: "بوردات"},
                            { id: 12, label: "مقبس", value: "مقبس"},
                            { id: 13, label: "وصلات كهربائية", value: "وصلات كهربائية"},
                            { id: 14, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition21-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 22, label: "اجهزة - الكترونيات اخرى", value: "اجهزة - الكترونيات اخرى",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition22-4"},
                            { id: 1, label: "جديد", value: "جديد"},
                            { id: 2, label: "مستعمل", value: "مستعمل"}
                        ]
                    ]
                },
                {
                    id: 23, label: "خدمات طباعة وتصميم", value: "خدمات طباعة وتصميم",properties:[""]
                },
                {
                    id: 24, label: "صيانة لابتوب - كمبوتر", value: "صيانة لابتوب - كمبوتر",properties:[""]
                }
                
                ];
            case "GET_CATEGORIES_OF5" :
                        return [{
                    id: 1, label: "شقق للبيع", value: "شقق للبيع",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo1-5"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo1-5"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old1-5"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished1-5"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ]
                    ]
                },
                {
                    id: 2, label: "فلل - قصور للبيع", value: "فلل - قصور للبيع",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo2-5"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo2-5"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old2-5"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ]
                    ]
                },
                {
                    id: 3, label: "اراضي - مزارع للبيع", value: "اراضي - مزارع للبيع",properties:[""]
                },
                {
                    id: 4, label: "عمارات للبيع", value: "عمارات للبيع",properties:[""]
                },
                {
                    id: 4, label: "تجاري للبيع", value: "تجاري للبيع",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-5"},
                            { id: 1, label: "مكتب", value: "مكتب"},
                            { id: 2, label: "محل", value: "محل"},
                            { id: 3, label: "معرض", value: "معرض"},
                            { id: 4, label: "مخزن - مستودع", value: "مخزن - مستودع"},
                            { id: 5, label: "مجمع - مبنى تجاري", value: "مجمع - مبنى تجاري"},
                            { id: 6, label: "مطعم - كوفي شوب", value: "مطعم - كوفي شوب"},
                            { id: 8, label: "فيلا تجارية", value: "فيلا تجارية"},
                            { id: 9, label: "فندق", value: "فندق"},
                            { id: 10, label: "مصنع", value: "مصنع"},
                            { id: 11, label: "طابق كامل", value: "طابق كامل"},
                            { id: 12, label: "سكن موظفين", value: "سكن موظفين"},
                            { id: 13, label: "سوبر ماركت", value: "سوبر ماركت"},
                            { id: 14, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 5, label: "شاليهات - مصايف للبيع", value: "شاليهات - مصايف للبيع",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo5-5"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo5-5"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old5-5"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished5-5"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ]
                    ]
                },
                {
                    id: 6, label: "شركات للبيع", value: "شركات للبيع",properties:[""]
                }
                ];
            case "GET_CATEGORIES_OF6" :
                        return [{
                    id: 1, label: "شقق للايجار", value: "شقق للايجار",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo1-6"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo1-6"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old1-6"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished1-6"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period1-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                },
                {
                    id: 2, label: "تجاري للايجار", value: "تجاري للايجار",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type2-6"},
                            { id: 1, label: "مكتب", value: "مكتب"},
                            { id: 2, label: "محل", value: "محل"},
                            { id: 3, label: "معرض", value: "معرض"},
                            { id: 4, label: "مخزن - مستودع", value: "مخزن - مستودع"},
                            { id: 5, label: "مجمع - مبنى تجاري", value: "مجمع - مبنى تجاري"},
                            { id: 6, label: "مطعم - كوفي شوب", value: "مطعم - كوفي شوب"},
                            { id: 8, label: "فيلا تجارية", value: "فيلا تجارية"},
                            { id: 9, label: "فندق", value: "فندق"},
                            { id: 10, label: "مصنع", value: "مصنع"},
                            { id: 11, label: "طابق كامل", value: "طابق كامل"},
                            { id: 12, label: "سكن موظفين", value: "سكن موظفين"},
                            { id: 13, label: "سوبر ماركت", value: "سوبر ماركت"},
                            { id: 14, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period2-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished2-6"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ]
                    ]
                },
                {
                    id: 3, label: "غرف سكن- شقق فندقية", value: "غرف سكن- شقق فندقية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type3-6"},
                            { id: 1, label: "شقق فندقية", value: "شقق فندقية"},
                            { id: 2, label: "غرف سكن", value: "غرف سكن"},
                            { id: 3, label: "سكن طلاب", value: "سكن طلاب"}
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished3-6"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period3-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                },
                {
                    id: 4, label: "فلل - قصور للايجار", value: "فلل - قصور للايجار",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo4-6"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo4-6"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old4-6"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished4-6"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period4-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                },
                {
                    id: 5, label: "عمارات للايجار", value: "عمارات للايجار",properties:[
                        [
                            { id: 0, kind: "عدد الطوابق", name: "floorNo5-6"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period5-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                },
                {
                    id: 6, label: "اراضي - مزارع للايجار", value: "اراضي - مزارع للايجار",properties:[
                        [
                            { id: 0, kind: "مدة الايجار", name: "period6-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                },
                {
                    id: 7, label: "شاليهات - مصايف للايجار", value: "شاليهات - مصايف للايجار",properties:[
                        [
                            { id: 0, kind: "عدد الغرف", name: "roomsNo7-6"},
                            { id: 1, label: "ستوديو", value: "ستوديو"},
                            { id: 2, label: "غرفة نوم", value: "غرفة نوم"},
                            { id: 3, label: "2 غرف نوم", value: "2 غرف نوم"},
                            { id: 4, label: "3 غرف نوم", value: "3 غرف نوم"},
                            { id: 5, label: "4 غرف نوم", value: "4 غرف نوم"},
                            { id: 6, label: "5 غرف نوم", value: "5 غرف نوم"},
                            { id: 7, label: "+6 غرف", value: "+6 غرف"}
                        ],
                        [
                            { id: 0, kind: "عدد الحمامات", name: "bathroomNo7-6"},
                            { id: 1, label: "1", value: "1"},
                            { id: 2, label: "2", value: "2"},
                            { id: 3, label: "3", value: "3"},
                            { id: 4, label: "4", value: "4"},
                            { id: 5, label: "+5", value: "+5"}
                        ],
                        [
                            { id: 0, kind: "عمر البناء", name: "old7-6"},
                            { id: 1, label: "قيد الانشاء", value: "قيد الانشاء"},
                            { id: 2, label: "0-11 شهر", value: "0-11 شهر"},
                            { id: 3, label: "1-5 سنوات", value: "1-5 سنوات"},
                            { id: 4, label: "6-9 سنوات", value: "6-9 سنوات"},
                            { id: 5, label: "10-19 سنوات", value: "10-19 سنوات"},
                            { id: 6, label: "+20 سنه", value: "+20 سنه"},
                        ],
                        [
                            { id: 0, kind: "مفروشة/غير مفروشة", name: "frunished7-6"},
                            { id: 1, label: "مفروشة", value: "مفروشة"},
                            { id: 2, label: "غير مفروشة", value: "غير مفروشة"}
                        ],
                        [
                            { id: 0, kind: "مدة الايجار", name: "period7-6"},
                            { id: 1, label: "يومي", value: "يومي"},
                            { id: 2, label: "اسبوعي", value: "اسبوعي"},
                            { id: 3, label: "شهري", value: "شهري"},
                            { id: 4, label: "سنوي", value: "سنوي"}
                        ]
                    ]
                }];
            case "GET_CATEGORIES_OF7" :
                        return [{
                    id: 1, label: "اثاث غرف جلوس", value: "اثاث غرف جلوس",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition1-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 2, label: "اثاث غرف نوم", value: "اثاث غرف نوم",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition2-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 3, label: "اثاث غرف سفرة", value: "اثاث غرف سفرة",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition3-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                
                {
                    id: 4, label: "اثاث مكتبي", value: "اثاث مكتبي",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition4-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 5, label: "اثاث خارجي", value: "اثاث خارجي",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition5-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 6, label: "ديكور - اكسسوارات", value: "ديكور - اكسسوارات",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition6-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 7, label: "فرشات ومنسوجات", value: "فرشات ومنسوجات",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition7-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 8, label: "الحديقة -نباتات", value: "الحديقة -نباتات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type8-7"},
                            { id: 1, label: "اشجار - نباتات", value: "اشجار - نباتات"},
                            { id: 2, label: "معدات حدائق", value: "معدات حدائق"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 9, label: "مطابخ", value: "مطابخ",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition9-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 10, label: "ادوات مطبخ", value: "ادوات مطبخ",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition10-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 11, label: "حمامات", value: "حمامات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type11-7"},
                            { id: 1, label: "اطقم حمامات", value: "اطقم حمامات"},
                            { id: 2, label: "اكسسوارات", value: "اكسسوارات"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 12, label: "بلاط - ارضيات - باركيه", value: "بلاط - ارضيات - باركيه",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type12-7"},
                            { id: 1, label: "بلاط", value: "بلاط"},
                            { id: 2, label: "باركيه", value: "باركيه"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 13, label: "ابواب - شبابيك - ألمنيوم", value: "ابواب - شبابيك - ألمنيوم",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type13-7"},
                            { id: 2, label: "ابواب", value: "بلاط"},
                            { id: 3, label: "شبابيك", value: "باركيه"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 14, label: "الإضاءة", value: "الإضاءة",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition14-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 15, label: "سجاد - موكيت", value: "سجاد - موكيت",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition15-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 16, label: "ستائر - برادي", value: "ستائر - برادي",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition16-7"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 17, label: "شراء الاثاث المستعمل", value: "شراء الاثاث المستعمل",properties:[""]
                }];
            case "GET_CATEGORIES_OF8" :
                        return [{
                    id: 1, label: "ملابس", value: "ملابس",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type1-8"},
                            { id: 1, label: "فساتين", value: "فساتين"},
                            { id: 2, label: "بلايز - قمصان", value: "بلايز - قمصان"},
                            { id: 3, label: "بناطيل", value: "بناطيل"},
                            { id: 4, label: "ملابس داخلية - ملابس نوم", value: "ملابس داخلية - ملابس نوم"},
                            { id: 5, label: "جاكيتات - معاطف", value: "جاكيتات - معاطف"},
                            { id: 6, label: "اقمشة- عبايات - جلابيات", value: "اقمشة- عبايات - جلابيات"},
                            { id: 7, label: "شالات واشاربات", value: "شالات واشاربات"},
                            { id: 8, label: "اطقم", value: "اطقم"},
                            { id: 9, label: "شورتات", value: "شورتات"},
                            { id: 10, label: "تنانير", value: "تنانير"},
                            { id: 11, label: "ملابس رياضة", value: "ملابس رياضة"},
                            { id: 12, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "القياس", name: "size1-8"},
                            { id: 1, label: "XS", value: "XS"},
                            { id: 2, label: "S", value: "S"},
                            { id: 3, label: "M", value: "M"},
                            { id: 4, label: "L", value: "L"},
                            { id: 5, label: "XL", value: "XL"},
                            { id: 6, label: "2XL", value: "2XL"},
                            { id: 7, label: "3XL", value: "3XL"},
                            { id: 8, label: "4XL", value: "4XL"},
                            { id: 9, label: "5XL", value: "5XL"},
                            { id: 10, label: "6XL", value: "6XL"},
                            { id: 11, label: "قياس واحد", value: "قياس واحد"}
                         ],
                         [
                            { id: 0, kind: "اللون", name: "color1-8"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "نقش مربع", value: "نقش مربع"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "رسومات هندسية", value: "رسومات هندسية"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "برتقالي", value: "برتقالي"},
                            { id: 24, label: "زهري", value: "زهري"},
                            { id: 25, label: "مخطط", value: "مخطط"},
                            { id: 26, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand1-8"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "اميركان ايجل", value: "اميركان ايجل"},
                            { id: 3, label: "ان تايلور", value: "ان تايلور"},
                            { id: 4, label: "بانانا ريبوبليك", value: "بانانا ريبوبليك"},
                            { id: 5, label: "بيبي", value: "بيبي"},
                            { id: 6, label: "بيرشكا", value: "بيرشكا"},
                            { id: 7, label: "بوجي", value: "بوجي"},
                            { id: 8, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 9, label: "كالزيدونيا", value: "كالزيدونيا"},
                            { id: 10, label: "كارزليتا", value: "كارزليتا"},
                            { id: 11, label: "تشامبيون", value: "تشامبيون"},
                            { id: 12, label: "تشيكو", value: "تشيكو"},
                            { id: 13, label: "كولينز", value: "كولينز"},
                            { id: 14, label: "كوليزيوني", value: "كوليزيوني"},
                            { id: 15, label: "دابنهامز", value: "دابنهامز"},
                            { id: 16, label: "فورايفر 21", value: "فورايفر 21"},
                            { id: 17, label: "جاب", value: "جاب"},
                            { id: 18, label: "جيس", value: "جيس"},
                            { id: 19, label: "H&M", value: "H&M"},
                            { id: 20, label: "كارين ميللين", value: "كارين ميللين"},
                            { id: 21, label: "كوتون", value: "كوتون"},
                            { id: 22, label: "لا في اون روز", value: "لا في اون روز"},
                            { id: 23, label: "ال سي وايكيكي", value: "ال سي وايكيكي"},
                            { id: 24, label: "ليفي", value: "ليفي"},
                            { id: 25, label: "مانجو", value: "مانجو"},
                            { id: 26, label: "ماسيمو دوتي", value: "ماسيمو دوتي"},
                            { id: 27, label: "ماتلان", value: "ماتلان"},
                            { id: 28, label: "ماكس", value: "ماكس"},
                            { id: 29, label: "مونسون", value: "مونسون"},
                            { id: 30, label: "نيكست", value: "نيكست"},
                            { id: 31, label: "نايكي", value: "نايكي"},
                            { id: 32, label: "اولد نيفي", value: "اولد نيفي"},
                            { id: 33, label: "اوكسو", value: "اوكسو"},
                            { id: 34, label: "اويشو", value: "اويشو"},
                            { id: 35, label: "بولو", value: "بولو"},
                            { id: 36, label: "برومود", value: "برومود"},
                            { id: 37, label: "بول اند بير", value: "بول اند بير"},
                            { id: 38, label: "بوما", value: "بوما"},
                            { id: 39, label: "كويز", value: "كويز"},
                            { id: 40, label: "رالف لورين", value: "رالف لورين"},
                            { id: 41, label: "ريبوك", value: "ريبوك"},
                            { id: 42, label: "سبيريت", value: "سبيريت"},
                            { id: 43, label: "ستراديفاريوس", value: "ستراديفاريوس"},
                            { id: 44, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 45, label: "فيرو مودا", value: "فيرو مودا"},
                            { id: 46, label:  "فيكتوريا سيكريت", value: "فيكتوريا سيكريت"},
                            { id: 47, label: "زارا", value: "زارا"},
                            { id: 48, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 2, label: "احذية نسائية", value: "احذية نسائية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type2-8"},
                            { id: 1, label: "مع كعب", value: "مع كعب"},
                            { id: 2, label: "احذية مريحة", value: "احذية مريحة"},
                            { id: 3, label: "جزم رياضية - سبورت", value: "جزم رياضية - سبورت"},
                            { id: 4, label: "صنادل", value: "صنادل"},
                            { id: 5, label: "احذية طويلة", value: "احذية طويلة"},
                            { id: 6, label: "فليب فلوب", value: "فليب فلوب"},
                            { id: 7, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "القياس", name: "size2-8"},
                            { id: 1, label: "35", value: "35"},
                            { id: 2, label: "35.5", value: "35.5"},
                            { id: 3, label: "36", value: "36"},
                            { id: 4, label: "36.5", value: "36.5"},
                            { id: 5, label: "37", value: "37"},
                            { id: 6, label: "37.5", value: "37.5"},
                            { id: 7, label: "38", value: "38"},
                            { id: 8, label: "38.5", value: "38.5"},
                            { id: 9, label: "39", value: "39"},
                            { id: 10, label: "39.5", value: "39.5"},
                            { id: 11, label: "40", value: "40"},
                            { id: 12, label: "40.5", value: "40.5"},
                            { id: 13, label: "41", value: "41"},
                            { id: 14, label: "41.5", value: "41.5"},
                            { id: 15, label: "42", value: "42"},
                            { id: 16, label: "42.5", value: "42.5"},
                            { id: 17, label: "43", value: "43"},
                            { id: 18, label: "43.5", value: "43.5"},
                            { id: 19, label: "44", value: "44"},
                            { id: 20, label: "44.5", value: "44.5"},
                            { id: 21, label: "45", value: "45"},
                            { id: 22, label: "45.5", value: "45.5"},
                            { id: 23, label: "46", value: "46"},
                            { id: 24, label: "46.5", value: "46.5"},
                            { id: 25, label: "47", value: "47"}
                         ],
                         [
                            { id: 0, kind: "اللون", name: "color2-8"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "زهري", value: "زهري"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "برتقالي", value: "برتقالي"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand2-8"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "الدو", value: "الدو"},
                            { id: 3, label: "امازونبيسيكس", value: "امازونبيسيكس"},
                            { id: 4, label: "ارماني", value: "ارماني"},
                            { id: 5, label: "بيربيري", value: "بيربيري"},
                            { id: 6, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 7, label: "تشامبيون", value: "تشامبيون"},
                            { id: 8, label: "تشارلز & كيث", value: "تشارلز & كيث"},
                            { id: 9, label: "DKNY", value: "DKNY"},
                            { id: 10, label: "جوتشي", value: "جوتشي"},
                            { id: 11, label: "جيس", value: "جيس"},
                            { id: 12, label: "هيرشل", value: "هيرشل"},
                            { id: 13, label: "جانسبورت", value: "جانسبورت"},
                            { id: 14, label: "جيسيكا سمبسون", value: "جيسيكا سمبسون"},
                            { id: 15, label: "لاكوست", value: "لاكوست"},
                            { id: 16, label: "فورايفر لينز", value: "فورايفر لينز"},
                            { id: 17, label: "لويس فيتون", value: "لويس فيتون"},
                            { id: 18, label: "مارك جيكوبس", value: "مارك جيكوبس"},
                            { id: 19, label: "مايكل كورس", value: "مايكل كورس"},
                            { id: 20, label: "نايكي", value: "نايكي"},
                            { id: 21, label: "ناين ويست", value: "ناين ويست"},
                            { id: 22, label: "بارفوا", value: "بارفوا"},
                            { id: 23, label: "برادا", value: "برادا"},
                            { id: 24, label: "بوما", value: "بوما"},
                            { id: 25, label: "رالف لورين", value: "رالف لورين"},
                            { id: 26, label: "ريبوك", value: "ريبوك"},
                            { id: 27, label: "سكيتشرز", value: "سكيتشرز"},
                            { id: 28, label: "ستيف مادين", value: "ستيف مادين"},
                            { id: 29, label: "تيد بايكر", value: "تيد بايكر"},
                            { id: 30, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 31, label: "يو اس بولو", value: "يو اس بولو"},
                            { id: 32, label: "فالنتينو", value: "فالنتينو"},
                            { id: 33, label: "فانز", value: "فانز"},
                            { id: 34, label: "فيرا برادلي", value: "فيرا برادلي"},
                            { id: 35, label: "فيرزاتشي", value: "فيرزاتشي"},
                            { id: 36, label: "زينيف لندن", value: "زينيف لندن"},
                            { id: 37, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition2-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 3, label: "ساعات", value: "ساعات",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand3-8"},
                            { id: 1, label: "كريو", value: "كريو"},
                            { id: 2, label: "كاسيو", value: "كاسيو"},
                            { id: 3, label: "زايروس", value: "زايروس"},
                            { id: 4, label: "اوماكس", value: "اوماكس"},
                            { id: 5, label: "اكيورت", value: "اكيورت"},
                            { id: 6, label: "اوليفيرا", value: "اوليفيرا"},
                            { id: 7, label: "دي كيه ان واي", value: "دي كيه ان واي"},
                            { id: 8, label: "مايكل كورس", value: "مايكل كورس"},
                            { id: 9, label: "ميما", value: "ميما"},
                            { id: 10, label: "البا", value: "البا"},
                            { id: 11, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 12, label: "شيروتي", value: "شيروتي"},
                            { id: 13, label: "سيرتينا", value: "سيرتينا"},
                            { id: 14, label: "ستيزن", value: "ستيزن"},
                            { id: 15, label: "كوتش", value: "كوتش"},
                            { id: 16, label: "ميلانو D1", value: "ميلانو D1"},
                            { id: 17, label: "امبوريو ارماني", value: "امبوريو ارماني"},
                            { id: 18, label: "اسبريت", value: "اسبريت"},
                            { id: 19, label: "فيري ميلانو", value: "فيري ميلانو"},
                            { id: 20, label: "فيروتشي", value: "فيروتشي"},
                            { id: 21, label: "جوتشي", value: "جوتشي"},
                            { id: 22, label: "هيونغ كافالي", value: "هيونغ كافالي"},
                            { id: 23, label: "لاكوست", value: "لاكوست"},
                            { id: 24, label: "موفادو", value: "موفادو"},
                            { id: 25, label: "MVMT", value: "MVMT"},
                            { id: 26, label: "اوليفيا بورتون", value: "اوليفيا بورتون"},
                            { id: 27, label: "اورينت", value: "اورينت"},
                            { id: 28, label: "Q&Q", value: "Q&Q"},
                            { id: 29, label: "رادو", value: "رادو"},
                            { id: 30, label: "سكزديريا فيراري", value: "سكزديريا فيراري"},
                            { id: 31, label: "سيكو", value: "سلازنجر"},
                            { id: 32, label: "سلازنجر", value: "سلازنجر"},
                            { id: 33, label: "سمالتو", value: "سمالتو"},
                            { id: 34, label: "سونتو", value: "سونتو"},
                            { id: 35, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 36, label: "فيرزاتشي", value: "فيرزاتشي"},
                            { id: 37, label: "سويس ارمي", value: "سويس ارمي"},
                            { id: 38, label: "انفيكتا", value: "انفيكتا"},
                            { id: 39, label: "جي شوك", value: "جي شوك"},
                            { id: 40, label: "ديزل", value: "ديزل"},
                            { id: 41, label: "فوسيل", value: "فوسيل"},
                            { id: 42, label: "سواتش", value: "سواتش"},
                            { id: 43, label: "رولكس", value: "رولكس"},
                            { id: 44, label: "اوميغا", value: "اوميغا"},
                            { id: 45, label: "بريتلينغ", value: "بريتلينغ"},
                            { id: 46, label: "تيسو", value: "تيسو"},
                            { id: 47, label: "بيربيري", value: "بيربيري"},
                            { id: 48, label: "نافي فورس", value: "نافي فورس"},
                            { id: 49, label: "كارتيير", value: "كارتيير"},
                            { id: 50, label: "هوبلت", value: "هوبلت"},
                            { id: 51, label: "تاغ هوير", value: "تاغ هوير"},
                            { id: 52, label: "دانييل كلاين", value: "دانييل كلاين"},
                            { id: 53, label: "سكيمي", value: "سكيمي"},
                            { id: 54, label: "اديداس", value: "اديداس"},
                            { id: 55, label: "ميشيل هيربلين", value: "ميشيل هيربلين"},
                            { id: 56, label: "زيتيشاكسيجو", value: "زيتيشاكسيجو"},
                            { id: 57, label: "لومينوكس", value: "لومينوكس"},
                            { id: 58, label: "دولتشي اند غابانا", value: "دولتشي اند غابانا"},
                            { id: 59, label: "لويس فيتون", value: "لويس فيتون"},
                            { id: 60, label: "جورجيو ارماني", value: "جورجيو ارماني"},
                            { id: 61, label: "مازاراتي", value: "مازاراتي"},
                            { id: 62, label: "بولغاري", value: "بولغاري"},
                            { id: 63, label: "ايك", value: "ايك"},
                            { id: 64, label: "بريل", value: "بريل"},
                            { id: 65, label: "اوديمار بيغت", value: "اوديمار بيغت"},
                            { id: 66, label: "بورش", value: "بورش"},
                            { id: 67, label: "جاكوار", value: "جاكوار"},
                            { id: 68, label: "ريموند ويل", value: "ريموند ويل"},
                            { id: 69, label: "بير ميلار", value: "بير ميلار"},
                            { id: 70, label: "تايمكس", value: "تايمكس"},
                            { id: 71, label: "فرانك مولر", value: "فرانك مولر"},
                            { id: 72, label: "سيجا", value: "سيجا"},
                            { id: 73, label: "سيكتور", value: "سيكتور"},
                            { id: 74, label: "ايفرلاست", value: "ايفرلاست"},
                            { id: 75, label: "ايجنر", value: "ايجنر"},
                            { id: 76, label: "جيس", value: "جيس"},
                            { id: 77, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "الية عمل الماكينة", name: "mechanism3-8"},
                            { id: 1, label: "عقارب", value: "عقارب"},
                            { id: 2, label: "رقمية - ديجيتال", value: "رقمية - ديجيتال"},
                            { id: 3, label: "عقارب مع ديجيتال", value: "عقارب مع ديجيتال"},
                            { id: 4, label: "اتوماتيك", value: "اتوماتيك"}
                         ],
                         [
                            { id: 0, kind: "حجم الهيكل", name: "size3-8"},
                            { id: 1, label: "XS (20-25mm)", value: "XS (20-25mm)"},
                            { id: 2, label: "S (26-32mm)", value: "S (26-32mm)"},
                            { id: 3, label: "M (33-41mm)", value: "M (33-41mm)"},
                            { id: 4, label: "XL (48-57mm)", value: "XL (48-57mm)"}
                        ],
                        [
                            { id: 0, kind: "نوع الكستك", name: "type3-8"},
                            { id: 1, label: "معدني", value: "معدني"},
                            { id: 2, label: "جلد", value: "جلد"},
                            { id: 3, label: "مطاط - بلاستيك مرن", value: "مطاط - بلاستيك مرن"},
                            { id: 4, label: "قماش", value: "قماش"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition3-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 4, label: "اكسسوارت - مجوهرات", value: "اكسسوارت - مجوهرات",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-8"},
                            { id: 1, label: "خواتم", value: "خواتم"},
                            { id: 2, label: "سناسيل", value: "سناسيل"},
                            { id: 3, label: "اساور", value: "اساور"},
                            { id: 4, label: "احجار كريمة", value: "احجار كريمة"},
                            { id: 5, label: "تعليقة", value: "تعليقة"},
                            { id: 6, label: "نظارات", value: "نظارات"},
                            { id: 7, label: "عدسات", value: "عدسات"},
                            { id: 8, label: "اكسسوارات شعر", value: "اكسسوارات شعر"},
                            { id: 9, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition4-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 5, label: "حقائب - شنط", value: "حقائب - شنط",properties:[
                        [
                            { id: 0, kind: "اللون", name: "color5-8"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "نقش مربع", value: "نقش مربع"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "رسومات هندسية", value: "رسومات هندسية"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "برتقالي", value: "برتقالي"},
                            { id: 24, label: "زهري", value: "زهري"},
                            { id: 25, label: "مخطط", value: "مخطط"},
                            { id: 26, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand5-8"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "الدو", value: "الدو"},
                            { id: 3, label: "امازونبيسيكس", value: "امازونبيسيكس"},
                            { id: 4, label: "ارماني", value: "ارماني"},
                            { id: 5, label: "بيربيري", value: "بيربيري"},
                            { id: 6, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 7, label: "تشامبيون", value: "تشامبيون"},
                            { id: 8, label: "تشارلز & كيث", value: "تشارلز & كيث"},
                            { id: 9, label: "DKNY", value: "DKNY"},
                            { id: 10, label: "جوتشي", value: "جوتشي"},
                            { id: 11, label: "جيس", value: "جيس"},
                            { id: 12, label: "هيرشل", value: "هيرشل"},
                            { id: 13, label: "جانسبورت", value: "جانسبورت"},
                            { id: 14, label: "جيسيكا سمبسون", value: "جيسيكا سمبسون"},
                            { id: 15, label: "لاكوست", value: "لاكوست"},
                            { id: 16, label: "لينز", value: "لينز"},
                            { id: 17, label: "لويس فيتون", value: "لويس فيتون"},
                            { id: 18, label: "مارك جيكوبس", value: "مارك جيكوبس"},
                            { id: 19, label: "مايكل كورس", value: "مايكل كورس"},
                            { id: 20, label: "نايكي", value: "نايكي"},
                            { id: 21, label: "ناين ويست", value: "ناين ويست"},
                            { id: 22, label: "بارفوا", value: "بارفوا"},
                            { id: 23, label: "برادا", value: "برادا"},
                            { id: 24, label: "بوما", value: "بوما"},
                            { id: 25, label: "رالف لورين", value: "رالف لورين"},
                            { id: 26, label: "ريبوك", value: "ريبوك"},
                            { id: 27, label: "سكيتشرز", value: "سكيتشرز"},
                            { id: 28, label: "ستيف مادين", value: "ستيف مادين"},
                            { id: 29, label: "تيد بايكر", value: "تيد بايكر"},
                            { id: 30, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 31, label: "يو اس بولو", value: "يو اس بولو"},
                            { id: 32, label: "فالينتينو", value: "فالينتينو"},
                            { id: 33, label: "فانز", value: "فانز"},
                            { id: 34, label: "فيرا برادلي", value: "فيرا برادلي"},
                            { id: 35, label: "فيرزاتشي", value: "فيرزاتشي"},
                            { id: 36, label: "زينيف لندن", value: "ن"},
                            { id: 37, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "النوع", name: "type5-8"},
                            { id: 1, label: "شنط ظهر", value: "شنط ظهر"},
                            { id: 2, label: "شنط سفر", value: "شنط سفر"},
                            { id: 3, label: "شنط يد", value: "شنط يد"},
                            { id: 4, label: "حقائب حول الجسم", value: "حقائب حول الجسم"},
                            { id: 5, label: "حقائب باحزمة", value: "حقائب باحزمة"},
                            { id: 6, label: "حقائب كتف", value: "حقائب كتف"},
                            { id: 7, label: "حقائب ادوات تجميل", value: "حقائب ادوات تجميل"},
                            { id: 8, label: "حقائب صغيرة", value: "حقائب صغيرة"},
                            { id: 9, label: "حقائب خصر", value: "حقائب خصر"},
                            { id: 10, label: "محافظ نسائية", value: "محافظ نسائية"},
                            { id: 11, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition5-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 6, label: "عطور - بخور", value: "عطور - بخور",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type6-8"},
                            { id: 1, label: "عطور", value: "عطور"},
                            { id: 2, label: "بخور", value: "بخور"},
                            { id: 3, label: "عود", value: "عود"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition6-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 7, label: "العناية الشخصية", value: "العناية الشخصية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type7-8"},
                            { id: 1, label: "اجهزة مساج وتدليك", value: "اجهزة مساج وتدليك"},
                            { id: 2, label: "تصفيف وتجفيف الشعر", value: "تصفيف وتجفيف الشعر"},
                            { id: 3, label: "ادوات حلاقة ونزع الشعر", value: "ادوات حلاقة ونزع الشعر"},
                            { id: 4, label: "تنحيف - تخفيف وزن", value: "تنحيف - تخفيف وزن"},
                            { id: 5, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition7-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                }
                ,
                {
                    id: 8, label: "مستحضرات تجميل", value: "مستحضرات تجميل",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type8-8"},
                            { id: 1, label: "ميك اب - مكياج", value: "عطور"},
                            { id: 2, label: "العناية بالشبرة", value: "بخور"},
                            { id: 3, label: "العناية بالشعر", value: "عود"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition7-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                }
                ];
            case "GET_CATEGORIES_OF9" :
                        return [{
                    id: 1, label: "ملابس رجالي", value: "ملابس رجالي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type1-9"},
                            { id: 1, label: "بدل", value: "بدل"},
                            { id: 2, label: "بلايز - قمصان", value: "بلايز - قمصان"},
                            { id: 3, label: "بناطيل", value: "بناطيل"},
                            { id: 4, label: "ملابس داخلية - ملابس نوم", value: "ملابس داخلية - ملابس نوم"},
                            { id: 5, label: "جاكيتات - معاطف", value: "جاكيتات - معاطف"},
                            { id: 6, label: "دشاديش - عبايات رجالي", value: "دشاديش - عبايات رجالي"},
                            { id: 7, label: "ملابس رياضة", value: "ملابس رياضة"},
                            { id: 8, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "القياس", name: "size1-9"},
                            { id: 1, label: "XS", value: "XS"},
                            { id: 2, label: "S", value: "S"},
                            { id: 3, label: "M", value: "M"},
                            { id: 4, label: "L", value: "L"},
                            { id: 5, label: "XL", value: "XL"},
                            { id: 6, label: "2XL", value: "2XL"},
                            { id: 7, label: "3XL", value: "3XL"},
                            { id: 8, label: "4XL", value: "4XL"},
                            { id: 9, label: "5XL", value: "5XL"},
                            { id: 10, label: "6XL", value: "6XL"},
                            { id: 11, label: "قياس واحد", value: "قياس واحد"}
                         ],
                         [
                            { id: 0, kind: "اللون", name: "color1-9"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "نقش مربع", value: "نقش مربع"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "رسومات هندسية", value: "رسومات هندسية"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "برتقالي", value: "برتقالي"},
                            { id: 24, label: "زهري", value: "زهري"},
                            { id: 25, label: "مخطط", value: "مخطط"},
                            { id: 26, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand1-8"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "اميركان ايجل", value: "اميركان ايجل"},
                            { id: 3, label: "ان تايلور", value: "ان تايلور"},
                            { id: 4, label: "بانانا ريبوبليك", value: "بانانا ريبوبليك"},
                            { id: 5, label: "بيبي", value: "بيبي"},
                            { id: 6, label: "بيرشكا", value: "بيرشكا"},
                            { id: 7, label: "بوجي", value: "بوجي"},
                            { id: 8, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 9, label: "كالزيدونيا", value: "كالزيدونيا"},
                            { id: 10, label: "كارزليتا", value: "كارزليتا"},
                            { id: 11, label: "تشامبيون", value: "تشامبيون"},
                            { id: 12, label: "تشيكو", value: "تشيكو"},
                            { id: 13, label: "كولينز", value: "كولينز"},
                            { id: 14, label: "كوليزيوني", value: "كوليزيوني"},
                            { id: 15, label: "دابنهامز", value: "دابنهامز"},
                            { id: 16, label: "فورايفر 21", value: "فورايفر 21"},
                            { id: 17, label: "جاب", value: "جاب"},
                            { id: 18, label: "جيس", value: "جيس"},
                            { id: 19, label: "H&M", value: "H&M"},
                            { id: 20, label: "كارين ميللين", value: "كارين ميللين"},
                            { id: 21, label: "كوتون", value: "كوتون"},
                            { id: 22, label: "لا في اون روز", value: "لا في اون روز"},
                            { id: 23, label: "ال سي وايكيكي", value: "ال سي وايكيكي"},
                            { id: 24, label: "ليفي", value: "ليفي"},
                            { id: 25, label: "مانجو", value: "مانجو"},
                            { id: 26, label: "ماسيمو دوتي", value: "ماسيمو دوتي"},
                            { id: 27, label: "ماتلان", value: "ماتلان"},
                            { id: 28, label: "ماكس", value: "ماكس"},
                            { id: 29, label: "مونسون", value: "مونسون"},
                            { id: 30, label: "نيكست", value: "نيكست"},
                            { id: 31, label: "نايكي", value: "نايكي"},
                            { id: 32, label: "اولد نيفي", value: "اولد نيفي"},
                            { id: 33, label: "اوكسو", value: "اوكسو"},
                            { id: 34, label: "اويشو", value: "اويشو"},
                            { id: 35, label: "بولو", value: "بولو"},
                            { id: 36, label: "برومود", value: "برومود"},
                            { id: 37, label: "بول اند بير", value: "بول اند بير"},
                            { id: 38, label: "بوما", value: "بوما"},
                            { id: 39, label: "كويز", value: "كويز"},
                            { id: 40, label: "رالف لورين", value: "رالف لورين"},
                            { id: 41, label: "ريبوك", value: "ريبوك"},
                            { id: 42, label: "سبيريت", value: "سبيريت"},
                            { id: 43, label: "ستراديفاريوس", value: "ستراديفاريوس"},
                            { id: 44, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 45, label: "فيرو مودا", value: "فيرو مودا"},
                            { id: 46, label:  "فيكتوريا سيكريت", value: "فيكتوريا سيكريت"},
                            { id: 47, label: "زارا", value: "زارا"},
                            { id: 48, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition1-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 2, label: "اجذية رجالي", value: "اجذية رجالي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type2-9"},
                            { id: 1, label: "احذية سهلة الارتداء", value: "احذية سهلة الارتداء"},
                            { id: 2, label: "جزم رياضية - سبورت", value: "جزم رياضية - سبورت"},
                            { id: 3, label: "فليب فلوب وشباشب", value: "فليب فلوب وشباشب"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "القياس", name: "size2-9"},
                            { id: 1, label: "35", value: "35"},
                            { id: 2, label: "35.5", value: "35.5"},
                            { id: 3, label: "36", value: "36"},
                            { id: 4, label: "36.5", value: "36.5"},
                            { id: 5, label: "37", value: "37"},
                            { id: 6, label: "37.5", value: "37.5"},
                            { id: 7, label: "38", value: "38"},
                            { id: 8, label: "38.5", value: "38.5"},
                            { id: 9, label: "39", value: "39"},
                            { id: 10, label: "39.5", value: "39.5"},
                            { id: 11, label: "40", value: "40"},
                            { id: 12, label: "40.5", value: "40.5"},
                            { id: 13, label: "41", value: "41"},
                            { id: 14, label: "41.5", value: "41.5"},
                            { id: 15, label: "42", value: "42"},
                            { id: 16, label: "42.5", value: "42.5"},
                            { id: 17, label: "43", value: "43"},
                            { id: 18, label: "43.5", value: "43.5"},
                            { id: 19, label: "44", value: "44"},
                            { id: 20, label: "44.5", value: "44.5"},
                            { id: 21, label: "45", value: "45"},
                            { id: 22, label: "45.5", value: "45.5"},
                            { id: 23, label: "46", value: "46"},
                            { id: 24, label: "46.5", value: "46.5"},
                            { id: 25, label: "47", value: "47"}
                         ],
                         [
                            { id: 0, kind: "اللون", name: "color2-9"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "زهري", value: "زهري"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "برتقالي", value: "برتقالي"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand2-9"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "الدو", value: "الدو"},
                            { id: 3, label: "امازونبيسيكس", value: "امازونبيسيكس"},
                            { id: 4, label: "ارماني", value: "ارماني"},
                            { id: 5, label: "بيربيري", value: "بيربيري"},
                            { id: 6, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 7, label: "تشامبيون", value: "تشامبيون"},
                            { id: 8, label: "تشارلز & كيث", value: "تشارلز & كيث"},
                            { id: 9, label: "DKNY", value: "DKNY"},
                            { id: 10, label: "جوتشي", value: "جوتشي"},
                            { id: 11, label: "جيس", value: "جيس"},
                            { id: 12, label: "هيرشل", value: "هيرشل"},
                            { id: 13, label: "جانسبورت", value: "جانسبورت"},
                            { id: 14, label: "جيسيكا سمبسون", value: "جيسيكا سمبسون"},
                            { id: 15, label: "لاكوست", value: "لاكوست"},
                            { id: 16, label: "فورايفر لينز", value: "فورايفر لينز"},
                            { id: 17, label: "لويس فيتون", value: "لويس فيتون"},
                            { id: 18, label: "مارك جيكوبس", value: "مارك جيكوبس"},
                            { id: 19, label: "مايكل كورس", value: "مايكل كورس"},
                            { id: 20, label: "نايكي", value: "نايكي"},
                            { id: 21, label: "ناين ويست", value: "ناين ويست"},
                            { id: 22, label: "بارفوا", value: "بارفوا"},
                            { id: 23, label: "برادا", value: "برادا"},
                            { id: 24, label: "بوما", value: "بوما"},
                            { id: 25, label: "رالف لورين", value: "رالف لورين"},
                            { id: 26, label: "ريبوك", value: "ريبوك"},
                            { id: 27, label: "سكيتشرز", value: "سكيتشرز"},
                            { id: 28, label: "ستيف مادين", value: "ستيف مادين"},
                            { id: 29, label: "تيد بايكر", value: "تيد بايكر"},
                            { id: 30, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 31, label: "يو اس بولو", value: "يو اس بولو"},
                            { id: 32, label: "فالنتينو", value: "فالنتينو"},
                            { id: 33, label: "فانز", value: "فانز"},
                            { id: 34, label: "فيرا برادلي", value: "فيرا برادلي"},
                            { id: 35, label: "فيرزاتشي", value: "فيرزاتشي"},
                            { id: 36, label: "زينيف لندن", value: "زينيف لندن"},
                            { id: 37, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition2-8"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 3, label: "ساعات رجالي", value: "ساعات رجالي",properties:[
                        [
                            { id: 0, kind: "الماركة", name: "brand3-9"},
                            { id: 1, label: "كريو", value: "كريو"},
                            { id: 2, label: "كاسيو", value: "كاسيو"},
                            { id: 3, label: "زايروس", value: "زايروس"},
                            { id: 4, label: "اوماكس", value: "اوماكس"},
                            { id: 5, label: "اكيورت", value: "اكيورت"},
                            { id: 6, label: "اوليفيرا", value: "اوليفيرا"},
                            { id: 7, label: "دي كيه ان واي", value: "دي كيه ان واي"},
                            { id: 8, label: "مايكل كورس", value: "مايكل كورس"},
                            { id: 9, label: "ميما", value: "ميما"},
                            { id: 10, label: "البا", value: "البا"},
                            { id: 11, label: "كالفن كلاين", value: "كالفن كلاين"},
                            { id: 12, label: "شيروتي", value: "شيروتي"},
                            { id: 13, label: "سيرتينا", value: "سيرتينا"},
                            { id: 14, label: "ستيزن", value: "ستيزن"},
                            { id: 15, label: "كوتش", value: "كوتش"},
                            { id: 16, label: "ميلانو D1", value: "ميلانو D1"},
                            { id: 17, label: "امبوريو ارماني", value: "امبوريو ارماني"},
                            { id: 18, label: "اسبريت", value: "اسبريت"},
                            { id: 19, label: "فيري ميلانو", value: "فيري ميلانو"},
                            { id: 20, label: "فيروتشي", value: "فيروتشي"},
                            { id: 21, label: "جوتشي", value: "جوتشي"},
                            { id: 22, label: "هيونغ كافالي", value: "هيونغ كافالي"},
                            { id: 23, label: "لاكوست", value: "لاكوست"},
                            { id: 24, label: "موفادو", value: "موفادو"},
                            { id: 25, label: "MVMT", value: "MVMT"},
                            { id: 26, label: "اوليفيا بورتون", value: "اوليفيا بورتون"},
                            { id: 27, label: "اورينت", value: "اورينت"},
                            { id: 28, label: "Q&Q", value: "Q&Q"},
                            { id: 29, label: "رادو", value: "رادو"},
                            { id: 30, label: "سكزديريا فيراري", value: "سكزديريا فيراري"},
                            { id: 31, label: "سيكو", value: "سلازنجر"},
                            { id: 32, label: "سلازنجر", value: "سلازنجر"},
                            { id: 33, label: "سمالتو", value: "سمالتو"},
                            { id: 34, label: "سونتو", value: "سونتو"},
                            { id: 35, label: "تومي هيلفيغر", value: "تومي هيلفيغر"},
                            { id: 36, label: "فيرزاتشي", value: "فيرزاتشي"},
                            { id: 37, label: "سويس ارمي", value: "سويس ارمي"},
                            { id: 38, label: "انفيكتا", value: "انفيكتا"},
                            { id: 39, label: "جي شوك", value: "جي شوك"},
                            { id: 40, label: "ديزل", value: "ديزل"},
                            { id: 41, label: "فوسيل", value: "فوسيل"},
                            { id: 42, label: "سواتش", value: "سواتش"},
                            { id: 43, label: "رولكس", value: "رولكس"},
                            { id: 44, label: "اوميغا", value: "اوميغا"},
                            { id: 45, label: "بريتلينغ", value: "بريتلينغ"},
                            { id: 46, label: "تيسو", value: "تيسو"},
                            { id: 47, label: "بيربيري", value: "بيربيري"},
                            { id: 48, label: "نافي فورس", value: "نافي فورس"},
                            { id: 49, label: "كارتيير", value: "كارتيير"},
                            { id: 50, label: "هوبلت", value: "هوبلت"},
                            { id: 51, label: "تاغ هوير", value: "تاغ هوير"},
                            { id: 52, label: "دانييل كلاين", value: "دانييل كلاين"},
                            { id: 53, label: "سكيمي", value: "سكيمي"},
                            { id: 54, label: "اديداس", value: "اديداس"},
                            { id: 55, label: "ميشيل هيربلين", value: "ميشيل هيربلين"},
                            { id: 56, label: "زيتيشاكسيجو", value: "زيتيشاكسيجو"},
                            { id: 57, label: "لومينوكس", value: "لومينوكس"},
                            { id: 58, label: "دولتشي اند غابانا", value: "دولتشي اند غابانا"},
                            { id: 59, label: "لويس فيتون", value: "لويس فيتون"},
                            { id: 60, label: "جورجيو ارماني", value: "جورجيو ارماني"},
                            { id: 61, label: "مازاراتي", value: "مازاراتي"},
                            { id: 62, label: "بولغاري", value: "بولغاري"},
                            { id: 63, label: "ايك", value: "ايك"},
                            { id: 64, label: "بريل", value: "بريل"},
                            { id: 65, label: "اوديمار بيغت", value: "اوديمار بيغت"},
                            { id: 66, label: "بورش", value: "بورش"},
                            { id: 67, label: "جاكوار", value: "جاكوار"},
                            { id: 68, label: "ريموند ويل", value: "ريموند ويل"},
                            { id: 69, label: "بير ميلار", value: "بير ميلار"},
                            { id: 70, label: "تايمكس", value: "تايمكس"},
                            { id: 71, label: "فرانك مولر", value: "فرانك مولر"},
                            { id: 72, label: "سيجا", value: "سيجا"},
                            { id: 73, label: "سيكتور", value: "سيكتور"},
                            { id: 74, label: "ايفرلاست", value: "ايفرلاست"},
                            { id: 75, label: "ايجنر", value: "ايجنر"},
                            { id: 76, label: "جيس", value: "جيس"},
                            { id: 77, label: "اخرى", value: "اخرى"}
                         ],
                        [
                            { id: 0, kind: "الية عمل الماكينة", name: "mechanism3-9"},
                            { id: 1, label: "عقارب", value: "عقارب"},
                            { id: 2, label: "رقمية - ديجيتال", value: "رقمية - ديجيتال"},
                            { id: 3, label: "عقارب مع ديجيتال", value: "عقارب مع ديجيتال"},
                            { id: 4, label: "اتوماتيك", value: "اتوماتيك"}
                         ],
                         [
                            { id: 0, kind: "حجم الهيكل", name: "size3-9"},
                            { id: 1, label: "XS (20-25mm)", value: "XS (20-25mm)"},
                            { id: 2, label: "S (26-32mm)", value: "S (26-32mm)"},
                            { id: 3, label: "M (33-41mm)", value: "M (33-41mm)"},
                            { id: 4, label: "XL (48-57mm)", value: "XL (48-57mm)"}
                        ],
                        [
                            { id: 0, kind: "نوع الكستك", name: "type3-9"},
                            { id: 1, label: "معدني", value: "معدني"},
                            { id: 2, label: "جلد", value: "جلد"},
                            { id: 3, label: "مطاط - بلاستيك مرن", value: "مطاط - بلاستيك مرن"},
                            { id: 4, label: "قماش", value: "قماش"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition3-9"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 4, label: "اكسسوارات رجالي", value: "اكسسوارات رجالي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type4-9"},
                            { id: 1, label: "خواتم", value: "خواتم"},
                            { id: 2, label: "نظارات", value: "نظارات"},
                            { id: 3, label: "افلام", value: "افلام"},
                            { id: 4, label: "قداحات", value: "قداحات"},
                            { id: 5, label: "شنط - محافظ", value: "شنط - محافظ"},
                            { id: 6, label: "احزمة", value: "احزمة"},
                            { id: 7, label: "سبح", value: "سبح"},
                            { id: 8, label: "شماغ - حطة - عقال", value: "شماغ - حطة - عقال"},
                            { id: 9, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition4-9"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 5, label: "العناية الشخصية", value: "العناية الشخصية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type5-9"},
                            { id: 1, label: "حلاقة وتحديد", value: "حلاقة وتحديد"},
                            { id: 2, label: "مستلزمات العناية بالشعر", value: "مستلزمات العناية بالشعر"},
                            { id: 3, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition5-9"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 6, label: "عطور - بخور رجالي", value: "عطور - بخور رجالي",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type6-9"},
                            { id: 1, label: "عطور", value: "عطور"},
                            { id: 2, label: "بخور", value: "بخور"},
                            { id: 3, label: "عود", value: "عود"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition6-9"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                }
                ,
                {
                    id: 7, label: "ازياء رجالية - اخرى", value: "ازياء رجالية - اخرى",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition7-9"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                }
                ];
            case "GET_CATEGORIES_OF10" :
                        return [{
                    id: 1, label: "اثاث وغرف نوم اطفال", value: "اثاث وغرف نوم اطفال",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition1-10"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 2, label: "مستلزمات اطفال", value: "مستلزمات اطفال",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type2-10"},
                            { id: 1, label: "مقاعد", value: "مقاعد"},
                            { id: 2, label: "عربايات اطفال", value: "عربايات اطفال"},
                            { id: 3, label: "مشايات", value: "مشايات"},
                            { id: 4, label: "مستلزمات اطعام", value: "مستلزمات اطعام"},
                            { id: 2, label: "اكسسوارات", value: "اكسسوارات"},
                            { id: 3, label: "حرامات", value: "حرامات"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition2-10"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                },
                {
                    id: 3, label: "ملابس واحذية للاطفال", value: "ملابس واحذية للاطفال",properties:[
                        [
                            { id: 0, kind: "الجنس", name: "gender3-10"},
                            { id: 1, label: "بناتي", value: "بناتي"},
                            { id: 2, label: "ولادي", value: "ولادي"}
                        ],
                        [
                            { id: 0, kind: "اللون", name: "color3-10"},
                            { id: 1, label: "ابيض", value: "ابيض"},
                            { id: 2, label: "اسود", value: "اسود"},
                            { id: 3, label: "احمر", value: "احمر"},
                            { id: 4, label: "ازرق", value: "ازرق"},
                            { id: 5, label: "فضي", value: "فضي"},
                            { id: 6, label: "زيتي", value: "زيتي"},
                            { id: 7, label: "بنفسجي", value: "بنفسجي"},
                            { id: 8, label: "اصفر", value: "اصفر"},
                            { id: 9, label: "خمري", value: "خمري"},
                            { id: 10, label: "بيج", value: "بيج"},
                            { id: 11, label: "برونز", value: "برونز"},
                            { id: 12, label: "بني", value: "بني"},
                            { id: 13, label: "عنابي", value: "عنابي"},
                            { id: 14, label: "نقش مربع", value: "نقش مربع"},
                            { id: 15, label: "شفافة", value: "شفافة"},
                            { id: 16, label: "ازرق غامق", value: "ازرق غامق"},
                            { id: 17, label: "ذهبي", value: "ذهبي"},
                            { id: 18, label: "اخضر", value: "اخضر"},
                            { id: 19, label: "رمادي", value: "رمادي"},
                            { id: 20, label: "رسومات هندسية", value: "رسومات هندسية"},
                            { id: 21, label: "ملون", value: "ملون"},
                            { id: 22, label: "فسفوري", value: "فسفوري"},
                            { id: 23, label: "برتقالي", value: "برتقالي"},
                            { id: 24, label: "زهري", value: "زهري"},
                            { id: 25, label: "مخطط", value: "مخطط"},
                            { id: 26, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الماركة", name: "brand3-10"},
                            { id: 1, label: "اديداس", value: "اديداس"},
                            { id: 2, label: "اميريكان ايجل", value: "اميريكان ايجل"},
                            { id: 3, label: "بانانا ريبوبليك", value: "بانانا ريبوبليك"},
                            { id: 4, label: "برشيكا", value: "برشيكا"},
                            { id: 5, label: "اوشكوش بجوش", value: "اوشكوش بجوش"},
                            { id: 6, label: "تشيكو", value: "تشيكو"},
                            { id: 7, label: "كولينز", value: "كولينز"},
                            { id: 8, label: "دابنهامز", value: "دابنهامز"},
                            { id: 9, label: "فورايفر 21", value: "21"},
                            { id: 10, label: "جاب", value: "جاب"},
                            { id: 11, label: "H&M", value: "H&M"},
                            { id: 12, label: "كوتون", value: "كوتون"},
                            { id: 13, label: "ال سي وايكيكي", value: "ال سي وايكيكي"},
                            { id: 14, label: "ليفي", value: "ليفي"},
                            { id: 15, label: "ماتلان", value: "ماتلان"},
                            { id: 16, label: "ماكس", value: "ماكس"},
                            { id: 17, label: "مونسون", value: "مونسون"},
                            { id: 18, label: "كوذور كير", value: "كوذور كير"},
                            { id: 19, label: "نايكي", value: "مايكل كورس"},
                            { id: 20, label: "اوكايدي", value: "اوكايدي"},
                            { id: 21, label: "اوكسو", value: "اوكسو"},
                            { id: 22, label: "بولو", value: "بولو"},
                            { id: 23, label: "بول اند بير", value: "بول اند بير"},
                            { id: 24, label: "بوما", value: "بوما"},
                            { id: 25, label: "سبيريت", value: "سبيريت"},
                            { id: 26, label: "ريبوك", value: "ريبوك"},
                            { id: 27, label: "ستراديفاريوس", value: "ستراديفاريوس"},
                            { id: 28, label: "تيمبرلاند", value: "تيمبرلاند"},
                            { id: 29, label: "فيرو مودا", value: "فيرو مودا"},
                            { id: 30, label: "زارا كيدز", value: "زارا كيدز"},
                            { id: 31, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "القياس", name: "size3-10"},
                            { id: 1, label: "0-3 شهر", value: "0-3 شهر"},
                            { id: 2, label: "4-6 اشهر", value: "4-6 اشهر"},
                            { id: 3, label: "7-9 شهر", value: "7-9 شهر"},
                            { id: 4, label: "10-12 شهر", value: "10-12 شهر"},
                            { id: 5, label: "13-18 شهر", value: "13-18 شهر"},
                            { id: 6, label: "19-24 شهر", value: "19-24 شهر"},
                            { id: 7, label: "2-3 سنة", value: "2-3 سنة"},
                            { id: 8, label: "3-4 سنوات", value: "3-4 سنوات"},
                            { id: 9, label: "4-5 سنوات", value: "4-5 سنوات"},
                            { id: 10, label: "5-6 سنوات", value: "5-6 سنوات"},
                            { id: 11, label: "6-7 سنوات", value: "6-7 سنوات"},
                            { id: 12, label: "7-8 سنوات", value: "7-8 سنوات"},
                            { id: 13, label: "8-9 سنوات", value: "8-9 سنوات"},
                            { id: 14, label: "9-10 سنوات", value: "9-10 سنوات"},
                            { id: 15, label: "10-11 سنة", value: "10-11 سنة"},
                            { id: 16, label: "11-12 سنة", value: "11-12 سنة"},
                            { id: 17, label: "12-13 سنة", value: "12-13 سنة"},
                            { id: 18, label: "13-14 سنة", value: "13-14 سنة"},
                            { id: 19, label: "14-15 سنة", value: "14-15 سنة"},
                            { id: 10, label: "15-16 سنة", value: "15-16 سنة"}
                        ],
                        [
                            { id: 0, kind: "الحالة", name: "condition3-10"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                        ]
                    ]
                },
                {
                    id: 4, label: "العاب اطفال", value: "العاب اطفال",properties:[
                        [
                            { id: 0, kind: "الحالة", name: "condition4-10"},
                            { id: 1, label: "مستعمل", value: "مستعمل"},
                            { id: 2, label: "جديد", value: "جديد"}
                         ]
                    ]
                }
                ];
            case "GET_CATEGORIES_OF11" :
                        return [{
                    id: 1, label: "زيوت", value: "زيوت",properties:[""]
                },
                {
                    id: 2, label: "تمور", value: "تمور",properties:[""]
                },
                {
                    id: 3, label: "عسل", value: "عسل",properties:[""]
                },
                {
                    id: 4, label: "طبخات جاهزة", value: "طبخات جاهزة",properties:[""]
                },
                {
                    id: 5, label: "حلويات", value: "حلويات",properties:[""]
                },
                {
                    id: 6, label: "فيتامينات ومكملات غذائية", value: "فيتامينات ومكملات غذائية",properties:[""]
                },
                {
                    id: 7, label: "اجبان", value: "اجبان",properties:[""]
                }
                ,
                {
                    id: 8, label: "خضار وفواكه", value: "خضار وفواكه",properties:[""]
                },
                {
                    id: 9, label: "طعام - غذاء - اخرى", value: "طعام - غذاء - اخرى",properties:[""]
                }
                ];
            case "GET_CATEGORIES_OF12" :
                        return [{
                    id: 1, label: "دورات تدريبية", value: "دورات تدريبية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type1-12"},
                            { id: 1, label: "لغات", value: "لغات"},
                            { id: 2, label: "هندسة", value: "هندسة"},
                            { id: 3, label: "تصميم", value: "تصميم"},
                            { id: 4, label: "العمارة والتصميم الداخلي", value: "العمارة والتصميم الداخلي"},
                            { id: 5, label: "محاسبة", value: "محاسبة"},
                            { id: 6, label: "مالية ومصرفية", value: "مالية ومصرفية"},
                            { id: 7, label: "الموارد البشرية", value: "الموارد البشرية"},
                            { id: 8, label: "الادارة", value: "الادارة"},
                            { id: 9, label: "التسويق والمبيعات", value: "اخرى"},
                            { id: 10, label: "برمجة التطبيقات والمواقع الالكترونية", value: "برمجة التطبيقات والمواقع الالكترونية"},
                            { id: 11, label: "برمجة قاعدة البيانات", value: "برمجة قاعدة البيانات"},
                            { id: 12, label: "الشبكات", value: "الشبكات"},
                            { id: 13, label: "الطيران", value: "الطيران"},
                            { id: 14, label: "ميكانيك وصيانة", value: "ميكانيك وصيانة"},
                            { id: 15, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الموقع", name: "location1-12"},
                            { id: 1, label: "عن بعد", value: "عن بعد"},
                            { id: 2, label: "في الموقع", value: "في الموقع"}
                         ]
                    ]
                },
                {
                    id: 2, label: "دروس خصوصية", value: "دروس خصوصية",properties:[
                        [
                            { id: 0, kind: "النوع", name: "type2-12"},
                            { id: 1, label: "مدرس رياضيات", value: "مدرس رياضيات"},
                            { id: 2, label: "مدرس فيزياء", value: "مدرس فيزياء"},
                            { id: 3, label: "مدرس كيمياء", value: "مدرس كيمياء"},
                            { id: 4, label: "مدرس انجليزي", value: "مدرس انجليزي"},
                            { id: 5, label: "مدرس عربي", value: "مدرس عربي"},
                            { id: 6, label: "مدرس فرنسي", value: "مدرس فرنسي"},
                            { id: 7, label: "مدرس روضة", value: "مدرس روضة"},
                            { id: 8, label: "مدرس ابتدائي", value: "مدرس ابتدائي"},
                            { id: 9, label: "مدرس ثانوي", value: "مدرس ثانوي"},
                            { id: 10, label: "مدرس تربية اسلامية", value: "مدرس تربية اسلامية"},
                            { id: 11, label: "مدرس حاسوب", value: "مدرس حاسوب"},
                            { id: 12, label: "مدرس SAT-IGCSE", value: "مدرس SAT-IGCSE"},
                            { id: 13, label: "مدرس تربية خاصة", value: "مدرس تربية خاصة"},
                            { id: 14, label: "اخرى", value: "اخرى"}
                        ],
                        [
                            { id: 0, kind: "الموقع", name: "location2-12"},
                            { id: 1, label: "عن بعد", value: "عن بعد"},
                            { id: 2, label: "في الموقع", value: "في الموقع"}
                         ]
                    ]
                },
                {
                    id: 3, label: "اخرى", value: "اخرى",properties:[""]
                }
                ];
            case "GET_CATEGORIES_OF13" :
                        return [{
                    id: 1, label: "صيانة لابتوب - كمبيوتر", value: "صيانة لابتوب - كمبيوتر",properties:[""]
                },
                {
                    id: 2, label: "بناء ومقاولات", value: "بناء ومقاولات",properties:[""]
                },
                {
                    id: 3, label: "خدمات كهربائية", value: "خدمات كهربائية",properties:[
                        [
                            { id: 0, kind: "نوع الخدمة", name: "type3-13"},
                            { id: 1, label: "اعمال كهربائية", value: "اعمال كهربائية"},
                            { id: 2, label: "افران غاز", value: "افران غاز"},
                            { id: 3, label: "غسالات - نشافات", value: "غسالات - نشافات"},
                            { id: 4, label: "ثلاجات - فريزرات", value: "ثلاجات - فريزرات"},
                            { id: 2, label: "شاشات - رسيفرات", value: "شاشات - رسيفرات"},
                            { id: 3, label: "تكييف وتبريد", value: "تكييف وتبريد"},
                            { id: 4, label: "الانظمة الشمسية", value: "الانظمة الشمسية"},
                            { id: 5, label: "مصاعد - ابواب كهربائية", value: "مصاعد - ابواب كهربائية"},
                            { id: 6, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 4, label: "السفر والسياحة", value: "السفر والسياحة",properties:[""]
                },
                {
                    id: 5, label: "خدمات طبية", value: "خدمات طبية",properties:[""]
                },
                {
                    id: 6, label: "خدمات مناسبات", value: "خدمات مناسبات",properties:[
                        [
                            { id: 0, kind: "نوع الخدمة", name: "type6-13"},
                            { id: 1, label: "قاعات", value: "اعمال كهربائية"},
                            { id: 2, label: "منظم حفلات", value: "افران غاز"},
                            { id: 3, label: "تصوير فوتوغرافي", value: "غسالات - نشافات"},
                            { id: 4, label: "تصوير فيديو", value: "ثلاجات - فريزرات"},
                            { id: 2, label: "تنسيق ورود", value: "شاشات - رسيفرات"},
                            { id: 3, label: "زفات", value: "تكييف وتبريد"},
                            { id: 4, label: "خيم ومستلزمات مناسبات", value: "الانظمة الشمسية"},
                            { id: 5, label: "اخرى", value: "اخرى"}
                        ]
                    ]
                },
                {
                    id: 7, label: "صيانة السيارات", value: "صيانة السيارات",properties:[
                        [
                            { id: 0, kind: "نوع الخدمه", name: "type7-13"},
                            { id: 1, label: "ونشات", value: "ونشات"},
                            { id: 2, label: "تنظيف سيارات", value: "تنظيف سيارات"},
                            { id: 3, label: "صيانة واصلاح", value: "صيانة واصلاح"},
                            { id: 4, label: "اخرى", value: "اخرى"}
                         ]
                    ] 
                },
                {
                    id: 8, label: "خدمات قانونية", value: "خدمات قانونية",properties:[""]
                },
                {
                    id: 9, label: "خدمات نقل العفش", value: "خدمات نقل العفش",properties:[""]
                }
                ,
                {
                    id: 10, label: "خدمات تنظيف", value: "خدمات تنظيف",properties:[""]
                },
                {
                    id: 11, label: "خدمات توصيل", value: "خدمات توصيل",properties:[
                        [
                            { id: 0, kind: "نوع الخدمة", name: "type11-13"},
                            { id: 1, label: "ديليفيري", value: "ديليفيري"},
                            { id: 2, label: "موظفين - طلاب", value: "موظفين - طلاب"},
                            { id: 3, label: "مياه للشرب", value: "مياه للشرب"},
                            { id: 4, label: "خدمات شحن", value: "خدمات شحن"},
                            { id: 5, label: "اخرى", value: "اخرى"},
                        ]
                    ]
                },
                {
                    id: 12, label: "خدمات دهان - اصباغ", value: "خدمات دهان - اصباغ",properties:[""]
                },
                {
                    id: 13, label: "خدمات سباكة - مواسرجي", value: "خدمات سباكة - مواسرجي",properties:[""]
                },
                {
                    id: 14, label: "خدمات حدادة - لحام", value: "خدمات حدادة - لحام",properties:[""]
                },
                {
                    id: 15, label: "خدمات تنجيد", value: "خدمات تنجيد",properties:[""]
                },
                {
                    id: 16, label: "خدمات بلاط - باركيه", value: "خدمات بلاط - باركيه",properties:[""]
                },
                {
                    id: 17, label: "خدمات تجارة", value: "خدمات تجارة",properties:[""]
                },
                {
                    id: 18, label: "تركيب وصيانة مطابخ", value: "تركيب وصيانة مطابخ",properties:[""]
                },
                {
                    id: 19, label: "تركيب وصيانة حمامات", value: "تركيب وصيانة حمامات",properties:[""]
                },
                {
                    id: 20, label: "خدمات حدائق", value: "خدمات حدائق",properties:[""]
                },
                {
                    id: 21, label: "صيانة ابواب - شبابيك", value: "صيانة ابواب - شبابيك",properties:[""]
                },
                {
                    id: 22, label: "خدمات تصميم داخلي", value: "خدمات تصميم داخلي",properties:[""]
                },
                {
                    id: 23, label: "خدمات صيانة عامة", value: "خدمات صيانة عامة",properties:[""]
                },
                {
                    id: 24, label: "دعاية وتسويق", value: "دعاية وتسويق",properties:[""]
                },
                {
                    id: 25, label: "خدمات طباعة وتصميم", value: "خدمات طباعة وتصميم",properties:[""]
                },
                {
                    id: 26, label: "خدمات محاسبة ومالية", value: "خدمات محاسبة ومالية",properties:[""]
                },
                {
                    id: 27, label: "خدمات تجميل", value: "خدمات تجميل",properties:[""]
                },
                {
                    id: 28, label: "خدمات رعاية منزلية", value: "خدمات رعاية منزلية",properties:[""]
                },
                {
                    id: 29, label: "صيانة موبايل - تابلت", value: "صيانة موبايل - تابلت",properties:[""]
                },
                {
                    id: 30, label: "خدمات الاعمال", value: "خدمات الاعمال",properties:[""]
                },
                {
                    id: 31, label: "خدمات اخرى", value: "خدمات اخرى",properties:[""]
                },
                ];
            case "GET_CATEGORIES_OF14" :
                        return [{
                    id: 1, label: "قطط", value: "قطط",properties:[""]
                },
                {
                    id: 2, label: "طيور", value: "طيور",properties:[""]
                },
                {
                    id: 3, label: "حمام", value:  "حمام",properties:[""]
                },
                {
                    id: 4, label: "غنم", value: "غنم",properties:[""]
                },
                {
                    id: 5, label: "دجاج", value: "دجاج",properties:[""]
                },
                {
                    id: 6, label: "خيل", value: "خيل",properties:[""]
                },
                {
                    id: 7, label: "ببغاء", value: "ببغاء",properties:[""]
                },
                {
                    id: 8, label: "كلاب", value: "كلاب",properties:[""]
                },
                {
                    id: 9, label: "ماعز", value: "ماعز",properties:[""]
                },
                {
                    id: 10, label: "اسماك", value: "اسماك",properties:[""]
                },
                {
                    id: 11, label: "جمال", value: "جمال",properties:[""]
                },
                {
                    id: 12, label: "ارانب", value: "ارانب",properties:[""]
                },
                {
                    id: 13, label: "غزلان", value: "غزلان",properties:[""]
                },
                {
                    id: 14, label: "ابقار", value: "ابقار",properties:[""]
                },
                {
                    id: 15, label: "سلاحف", value: "سلاحف",properties:[""]
                },
                {
                    id: 16, label: "هامستر", value: "هامستر",properties:[""]
                },
                {
                    id: 17, label: "طعام حيوانات", value: "طعام حيوانات",properties:[""]
                },
                {
                    id: 18, label: "اكسسوارات", value: "اكسسوارات",properties:[""]
                } ,
                {
                    id: 19, label: "حيوانات وطيور اخرى", value: "حيوانات وطيور اخرى",properties:[""]
                }
                ];
            default : return state;
                    
        }
}
 
