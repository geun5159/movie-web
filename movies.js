
const movieData = [
    {
      id: 1,
      title: "A Minecraft Movie",
      img: "https://image.tmdb.org/t/p/w440_and_h660_face/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
      desc: "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve."
    },
    {
      id: 2,
      title: "Snow White",
      img: "https://image.tmdb.org/t/p/w440_and_h660_face/tyfO9jHgkhypUFizRVYD0bytPjP.jpg",
      desc: "Following the benevolent King's disappearance, the Evil Queen dominated the once fair land with a cruel streak. Princess Snow White flees the castle when the Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young bandit named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom."
    },
    {
      id: 3,
      title: "Final Destination Bloodlines",
      img: "https://image.tmdb.org/t/p/w440_and_h660_face/j0NUh5irX7q2jIRtbLo8TZyRn6y.jpg",
      desc: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all."
    },
    {
        id: 4,
        title: "Warfare",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg",
        desc: "A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event."
      },
      {
        id: 5,
        title: "A Working Man",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg",
        desc: "Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined."
      },
      {
        id: 6,
        title: "Tin Soldier",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/jRvhP4AfFnJ03lCQhp1fie7XPSd.jpg",
        desc: "An ex-special forces operative seeks revenge against a cult leader who has corrupted his former comrades, the Shinjas. This leader, known as The Bokushi, promises veterans a purpose and protection, but is revealed to be a destructive influence. The ex-soldier, Nash Cavanaugh, joins forces with military operative Emmanuel Ashburn to infiltrate the Bokushi's fortress and expose his reign of terror"
      },
      {
        id: 7,
        title: "The Great Escape",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/h7shL668vhC2wsZQSBWzxkMuZ8K.jpg",
        desc: "Despite the stern warning from the Air Force Colonel of the prisoner of war that 'if one tries to escape again, life is impossible to guarantee,' They overcome several difficulties and drill several caves, one of which is 76 out of 250 planners successfully escape, but 50 escapees lose their lives such as being slaughtered or shot on the run after a persistent pursuit by the German forces, 23 are arrested, 11 of whom are returned to the same camp. In the process of escape, Steve McQueen's famous motorcycle scene is shown. Those who somehow return to the camp after being arrested are saddened to be informed of the deaths of their colleagues by the warden. The Gestapo shot all 50 pilots. Only three have succeeded in escaping to the end: a two-man team that escaped by boat and a Dutchman named Bram van der Stoke who escaped to Spain with the help of a Belgian and French resistance. Of these three survivors, two are Norwegian and one is Dutch, with only RAF pilots from other countries succeeding in survival."
      },
      {
        id: 8,
        title: "Bambi, l'histoire d'une vie dans les bois",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/vWNVHtwOhcoOEUSrY1iHRGbgH8O.jpg",
        desc: "The life of Bambi, a male roe deer, from his birth through childhood, the loss of his mother, the finding of a mate, the lessons he learns from his father, and the experience he gains about the dangers posed by human hunters in the forest"
      },
      {
        id: 9,
        title: "Thunderbolts",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        desc: "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts."
      },
      {
        id: 10,
        title: "Balle perdue 3",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/4A5HH9HkCPqAwyYL6CnA0mxbYjn.jpg",
        desc: "Car genius Lino returns to conclude his vendetta against Areski and the corrupt commander who ruined their lives in this turbo-charged trilogy finale."
      },
      {
        id: 11,
        title: "Conjuring the Cult ",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/t4MiAeYpjL7saYvqvcn9xtOfA4K.jpg",
        desc: "After discovering his blood-soaked daughter dead in the bathtub, David Bryson attends a self-help group to help save him from his ghostly nightmares. But when a group of mysterious cult-like women offer to help him resurrect his daughter. David's choices will not just decide his fate... but the fate of his dead daughter's SOUL."
      },
      {
        id: 12,
        title: "용감한 시민 ",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/jmLfuMFn6o4Rkp7dzT57Vp2GpoQ.jpg",
        desc: "An expelled boxing champion, who now is a high-school teacher, witnesses intolerable violence and throws her first punch to build justice against it, while putting on a mask."
      },
      {
        id: 13,
        title: "Exterritorial   ",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/bVm6udIB6iKsRqgMdQh6HywuEBj.jpg",
        desc: "When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy."
      },
      {
        id: 14,
        title: "Captain America: Brave New World ",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/8eifdha9GQeZAkexgtD45546XKx.jpg",
        desc: "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red."
      },
      {
        id: 15,
        title: "Mission: Impossible - The Final Reckoning",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        desc: "Ethan Hunt and the IMF team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Ethan's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever."
      },
      {
        id: 16,
        title: "In the Lost Lands ",
        img: "https://image.tmdb.org/t/p/w440_and_h660_face/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        desc: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon."
      },

  ];
  