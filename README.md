# Semester-Project-2-HansiFED

*for this README i've kept the site in DarkMode*

## Welcome to Bidly!

![image](https://github.com/user-attachments/assets/1d767d3e-5d06-4e2d-9bd3-2ad6091adb6e)

Bidly is my latest project at Noroff (Semester Project 2) where our task was to build an auction site with some required user stories.
(for more details see repo - pull requests with image attached)

Bidly offers a smooth and seamless experience navigating the site, where you can enable dark mode, view bids on a listing, create your own listings and check out each others profiles. 

## Profile page:
![image](https://github.com/user-attachments/assets/8a3bc6e1-4e50-444c-87d7-ecc2d78b41c8)

For the profile page I went with a clean look while at the same time keeping it nice and easy to keep track of. If logged in you can easily press a button to edit your user (bio, banner and profile picture).
This will create a pop up form that handles your data and sends them off to the Noroff API. The profile page also dynamically updates and fetches all the active listings, won bids and current bids for any given profile.

## Listing Page: 
![image](https://github.com/user-attachments/assets/7a8f4ab9-dd73-4253-a83f-36b601685f24)
For the listing page I went with something unbothered by alot of clutter, but at the same time keeping it informative and easy to understand. 
- If you are logged in you are able to see all the bids made on a listing. If you are an unregistered user, you'll be prompted to log in if you want
to view the bids for this listing, though you are able to see the current price.
- As a logged in user you are also able to directly click the bidders to go to their profiles. If you try to access a user when you are not logged in, you will be prompted and redirected back to the main landing page.



## Search Page: 
![image](https://github.com/user-attachments/assets/417af9de-0cdb-4917-870d-6245dcb98f4f)
For the search page I wanted the user list to be a bit more 'lively' in a sense. Whilst at the same time, like with the other pages keeping everything nice and tidy without too much clutter. In the screenshot provided above you see the search page with the search for "dog" and the slide in menu toggled. 
All the users and listings are also clickable. But again, like with the previous pages, you are not able to go to a users page without being a registered user yourself. 



## Create listing page: 
![image](https://github.com/user-attachments/assets/d29fdddb-a862-41f0-81fa-f72dff310ba7)
At the creation page for listings, I also did not want too many distractions. Here you'll find a few input fields with the ability to generate a few more with the press of the plus button. 
This plus button generates more url boxes for the user to put more 'media' or images in. You also have some validation happening behind the scenes. 
For example if the user tries to create a listing for a date that's already been or from more than a year from todays date, the user will be prompted with a red text explaining the error. If all goes well, a loading bar will appear under the create button, indicating that its working. 



## Login / Register Page: 
![image](https://github.com/user-attachments/assets/660aa095-36cc-4482-83eb-f67aac79a555)
For the sake of keeping this readme as brief yet informative as possible I'll only be including one of the screenshots of login / register pages as they are very similar structure wise, with the small difference being a blue login button and one less input field. Here the input data is handled, and if the response from the API is ok, a user is created and instantly logged in. No need to redirect to the login page to write in the information that was 'greenlighted' by the register function. Like earlier, if there is an error, the user is presented with this in the form of a red text under the register button. 




# How to run the project:

## Installing dependencies and running the project

- When you first clone the repo and open it in VSCode its important that you run ```npm install``` in the terminal.

- Once you have done that you can now run ```npm build``` in the terminal which will build the project for you.

- Then, if you'd like to make changes or see the project in real time you will have to run ```npm run dev``` to open up a 'liveserver' where all the possible changes to the project you do will be displayed in real time. 
