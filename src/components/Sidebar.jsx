import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>

                <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/D4D03AQGtRFXTQQjEfQ/profile-displayphoto-shrink_800_800/0/1666674988068?e=1673481600&v=beta&t=iv-CncqFI7oXnPu1AdhXeDTaN_gtd1eUvzLGcVSK8ZQ" />

                <strong>Angelo Gabriel</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}

export default Sidebar
