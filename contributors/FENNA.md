# meesterproef

## Introduction
This project is made in collaboration with Sam Guliker and is commissioned by the [Vincent Van Gogh museum](https://www.vangoghmuseum.nl/). The project is an addition to the existing multimedia tour. The assignment was to develop an interface which visitors from the museum can personalize their visit with by choosing various themes.

We have designed and tested this interface in 5 weeks. The end result is a prototype of the personalized multimedia tour.

## Table of Contents
1. [Branches](#branches)
2. [Learning goals](#learning-goals)

## Branches
- [arduino](https://github.com/Sam-Guliker/minor-vangogh/tree/arduino)
    <p>In this branch I started the arduino connection with the WIFI and the connection with the distance sensor, so we could measure the people who were in front of the paintings.</p>

- [Personal-tour](https://github.com/Sam-Guliker/minor-vangogh/tree/personal-tour)
   <p>In this branch I made a protype for the A/B test. You could swipe through themes and add them to your list.</p> 
   
- [swipe](https://github.com/Sam-Guliker/minor-vangogh/tree/swipe)
   <p>When we started this branch we decided to take the app in an different direction. We took the apps from the branches  personal-tour and questionnaire togheter and wanted to create an app similar to Tinder. In this branch I made the swipe        page and the swipe functionality.</p>

- [features](https://github.com/Sam-Guliker/minor-vangogh/tree/features)
    <p>In this branch I improved the swipe functionality and started animations of the buttons which Sam finished.</p>
   
- [hotfix](https://github.com/Sam-Guliker/minor-vangogh/tree/hotfix)
  <p>In this branch I fixed all known bugs and let the user add and delete themes on the overview page.</p>
   
- [zerostate](https://github.com/Sam-Guliker/minor-vangogh/tree/zerostate)
   <p>In this branch I added zero states to the swipe page.</p>
   
- [improvement-1](https://github.com/Sam-Guliker/minor-vangogh/tree/improvement-1)
   <p>In this branch I fixed the issue we encountered during testing. Because the info of the themes could collapse and expand, I removed the swiping functionallity, so it didn't had two interactions (swiping is the other one). However, the info is pretty big so people started swiping and nothing happend. So I added the swiping interaction as well and it worked just fine.</p>

- [improvement-2](https://github.com/Sam-Guliker/minor-vangogh/tree/improvement-2)
   <p>In this branch I worked on the tour page.</p


## Learning goals


### Real time web 
<b>Learning goal: Get real time data of a node MCU and connect this with Socket.js</b>

Real time data get inside by means of a NodeMCU. I worked with this for a week to get data from a HC-SR04 Ultrasone sensor so we could measure the amount of people in front of a painting. I also connected to WIFI to post this data on a server. However, at the first feedback meeting we found out that working with sensors was not a good idea, so we moved away from the idea.

### Web design
<b>Learning goal: I want to examine the needs of the user. This is important for the interaction and flow of the design. The user must be able to achieve his goal by using the app. I am going to do this by means of user scenarios and tests.</b>

We have written user scenario's for the flow of the interface and the interactions. We created or app based on the user scenario and the users needs.

<b>User scenario personalisation</b><br>
Ryan arrives at the gogh museum. This was an impulsive idea. He doesn't feel like seeing everything and spending hours in the museum. However, he would like to have some more information about the paintings, so he gets a device for the mutimedia tour. He wants to find a suitable tour quickly with interesting topics that won't take too long.

<b>Result</b><br>
The user can choose from many themes. There are 14 in total. These are quite a few themes. By keeping the themes and information about the themes on one page, the user can quickly go through the themes. All they have to do is swip left or right to add or skip a theme. The information can be folded in and out to better view the theme's image. The user can see how long the themes last and how long the tour lasts in total after adding the themes. He can look back at his selection or start the tour at any time. 


<b>User scenario tour</b><br>
Fransisco & Dafne are from Italy. They go to the van gogh museum to admire his work. They want to participate in the multimedia tour. They pick up a device at the desk and start the personalization tour. After selecting all themes, they start the tour. On the screen they see their position on the map. The map also shows the first painting of the tour. They know where to go to find the painting.

The app shows a floor plan for each floor and the paintings of the tour are shown on it. The paintings are in a list underneath the map with their name and number. The number op the painting is also shown on the map. The first painting is extra large indicated on the map.  When you scroll through to the next painting, that one will be enlarged on the map. 

In the future we would like the visitor to be able to see where he is in the building. We faked that in the app for now. We would also want to be able to give them instructions on where to go.

[Here you can find the test results from the usability test at the museumplein](https://github.com/Sam-Guliker/minor-vangogh/blob/master/README.md)


### Webapp from Scratch
We wanted to make a web app to recreate the look and feel of a native app. We also didn't want to use a database because this was not a learning goal of both of us. With a web app, all data in JavaScript will continue to exist because the website will not be reloaded when you navigate to another page. For example, we were able to transfer data we had obtained on one page to other pages. 

We have chosen React because you can reuse components and the syntax is very easy. React also uses a virtual DOM. This one lives in your memory and not on your screen and looks at the most effective way to make changes to the real overseas departments. They also have a large community.

In React I have worked a lot with map, filter and reduce. We had an array of objects with information about all the theme's. I had to use this data to do templating. Lists of selected and non-selected themes had to be splitten. The tour also had to be generated and all paintings had to be displayed by floor.

```
 setFloor() {
    let floor;

    let paintings = this.state.selected.map(obj => {
      return obj.paintings;
    });

    paintings = paintings.reduce(function(a, b) {
      return a.concat(b);
    }, []);

    if (this.state.radio === "floor-0") {
      floor = paintings.filter(obj => {
        return obj.floor === 0;
      });
    } else if (this.state.radio === "floor-1") {
      floor = paintings.filter(obj => {
        return obj.floor === 1;
      });
    } else if (this.state.radio === "floor-2") {
      floor = paintings.filter(obj => {
        return obj.floor === 2;
      });
    } else {
      floor = paintings.filter(obj => {
        return obj.floor === 3;
      });
    }

    return floor;
  }

  ```

### CSS to the rescue

### 

