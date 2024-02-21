
import avatar from './icons/avatar.png'

export const defaultData = {
  postID: 40,
  replyFormText: {
    cancelText: "Cancel",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    replyButtonText: "Reply",
  },
  getAllComments: [
    {
      id: 31,
      avatar: {
        src: avatar,
        alt: "user"
      },
      author: "Zelal",
      publishTime: "2023-10-21T13:04:25",
      content: "Very useful blog",
    }]
}
