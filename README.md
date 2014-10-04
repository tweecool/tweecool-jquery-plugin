# TweeCool Jquery Plugin

[TweeCool](http://www.tweecool.com/) is a free, fast,simple and reliable 

## Step 1

Copy and paste the following script between <header> and </header>

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

Copy and paste the following script between <body> and </body>

```
<div id="tweecool"></div>
```

## Settings

    username : Your username
    limit  : Number of tweets to show (Default value: 5)
    profile_image :  Show profile image (Default value: true)
    show_time : Show tweet time (Default value: true)
	show_media - Show media (Default value: false)
    show_media_size - Set media size (Default value: thumb)

