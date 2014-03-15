# TweeCool Jquery Plugin

TweeCool is a free web application that helps you display your Twitter feeds on your website. 

## Why use TweeCool for your website?

* No Twitter authentication Oath needed.
* Easy to use - No programming skills needed.
* Fast response - We use a smart cache system to speed up your requests.
* Reliable service - You won't be affected if twitter changes its API, your tweets won't stop working.

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

    ```username ``` - Your username
    ```limit ``` - Number of tweets to show (Default value set to 5)
    ```profile_image ``` - Show profile image (Default value set to true)
    ```show_time ``` - Show tweet time (Default value set to true)

