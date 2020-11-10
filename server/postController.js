module.exports ={

    getPosts: async(req, res) => {
        const db = req.app.get('db')
        const {search, userPosts} = req.query
        const {id} = req.params


        if (userPosts === 'true' && search){
            const posts = await db.get_posts(id, search)
            return res.status(200).send(posts)
        }
        
    }
}