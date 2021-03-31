import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.contentwrapper}>
        <div className={styles.content}>
          <header className={styles.header}>
              <div>
              <Image src="/Markmark.png" alt="BaseGit Logo" width={49} height={45}/>
              </div>
              <h2>Sign up to BaseGit</h2>
              <aside>
                <p>BaseGit is the best way to store information</p>
              </aside>
          </header>

          
            <div className={styles.social_sign}>
              <h3 className={styles.social_heading}>Continue with a provider</h3>
              <div className={styles.social_buttons}>
                <button className={styles.social_buttons_i}>
                  <Image src="/Pathfacebook.png" alt="FB logo" width={20} height={20} />
                </button>
                <button className={styles.social_buttons_i}>
                  <Image src="/Pathtwitter.png" alt="TW logo"  width={20} height={20} />
                </button>
                <button className={styles.social_buttons_i}>
                  <Image src="/Pathgithub.png" alt="GH logo"  width={20} height={20} />
                </button>
              </div>
            </div>

            <div className={styles.ribbon}>
              <p className={styles.ribbon_divider}> </p>
              <p className={styles.ribbon_text}>Or with your work email</p>
              <p className={styles.ribbon_divider}> </p>
            </div>

            <form>
              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="e-mail">Email address</label>
                <input className={styles.input_input} id="e-mail" type="email" />
              </div>

              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="password">Password</label>
                <input className={styles.input_input}  id="password" type="password" />
              </div>

              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="password">Confrim password</label>
                <input className={styles.input_input}  id="password" type="password" />
              </div>

              <button className={styles.button}>
                Sign up
              </button>
            </form>
          </div>
      </div>

      <img src="/Imagerocket.jpg" alt="rocket image" className={styles.image} />

    </div>
  )
}
