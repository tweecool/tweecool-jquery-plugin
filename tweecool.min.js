/*Name : TweeCool
 *version: 1.0 
 *Description: get the latest tweets from twitter.
 *Website: www.tweecool.com
 *Licence: no licence, feel free to do whatever you want.
 * Author: TweeCool
 */
(function(b){b.fn.extend({tweecool:function(f){f=b.extend({username:"tweecool",limit:5,profile_image:!0,show_time:!0},f);return this.each(function(){var d=f,e=b(this),g=b("<ul>").appendTo(e),h=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;b.getJSON("http://api.tweecool.com/?screenname="+d.username+"&count="+d.limit,function(c){if(c.errors||null==c)return e.html("No tweets available."),!1;var f=d.profile_image?'<a href="https://twitter.com/'+d.username+'" target="_blank"><img src="'+
c.user.profile_image_url+'" alt="'+d.username+'" /></a>':"";b.each(c.tweets,function(b,c){var a;if(d.show_time){var e=c.created_at;a=Date.parse(new Date);e=Date.parse(e);a=(a-e)/1E3;a=1<a&&60>a?Math.round(a/1)+" seconds ago":60<=a&&3600>a?Math.round(a/60)+" minutes ago":3600<=a&&86400>a?Math.round(a/3600)+" hours ago":86400<=a&&604800>a?Math.round(a/86400)+" days ago":604800<=a&&2592E3>a?Math.round(a/604800)+" weeks ago":2592E3<=a&&31536E3>a?Math.round(a/2592E3)+" months ago":"over a year ago"}else a=
"";g.append("<li>"+f+'<div class="tweets_txt">'+c.text.replace(h,'<a href="$1" target="_blank">$1</a>')+" <span>"+a+"</span></div></li>")})}).fail(function(c,b,d){e.html("No tweets available")})})}})})(jQuery);