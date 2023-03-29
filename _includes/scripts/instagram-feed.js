var accessToken = 'IGQVJXZAl83N28yS0hfYmsyRHp4eTYzaXpoUE0yUkd2U0VaV2JNTkRWek1XSnAwU2UyMHZALMVRIdWxiWDR1dFFFSkthQ1lCbjBsZAWN5cF9pa2Iwbm5pcmxSTElpWlhFcDFmMjltNXNhU3k3bk5pemtTVQZDZD';

// Make API request to retrieve recent media
$.get('https://graph.instagram.com/me/media?fields=media_url,thumbnail_url,caption&access_token=' + accessToken, function(data) {
  // Process the data
  data.data.forEach(function(post) {
    // Do something with the data
  });
});

fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${ACCESS_TOKEN}`)
  .then(response => response.json())
  .then(data => {
    // Process the data here
  });
  