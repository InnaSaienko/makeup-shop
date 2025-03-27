import {messageDealText} from "./message"

interface Item {
    name: string;
    link: string;
    attention: {
        deal: boolean; message:  string;
    }
}
interface Category {
    category: string;
    items: Item[];
}

export const categories = [
    {
      category: "Eyes",
      items: [
        { name: "eyebrow", link: "/one", attention: {deal: false, message:  messageDealText} },
        { name: "eyeliner", link: "/two", attention: {deal: false, message:  messageDealText} },
        { name: "eyeshadow", link: "/three", attention: {deal: false, message:  messageDealText} },
        { name: "mascara", link: "/four", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Face",
      items: [
        { name: "blush", link: "/item1", attention: {deal: false, message:  messageDealText} },
        { name: "bronzer", link: "/two", attention: {deal: false, message:  messageDealText} },
        { name: "foundation", link: "/three", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Lips",
      items: [
        { name: "lip_liner", link: "/item1", attention: {deal: true, message: messageDealText} },
        { name: "lipstick", link: "/item2", attention: {deal: false, message:  messageDealText} },
      ],
    },
    {
      category: "Nails",
      items: [{ name: "nail_polish", link: "/item1", attention: {deal: false, message: messageDealText} }],
    },
  ];
  