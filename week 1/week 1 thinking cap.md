# Week 1 Thinking cap assignment
## Screenshot
<img src="images/pic.png" width="1000px">

## Link
https://anvaka.github.io/map-of-reddit/?x=256728.4472576459&y=687761.3372221619&z=285212.6059757122

## Site Agenda
This site is an interactive map of reddit based on 176 million comments. It aims to visualize reddit by categorizing subreddits it into countries, and representing each subreddit as a city. The entire map is zoomable and interactive, where "visiting" any city will reveal the top comments of the respective subreddit.

## Why It Speaks to Me
I very much enjoy visual representation of non tangible data. The notion of data being visualized into a spacial medium where we can get a physical sense of where data may be "located", how data relates to other sets of data, and what geographical form data ultimately takes on the map is exciting, and serves to contexualize the online communities and technologies we interact with everyday. 

For this reason, a visualization of an entire internet community was very impressive to me. For both good and for bad, we are able to see what communities exist within Reddit and how they are related to each other. The fact that many of these subreddits now have a space on a map, seems to have apmlified the notion of community.

## How does the mapping work, and does it work?
The subreddits are categorized by computing the binary distances between them, using the Jaccard index, and then layed out using a clusturing algorithm.
Since the resulting map is represented as an SVG, it can be zoomed in and out and be completely interactive. 

I think that the website works fairly well. The map is not laggy and provides very intuitive representation of how different subreddits are related to each other, while also providing active updates of comments in every subreddit. It may also be a good representation as to where a user may belong on the map, based on which subreddits they are active in. 

Some crticisms are that it is not clear how the user developed the specific borders and shapes of countries, causing it to lack some conceptual depth. 
The names of countries and cities are also written in black font, so it is hard to read.

## Technologies
It seems that the user has made this map all by himself. I don't have the technical expertise to know exactly how he did it, but the user has stated that they generated the SVG map on their own custom made WebGL Renderer. The renderer allows for smoother and more intuitive navigation of the map.

## Changes
From a stylistic point of view I would change the font to be more readable.
I would also consider putting on filters so that children who would like to explore the map cannot access non age appropriate communities.
