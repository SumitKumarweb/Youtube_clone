
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
  
  document.getElementById("thumbnailPlaying_videos").classList.add("block");
  document.getElementById("aside_main").classList.remove("block")
  document.getElementById("Search-video-container").classList.remove("block");
  document.getElementById("interface_video").classList.add("block")

  const value = document.getElementById("search").value;
  console.log(value)
  
  
  // fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${value}`, options)
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data);
  //       createVideoInterface(data);
  //     })
  //     .catch(err => console.error(err));
    
    
    const videoData = {
      "items": [
        {
          "type": "video",
          "title": "Justin Bieber - Baby ft. Ludacris",
          "id": "kffacxfA7G4",
        "url": "https://www.youtube.com/watch?v=kffacxfA7G4",
        "bestThumbnail": {
          "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDm7Ja321NYzKF9nvMQTAK53jsmMw",
          "width": 720,
          "height": 404
        },
        "thumbnails": [
          {
            "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDm7Ja321NYzKF9nvMQTAK53jsmMw",
            "width": 720,
            "height": 404
          },
          {
            "url": "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUKBrATo9H3qXlOnjg4WBXST2PCg",
            "width": 360,
            "height": 202
          }
        ],
        "isUpcoming": false,
        "upcoming": null,
        "isLive": false,
        "badges": [
          "4K",
          "CC"
        ],
        "author": {
          "name": "Justin Bieber",
          "channelID": "UCIwFjwMjI0y7PDBVEO9-bkQ",
          "url": "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
          "bestAvatar": {
            "url": "https://yt3.ggpht.com/ytc/AGIKgqOdbAw3exJCVFHZoZVGp45lnyaYNvCfUSKFQ8VOzQ=s88-c-k-c0x00ffffff-no-rj",
            "width": 68,
            "height": 68
          },
          "avatars": [
            {
              "url": "https://yt3.ggpht.com/ytc/AGIKgqOdbAw3exJCVFHZoZVGp45lnyaYNvCfUSKFQ8VOzQ=s88-c-k-c0x00ffffff-no-rj",
              "width": 68,
              "height": 68
            }
          ],
          "ownerBadges": [
            "Official Artist Channel"
          ],
          "verified": true
        },
        "description": null,
        "views": 2959849648,
        "duration": "3:40",
        "uploadedAt": "13 years ago"
      }
    ]
  }
  
  createVideoInterface(videoData)
  console.log(videoData)
  
  
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

const url1 = '';
const options1 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd5954b5b9emsh7c9a963540a5437p1ea164jsn848d2c0c6f4f',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


// fetch(`https://youtube138.p.rapidapi.com/home/?hl=en&gl=US`, options1)
// .then(response => response.json())
// .then(result => {
//   console.log(result.contents[0]);
//   youtubeHomeInteface(result)
// })
// .catch(err => console.error(err));


const result = {
  "contents": [
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/LHYRoRzXWYHJvAQ4Es5w-ONLK1BzMQGbZKhQs5LvD9EKGppHMwIqFSZcIxhol6etcw7UfRuEOUY=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [],
          "canonicalBaseUrl": "/@poretcast",
          "channelId": "UCR34kAAMqN7wVdJ4hoo2qWg",
          "title": "PoretCast di Giacomo Poretti"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 5712,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/65jffcgRS5k/mqdefault_6s.webp?du=3000&sqp=CNWg4aQG&rs=AOn4CLCZaNESF6vZ25lC7qo7uqEJu0MDqQ",
            "width": 320
          }
        ],
        "publishedTimeText": "1 day ago",
        "stats": {
          "views": 522748
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/65jffcgRS5k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp_-l1MobUQ3efDCh02avA9hrWow",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/65jffcgRS5k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKTCzFn3UUwDirSoanalArKmqaWw",
            "width": 720
          }
        ],
        "title": "Ep.10 | Il ritorno a teatro di Aldo Giovanni e Giacomo | PORETCAST",
        "videoId": "65jffcgRS5k"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/0Ge18a0Keuhk3vhgk4kBlCVxEukf35aQzXFClZ1QYZaE4YxryuvlUUrxgOndh1nK0AnlWW4beEM=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@sundaeconversation",
          "channelId": "UCzn4ij1jh39Zpj0N8vHiVqA",
          "title": "Sundae Conversation"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 399,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/VJMRcyh-DV8/mqdefault_6s.webp?du=3000&sqp=CJOM4aQG&rs=AOn4CLCvsGGdGWBo_eg2knZL-E6JVAt7dA",
            "width": 320
          }
        ],
        "publishedTimeText": "1 hour ago",
        "stats": {
          "views": 19785
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/VJMRcyh-DV8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPOEjUt0vcI-QMFd9KZVhZSo6Kfw",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/VJMRcyh-DV8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJPuX5f_I3lj_Qx23u1wnr6vRC-g",
            "width": 720
          }
        ],
        "title": "DANNY MCBRIDE: Sundae Conversation with Caleb Pressley",
        "videoId": "VJMRcyh-DV8"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/07a71l9MiSQPQkIhmTwCqAdpflUp4nj7Zjf_kZUMedHIUG7cFcMaBbP4RgJcTLlsUg4vZa5ONQ=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@TwoBitDaVinci",
          "channelId": "UCEgYhf84VjXDz-W7a9-rdCQ",
          "title": "Two Bit da Vinci"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1291,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/TKLamhyJ6bE/mqdefault_6s.webp?du=3000&sqp=CP2S4aQG&rs=AOn4CLDrZCzVpISfj45Rf8DdvWzwBhHjtg",
            "width": 320
          }
        ],
        "publishedTimeText": "1 day ago",
        "stats": {
          "views": 5384128
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/TKLamhyJ6bE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2MVfvYD1ZNeBHemRd5m21RhLdbA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/TKLamhyJ6bE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNS6LcEFogA_-g0ELlkryuKgKkpA",
            "width": 720
          }
        ],
        "title": "Oceangate Submarine Disaster - What REALLY Happened",
        "videoId": "TKLamhyJ6bE"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/fyNJHzf8PqsTWpnHksnjbYbrCkmUMcx7T7k2yYh6ANGqOeGuTqLC803FlOmUAZ1WNRkPeJ15yw=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@TheTaleFoundry",
          "channelId": "UCusb0SpT8elBJdbcEJS_l2A",
          "title": "Tale Foundry"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 881,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/Jeb_mSOgrVg/mqdefault_6s.webp?du=3000&sqp=CJCC4aQG&rs=AOn4CLDf7xB1G31GMTa-QXULQ5LsxkWVOQ",
            "width": 320
          }
        ],
        "publishedTimeText": "3 weeks ago",
        "stats": {
          "views": 613076
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/Jeb_mSOgrVg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCcjNlN6k6VJC2wYXkDCsm-xfhhA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/Jeb_mSOgrVg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7KMWcRqMiJgj8Fh8wJh4u4qNamA",
            "width": 720
          }
        ],
        "title": "Why Magic Systems don't feel Magical",
        "videoId": "Jeb_mSOgrVg"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/G4B5EMt-GY_sK87DP0rF7ulPBbbA5XLEhcwtFluEoQLh5WxSModTpT9gkCytQndl7iPXP1HdbA=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@chillimusicrecords",
          "channelId": "UCS4iXNXsvlOHm7TuXLltreg",
          "title": "chilli music"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 10461,
        "movingThumbnails": null,
        "publishedTimeText": "1 year ago",
        "stats": {
          "views": 1088502
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/nhZyPQzx7JI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcLfL1f_355cK2M9akTB62LDmQhw",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/nhZyPQzx7JI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIIrt-vi4tjRh3ZhkCn11woNeTmQ",
            "width": 720
          }
        ],
        "title": "Stop Overthinking - Lofi hip hop mix ~ Stress Relief, Relaxing Music",
        "videoId": "nhZyPQzx7JI"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/PLsX6LIg5JbMJR9v7eTD7nQOPmZN16_X7h_uACw5qeWLAewiNfasZFsxQ48Dn8wZ_4McKUPZSA=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@failarmy",
          "channelId": "UCPDis9pjXuqyI7RYLJ-TTSA",
          "title": "FailArmy"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1282,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/T5lq8jdo3zo/mqdefault_6s.webp?du=3000&sqp=CKb94KQG&rs=AOn4CLAQTtT4YJKNRDz0EqySZniwE4NDHw",
            "width": 320
          }
        ],
        "publishedTimeText": "11 days ago",
        "stats": {
          "views": 2589487
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/T5lq8jdo3zo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8f4PV7yHICIWC413hGOkBiq9X4Q",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/T5lq8jdo3zo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXUZaKYCPXeV6SVNkcAkkCBdGOOw",
            "width": 720
          }
        ],
        "title": "People vs. Nature | CRAZY Outdoor Fails",
        "videoId": "T5lq8jdo3zo"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/jznt9VI9gUCvWG2FIn1toTm6qiVVO7vL9GpsCxMp5fQFV2k3Q59BkvnFLizBVyfCJMRWFH-T=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [],
          "canonicalBaseUrl": "/@trending.machine",
          "channelId": "UCCfpI5ggGDPkD0F0Qfsbdpw",
          "title": "Trending Machine"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1439,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/gHkDoAWBEVE/mqdefault_6s.webp?du=3000&sqp=COzy4KQG&rs=AOn4CLBCOOWwQGiMBsW7_dsZDllzZc_gHg",
            "width": 320
          }
        ],
        "publishedTimeText": "1 month ago",
        "stats": {
          "views": 1200505
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/gHkDoAWBEVE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFXZnrEvAMFa1QihwVlSZdD4qeZQ",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/gHkDoAWBEVE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQAcwXOexYLZP5wPkhuxL9aLDKhg",
            "width": 720
          }
        ],
        "title": "Ingenious Construction Workers That Are At Another Level",
        "videoId": "gHkDoAWBEVE"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/A4qcoZXhm4761Ubis-_wCbd-lr4f4jpQ85I0WWXMRiwY6qCpsVF-lbhbwvQ1Z7PVcv1ZLdHG_A=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@DALLMYD",
          "channelId": "UCI4fHQkguBNW3SwTqmehzjw",
          "title": "DALLMYD"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1574,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/O-8U08yJlb8/mqdefault_6s.webp?du=3000&sqp=CMGS4aQG&rs=AOn4CLBQmvM6Oj1TwTjNC5ZwJzjFKlQ3-w",
            "width": 320
          }
        ],
        "publishedTimeText": "1 day ago",
        "stats": {
          "views": 2799564
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/O-8U08yJlb8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjCQHAGz4pb9xM_5HfICwCdGb6lA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/O-8U08yJlb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVQ-pWHhjXmOdnMiYjrhiegH7D5Q",
            "width": 720
          }
        ],
        "title": "Titanic Sub Tourism Expedition - Exclusive Footage (My Personal Experience)",
        "videoId": "O-8U08yJlb8"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@FoxNews",
          "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
          "title": "Fox News"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 409,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/xLxtSIDRb3I/mqdefault_6s.webp?du=3000&sqp=CPqP4aQG&rs=AOn4CLBoosXfQ_hMIIFQ0l_U3YJWj_hbeg",
            "width": 320
          }
        ],
        "publishedTimeText": "4 hours ago",
        "stats": {
          "views": 104782
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/xLxtSIDRb3I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwziB0o23wVZucoNaH0gr1o6x3Eg",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/xLxtSIDRb3I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0zloUwherFESl6gDGiJyShp_cUw",
            "width": 720
          }
        ],
        "title": "What does attempted rebellion mean for Putin and Russia?",
        "videoId": "xLxtSIDRb3I"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/YwbGiLy1K8KEfOLkfvv54joOpO9jCvOVhihSUoXqCrDbgMt7iqldLmU8tCXhAWCd_BUGxMp48Q=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@Michou",
          "channelId": "UCo3i0nUzZjjLuM7VjAVz4zA",
          "title": "Michou"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 2642,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/8njvFXxJ4-E/mqdefault_6s.webp?du=3000&sqp=COOq4aQG&rs=AOn4CLD6GSrbC7VOPQY091JrtdcGyF301Q",
            "width": 320
          }
        ],
        "publishedTimeText": "5 hours ago",
        "stats": {
          "views": 487275
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/8njvFXxJ4-E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC89GCmpheIVYG_iS7RThjx2WhrA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/8njvFXxJ4-E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_AxvPE9YA7lZ1JUgPB-9Ob0CjbA",
            "width": 720
          }
        ],
        "title": "AMONG US ÉDITION IRL ! (en VR c’est incrrr)",
        "videoId": "8njvFXxJ4-E"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqMbB7thQWDekx6oHcR-KljJ0YVeZitql2KGuCBWGA=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@montanablack",
          "channelId": "UCpAMOlA_0hFXopIxMq8ar0w",
          "title": "MontanaBlack"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1027,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/83RS22s7zR0/mqdefault_6s.webp?du=3000&sqp=CJaJ4aQG&rs=AOn4CLBtwhkUsQkeaTk3vrSjCFKnR2rY8Q",
            "width": 320
          }
        ],
        "publishedTimeText": "7 hours ago",
        "stats": {
          "views": 431936
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/83RS22s7zR0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOfexiV-3i_jjNofrpcSiQiit3JQ",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/83RS22s7zR0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjCvsh-xLya0rx5u_VAb3hherjFw",
            "width": 720
          }
        ],
        "title": "OMA FÄHRT 640 PS Lamborghini | MontanaBlack",
        "videoId": "83RS22s7zR0"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/IJ5VDWfTDpbTa21o7Q9eDQYQBerRakTYHcnnZczHcaDo58hcw36AnB0_NQtfzUdQjrs7oNlaNG0=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@TheOffice",
          "channelId": "UCa90xqK2odw1KV5wHU9WRhg",
          "title": "The Office"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1099,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/_5IareL3rac/mqdefault_6s.webp?du=3000&sqp=CMWm4aQG&rs=AOn4CLAPdxP9I7wNpgXm45BXf4obFY8-Dw",
            "width": 320
          }
        ],
        "publishedTimeText": "2 days ago",
        "stats": {
          "views": 266501
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/_5IareL3rac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNlhYX_rHUNSRXvmEWRqEkl8MWHQ",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/_5IareL3rac/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCheh2I0F1O5D2Jirich_FYif5EbA",
            "width": 720
          }
        ],
        "title": "The Top 5 Running Jokes in The Office - The Office US",
        "videoId": "_5IareL3rac"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqNRr7IEdQ7TplsO8BG-KjG19aCcCpVjiV9l36-9lQ=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@MrBeast",
          "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
          "title": "MrBeast"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 740,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/1WEAJ-DFkHE/mqdefault_6s.webp?du=3000&sqp=CIKJ4aQG&rs=AOn4CLAOmF5Yxm-SqOaGqN8_KuDC-zlm0g",
            "width": 320
          }
        ],
        "publishedTimeText": "2 months ago",
        "stats": {
          "views": 194875600
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzxK8xDY04GL979K4ku5jqpJMYYQ",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/1WEAJ-DFkHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZ4Hx7zYnhUqblvyp0xk7Y1WddPQ",
            "width": 720
          }
        ],
        "title": "$1 vs $500,000 Plane Ticket!",
        "videoId": "1WEAJ-DFkHE"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqOZ_3sbsII4mj0bqTI8c5_jlp4aoTv78iIokuRtNA=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@BetaSquad",
          "channelId": "UCxOzbkk0bdVl6-tH1Fcajfg",
          "title": "Beta Squad"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1407,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/6iNEruSxWVg/mqdefault_6s.webp?du=3000&sqp=CJim4aQG&rs=AOn4CLDv0dfFXXF5FjrT00pVHHnR1AYQmw",
            "width": 320
          }
        ],
        "publishedTimeText": "18 hours ago",
        "stats": {
          "views": 1395151
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/6iNEruSxWVg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC33jg8p9Wohahh_tCCrW09xHm-Rg",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/6iNEruSxWVg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4se9urOBFTupM1OK2OKmtJdmo8A",
            "width": 720
          }
        ],
        "title": "6 Australians vs 1 Secret Fake Australian",
        "videoId": "6iNEruSxWVg"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/Q26T3a8aWgzNfu7H6akx8N_OXwcRuWlJFTgxMwuDYmn4uqaZ0mYqMP76UE2_KrPrm4NT5PRh3g=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@Aitelly",
          "channelId": "UCBjr2QgkUNToRbwVecMgX3Q",
          "title": "AiTelly"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 436,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/98uLNUCz6r0/mqdefault_6s.webp?du=3000&sqp=CMGn4aQG&rs=AOn4CLDMSDQr68y6zMrBnfF3pz5zG1wSiQ",
            "width": 320
          }
        ],
        "publishedTimeText": "1 day ago",
        "stats": {
          "views": 965905
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/98uLNUCz6r0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZxjVhP-NSFMkHbOXHwYQ89D9NUw",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/98uLNUCz6r0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxoqX8J3Vm6JWnCnZCJTq5qDLBuQ",
            "width": 720
          }
        ],
        "title": "Ocean Gate How it Works | Titan Submersible Submarine | Titanic Ship Wreck #3d Animations",
        "videoId": "98uLNUCz6r0"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqOGCPiM415jwphiVNNvsR6XhxE-b7SYa-AlIlUwfg=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [],
          "canonicalBaseUrl": "/@redazioneautomoto",
          "channelId": "UCRDjY_6yCZ8lH899DPTsE9A",
          "title": "Automoto.it"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1714,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/9JZrNRjuJ_4/mqdefault_6s.webp?du=3000&sqp=CPSV4aQG&rs=AOn4CLDtvkO2MWoHivIFWXdQd6FEKbt_kQ",
            "width": 320
          }
        ],
        "publishedTimeText": "6 hours ago",
        "stats": {
          "views": 7936
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/9JZrNRjuJ_4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQHi7cSyb7sEBnlWzJpad_wf3-uQ",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/9JZrNRjuJ_4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6kxCZsY4d0SO3cwXLkbJmzeLK1Q",
            "width": 720
          }
        ],
        "title": "Land Rover DEFENDER V8 (col compressore IMPENNA)| PROVA STRUMENTALE - PRO e CONTRO",
        "videoId": "9JZrNRjuJ_4"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/y_esGAQOhX4rTpWvrALErAJlFbm_2TIVrvcVfcZny7TuA8dJZgOQcC6KRfd_J5hljFe-foYXj9U=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@BBCNews",
          "channelId": "UC16niRr50-MSBwiO3YDb3RA",
          "title": "BBC News"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1050,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/kEYiXE7OgwY/mqdefault_6s.webp?du=3000&sqp=CP6T4aQG&rs=AOn4CLB2CsELqv6NAYWXkF-qv1sYmQa1fQ",
            "width": 320
          }
        ],
        "publishedTimeText": "5 hours ago",
        "stats": {
          "views": 685162
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/kEYiXE7OgwY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkTfOaslQyOfJOEkwDYa9DEBWmrA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/kEYiXE7OgwY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKMBn-biMV5PK6eIe-zEofmPczsQ",
            "width": 720
          }
        ],
        "title": "24 hours of chaos in Russia and Ukraine war frontline report - BBC News",
        "videoId": "kEYiXE7OgwY"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqMWwh-aM-VoqNhQo-dV_0VVzDkPiOJ2zzNNjS64Jw=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@OrientalPearl",
          "channelId": "UCAEQl0BbYrPyTnsWVBJuIqQ",
          "title": "Oriental Pearl"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 541,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/3C0BdIn6Hdo/mqdefault_6s.webp?du=3000&sqp=CN6d4aQG&rs=AOn4CLC6KN9i6SnVvqLBgySJNWFMW2WaUA",
            "width": 320
          }
        ],
        "publishedTimeText": "1 year ago",
        "stats": {
          "views": 42050722
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/3C0BdIn6Hdo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFbkBk_rgKDE9AmXOY3wHyvXM5RA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/3C0BdIn6Hdo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6ZPcJ4CtUIlzI7tTY08YRY_AOgQ",
            "width": 720
          }
        ],
        "title": "Catching People Talking About Me in Foreign Languages... They don't know I Understood Everything",
        "videoId": "3C0BdIn6Hdo"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqPWtdaTMqTeZcBVbjyQXD7Oc-Dhw-8rhFwIFd8Zmg=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@WillTennyson",
          "channelId": "UCB2wtYpfbCpYDc5TeTwuqFA",
          "title": "Will Tennyson"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1138,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/J5OOz1hkXwA/mqdefault_6s.webp?du=3000&sqp=CMCQ4aQG&rs=AOn4CLCpWdQLTBdHYK5AA2LGK3kfh3plFQ",
            "width": 320
          }
        ],
        "publishedTimeText": "3 days ago",
        "stats": {
          "views": 1188107
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/J5OOz1hkXwA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyn-uGIlPJGEf6zr0kz1-BMZvOng",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/J5OOz1hkXwA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb7_mUFDUkh8lPm5bZdZwTGemZGQ",
            "width": 720
          }
        ],
        "title": "The World's Most Expensive Gym Membership ($30k/year)",
        "videoId": "J5OOz1hkXwA"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqMEKXnRlNCz8XRgGKOJm_h4Xi6u7EDi4YFvXIT3YA=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@Sword4000",
          "channelId": "UCqt4mmAqLmH-AwXz31URJsw",
          "title": "Sword4000"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 4756,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/9sL3rNofxO4/mqdefault_6s.webp?du=3000&sqp=CKaI4aQG&rs=AOn4CLDwryKN4eLqntWSFStZ3fUzRBKrOg",
            "width": 320
          }
        ],
        "publishedTimeText": "2 weeks ago",
        "stats": {
          "views": 2118748
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/9sL3rNofxO4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy7ffvxormIpifjEbQLbXlJoCXfw",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/9sL3rNofxO4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiKs6itEfAGwom4_bdkCrutzHAhg",
            "width": 720
          }
        ],
        "title": "100 Players Simulate THE HUNGER GAMES in Minecraft!",
        "videoId": "9sL3rNofxO4"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/Es-023P31xgA4PXcalywO3Y91vnT_GfFmO88nws-4tL6P7KyemDV93Y3REGioiQYgsmR5Dgnmw=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@JiDion",
          "channelId": "UCvj3hNvwrEgTRkeut7_cBAQ",
          "title": "JiDion"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 1577,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/NIXwhmLcbZ8/mqdefault_6s.webp?du=3000&sqp=CKmA4aQG&rs=AOn4CLAf57-JPCFFqVdHbvaZ9Gtun9GYww",
            "width": 320
          }
        ],
        "publishedTimeText": "4 weeks ago",
        "stats": {
          "views": 10458634
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/NIXwhmLcbZ8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuPhvKMghECp4KslWvaYQ--vtgFA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/NIXwhmLcbZ8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3tVZE0jFIJ8yQUFbs1IY4kYX4CQ",
            "width": 720
          }
        ],
        "title": "He Came to Meet A 13 Year Old, Meets Cops Instead!",
        "videoId": "NIXwhmLcbZ8"
      }
    },
    {
      "type": "video",
      "video": {
        "author": {
          "avatar": [
            {
              "height": 68,
              "url": "https://yt3.ggpht.com/ytc/AGIKgqOPi2mqwkBR4oZ7mxcCv0d9LeOG2HA4K31FIw6R2g=s68-c-k-c0x00ffffff-no-rj",
              "width": 68
            }
          ],
          "badges": [
            {
              "text": "Verified",
              "type": "VERIFIED_CHANNEL"
            }
          ],
          "canonicalBaseUrl": "/@OutdoorBoys",
          "channelId": "UCfpCQ89W9wjkHc8J_6eTbBg",
          "title": "Outdoor Boys"
        },
        "badges": [],
        "isLiveNow": false,
        "lengthSeconds": 4023,
        "movingThumbnails": [
          {
            "height": 180,
            "url": "https://i.ytimg.com/an_webp/rxJQXa3jfsA/mqdefault_6s.webp?du=3000&sqp=CICu4aQG&rs=AOn4CLAwbKz85ilP3EQSladH06jq4jr14g",
            "width": 320
          }
        ],
        "publishedTimeText": "1 day ago",
        "stats": {
          "views": 283346
        },
        "thumbnails": [
          {
            "height": 202,
            "url": "https://i.ytimg.com/vi/rxJQXa3jfsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6tXmzGtnksS0UyDlgjk9iZvmpqA",
            "width": 360
          },
          {
            "height": 404,
            "url": "https://i.ytimg.com/vi/rxJQXa3jfsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD31RN8OnTybcrlXWbqLsnjqusiqg",
            "width": 720
          }
        ],
        "title": "8 Days Camping & Building a Bushcraft Survival Shelter with My 5 yr old Son",
        "videoId": "rxJQXa3jfsA"
      }
    }
  ],
  "cursorNext": "NHFtRnNnS1lBeElQUmtWM2FHRjBYM1J2WDNkaGRHTm9HdVFDUTBKb05taG5TazVhTTA1S1pERkJlVlJxWXpWalZYaHpVMWN4TWxGV1duZGpWVTUwV2pCMFNGZEhkM2RYUkU1RFlVWnZlVlp0V21wTmFsWnZXVEJvVDJJeVNYcFZiVnBxWWxaYWRWbFdZelZrVm14WVpERk9TVTFFUlRGVlZsWnVaREpLV1ZKVVZtcFNiV2d5VjFST2ExSkdTa1ppUmtKYVRUSm9ObFp0Y3pGT1ZsRjNVbXRvVUZOSGFIaGFWV1JxV1ZWMGJsRlZSbUZXZWxKQ1VWWmFWMVpGUmtKU2EzQlhVVlZHUTFGVlZtRlNiVkY1WVVkb2ExSnFhM2RaYWtVMVRURnNXVlZ0Y0doUlZVWkRVVlpHUmxGVlJrSlNWVVpDVVZWV1ExRlZaRXRSYTA1Q1VWWk9SazB3U205WGFrcFhXbTFOZVU1WGFHcFRSVFYyV1dwT1UxcHRVa2hQV0VwaFZucFNhRkpZWkhGU1ZGWjZWVEF3ZVZwRVpHWlJWMmhYWXpOb05GSlZiRWxhU0VaeFVrVkdVbUZWVmpOaGExVXhZekZPVGsxdFVUTllNRVp2Vm01T05HVkZWa3BUUjFKNFlXdFNRbFpFV25WVVYxVTFVVEZHU2xOVlpGTG9BUVNhQWhwaWNtOTNjMlV0Wm1WbFpFWkZkMmhoZEY5MGIxOTNZWFJqYUElM0QlM0QmJiZDZ3R3V2tkWFoySlZPVmxXZHlqS3ItR2tCZyUzRCUzRA=="
}
youtubeHomeInteface(result)


function youtubeHomeInteface(result) {
  for (let i = 0; i < result.contents.length; i++) {
    if (result.contents[i].type == "video") {

      const video_container = document.getElementById("video_container");
      const video_container_multiple = document.createElement("div");
      video_container.appendChild(video_container_multiple);


      const banner = document.createElement("div");
      banner.classList.add("banner");
      video_container_multiple.appendChild(banner);

      banner.addEventListener('click', () => {
        document.getElementById("interface_video").classList.add("block")
        handleThumbnailClick(result, i)
      })

      const banner_img = document.createElement("img");
      banner_img.src = result.contents[i].video.thumbnails[0].url;
      banner.appendChild(banner_img);

      banner_img.onmouseover = function () {
        banner_img.src = result.contents[i].video.movingThumbnails[0].url;
      }

      banner_img.onmouseout = function () {
        banner_img.src = result.contents[i].video.thumbnails[0].url;
      }


      const logo = document.createElement("div");
      logo.classList.add("logo");
      video_container_multiple.appendChild(logo);

      const logo_img = document.createElement("img");
      logo_img.src = result.contents[i].video.author.avatar[0].url;
      logo.appendChild(logo_img);

      const logo_title = document.createElement("div");
      logo_title.classList.add("title");
      logo_title.innerText = result.contents[i].video.title;
      logo.appendChild(logo_title);

      const channelName = document.createElement("div");
      channelName.classList.add("channel_name");
      channelName.innerText = result.contents[i].video.author.title;
      video_container_multiple.appendChild(channelName);

      const views = document.createElement("div");
      views.innerText = result.contents[i].video.stats.views;
      views.classList.add("views");
      views.classList.add("channel_name");
      video_container_multiple.appendChild(views);

      const time = document.createElement("li");
      time.classList.add("time");
      time.innerText = result.contents[i].video.publishedTimeText;
      views.appendChild(time);

    }
  }
}

function handleThumbnailClick(videoData, i) {
  document.getElementById("aside_main").classList.add("block");
  document.getElementById("Search-video-container").classList.add("block");

  const section = document.getElementById("section");

  const thumbnailPlaying_videos = document.createElement("div");
  thumbnailPlaying_videos.setAttribute("id", "thumbnailPlaying_videos");
  section.appendChild(thumbnailPlaying_videos);

  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoData.contents[i].video.videoId;
  thumbnailPlaying_videos.appendChild(iframe);

  const title_video_playing = document.createElement("div");
  title_video_playing.classList.add("title_video_playing");
  title_video_playing.innerText = videoData.contents[i].video.title;
  thumbnailPlaying_videos.appendChild(title_video_playing);

  const profile_playing_videos_layer_like_dislike = document.createElement("div");
  thumbnailPlaying_videos.appendChild(profile_playing_videos_layer_like_dislike);
  profile_playing_videos_layer_like_dislike.classList.add("profile_playing_videos_layer_like_dislike");

  const profile_playing_videos = document.createElement("div");
  profile_playing_videos.classList.add("profile_playing_videos");
  profile_playing_videos_layer_like_dislike.appendChild(profile_playing_videos);

  const profile_playing_videos_img = document.createElement("img");
  profile_playing_videos_img.src = videoData.contents[i].video.author.avatar[0].url;
  profile_playing_videos.appendChild(profile_playing_videos_img);

  const playingVideos_Channel_name = document.createElement('div');
  playingVideos_Channel_name.innerHTML = "<b>" + videoData.contents[i].video.author.title + "<b/>";
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
  like_dislike.appendChild(dislike);

  const share = document.createElement("div");
  share.classList.add("share");
  like_dislike_share_row.appendChild(share);

  const shareImg = document.createElement("img");
  shareImg.src = "/svg-export/share.svg";
  share.appendChild(shareImg);

  const share_share = document.createElement("div");
  share_share.innerText = "Share";
  share.appendChild(share_share);
  share_share.classList.add("share_share");

  const download = document.createElement("div");
  download.classList.add("share");
  like_dislike_share_row.appendChild(download);

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
  video_playing_views.innerText = videoData.contents[i].video.stats.views;
  video_playing_views.classList.add("video_playing_views");
  video_playing_views_time.appendChild(video_playing_views);

  const video_playing_upload_time = document.createElement("div");
  video_playing_upload_time.innerText = videoData.contents[i].video.publishedTimeText;
  video_playing_upload_time.classList.add("video_playing_upload_time");
  video_playing_views_time.appendChild(video_playing_upload_time);

  // const videoplaying_descrption = document.createElement("div");
  // if (videoData.items[0].description != null) {
  //   videoplaying_descrption.innerText = lorem100;
  //   videoplaying_descrption.classList.add("videoplaying_descrption");
  //   video_playing_decription.appendChild(videoplaying_descrption);
  // }
  console.log(videoData.contents[i])

  const videoPlaying_comments = document.createElement('div');
  videoPlaying_comments.innerText = "Comments";
  videoPlaying_comments.classList.add("videoPlaying_comments");
  video_playing_decription.appendChild(videoPlaying_comments);

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
}


