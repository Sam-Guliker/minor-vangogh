const themes = [
  {
    name: "The legacy of Van Gogh",
    src: require("../images/japon.jpg"),
    link: "/legacy-of-van-gogh",
    discription:
      "Many are influenced by Van Gogh’s work: whether it be by his choice of subject, brushwork or sense of color.",
    time: "20 min",
    selected: true,
    paintings: [
      {
        number: 101,
        title: "Schilderij van van Dongen",
        src: require("../images/paintings/Schilderij.jpg")
      },
      {
        number: 83,
        title: "Drawings",
        src: require("../images/paintings/Drawings.jpg")
      },
      {
        number: 24,
        title: "Going to arles",
        src: require("../images/paintings/Arles.jpg")
      },
      {
        number: 43,
        title: "Saint-Rémy-de-provence",
        src: require("../images/paintings/Saint.jpg")
      },
      {
        number: 85,
        title: "Paris",
        src: require("../images/paintings/Paris.jpg")
      },
      {
        number: 92,
        title: "Auvers-sur-oise",
        src: require("../images/paintings/Auvers.jpg")
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
    selected: true,
    paintings: [
      {
        number: 53,
        title: "Gauguin's chair",
        src: require("../images/paintings/Chair.jpg")
      },
      {
        number: 12,
        title: "Gauguin: van gogh painting sunflowers",
        src: require("../images/paintings/Painting.jpg")
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
        src: require("../images/paintings/Theo.jpg")
      },
      {
        number: 13,
        title: "Still life with bible",
        src: require("../images/paintings/Bible.jpg")
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
        src: require("../images/paintings/Skeleton.jpg")
      },
      {
        number: 16,
        title: "Peasants heads",
        src: require("../images/paintings/Peasants.jpg")
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
        src: require("../images/paintings/Old.jpg")
      },
      {
        number: 65,
        title: "Tree Roots",
        src: require("../images/paintings/Tree.jpg")
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
        src: require("../images/paintings/Rural.jpg")
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
        src: require("../images/paintings/Yellow.jpg")
      },
      {
        number: 18,
        title: "Garden with courting couples: square saint-pierre",
        src: require("../images/paintings/Couples.jpg")
      },
      {
        number: 34,
        title: "Wheatfield with a Reaper",
        src: require("../images/paintings/Reaper.jpg")
      },
      {
        number: 42,
        title: "Wheatfield with crows",
        src: require("../images/paintings/Crows.jpg")
      },
      {
        number: 54,
        title: "Orchards in blossom, views of Arle",
        src: require("../images/paintings/Orchards.jpg")
      },
      {
        number: 55,
        title: "Head of a prostitute",
        src: require("../images/paintings/Prostitute.jpg")
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
        src: require("../images/paintings/Courtesan.jpg")
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
        src: require("../images/paintings/Potato.jpg")
      },
      {
        number: 28,
        title: "The cottage",
        src: require("../images/paintings/Cottage.jpg")
      },
      {
        number: 49,
        title: "Irisis",
        src: require("../images/paintings/Irisis.jpg")
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
        src: require("../images/paintings/Pink.jpg")
      },
      {
        number: 38,
        title: "Trees and undergrowth",
        src: require("../images/paintings/Trees.jpg")
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
        src: require("../images/paintings/Grey.jpg")
      },
      {
        number: 87,
        title: "Self-portrait with straw hat",
        src: require("../images/paintings/Straw.jpg")
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
        src: require("../images/bedroom.jpg")
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
        src: require("../images/paintings/Millet.jpg")
      },
      {
        number: 80,
        title: "Roses",
        src: require("../images/paintings/Roses.jpg")
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
        src: require("../images/paintings/Twilight.jpg")
      }
    ]
  }
];

export default themes;
