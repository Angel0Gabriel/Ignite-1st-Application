import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

const comments = [
    1,
    2,
];

function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein!',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}

                </time>
            </header>

            <div className={styles.content}>
                {content.map(value => {
                    if (value.type === 'paragraph') {
                        return <p>{value.content}</p>
                    } else if (value.type === 'link') {
                        return <p><a href="#">{value.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>


                <textarea
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um Comentário"
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(value => {
                    return <Comment content={value} />;
                })}
            </div>
        </article >
    )
}

export default Post
