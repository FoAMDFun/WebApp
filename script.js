let CurrentPhotoID = 0;
const MaxPhotoID = 1;
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
     console.log(Data.length);
}

ChangePhoto(CurrentPhotoID); /* Először az első (Nulladik) elem kiválasztva */
