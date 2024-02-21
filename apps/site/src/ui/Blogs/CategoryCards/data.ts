import blogImage1 from './icons/Image-7.png'
import blogImage2 from './icons/Image-6.png'
import blogImage3 from './icons/Image-5.png'

export const defaultData = {
  authorByText: "By",
  data: [
    {
      id: 31,
      title: "Answers the Most Asked Questions in Technology",
      slug: "answers-the-most-asked-questions-in-technology",
      featuredmedia: {
        sourceUrl: blogImage1,
        alt: 'blogImage1'
      },
      category: [{
        name: "Technology"
      }],
      author: "Zelal",
      authorId: 1,
      content: "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 34,
      title: "How to Grow Your Customer Base Business",
      slug: "how-to-grow-your-customer-base-business",
      featuredmedia: {
        sourceUrl: blogImage2,
        alt: 'blogImage1'
      },
      category: [{
        name: "Gadgets"
      }],
      author: "Zelal",
      authorId: 1,
      content: "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
      id: 37,
      title: "Tips on Choosing the Perfect Destinatio",
      slug: "tips-on-choosing-the-perfect-destination",
      featuredmedia: {
        sourceUrl: blogImage3,
        alt: 'blogImage1'
      },
      category: [{
        name: "Technology"
      }],
      author: "Zelal",
      authorId: 1,
      content: "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
  ],
  pageData: 10,
  loadButtonText: "Load More",
}
