import Comment from './Comment';
import styles from './Post.module.css';

function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/Angel0Gabriel.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Ângelo Gabriel</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 de Janeiro às 00:00h" dateTime="2023-01-10 00:00:00">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>


                <textarea
                    placeholder="Deixe um Comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article >
    )
}

export default Post
