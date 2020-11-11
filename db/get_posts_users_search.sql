SELECT uh.username, ph.title, ph.img, ph.id
FROM posts_helo ph
JOIN users_helo uh ON ph.author_id = uh.id
WHERE ph.author_id = $1 AND ph.title ILIKE $2;


