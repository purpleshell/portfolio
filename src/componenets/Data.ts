import bulletJournal from "../images/bullet-journal.jpg";
import veggies from "../images/veggies.jpg";

export interface PostInfo {
  bannerImageLink: string;
  title: string;
  bodyParagraphs: string[];
  url: string;
}

const paragraph = "";

export const posts: PostInfo[] = [
  {
    title: "This One Habit Will Change Your Life..",
    bannerImageLink: bulletJournal,
    bodyParagraphs: [
      paragraph.concat(
        "Having trouble getting sleep? Meeting project deadlines? ",
        "Falling off the path to reaching your goals?",
        " This lifestyle change is for you."
      ),
      paragraph.concat(
        "If you have ever played any video game, ",
        "your brain is well aware of how addicting tracking one's progress can be. ",
        "It turns out we can use this addiction to easily form habits thanks to the power of repition. ",
        "Perform the same task daily for a month and a half and you will have gained a habit that will stick with you for life. ",
        "Not just because you have to but because you want to. ",
        "It becomes a part of our identity and we will do it without even thinking about it."
      ),
      paragraph.concat(
        "The best way to track your progress on any task, habit, or other criteria, ",
        "is none other than a journal. ",
        "A popular and effective journaling choice is known as the bullet journal. ",
        "It leaves you with enough direction to track the things you need, ",
        "yet enough freedom and flexibility to let your creative side freely express itself."
      )
    ],
    url: "0"
  },
  {
    title: "Significant Dietary Protein Sources Part 1",
    bannerImageLink: veggies,
    bodyParagraphs: [
      paragraph.concat(
        "At ~25% protein by mass(more than double extra-firm tofu's ~10.5%), ",
        "hempeh is a superfood powerhouse. A soy-free alternative to tempeh, ",
        "hempeh is made using nuts, hemp seeds and other non-soy beans. ",
        "This leaves us with all the benefits of tempeh, in addition to more protein, ",
        "in an allergen-free package."
      ),
      paragraph.concat("")
    ],
    url: "1"
  }
];
