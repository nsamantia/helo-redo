SELECT uh.username, ph.title, ph.img, ph.id
FROM posts_helo ph
JOIN users_helo uh ON ph.author_id = uh.id
WHERE ph.title ILIKE $1;