SELECT uh.username, ph.title, ph.img
FROM posts_helo ph
JOIN users_helo uh ON ph.author_id = uh.id;