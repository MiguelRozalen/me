$(function() {
   $.ajax({
      crossOrigin: true,
      url: "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US",
      success: function(data) {	  
		var bingObject = JSON.parse(data);
		var images = bingObject.images;
		var imageUrl = "https://www.bing.com"+bingObject.images[0].url;
		document.getElementById("home").style.backgroundImage = "url('"+imageUrl+"')";
      }   
  });
}); 
