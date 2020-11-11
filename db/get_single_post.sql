SELECT u.username, p.title, p.content, p.img, u.profile_pic
FROM posts_helo p
JOIN users_helo u ON p.author_id = u.id
WHERE p.id = $1; 