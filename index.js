
const hamburgerClick = document.getElementById("hamburger_click");
const asideMain = document.getElementById("aside_main");
const aside = document.getElementById("aside");

hamburgerClick.addEventListener("click", () => {
  if (!hamburgerClick.classList.contains("new")) {
    hamburgerClick.classList.add("new");
    asideMain.classList.add("block");
    aside.classList.remove("block");
  } else {
    hamburgerClick.classList.remove("new");
    asideMain.classList.remove("block");
    aside.classList.add("block");
  }
});




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
      addListener(data)
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

    for (let i = 0; i < 25; i++) {

      if (videoData.items[i].type == "video") {

        const Search_video_container = document.getElementById("Search-video-container");

        const thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        thumbnail.setAttribute("id", "thumbnail");
        thumbnail.addEventListener("click", () => {
          document.getElementById("aside_main").classList.add("block")
          document.getElementById("thumbnail").classList.add("block")
          document.getElementById("Search-video-container").classList.add("block");


          const section = document.getElementById("section");
          const thumbnailPlaying_videos = document.createElement("div");
          thumbnailPlaying_videos.setAttribute("id", "thumbnailPlaying_videos");
          section.appendChild(thumbnailPlaying_videos);

          const iframe = document.createElement("iframe");
          iframe.src = "https://www.youtube.com/embed/" + videoData.items[i].id;
          thumbnailPlaying_videos.appendChild(iframe);

          const title_video_playing = document.createElement("div");
          title_video_playing.classList.add("title_video_playing");
          title_video_playing.innerText = videoData.items[i].title;
          thumbnailPlaying_videos.appendChild(title_video_playing);

          const profile_playing_videos_layer_like_dislike = document.createElement("div");
          thumbnailPlaying_videos.appendChild(profile_playing_videos_layer_like_dislike);
          profile_playing_videos_layer_like_dislike.classList.add("profile_playing_videos_layer_like_dislike");

          const profile_playing_videos = document.createElement("div");
          profile_playing_videos.classList.add("profile_playing_videos");
          profile_playing_videos_layer_like_dislike.appendChild(profile_playing_videos);

          const profile_playing_videos_img = document.createElement("img");
          profile_playing_videos_img.src = videoData.items[i].author.bestAvatar.url;
          profile_playing_videos.appendChild(profile_playing_videos_img);

          const playingVideos_Channel_name = document.createElement('div');
          playingVideos_Channel_name.innerHTML = "<b>" + videoData.items[i].author.name + "<b/>";
          profile_playing_videos.appendChild(playingVideos_Channel_name);
          playingVideos_Channel_name.classList.add("playingVideos_Channel_name");

          const video_playing_Subscribe = document.createElement("button");
          video_playing_Subscribe.setAttribute("id", "video_playing_Subscribe");
          profile_playing_videos.appendChild(video_playing_Subscribe);
          video_playing_Subscribe.innerText = "Subscribe";

          const like_dislike_share_row = document.createElement("div");
          like_dislike_share_row.classList.add("like_dislike_share_row");
          profile_playing_videos_layer_like_dislike.appendChild(like_dislike_share_row);

          const like_dislike = document.createElement("div");
          like_dislike.classList.add("like_dislike");
          like_dislike_share_row.appendChild(like_dislike);

          const like = document.createElement("img");
          like.src = "./svg-export/like.svg";
          like.classList.add("like");
          like_dislike.appendChild(like);

          const dislike = document.createElement("img");
          dislike.src = "./svg-export/dislike.svg";
          dislike.classList.add("dislike");
          like_dislike.appendChild(dislike)


          const share = document.createElement("div");
          share.classList.add("share");
          like_dislike_share_row.appendChild(share);

          const shareImg = document.createElement("img");
          shareImg.src = "/svg-export/share.svg";
          share.appendChild(shareImg)

          const share_share = document.createElement("div");
          share_share.innerText = "Share";
          share.appendChild(share_share);
          share_share.classList.add("share_share");


          const download = document.createElement("div");
          download.classList.add("share");
          like_dislike_share_row.appendChild(download)

          const download_img = document.createElement("img");
          download_img.src = "/svg-export/download.svg";
          download.appendChild(download_img);

          const download_downlaod = document.createElement("div");
          download_downlaod.setAttribute("id", "download_downlaod");
          download_downlaod.innerText = "Download";
          download.appendChild(download_downlaod);

          const video_playing_decription = document.createElement("div");
          video_playing_decription.classList.add("video_playing_decription");
          thumbnailPlaying_videos.appendChild(video_playing_decription);

          const video_playing_views_time = document.createElement("div");
          video_playing_views_time.classList.add("video_playing_views_time");
          video_playing_decription.appendChild(video_playing_views_time);

          const video_playing_views = document.createElement("div");

          video_playing_views.innerText = videoData.items[i].views;
          video_playing_views.classList.add("video_playing_views")
          video_playing_views_time.appendChild(video_playing_views);

          const video_playing_upload_time = document.createElement("div");
          video_playing_upload_time.innerText = videoData.items[i].uploadedAt;
          video_playing_upload_time.classList.add("video_playing_upload_time");
          video_playing_views_time.appendChild(video_playing_upload_time);

          const videoplaying_descrption = document.createElement("div");
          if (videoData.items[i].description != null) {
            videoplaying_descrption.innerText = videoData.items[i].description;
            videoplaying_descrption.classList.add("videoplaying_descrption");
            video_playing_decription.appendChild(videoplaying_descrption);
          }

          const videoPlaying_comments = document.createElement('div');
          videoPlaying_comments.innerText = "Comments";
          videoPlaying_comments.classList.add("videoPlaying_comments");
          video_playing_decription.appendChild(videoPlaying_comments)

          const comments_profile = document.createElement("div");
          comments_profile.classList.add("comments_profile");
          video_playing_decription.appendChild(comments_profile);

          const comments_profile_img = document.createElement("img");
          comments_profile_img.src = "./svg-export/profile.png";
          comments_profile.appendChild(comments_profile_img);

          const comments_padding = document.createElement("div");
          comments_padding.classList.add("comments_padding");
          comments_profile.appendChild(comments_padding);

          const comments_input = document.createElement("input");
          comments_input.placeholder = "Add a comment";
          comments_padding.appendChild(comments_input);

          const comment_button = document.createElement("button");
          comment_button.innerText = "Comment";
          comments_padding.appendChild(comment_button);
        })
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
  }
})












// youtube videos


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
