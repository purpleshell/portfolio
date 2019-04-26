import bulletJournal from "../images/bullet-journal.jpg";
import veggies from "../images/veggies.jpg";

export interface PostInfo {
  bannerImageLink: string;
  title: string;
  body: [Paragraph];
  bodyPreview: [Paragraph];
  url: string;
}

export interface Paragraph {
  body: string;
}

export const posts: PostInfo[] = [
  {
    title: "Hi",
    bannerImageLink: bulletJournal,
    body: [
      {
        body: "Post paragraph body"
      }
    ],
    bodyPreview: [
      {
        body: "Post preview body"
      }
    ],
    url: "0"
  },
  {
    title: "Hi Brit",
    bannerImageLink: veggies,
    body: [
      {
        body: "Post paragraph body"
      }
    ],
    bodyPreview: [
      {
        body: "Post preview body"
      }
    ],
    url: "1"
  },
  {
    title: "Hi Brit",
    bannerImageLink: veggies,
    body: [
      {
        body: "Post paragraph body"
      }
    ],
    bodyPreview: [
      {
        body: "Post preview body"
      }
    ],
    url: "2"
  }
];
