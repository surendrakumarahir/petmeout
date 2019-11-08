import dogImage from "../assets/dog.jpeg";
import catImage from "../assets/cat.jpeg";
import fishImage from "../assets/fish.jpg";

const post = [
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
        },
        cat: "dog",
        distance: 5,
    },
    {
        id: 2,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN6ezGNSr93J4zAsbUXZ8TEkMmxPj8FBxoeWh3A-P5YcLk7drj"
            }
        ],
        user: {
            name: "Shrimp and Chorizo Paella",
            uId: "1221",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSURwDUnzvfs9auc6P83SP23w54KjX6wwIgCvpHtBgIFBczlDpg",
        },
        cat: "dog",
        distance: 10,
    },
    {
        id: 3,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSURwDUnzvfs9auc6P83SP23w54KjX6wwIgCvpHtBgIFBczlDpg"
            }
        ],
        user: {
            name: "Shrimp and Chorizo Paella",
            uId: "1221",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSURwDUnzvfs9auc6P83SP23w54KjX6wwIgCvpHtBgIFBczlDpg",
        },
        cat: "dog",
        distance: 20,
    },
    {
        id: 4,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ1uPtJE1JMM6ZOpyXAyFeI6Wl6yWdUgEWtkHbXFecJ1-H4Ad7"
            }
        ],
        user: {
            name: "Harry Kumar",
            uId: "1224",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ1uPtJE1JMM6ZOpyXAyFeI6Wl6yWdUgEWtkHbXFecJ1-H4Ad7",
        },
        cat: "cat",
        distance: 25,
    },
    {
        id: 5,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYHOZzGCaW66WGjVv2xdp_FDDfKvEQriweAIHqBdVNsg4DaW1"
            }
        ],
        user: {
            name: "Harry Kumar",
            uId: "1224",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYHOZzGCaW66WGjVv2xdp_FDDfKvEQriweAIHqBdVNsg4DaW1",
        },
        cat: "cat",
        distance: 15,
    },
    {
        id: 6,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: catImage
            }
        ],
        user: {
            name: "Harry Kumar",
            uId: "1224",
            profileImage: catImage,
        },
        cat: "cat",
        distance: 5,
    },
    {
        id: 7,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: fishImage
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: fishImage,
        },
        cat: "fish",
        distance: 10,
    },
    {
        id: 8,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKQeysSUrsIrrdd1b3rR_FM8VIV5OkcB6PBwQKf-UQOKDeH4uA"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKQeysSUrsIrrdd1b3rR_FM8VIV5OkcB6PBwQKf-UQOKDeH4uA",
        },
        cat: "fish",
        distance:20,
    },
    {
        id: 9,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5Q8iDcbRmWiZV-1Mhp2HqWh08QIsOz31CnT3AIqPqoWsjSJqm"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5Q8iDcbRmWiZV-1Mhp2HqWh08QIsOz31CnT3AIqPqoWsjSJqm",
        },
        cat: "fish",
        distance: 5,
    },
    {
        id: 10,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN5Y_hzBF2aTsRetpMn8MMY9HrKUBUthJ1ymfAz6g7vvMfMbGv"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN5Y_hzBF2aTsRetpMn8MMY9HrKUBUthJ1ymfAz6g7vvMfMbGv",
        },
        cat: "labra-dog",
        distance: 25,
    },
    {
        id: 11,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTt4qoc7ZjTtq0SXpL1NyyhUQwy7_qUNuFgTjFkTRlfC0bWX4K"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTt4qoc7ZjTtq0SXpL1NyyhUQwy7_qUNuFgTjFkTRlfC0bWX4K",
        },
        cat: "labra-dog",
        distance: 15,
    },
    {
        id: 12,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7qxilLRWoLkcP-r0MwatcwVc2yHRxgvqyFJEA_X2x5p44IG08"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7qxilLRWoLkcP-r0MwatcwVc2yHRxgvqyFJEA_X2x5p44IG08",
        },
        cat: "labra-dog",
        distance: 10,
    },
    {
        id: 13,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqxWQ79cKX2S7ZgtkYTX4w42mPuwsRYzSNyqX60VTtEX7IqHIn"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqxWQ79cKX2S7ZgtkYTX4w42mPuwsRYzSNyqX60VTtEX7IqHIn",
        },
        cat: "bird",
        distance: 20,
    },
    {
        id: 14,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWYhEZhh1QddIDtDNYTNOh-aAmdOCuhmZ85hz6DRvapa0hvDMz"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWYhEZhh1QddIDtDNYTNOh-aAmdOCuhmZ85hz6DRvapa0hvDMz",
        },
        cat: "bird",
        distance: 25,
    },
    {
        id: 15,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEoXgXAsCiZp2eYDmqLRfSb_uYAJ2-xxYPTTLgEAlj0l2xIs0"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXEoXgXAsCiZp2eYDmqLRfSb_uYAJ2-xxYPTTLgEAlj0l2xIs0",
        },
        cat: "bird",
        distance: 15,
    },
    {
        id: 16,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjqNX4Ik4jlswvDiPYbBNWItUsxkt-dBEY_TBrFF2LkIo1oZQS"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjqNX4Ik4jlswvDiPYbBNWItUsxkt-dBEY_TBrFF2LkIo1oZQS",
        },
        cat: "horse",
        distance: 5,
    },
    {
        id: 17,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfe0sgotT-Cej_e_N9ADtufh05GOUVytVtREleYZ8OIfun_b0y"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfe0sgotT-Cej_e_N9ADtufh05GOUVytVtREleYZ8OIfun_b0y",
        },
        cat: "horse",
        distance: 10,
    },
    {
        id: 18,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1iFgLkR40l45thhwM1PNBlwxoM9-7vcrCqFYcxmCpQVfQhpMT"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1iFgLkR40l45thhwM1PNBlwxoM9-7vcrCqFYcxmCpQVfQhpMT",
        },
        cat: "horse",
        distance: 20,
    },
    {
        id: 19,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3YWHuYjr8VtVBw4Zo_qrxwkhCbQZRwu5u2Tos3UZeolqWDX1U"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3YWHuYjr8VtVBw4Zo_qrxwkhCbQZRwu5u2Tos3UZeolqWDX1U",
        },
        cat: "rabbit",
        distance: 15,
    },
    {
        id: 20,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSlbZ7d4A-PbmdL526xx7ObK4ZQo_x9d5xkz9pJ4QlbHcSLHn-"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSlbZ7d4A-PbmdL526xx7ObK4ZQo_x9d5xkz9pJ4QlbHcSLHn-",
        },
        cat: "rabbit",
        distance: 10,
    },
    {
        id: 21,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5L0XE2hSnEIiEe2_UEdB4sayKfMbNvFyNmYhhIPuX-Zesawc7"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5L0XE2hSnEIiEe2_UEdB4sayKfMbNvFyNmYhhIPuX-Zesawc7",
        },
        cat: "rabbit",
        distance: 5,
    },
    {
        id: 22,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTyqdHe1IUXyPsm2Z89cf12pD36bFBBM7O-nfIsGnkyY47ZsEN"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTyqdHe1IUXyPsm2Z89cf12pD36bFBBM7O-nfIsGnkyY47ZsEN",
        },
        cat: "parrot",
        distance: 25,
    },
    {
        id: 23,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjan4qRn5r3oW023SfsmNs9R-w50STYT9o_Shuy8aA-0RTqg-a"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjan4qRn5r3oW023SfsmNs9R-w50STYT9o_Shuy8aA-0RTqg-a",
        },
        cat: "parrot",
        distance: 15,
    },
    {
        id: 24,
        content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        createdAt: "September 14, 2016",
        media: [
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxF6BsTy_J8ANI3-ilug5_zfTA_fy1oNZQ__HAremxpEkMmo7K"
            }
        ],
        user: {
            name: "Steve Vedang",
            uId: "1223",
            profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxF6BsTy_J8ANI3-ilug5_zfTA_fy1oNZQ__HAremxpEkMmo7K",
        },
        cat: "parrot",
        distance: 25,
    }
]

export default  post;

