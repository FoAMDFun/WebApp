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
    Photo: "images/Moon.jpg",
    Title: "The Moon",
    Description: "Our loyal follower"
}

let Data3 = {
    Photo: "images/Moon.jpg",
    Title: "The Moon",
    Description: "Our loyal follower"
}

let Data4 = {
    Photo: "images/Moon.jpg",
    Title: "The Moon",
    Description: "Our loyal follower"
}

let ImagesData = [Data0, Data1, Data2, Data3, Data4];

function ChangePhoto(photoNumber) {
     $("#Photo").attr("src", ImagesData[photoNumber].Photo);
     $("#PhotoTitle").text(ImagesData[photoNumber].Title);
     $("#PhotoDescription").text(ImagesData[photoNumber].Description);
     console.log(ImagesData[photoNumber]);
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
