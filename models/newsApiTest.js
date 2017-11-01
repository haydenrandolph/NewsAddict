
    //===========================================//
                 //*****Business Apis****//
    //==Bloomberg==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

        console.log(response)

      $('#finance').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description



      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });
    //==CNBC==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#finance').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==The Wallstreet Journal==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#finance').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });

    //================================================/
                //*****Entertainment Apis****//
    //==BuzzFeed==//  
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#movies').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // }); 
    // });
    // ==Entertainment Weekly==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#movies').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // }); 
    // });
    //==Daily Mail==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#movies').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    }); 
    });

    //================================================
                //*****Gaming Apis****//
    //==IGN==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#gaming').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });
    //==Polygon==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#gaming').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //================================================
                //*****General News Apis****//
    //==Al Jazeera==//    
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#worldNews').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });


    //==BBC News==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==CNN News==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Independent==//    
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==The Guardian UK==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Google News==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Reuters==//    
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==The Washington Post==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Time==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#worldNews').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });

    //================================================
                //*****Music News Api****//
    //==MTV News==//  
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#music').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    }); 
    });

    //================================================
                //*****Politics Api****//
    //==Breitbart News==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#politics').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });

    //================================================
                //*****Science and Nature Api****//
    //==New Scientist==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#science').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==National Geographic==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#science').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });

    //================================================
              //******Sports Apis******//
    // ==BBC Sport==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#sports').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // }); 
    // });
    //==ESPN==//  
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#sports').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    }); 
    });
    // ==Fox Sports==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#sports').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // }); 
    // });
    // ==The Sport Bible==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#sports').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // }); 
    // });

    // ================================================
    //           ******Technology Apis******//
    // ==Engadget==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {
    //   console.log(response);
    // });
    //==Gruenderszene==//    
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=gruenderszene&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#tech').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Hacker News==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#tech').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    //==Tech Crunch==//
    // $.ajax({
    //   url: "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
    //   method: 'GET'
    // }).done(function(response) {

    //   $('#tech').on("click", function(event){
    //   var title = response.articles[0].title
    //   var image = response.articles[0].urlToImage
    //   var caption = response.articles[0].description

    //   $(".article-title").html("<center><h1>" + title + "</h1></center>");
    //   $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    // });
    // });
    // ==Tech Radar==//
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=091a3ab93dd24678b96df7d26d7717f8",
      method: 'GET'
    }).done(function(response) {

      $('#tech').on("click", function(event){
      var title = response.articles[0].title
      var image = response.articles[0].urlToImage
      var caption = response.articles[0].description

      $(".article-title").html("<center><h1>" + title + "</h1></center>");
      $(".bxslider").prepend('<img src="'+ image +'" title="' + caption + '">');

    });
    });

    //=====================================================================================//
