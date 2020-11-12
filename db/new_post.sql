INSERT INTO posts_helo
(title, img, content, author_id)
VALUES
($2, $3, $4, $1)
returning id;