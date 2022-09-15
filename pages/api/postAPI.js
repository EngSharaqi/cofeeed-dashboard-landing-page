export default function handler(req, res) {
    res.status(200).json({
        posts : [
            { 
                id: 1,
                post_img: 'https://via.placeholder.com/270x220/ffcee4',
                profile_pic: '',
                name: "Mohamed Sharaqi",
                likes: 15,
                comments: 7
            },
            {
                id: 2,
                post_img: 'https://via.placeholder.com/270x220/b5efff',
                profile_pic: '',
                name: "John Doe",
                likes: 12,
                comments: 10
            },
            {
                id: 3,
                post_img: 'https://via.placeholder.com/270x220/6dff8f',
                profile_pic: '',
                name: "Zoe Zoun",
                likes: 40,
                comments: 3
            },
            {
                id: 4,
                post_img: 'https://via.placeholder.com/270x220/ff77b5',
                profile_pic: '',
                name: "Mark Jason",
                likes: 25,
                comments: 13
            }
          ]
        
    })
}