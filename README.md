# TweeCool Jquery Plugin

[TweeCool](http://www.tweecool.com/) is a free, fast,simple and reliable 

## Step 1

Copy and paste the following script between &#60;head&#62; and &#60;/head&#62;

```
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="http://api.tweecool.com/js/tweecool.min.js"></script>
  <script>
  $(document).ready(function() {
      $('#tweecool').tweecool({
      	//settings
      	 username : 'tweecool', 
         limit : 5	
      });
  });
  </script>
```

## Step 2

Copy and paste the following script between &#60;body&#62; and &#60;/body&#62;

```
<div id="tweecool"></div>
```

## Settings

    username : Your username
    limit  : Number of tweets to show (Default value: 5)
    profile_image :  Show profile image (Default value: true)
    show_time : Show tweet time (Default value: true)
	show_media : Show media (Default value: false)
    show_media_size : Set media size (Default value: thumb)
	show_actions : Show action box such as 'reply', 'retweet' and 'favorite' (Default value: false)
	action_reply_icon : Reply icon, add your HTML tags or ASCII code (Default value: '&crarr;')
	action_retweet_icon : Retweet icon, add your HTML tags or ASCII code (Default value: &prop;)
	action_favorite_icon : Favorite icon, add your HTML tags or ASCII code (Default value: '&#9733;')
	profile_img_url : If set to 'tweet' the profile image will have tweet URL, otherwise it will be the user's profile URL (Default value: profile)
	show_retweeted_text : if set to 'true', this will show the original retweeted text and avoid any truncated text (Default value: false)
