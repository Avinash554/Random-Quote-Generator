$(document).ready(function(){
  var random = '' ;
$("#newQuote").on("click",function(){
    $.ajaxSetup({cache:false});
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data){
        random = data[0].content.replace(/<(|\/)p>/g,'').replace(/<(|\/)strong>/g, '').replace(/“|”/g, '"').replace(/:'/g, "'");
        
        $(".quote").html('"' + data[0].content + '"'   )
       $( ".author" ).html( '&ndash;'  + data[0].title )
        fetch('https://unsplash.it/1300/400/?random') .then(response => response.blob()) .then(URL.createObjectURL) .then(url => $('.jumbotron').css('background-image', `url(${url})`));
    });
    });
  $("#tweet_quote").on("click",function(){
     twitter_url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    url = twitter_url.concat(random);
    window.open(url, "_blank");
    
  });
});