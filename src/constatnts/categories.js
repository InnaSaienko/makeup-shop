import {messageDealText} from "./message.js"

export const categories = [
    {
      category: "Eyes",
      items: [
        { name: "Eyebrows", link: "/one", attention: {deal: false, message:  messageDealText} },
        { name: "Eyeliner", link: "/two", attention: {deal: false, message:  messageDealText} },
        { name: "Eyeshadow", link: "/three", attention: {deal: false, message:  messageDealText} },
        { name: "Mascara", link: "/four", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Face",
      items: [
        { name: "Blush", link: "/item1", attention: {deal: false, message:  messageDealText} },
        { name: "Bronzer", link: "/two", attention: {deal: false, message:  messageDealText} },
        { name: "Foundation", link: "/three", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Lips",
      items: [
        { name: "Lip liner", link: "/item1", attention: {deal: true, message: messageDealText} },
        { name: "Lipstick", link: "/item2", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Nails",
      items: [{ name: "Nail polish", link: "/item1", attention: {deal: false, message: messageDealText} }],
    },
  ];
  