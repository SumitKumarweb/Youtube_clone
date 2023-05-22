
// const hamburgerClick = document.getElementById("hamburger_click");
// const asideMain = document.getElementById("aside_main");
// const aside = document.getElementById("aside");

// hamburgerClick.addEventListener("click", () => {
//   if (!hamburgerClick.classList.contains("new")) {
//     hamburgerClick.classList.add("new");
//     asideMain.classList.add("block");
//     aside.classList.remove("block");
//   } else {
//     hamburgerClick.classList.remove("new");
//     asideMain.classList.remove("block");
//     aside.classList.add("block");
//   }
// });






// search youtube videos

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd5954b5b9emsh7c9a963540a5437p1ea164jsn848d2c0c6f4f',
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
};


document.getElementById("search_btn").addEventListener("click", () => {


  document.getElementById("Search-video-container").classList.remove("block")
  document.getElementById("interface_video").classList.add("block")

const value = document.getElementById("search").value;
console.log(value)


fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${value}`, options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    createVideoInterface(data);
  })
  .catch(err => console.error(err));


// const videoData = {
//   "items": [
//     {
//       "type": "video",
//       "title": "Justin Bieber - Baby ft. Ludacris",
//       "id": "kffacxfA7G4",
//       "url": "https://www.youtube.com/watch?v=kffacxfA7G4",
//       "bestThumbnail": {
//         "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDm7Ja321NYzKF9nvMQTAK53jsmMw",
//         "width": 720,
//         "height": 404
//       },
//       "thumbnails": [
//         {
//           "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDm7Ja321NYzKF9nvMQTAK53jsmMw",
//           "width": 720,
//           "height": 404
//         },
//         {
//           "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUKBrATo9H3qXlOnjg4WBXST2PCg",
//           "width": 360,
//           "height": 202
//         }
//       ],
//       "isUpcoming": false,
//       "upcoming": null,
//       "isLive": false,
//       "badges": [
//         "4K",
//         "CC"
//       ],
//       "author": {
//         "name": "Justin Bieber",
//         "channelID": "UCIwFjwMjI0y7PDBVEO9-bkQ",
//         "url": "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
//         "bestAvatar": {
//           "url": "https://yt3.ggpht.com/ytc/AGIKgqOdbAw3exJCVFHZoZVGp45lnyaYNvCfUSKFQ8VOzQ=s88-c-k-c0x00ffffff-no-rj",
//           "width": 68,
//           "height": 68
//         },
//         "avatars": [
//           {
//             "url": "https://yt3.ggpht.com/ytc/AGIKgqOdbAw3exJCVFHZoZVGp45lnyaYNvCfUSKFQ8VOzQ=s88-c-k-c0x00ffffff-no-rj",
//             "width": 68,
//             "height": 68
//           }
//         ],
//         "ownerBadges": [
//           "Official Artist Channel"
//         ],
//         "verified": true
//       },
//       "description": null,
//       "views": 2959849648,
//       "duration": "3:40",
//       "uploadedAt": "13 years ago"
//     }
//   ]
// }





function createVideoInterface(videoData) {

  for (let i = 0; i < videoData.items.length; i++) {

    const Search_video_container = document.getElementById("Search-video-container");

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    Search_video_container.appendChild(thumbnail);

    const video_thumbanil = document.createElement("img");
    video_thumbanil.classList.add("video-thumbnail");
    video_thumbanil.src = videoData.items[i].thumbnails[0].url;
    thumbnail.appendChild(video_thumbanil);

    const content_description = document.createElement("div");
    content_description.classList.add("content_description");
    thumbnail.appendChild(content_description);

    const title = document.createElement("div");
    title.classList.add("title");
    content_description.appendChild(title);
    title.innerText = videoData.items[i].title;


    const search_views = document.createElement("div");
    search_views.classList.add("Search_views");
    search_views.innerText = videoData.items[i].views;
    content_description.appendChild(search_views);

    const time = document.createElement("li");
    time.classList.add("time");
    time.innerText = videoData.items[i].uploadedAt;
    search_views.appendChild(time);

    const profile = document.createElement("div");
    profile.classList.add("profile");
    content_description.appendChild(profile);

    const profile_img = document.createElement("img");
    profile_img.src = videoData.items[i].author.bestAvatar.url;
    profile.appendChild(profile_img);

    const authorName = document.createElement("div");
    authorName.classList.add("authorName");
    authorName.innerText = videoData.items[i].author.name;
    profile.appendChild(authorName);


    const description = document.createElement("div");
    description.classList.add("description");
    description.innerText = videoData.items[i].description;
    content_description.appendChild(description);

  }
}
})















// // youtube videos
// const options1 = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'd5954b5b9emsh7c9a963540a5437p1ea164jsn848d2c0c6f4f',
//     'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
//   }
// };

// fetch('https://youtube-v2.p.rapidapi.com/video/details?video_id=PuQFESk0BrA', options1)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

const data = [
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
  {
    "video_id": "PuQFESk0BrA",
    "title": "Your Mom's House Podcast - Ep. 488 w/ Bert Kreischer",
    "author": "YMH Studios",
    "number_of_views": 2335495,
    "video_length": "7456",
    "description": "Woah Mommies, it's a very special week so pull those jeans up. This week we have the fattest working comedian currently alive today. When will he die? The Mommies discuss before Bart's arrival. Plus, did you know it's SHART WEEK!?\n\nBert Kresicher arrives with all the hate in his big, over-sized heart. There is a debate about who the true Tour Bus Champ really is, plus we see never before seen clips from Brad's NETFLIX special. Do you know what a Mississippi Wet Wipe is? What's the worst smelling part of Brent's body? All these questions are answered, plus some new Sober October plans for the coming festivities. \n\nhttp://saatvamattress.com/\nhttp://yourmomshousepodcast.com/\nhttp://www.merchmethod.com/tomsegura/\nhttps://www.facebook.com/yourmomshousepodcast\nhttps://www.reddit.com/r/yourmomshousepodcast",
    "is_live_content": "False",
    "published_time": "2019-02-27",
    "channel_id": "UCYIgiXwJck_Pb5Nj-wIrsqg",
    "category": "Comedy",
    "type": "NORMAL",
    "keywords": [
      "ymh",
      "your mom's house",
      "your moms house",
      "tom segura",
      "christina pazsitzky",
      "christina p",
      "mommies",
      "jeans",
      "up",
      "high and tight",
      "what's with the jeans",
      "denim on denim",
      "podcast"
    ],
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVzr3xrzBAumvcTN1rfWgf6k0Ffg",
        "width": 168,
        "height": 94
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8bb2XgAmmG0FliFnvHa88ToJbNw",
        "width": 196,
        "height": 110
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIW7onzWaqFkntZ83G34Jy2CLcTA",
        "width": 246,
        "height": 138
      },
      {
        "url": "https://i.ytimg.com/vi/PuQFESk0BrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl589UI9J8P0KUvzkjIxgoGqNoww",
        "width": 336,
        "height": 188
      },
      {
        "url": "https://i.ytimg.com/vi_webp/PuQFESk0BrA/maxresdefault.webp",
        "width": 1920,
        "height": 1080
      }
    ]
  },
];

console.log(data);

data.forEach((data) => {

  const video_container = document.getElementById("video_container");
  const video_container_multiple = document.createElement("div");
  video_container.appendChild(video_container_multiple);


  const banner = document.createElement("div");
  banner.classList.add("banner");
  video_container_multiple.appendChild(banner);

  const banner_img = document.createElement("img");
  banner_img.src = data.thumbnails[0].url;
  banner.appendChild(banner_img);

  const logo = document.createElement("div");
  logo.classList.add("logo");
  video_container_multiple.appendChild(logo);

  const logo_img = document.createElement("img");
  logo_img.src = "/svg-export/profile.png";
  logo.appendChild(logo_img);

  const logo_title = document.createElement("div");
  logo_title.classList.add("title");
  logo_title.innerText = data.title;
  logo.appendChild(logo_title);

  const channelName = document.createElement("div");
  channelName.classList.add("channel_name");
  channelName.innerText = data.author;
  video_container_multiple.appendChild(channelName);

  const views = document.createElement("div");
  views.innerText = data.number_of_views;
  views.classList.add("views");
  views.classList.add("channel_name");
  video_container_multiple.appendChild(views);

  const time = document.createElement("li");
  time.classList.add("time");
  const publishedDate = new Date(data.published_time);
  const minutesAgo = Math.floor((new Date() - publishedDate) / (1000 * 60));
  time.innerText = minutesAgo + " minutes ago";
  views.appendChild(time);
});


  // })
  // .catch(err => console.error(err));

