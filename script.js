let CurrentPhotoID = 0;
const MaxPhotoID = 4;
let Data0 = {
        Photo: "images/Ferrari.jpg",
        Title: "Ferrari",
        Description: "A high end sportcar from Italy"
    }

let Data1 = {
    Photo: "images/Moon.jpg",
    Title: "The Moon",
    Description: "Our loyal follower"
}

let Data2 = {
    Photo: "images/cat.png",
    Title: "Cat",
    Description: "She has 9 lives!"
}

let Data3 = {
    Photo: "images/Eger.jpg",
    Title: "Eger",
    Description: "My Hometown!"
}

let Data4 = {
    Photo: "images/Palinka.jpg",
    Title: "Pálinka",
    Description: "Covid Vaccine"
}

let ImagesData = [Data0, Data1, Data2, Data3, Data4];

$(window).bind('orientationchange', function (event) {
    location.reload(true);
});

function ChangePhoto(photoNumber) {
     $("#Photo").attr("src", ImagesData[photoNumber].Photo);
     $("#PhotoTitle").text(ImagesData[photoNumber].Title);
     $("#PhotoDescription").text(ImagesData[photoNumber].Description);
}

$( "#LeftPanel" ).click(function() {
    if (CurrentPhotoID > 0) {
        CurrentPhotoID--;
    }
    ChangePhoto(CurrentPhotoID);
  });

$( "#RightPanel" ).click(function() {
  if (CurrentPhotoID < MaxPhotoID) {
      CurrentPhotoID++;
  }
  ChangePhoto(CurrentPhotoID);
});

ChangePhoto(CurrentPhotoID); /* Először az első (Nulladik) elem kiválasztva */
