import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Angel0Gabriel.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ângelo Gabriel</strong>

                            <time title="10 de Janeiro às 18:00h" dateTime="2023-01-10 18:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment