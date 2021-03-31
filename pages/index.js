import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.content}>
          <header className={styles.header}>
            <section>
              <div>
              <Image src="/Markmark.png" alt="BaseGit Logo" width={49} height={45}/>
              </div>
              <h2>Sign up to BaseGit</h2>
              <aside>
                <p>BaseGit is the best way to store information</p>
              </aside>
            </section>
          </header>

          <main>
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
              <p className={styles.ribbon_divider_2}> </p>
            </div>

            <div className={styles.input}>
              <h4 className={styles.input_text}>Email address</h4>
              <form className={styles.input_placeholder}>
                <input className={styles.input_placeholder_i} type="email" name="e-Mail" maxlength="64" required />
              </form>
            </div>

            <div className={styles.input}>
              <h4 className={styles.input_text}>Password</h4>
              <form className={styles.input_placeholder}>
                <input className={styles.input_placeholder_i} type="password" name="Password" minlength="6" pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="Must contain 6 digits, an upper-case letter, a lower-case letter and a number." required />
              </form>
            </div>

            <div className={styles.input}>
              <h4 className={styles.input_text}>Confirm password</h4>
              <form className={styles.input_placeholder}>
                <input className={styles.input_placeholder_i} type="password" minlength="6" required />
              </form>
            </div>

            <button className={styles.button}>
              <text className={styles.button_text}>Sign up</text>
            </button>

          </main>
        </div>

        <div className={styles.decorative}>
            <Image className={styles.image} src="/Imagerocket.jpg" alt="rocket image" width={800} height={864} />
        </div>


      </main>
    </div>
  )
}
