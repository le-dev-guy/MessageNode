exports.getPosts = (req,res,next) => {
    res.status(200).json({
        posts: [
            {
            _id : 1,
            title: 'My First Post',
            content: 'Hi welcome to my first post',
            imgUrl: 'images/js.png',
            creator: {
                name: 'Lokesh'
            },
            date: new Date()
        }
    ]
    })
}

exports.createPosts = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully',
        posts : {id: new Date().toISOString(), title: title, content: content}
    })
}