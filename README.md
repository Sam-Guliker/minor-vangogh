# Masterpiece - van Gogh
`this` is a personal tour. The user can make his/her own decisions in the app.
With the user in control, you've got your own tour!

# Table of Content
* [Getting started](#getting-started)
* [Concept](#concept)
* [Features](#features)
* [Stakeholders](#stakeholders)
* [User Scenario](#user-scenario)
* [App decisions](app-decisions)
* [Checklist](#checklist)
* [License](#license)

# Getting Started
How to get started with this project:
1.  Clone the repo with `git clone https://github.com/Sam-Guliker/minor-vangogh` or download it from github
2.  Run `npm install` or `yarn` to install the dependencies
3.  Run `npm run dev` to start the server
4.  Go to [http://localhost:3000/](http://localhost:3000/)

# Introduction
__Assignment description__:  
Develop an interface that allows visitors to the museum to visit  (with multimedia tour) by choosing different themes and presenting the results


__Final concept__:  
By swiping on the on the interface the user can make decisions to
create his/her own tour. The decisions are based on the theme's within the museum. When they start the tour, the map will guide the user to his or her themes and paintings. 

# Dependencies
*   [x] ReactJS
*   [x] Service Worker
*   [x] GZIP
*   [x] SASS
*   [x] ESLinter
*   [x] Prettier
*   [x] Minify Uglify
*   [x] GSAP
*   [x] Gulp

# Features
- User can make his/her own decisions
- The user can walk the tour (partial)
- Offline availabiliy

# Users
The avarage age of the visitors of the Van Gogh museum is 31.  
50% from their users are between 18-30 years old. The museum is very populair among tourists. They have visitors from all over the world. 

# User Scenario
<b>User scenario personalisation</b><br>
Ryan arrives at the gogh museum. This was an impulsive idea. He doesn't feel like seeing everything and spending hours in the museum. However, he would like to have some more information about the paintings, so he gets a device for the mutimedia tour. He wants to find a suitable tour quickly with interesting topics that won't take too long.

<b>User scenario tour</b><br>
Fransisco & Dafne are from Italy. They go to the van gogh museum to admire his work. They want to participate in the multimedia tour. They pick up a device at the desk and start the personalization tour. After selecting all themes, they start the tour. On the screen they see their position on the map. The map also shows the first painting of the tour. They know where to go to find the painting.

# Testing

## A/B Usability test classmates
We both made a prototype. Fenna made prototype A and Sam prototype B. Prototype B was questionnaire. After the questionaire the tour was generated for you based on your answers.  With prototype A, you could view and add your own themes to the tour.

Findings
The following came out of the test results: 
- People who want to make a personalised tour take the time to do so
- The start button of prototype A was too clogged up
- People felt that the questionnaire was not personal and that it was vague
- People did not bother to go to the info page of the theme

Design Choices
From these test results we decided to make different elements of the prototypes and to make a nice fusion of them.

The user has to make a choice for each theme. He can do this to swip left or right. The info of the theme is on the same page instead of individually. The start button has been made clearer. Both prototypes also had a timer. We used the overview page of prototype A.

## Usability test museumplein
We tested the app with (real) people at museumplein. 

<b>Conclusions</b>  
1. On the text field the swipe function was removed because it also had a click function. However, all test persons tried to swip over the text field and therefore the swipe didn't succeed. 

    <b>Improvement: </b>We have made sure that you can also swipe over the text field

2. The test persons want to have more information about the themes.

    <b>Improvement: </b>We decided to leave the text field unfolded by default.  

3. The test subjects were not interested in the overview page this is because they are confident about the choices they made. This was the last step before they could start the tour. 

    <b>Improvement: </b>We now put the overview page in a menu item but left it out of the flow.  
 

Some pictures of the test  
<details>
<summary>Image 1</summary>

![Test 1](https://github.com/Sam-Guliker/minor-vangogh/blob/master/src/images/test1.jpeg)

</details>
<details>
<summary>Image 2</summary>

![Test 2](https://github.com/Sam-Guliker/minor-vangogh/blob/master/src/images/test2.jpeg)

</details>
<details>
<summary>Image 3</summary>

![Test 3](https://github.com/Sam-Guliker/minor-vangogh/blob/master/src/images/test3.jpeg)

</details>


# App decisions





# Checklist
An list with stuff that we need to do.

- [x] install React
- [x] A linter that connects with react.
- [x] install Express
- [x] let react communicate with express
- [x] create a database
- [x] create routes
- [x] user scenario's
- [x] create a new design
- [x] npm scripts
- [ ] zero-states
- [x] test the app
- [ ] service workers
- [ ] animations


# Lisence
Copyright © 2018 Sam Guliker & Fenna de Wilde.  
Released under the [MIT license](https://opensource.org/licenses/MIT)
