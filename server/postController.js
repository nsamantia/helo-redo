module.exports ={

    getPosts: async(req, res) => {
        const db = req.app.get('db')
        const {search, userPosts} = req.query
        const {userid} = req.params


        if (userPosts === 'true' && search){
            const userSearchPosts = await db.get_posts_users_search(userid, search)
            return res.status(200).send(userSearchPosts)

        } else if (userPosts === 'false' && !search) {
           const allPosts = await db.get_all_posts()
           return res.status(200).send(allPosts)

        } else if (userPosts === 'false' && search){
            const allSearchPosts = await db.get_all_search_posts(search)
            return res.status(200).send(allSearchPosts)

        } else if (userPosts === 'true' && !search){
            const allUserPosts = await db.get_all_user_posts(userid)
            return res.status(200).send(allUserPosts)
        }
        
    },

    getSinglePost: async(req, res) => {
        const db = req.app.get('db')
        const {postid} = req.params

        const [getSinglePost] = await db.get_single_post(postid)
        res.status(200).send(getSinglePost)
    }
}