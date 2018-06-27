const themes = [
  {
    name: "The legacy of Van Gogh",
    src: require("../images/japon.jpg"),
    link: "/legacy-of-van-gogh",
    discription:
      "Many are influenced by Van Gogh’s work: whether it be by his choice of subject, brushwork or sense of color.",
    time: "5 min",
    selected: false,
    paintings: [
      {
        number: 89,
        title: "Schilderij van van Dongen",
        src: require("../images/paintings/Schilderij.jpg"),
        floor: 3
      }
    ]
  },
  {
    name: "Painters friends",
    src: require("../images/stoel.jpg"),
    link: "/painters-friends",
    discription:
      "It is widely believed that Vincent van Gogh found it hard to stay friends with people, and so he had a lonely life. But is this true?",
    time: "7 min",
    selected: false,
    paintings: [
      {
        number: 53,
        title: "Gauguin's chair",
        src: require("../images/paintings/Chair.jpg"),
        floor: 1,
        left: "0%",
        top: "60%"
      },
      {
        number: 12,
        title: "Gauguin: van gogh painting sunflowers",
        src: require("../images/paintings/Painting.jpg"),
        floor: 2
      }
    ]
  },
  {
    name: "Family of van Gogh",
    src: require("../images/theo.jpg"),
    link: "/family-of-van-gogh",
    discription:
      "The most momentous change in Van Gogh’s life was triggered by his younger brother Theo, who advised Vincent to become an artist.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 102,
        title: "Schilderij van theo",
        src: require("../images/paintings/Theo.jpg"),
        floor: 2
      },
      {
        number: 13,
        title: "Still life with bible",
        src: require("../images/paintings/Bible.jpg"),
        floor: 1,
        left: "88%",
        top: "45%"
      }
    ]
  },
  {
    name: "Learning by doing",
    src: require("../images/skeletion.jpg"),
    link: "/learning-by-doing",
    discription:
      "Van Gogh usually called his paintings 'studies': attempts to master a certain technical aspect or motive.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 41,
        title: "Head of a skeleton with a burning cigarette",
        src: require("../images/paintings/Skeleton.jpg"),
        floor: 1,
        left: "43%",
        top: "58%"
      },
      {
        number: 16,
        title: "Peasants heads",
        src: require("../images/paintings/Peasants.jpg"),
        floor: 1,
        left: "78%",
        top: "22%"
      }
    ]
  },
  {
    name: "A different mind",
    src: require("../images/mind.jpg"),
    link: "/a-different-mind",
    discription:
      "Vincent van Gogh is known for his chaotic paintings and similarly tumultuous state of mind. This resulted in unconventional art.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 29,
        title: "An old woman of Arles",
        src: require("../images/paintings/Old.jpg"),
        floor: 1,
        left: "0%",
        top: "70%"
      },
      {
        number: 65,
        title: "Tree Roots",
        src: require("../images/paintings/Tree.jpg"),
        floor: 3
      }
    ]
  },
  {
    name: "Driven and goal-oriented",
    src: require("../images/huis.jpg"),
    link: "/driven-and-goal-oriented",
    discription:
      "In contrast to Van Gogh’s widespread image of an impulsive creator, he actually was a goal oriented man who always kept mind what he wanted to achieve.",
    time: "5 min",
    selected: false,
    paintings: [
      {
        number: 37,
        title: "Rural life",
        src: require("../images/paintings/Rural.jpg"),
        floor: 1,
        left: "32%",
        top: "0%"
      }
    ]
  },
  {
    name: "Color effects",
    src: require("../images/garden.jpg"),
    link: "/color-effects",
    discription:
      "Van Gogh was always busy with the effect of his use of color in his work.",
    time: "30 min",
    selected: false,
    paintings: [
      {
        number: 4,
        title: "The yellow house",
        src: require("../images/paintings/Yellow.jpg"),
        floor: 1,
        left: "12",
        top: "81%"
      },
      {
        number: 18,
        title: "Garden with courting couples: square saint-pierre",
        src: require("../images/paintings/Couples.jpg"),
        floor: 1,
        left: "49%",
        top: "81%"
      },
      {
        number: 34,
        title: "Wheatfield with a Reaper",
        src: require("../images/paintings/Reaper.jpg"),
        floor: 3
      },
      {
        number: 42,
        title: "Wheatfield with crows",
        src: require("../images/paintings/Crows.jpg"),
        floor: 3
      },
      {
        number: 54,
        title: "Orchards in blossom, views of Arle",
        src: require("../images/paintings/Orchards.jpg"),
        floor: 3
      },
      {
        number: 55,
        title: "Head of a prostitute",
        src: require("../images/paintings/Prostitute.jpg"),
        floor: 1,
        left: "35%",
        top: "58%"
      }
    ]
  },
  {
    name: "Japanese influences",
    src: require("../images/japanese.jpg"),
    discription:
      "Van Gogh never went to Japan. He created his own image of the country thanks to the Japanese prints he eagerly collected and closely studied. The colourful and exotic images greatly inspired him.",
    link: "/japanese-influences",
    time: "5 min",
    selected: false,
    paintings: [
      {
        number: 100,
        title: "Courtisana",
        src: require("../images/paintings/Courtesan.jpg"),
        floor: -1
      }
    ]
  },
  {
    name: "Simplicity",
    src: require("../images/aardappels.jpg"),
    link: "/simplicity",
    discription:
      "Peasant life was linked in Van Gogh's vision to simplicity, eternity and rebirth. The theme played an important role throughout his artistry.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 50,
        title: "The potato eaters",
        src: require("../images/paintings/Potato.jpg"),
        floor: 1,
        left: "70%",
        top: "31%"
      },
      {
        number: 28,
        title: "The cottage",
        src: require("../images/paintings/Cottage.jpg"),
        floor: 1,
        left: "78%",
        top: "12%"
      },
      {
        number: 49,
        title: "Irisis",
        src: require("../images/paintings/Irisis.jpg"),
        floor: 2
      }
    ]
  },
  {
    name: "The wealth of nature",
    src: require("../images/wheatfield.jpg"),
    link: "/the-wealth-of-nature",
    discription:
      "Vincent believed that an artist had to truly know and understand nature. The best way to achieve that was by living and working in the middle of it, in the unspoiled countryside.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 2,
        title: "The pink orchard",
        src: require("../images/paintings/Pink.jpg"),
        floor: 1,
        left: "12%",
        top: "91%"
      },
      {
        number: 38,
        title: "Trees and undergrowth",
        src: require("../images/paintings/Trees.jpg"),
        floor: 1,
        left: "41%",
        top: "81%"
      }
    ]
  },
  {
    name: "The modern portrait",
    src: require("../images/vincent.jpg"),
    link: "/the-modern-portrait",
    discription:
      "Vincent often painted himself when he couldn’t afford to pay models.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 14,
        title: "Self-portrait with grey felt hat",
        src: require("../images/paintings/Grey.jpg"),
        floor: 1,
        left: "60%",
        top: "91%"
      },
      {
        number: 87,
        title: "Self-portrait with straw hat",
        src: require("../images/paintings/Straw.jpg"),
        floor: 0
      }
    ]
  },
  {
    name: "Conserving Van Gogh",
    src: require("../images/bedroom.jpg"),
    link: "/conserving-van-gogh",
    discription:
      "Discover what information is concealed in and under the paintings.",
    time: "5 min",
    selected: false,
    paintings: [
      {
        number: 103,
        title: "The Bedroom",
        src: require("../images/bedroom.jpg"),
        floor: -1
      }
    ]
  },
  {
    name: "Work as a medicine",
    src: require("../images/paintings/Millet.jpg"),
    link: "/work-as-a-medicine",
    discription:
      "Van Gogh found his illness unbearable. Painting was the best remedy against his illness.",
    time: "10 min",
    selected: false,
    paintings: [
      {
        number: 68,
        title: "Copies after millet",
        src: require("../images/paintings/Millet.jpg"),
        floor: 3
      },
      {
        number: 80,
        title: "Roses",
        src: require("../images/paintings/Roses.jpg"),
        floor: 3
      }
    ]
  },
  {
    name: "Changing techniques",
    src: require("../images/paintings/Twilight.jpg"),
    link: "/changing-techniques",
    discription:
      "Vincent produced one colour study after another. Which colour combinations create the most powerful effect?",
    time: "5 min",
    selected: false,
    paintings: [
      {
        number: 9,
        title: "Landscape at Twilight",
        src: require("../images/paintings/Twilight.jpg"),
        floor: 3
      }
    ]
  }
];

export default themes;
