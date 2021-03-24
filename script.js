let CurrentPhotoID = 0;
let Dummy = 0;

let ImagesData = [{
    Photo: "images/Ferrari.jpg",
    Title: "Ferrari",
    Description: "A high end sportcar from Italy"
},
{
    Photo: "images/Moon.jpg",
    Title: "The Moon",
    Description: "Our loyal follower"
},
{
    Photo: "images/cat.png",
    Title: "Cat",
    Description: "She has 9 lives!"
},
{
    Photo: "images/Eger.jpg",
    Title: "Eger",
    Description: "My Hometown!"
},
{
    Photo: "images/Palinka.jpg",
    Title: "Pálinka",
    Description: "Covid Vaccine"
}]

const MaxPhotoID = ImagesData.length - 1;

$(window).bind('orientationchange', function (event) {
    var SaveID = CurrentPhotoID;
    location.reload(true);
    CurrentPhotoID = SaveID;
    ChangePhoto(CurrentPhotoID);
});

function InitThumbnails() {
    Dummy = 0;
    ImagesData.forEach(Item => {
        $("#BottomArea").append(`<div class="Thumbnail">
        <img class="ThumbnailPhoto" data-number="` + Dummy.toString() + `" src="` + Item.Photo + `">
        <div class="HiddenTitle">${Item.Title}</div></div>`);
        Dummy++;
    })
}
function ChangePhoto() {
     $("#Photo").attr("src", ImagesData[CurrentPhotoID].Photo);
     $("#PhotoTitle").text(ImagesData[CurrentPhotoID].Title);
     $("#PhotoDescription").text(ImagesData[CurrentPhotoID].Description);
}

$( "#LeftPanel" ).click(function() {
    if (CurrentPhotoID > 0) {
        CurrentPhotoID--;
    }
    ChangePhoto();
  });

$( "#RightPanel" ).click(function() {
  if (CurrentPhotoID < MaxPhotoID) {
      CurrentPhotoID++;
  }
  ChangePhoto();
});

$("#BottomArea").click(function(Event) {
    let IndexClicked = $(Event.target).attr('data-number');
    let numberIndex = parseInt(indexClicked);
    
    console.log(numberIndex);

    CurrentPhotoID = numberIndex;
    ChangePhoto();
})

InitThumbnails();
ChangePhoto(); /* Először az első (Nulladik) elem kiválasztva */
