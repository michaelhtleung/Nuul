# How to run locally:
Data Science
- create a synthetic data with "python3 synthetic_data_generator.py"
- train and score a decision tree classifier with "python3 model.py"

Database
- start the database "sudo service mongod start"
- stop the database "sudo service mongod stop"

Webserver
- nodemon app.js

Client 
- cd client && npm run start

# Domain Knowledge
## Common Smoking Triggers
- right after finishing a meal
- right before sleeping
- intermission break
- needing a break from work
- driving
- checking texts/emails
- drinking morning coffee/tea
- feeling bored, sad, angry, stresed, or happy
- smells that you associate with your smoking routine

## Input Features in an Ideal World with Infinite Data
- [x] time of day - easily tracked by sensor
- [x] location - easily tracked by PWA
- craving intensity - inconvenient for user to input on PWA every smoking session
- current activity - ditto
- others nearby - ditto
- current emotions - ditto

## General Strategy to Quit Smoking
- break your common smoking habits by changing up your routine or replacing them with new habits

## Push Notification Messages
### Morning
- "Shake up your morning routine by stepping outside for fresh air!"
- "Switch it your morning coffee with decaf or tea!"

### Work
- "Need a break from work? Stand up and stretch."

## Outside of Work
- "Take a moment for some deep breaths and be present."
- "Listen to calm, soothing  music to relax."

### After a Meal
- "Try brushing your teeth right after you eat!"
- "Feeling bored? Chew some gum!"

Source: https://www.webmd.com/smoking-cessation/find-smoking-triggers#1
