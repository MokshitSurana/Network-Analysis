The One Fact Foundation would like the students at the hackathon to use the data
we have collected to create the https://parrot.reports website to create useful
analytical tools and extensions to study coordinated networks, toxic speech,
conversations, accounts, and misinformation on social networks. You are not
limited to using this dataset and can combine it with external datasets on factchecks, news credibility scores, other news data collections and others available on
dataset aggregators including Google.

----------
Stage 1: Perform network analysis and visualize the kinds of coordinated
communities that exist with respect to what kind of topics and content these
coordinated communities tend to discuss.
What is ‘coordination’? The current Parrot Report site uses counts of any two
accounts, X and Y, sharing the same article URLs, and checks how frequently they
share the same article within a 5, 10, 15, … 60 second window. If the window falls
within 15 seconds, then it checks if these accounts have shared the same article
URL multiple times in the past, within very short periods of time. If accounts X and Y
share an article URL more than 5 different times, within a certain time limit of each
other, we consider it to be ‘coordinated inauthentic behavior’ because both
accounts may be promoting the same article to get it more visibility on Twitter.

----------
Stage 2: Estimate the Harms from Coordinated Behavior: We would be interested
in any application that can automate analysis of the intentions or agenda of such
coordinated networks. What is possible to understand from the data is the trend of
sharing specific articles relating to some controversial topics. There are specific
behaviors of interest that can be measured, such as accounts promoting some
hashtags, accounts targeting some political personality, or any other entity with a
social media presence, accounts using hate speech and harassment to troll some
other accounts, and so on.

Original PS: https://docs.google.com/document/d/1FSVBhtfw9p8ChREA0ANN4gSav6GntZvgwnyynv2zcfQ/edit

## Features of our Website
- Graph of Coordinated Networks
We connect those people as nodes who have posted same articles after one another within a certain time limit and have done this in the past aswell. We refer this to as "coordinated inauthentic behavior"

- Agenda Detection
We also have tried to detect the agenda from the coordinated network of people using keyword extraction

- Propaganda Detection
We have also detected the whole propaganda of these networks. There are a total 14 different propagandas so this was a multi-class classification problem.

- Fake News Detection
We have applied sentiment analysis on the articles and have identified if they are fake or not.

- Word Cloud and Recommendation System
We have implemented a recommendation system and have also generated a image of the most important keywords in the whole article 

## ScreenShots

- Home Page
![Home Page](./screenshots/homescreen.jpeg)

- Featured Articles
![Featured Aricles](./screenshots/featured_articles.jpeg)

- Word Cloud and Recommended Articles
![Word Cloud](./screenshots/wordcloud.jpeg)

- Coordinated Networks
![Coordinated Networks](./screenshots/Graph_of_coordinated_behaviour.jpeg)

- Propaganda Detection
![Propaganda Detection](./screenshots/propaganda_detection.jpeg)

- Fake News Detection
![Fake News Detection](./screenshots/fake_news.jpeg)

- Agenda of the whole propaganda
![Agenda](./screenshots/agenda.jpeg)

## Developed By:

- Archit Rathod
![Linkedin](https://www.linkedin.com/in/archit-rathod/)

- Mokshit Surana
![Linkedin](https://www.linkedin.com/in/gigaMoksh/)

- Nahush Patil
![Linkedin](https://www.linkedin.com/in/nahush-patil-29a495221/)

- Omkar Bhostekar
![Linkedin](https://www.linkedin.com/in/omkar-bhostekar/)

