import dogImage from "./assets/dog.jpeg";
import catImage from "./assets/cat.jpeg";
import fishImage from "./assets/fish.jpg";
import labrabog from  "./assets/labra-dog.jpeg";
import  bird from  "./assets/bird.jpeg";
import  rabbit from  "./assets/rabbit.jpeg";
import horse from  "./assets/horse.jpeg";
import parrot from  "./assets/parrot.jpeg";
import  cat from  "./assets/catimage.jpeg";
import  fish from  "./assets/fish.jpeg";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";

import  labra1 from  "./assets/labra1.jpeg";
import labra2 from "./assets/labra2.jpeg";
import  labra3 from  "./assets/labra3.jpg";
import  labra4 from  "./assets/labra4.jpg";
import  labra5 from  "./assets/labra5.jpg";
import  avatar from "./assets/avatar.jpg";

const catProfile = [
    {
        name: "JACKIE",
        type: "Dog, German Shephard",
        profile: labra1,
        des: "Newly renovated tiny apartment with mezzanine, compact and design,well-equipped, direct elevator. (The space design is more suitable for young people)\n" +
            "Located in the center of Paris, surrounded by Avenue Champs Élysées, Avenue George V and Avenue Montaigne, called the Golden Triangle area.\n" +
            "Arc de Triomphe, LV flagship store, Lido nightclub, Ladurée and Subway station are all within a 1-5 minute walk",
        media: [
            {
                src: labra1,
                width: 4,
                height: 3
            },
            {
                src: labra2,
                width: 1,
                height: 1
            },
            {
                src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
                width: 3,
                height: 4
            },
            {
                src: labra5,
                width: 4,
                height: 3
            },
            {
                src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/PpOHJezOalU/800x599",
                width: 4,
                height: 3
            },
            {
                src: labra3,
                width: 4,
                height: 3
            }
        ],
        user: {
            uId: '123',
            name: "harry",
            image: avatar
        }
    }
]
const categoryData = [
    {
        url: 'dog',
        img: dogImage,
        title: 'Dog',
        featured: true,
    },
    {
        url: 'cat',
        img: cat,
        title: 'Cat',
        featured: true,
    },
    {
        url: 'fish',
        img: fish,
        title: 'Fish',
        featured: true,
    },
    {
        url: 'labra-dog',
        img: labrabog,
        title: 'LABRA DOG',
        featured: true,
    },
    {
        url: 'bird',
        img: bird,
        title: 'BIRD',
        featured: true,
    },
    {
        url: 'horse',
        img: horse,
        title: 'HORSE',
        featured: true,
    },
    {
        url: 'rabbit',
        img: rabbit,
        title: 'RABBIT',
        featured: true,
    },
    {
        url: 'parrot',
        img: parrot,
        title: 'PARROT',
        featured: true,
    },
];

 const categoriesData = [
  {
     id: 1,
   img: dogImage,
   title: "Dog",
   discription: "This is a media card. You can use this section to describe the content."
  },
  {
     id: 2,
   img: catImage,
   title: "Cat",
   discription: "This is a media card. You can use this section to describe the content."
  },
  {
    id: 3,
   img: fishImage,
   title: "Fish",
   discription: "This is a media card. You can use this section to describe the content."
  }
]

const sliderData = [
    {
       id: 1,
       img: img1,
       title: 'slider 1',
       des: 'This is a media card. You can use this section to describe the content.'
     },
     {
       id: 2,
       img: img2,
       title: 'slider 1',
       des: 'This is a media card. You can use this section to describe the content.'
     },
     {
       id: 3,
       img: img3,
       title: 'slider 1',
       des: 'This is a media card. You can use this section to describe the content.'
     }
]




const postDataDog = [
    {
        id: 1,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: dogImage
            }
        ],
        user: {
            name: "Shrimp and Chorizo Paella",
            uId: "1221",
            profileImage: dogImage,
        }
    },
    {
        id: 2,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJk9WADqRGS2Z1sGX2pCtVkIBXoPAUkJgdK48U4dx2j4WZt_2Q"
            }
        ],
        user: {
            name: "Harry Kumar",
            uId: "1224",
            profileImage: catImage,
        }
    },
    {
        id: 3,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhz3-Z3RBoFBz6vWxso-b2xo5tO1iAys5SpDVairSBPn6P1vDf"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: fishImage,
        }
    }
]

export {
 categoriesData,
 sliderData,
    categoryData,
    catProfile,
    postDataDog
}
