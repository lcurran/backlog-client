#Backlog

A single page application to track your game library.

Links:
-   [Deployed app](https://lcurran.github.io/backlog-client/)
-   [Deployed API](https://lcurran-backlog-api.herokuapp.com/)
-   [API repo](https://github.com/lcurran/backlog-api)

##Game Library Scope

## User stories

### Core features

-   Want to be able to create an account
-   Want to be able to manage my account
-   Want to be able to search for games and add them to my library
-   Want to be able to mark games as complete, incomplete
-   Want to be able to remove games from library

### Reach features

-   Want to be able to see my backlog % complete
-   Want to be able to see other peoples libraries
-   Want to be able to rate and review games --> (this would be a new table probs)
-   Want to be able to import my steam library
-   Want to be able to create a user profile


## Homepage ideas

Show rankings for most popular games?
Show rankings for users with the highest % complete?

## SQL Database

###Tables:

-   Users
-   Games
-   Users/Games m:m join table
-   (reach) Reviews table -> Games/Reviews 1:m relationship
-   (reach) Profiles table > 1:1 with users

##Third party APIs:

-   [IGDB API](https://www.igdb.com/api)
-   [Steam API](https://steamcommunity.com/dev)(Future implementation)

##IGDB:

[Third party API](https://www.igdb.com/)

###Fields to request for GET(search):
id, Name, Summary, videos, cover


##Data flow:

User searches for game > GET matching names from IGDB
User selects a game to add > GET to my DB, check by IGDB id if game exists in DB already
IF EXISTS > POST to join table
IF DOES NOT EXIST > GET to IGDB for full information, POST to my games db, POST to join table


##Tools:

-  Unirest.io (gem install unirest)
-  [Steam Condenser gem](https://github.com/koraktor/steam-condenser)
