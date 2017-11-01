//var express = require('express');
//var path = require('path');
var app = express();
//var request = require('request');
//var cheerio = require('cheerio');
//var fs = require('fs');
var port = 8080;

var url = "https://techcrunch.com/2017/08/21/y-combinator-summer-2017/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-entry');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.techradar.com/reviews/snes-classic-mini"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('#article-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.bloomberg.com/news/articles/2017-08-22/trump-to-visit-border-agents-in-arizona-call-for-wall-funding"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.body-copy');
	var articleText = article.text();

	$('.post').html("<p>" + articleText + "</p>");

	console.log(articleText);
})

var url = "https://www.cnbc.com/2017/08/22/why-investors-like-warren-buffett-are-investing-in-electricity-transmission.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.story');
	var articleText = article.text();

	console.log(articleText);
})

var url = "hhttps://www.buzzfeed.com/kimberleydadds/the-worst-tv-boyfriends-of-all-time?utm_term=.ugDyAoYJ0d#.skolvzdL8E"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.buzz');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://ew.com/tv/2017/08/22/this-is-us-sterling-k-brown-emmys-fyc/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.dailymail.co.uk/news/article-4812254/Seven-police-storm-73-year-old-s-house-seize-dog.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("div[itemprop='articleBody']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.ign.com/articles/2017/08/22/gamescom-2017-linksys-announces-new-router-that-prioritize-games"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('#article-content');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.polygon.com/2017/6/27/15875448/mini-snes-classic-pre-order-amazon-walmart-best-buy"
request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.c-entry-content');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.aljazeera.com/news/2017/08/iraqi-forces-gain-ground-isil-tal-afar-offensive-170822132930986.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('#article-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.bbc.co.uk/news/world-europe-41010469"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.story-body__inner');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.independent.co.uk/news/world/europe/barcelona-terror-attack-suspects-latest-imam-dead-blame-larger-atrocity-threat-a7906781.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.text-wrapper');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.cnn.com/2017/08/22/us/execution-missouri-marcellus-williams/index.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.l-container');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.theguardian.com/world/2017/aug/22/spain-terror-suspect-mohamed-houli-tells-court-cell-planning-bigger-attack"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("div[itemprop='articleBody']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.nytimes.com/2017/08/22/world/asia/afghan-victory-trump-plan.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.story-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.reuters.com/article/us-northkorea-nuclear-sanctions-idUSKCN1B21OG"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.ArticleBody_body_2ECha');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.washingtonpost.com/politics/as-trump-heads-to-arizona-gop-leaders-want-him-out-of-jeff-flakes-senate-race/2017/08/21/cee1c59a-8454-11e7-ab27-1a21a8e006ab_story.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("article[itemprop='articleBody']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://time.com/4910380/donald-trump-afghanistan-reversal/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("article[class='row']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.mtv.com/news/3031736/vma-2017-song-of-summer-nominees/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("section[class='entry-content']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.newscientist.com/article/2144879-why-arent-we-testing-whether-planes-can-survive-a-drone-crash/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-content');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.breitbart.com/big-government/2017/08/22/trumps-merkel-moment-west-wing-dems-plan-keep-daca-will-increase-illegal-immigration-pull-factors/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.entry-content');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://news.nationalgeographic.com/2017/08/whip-scorpions-arachnids-cannibalism.html"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.parsys.content');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.bbc.co.uk/sport/football/40997756"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('#story-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.engadget.com/2017/08/22/amazon-alexa/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-text');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.foxsports.com/watch/undisputed/video/1029774915665"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-content-container');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.espn.com/nfl/story/_/id/20406332/ron-rivera-carolina-panthers-want-cam-newton-adapt-new-offense-nfl-2017"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.article-body');
	var articleText = article.text();

	console.log(articleText);
})

var url = "http://www.sportbible.com/football/transfers-ac-milan-and-inter-milan-secure-another-impressive-summer-signing-20170822"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $("div[itemprop='articleBody']");
	var articleText = article.text();

	console.log(articleText);
})

var url = "https://www.gruenderszene.de/allgemein/gifs-ipo-boersengang-anleitung"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var article = $('.content_txt');
	var articleText = article.text();

	console.log(articleText);
})

app.listen(port);
console.log('The app is listening on Server ' + port);

