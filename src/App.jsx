import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import "./global.css";

import styles from "./App.module.css";

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post
            author="Angelo Gabriel"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse soluta incidunt dicta illo provident ullam, minima voluptate adipisci sint laboriosam non quis. Hic, illo qui. Libero reprehenderit asperiores molestiae explicabo?"
          />
          <Post
            author="Fernanda Bastos"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
