import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")
  const [confirmPassw, setConfirmPassw] = useState("") 

  const handleChange = (e) => {
    const {name, value} = e.target 
    if (name === "email") {
      setEmail(value)
    } else if ( name === "passw") {
      setPassw(value)
    } else if (name === "confirmPassw") {
      setConfirmPassw(value) 
    } else return
  }

  const handleSubmit = () => {
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/

    if ( !email | !passw | !confirmPassw ) {
      alert("You must complete all fields")
    } else if(passw.length < 6) {
      alert("Your password needs a minimium of six characters")
    } else if (!validation.test(passw)) {
      alert("Your password must contain an upper-case letter, an lower-case letter and a number")
    } else if (passw !== confirmPassw) {
      alert("Your passwords doesn't match")
    } else {
      window.localStorage.setItem("email", email)
      window.localStorage.setItem("passw", passw)
    }
  }
  console.log(email, passw, confirmPassw)


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

            <form className={styles.form} onSubmit={handleSubmit} > 
              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="e-mail">Email address</label>
                <input className={styles.input_input} id="e-mail" type="email" maxLength="64" name="email" onChange={handleChange} />
              </div>

              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="password">Password</label>
                <input className={styles.input_input}  id="password" type="password" name="passw" onChange={handleChange} />
              </div>

              <div className={styles.input}>
                <label className={styles.input_text} htmlFor="confirmpassword">Confrim password</label>
                <input className={styles.input_input}  id="confirmpassword" type="password" name="confirmPassw" onChange={handleChange} />
              </div>

              <button type="submit" className={styles.button}>
                Sign up
              </button>
            </form>
          </div>
      </div>

      <img src="/Imagerocket.jpg" alt="rocket image" className={styles.image} />

    </div>
  )
}


