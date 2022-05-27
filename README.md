# Spotify Top Songs of 2010 - 2019 API

<div align="center">

# Spotify top Songs
***
![GitHub language count](https://img.shields.io/github/languages/count/devEdu-web/spotify-top-songs)
![license](https://img.shields.io/badge/license-MIT-green)
![javascript](https://img.shields.io/github/languages/top/devEdu-web/spotify-top-songs)

</div>

***

## About
This API was solely made to go over the basic concepts of SQL and MySQL. It uses a dataset from Kaggle that lists the top 100 songs of 2010-2019.

## Getting Started
First of all, let's sort out a few some things about how this project was made so we can understand it fully. It's worth saying that some properties returned in the response might confuse some, see a table explaining each property [here](./properties.md)

### Requests result limit
The default limit for the requests is 20 results per page. Because of performance issues, **this value is immutable!**

### Pagination
Since the results are limited to 20 per request. We use pagination so you can navigate through the pages using pages. You can specify the page you want in the request parameters, you don't, the value default is 1.

### Genders
The API allow you to request musics of an specific gender. You can see a list of all genders [here](./genders.md).

***

## Endpoints

* `/api/get/all` returns all the songs. 
  * Query parameters:
    * page (optional)
* `/api/get/genre` returns the songs of an specific gender
  * Query parameters:
    * page (optional)
    * genre (required)
* `/api/get/year_released` returns the songs released on the specified year
  * Query parameters:
    * page (optional)
    * year (required)
* `/api/get/artist` returns the songs of the specified artist
  * Query parameters:
    * page (optional)
    * artist (required)
* `/api/get/artist_type` returns the songs of the specified artist type (Duo - Solo - Band/Group)
  * Query parameters;
    * page (optional)
    * type (requires)
* `/api/get/danceability` returns the musics ordered by how easy is to dance it. Descending order.
  * Query parameters:
    * page (optional)
* `/api/get/energy` returns the musics ordered by how energetic the music is. Descending order.
  * Query Parameters:
    * page (optional)