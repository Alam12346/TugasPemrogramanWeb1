// Home article dinamis
function showDetail(articleID) {
    const articles = {
        article1: {
            title: "Title Article 1",
            content: `Vivamus bibendum consequat sem eu tempus. Nullam quis felis eu felis facilisis semper sit amet at lectus.
            Morbi sed faucibus lectus. Ut maximus enim tortor, vitae faucibus arcu tristique sed. Nulla facilisi.
            Mauris nibh eros, ultrices id ligula eget, dapibus tempus velit. Sed consequat ipsum urna, et porta augue fermentum viverra.
            Cras faucibus pellentesque placerat. Nunc et pretium risus. Suspendisse nec eros id libero luctus varius.
            Mauris nulla leo, pellentesque eu mauris eu, egestas consectetur purus. Integer molestie efficitur tortor a interdum.
            Mauris tempus tellus eget egestas mattis. Nulla semper, tellus vitae posuere eleifend, risus augue maximus sapien, quis dictum massa nunc vitae sem.`,
            author: "UTB",
            badge: "38",
            tags: ["HTML", "CSS", "JAVASCRIPT"]

        },
        article2: {
            title: "Title Article 2",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus turpis, gravida vel imperdiet sed,
            tempus sit amet nunc. Nam aliquam eros vitae malesuada tempus. Aenean ut mollis dui. Etiam condimentum arcu ac lectus eleifend ultricies.
            Ut eu libero risus. In id maximus nunc. Vivamus condimentum ultrices nisl id dignissim.
      
            Vivamus bibendum consequat sem eu tempus. Nullam quis felis eu felis facilisis semper sit amet at lectus.
            Morbi sed faucibus lectus. Ut maximus enim tortor, vitae faucibus arcu tristique sed. Nulla facilisi.
            Mauris nibh eros, ultrices id ligula eget, dapibus tempus velit. Sed consequat ipsum urna, et porta augue fermentum viverra.
            Cras faucibus pellentesque placerat. Nunc et pretium risus. Suspendisse nec eros id libero luctus varius.
            Mauris nulla leo, pellentesque eu mauris eu, egestas consectetur purus. Integer molestie efficitur tortor a interdum.
            Mauris tempus tellus eget egestas mattis. Nulla semper, tellus vitae posuere eleifend, risus augue maximus sapien, quis dictum massa nunc vitae sem.`,
            author: "UTB",
            badge: "4",
            tags: ["HTML", "CSS", "ReacJS"]

        },
        article3: {
            title: "Title Article 3",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus turpis, gravida vel imperdiet sed,
            tempus sit amet nunc. Nam aliquam eros vitae malesuada tempus. Aenean ut mollis dui. Etiam condimentum arcu ac lectus eleifend ultricies.
            Ut eu libero risus. In id maximus nunc. Vivamus condimentum ultrices nisl id dignissim.
      
            Vivamus bibendum consequat sem eu tempus. Nullam quis felis eu felis facilisis semper sit amet at lectus.
            Morbi sed faucibus lectus. Ut maximus enim tortor, vitae faucibus arcu tristique sed. Nulla facilisi.
            Mauris nibh eros, ultrices id ligula eget, dapibus tempus velit. Sed consequat ipsum urna, et porta augue fermentum viverra.
            Cras faucibus pellentesque placerat. Nunc et pretium risus. Suspendisse nec eros id libero luctus varius.
            Mauris nulla leo, pellentesque eu mauris eu, egestas consectetur purus. Integer molestie efficitur tortor a interdum.
            Mauris tempus tellus eget egestas mattis. Nulla semper, tellus vitae posuere eleifend, risus augue maximus sapien, quis dictum massa nunc vitae sem.
            
             Vivamus bibendum consequat sem eu tempus. Nullam quis felis eu felis facilisis semper sit amet at lectus.
            Morbi sed faucibus lectus. Ut maximus enim tortor, vitae faucibus arcu tristique sed. Nulla facilisi.
            Mauris nibh eros, ultrices id ligula eget, dapibus tempus velit. Sed consequat ipsum urna, et porta augue fermentum viverra.
            Cras faucibus pellentesque placerat. Nunc et pretium risus. Suspendisse nec eros id libero luctus varius.
            Mauris nulla leo, pellentesque eu mauris eu, egestas consectetur purus. Integer molestie efficitur tortor a interdum.
            Mauris tempus tellus eget egestas mattis. Nulla semper, tellus vitae posuere eleifend, risus augue maximus sapien, quis dictum massa nunc vitae sem.`,
            author: "UTB",
            badge: "258",
            tags: ["Angular", "CSS", "HTML"]

        }
    };
    localStorage.setItem("selectedArticle", JSON.stringify(articles[articleID]));
    window.location.href = "detail_article.html"
}