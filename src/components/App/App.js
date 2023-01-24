import styles from '../App/App.module.css';
import React, { Component } from 'react'
import sun from '../images/sun.svg'
import search from "../images/search.svg"
import ottocat from '../images/ottocat.png'
import loc from '../images/003-pin.svg'
import office from '../images/office.svg'
import url from '../images/url.svg'
import twitt from '../images/twit.svg'

 export default class App extends Component {
   render() {
     return (
      <body className={styles['dark']}>
        <div className={styles.box}>
          <header className={styles.header}>
            <div className={styles.title}>definder</div>
            <div className={styles.them}>Light <img src={sun} alt="sun" /></div>
          </header>
          <div className={styles.inputBox}>
            <img className={styles.ic} src={search} alt="search" />
            <input className={styles.inp} type="text" placeholder='Search GitHub username…' />
            <button className={styles.btn}>Search</button>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileImg}><img src={ottocat} className={styles.images} alt="ottocat" /></div>
            <div className={styles.info}>
              <div className={styles.names}>
                <div className={styles.nameBox}>
                  <div className={styles.full}>The Octocat </div>
                  <div className={styles.nic}>@octocat </div>
                </div>
                <div className={styles.age}>Joined 25 Jan 2011</div>
              </div>
              <div className={styles.bioghraphy}>This profile has no bio</div>
              <div className={styles.follows}>
                <div className={styles.followers}>
                  <div className={styles.txt}>Repos</div>
                  <div className={styles.num}>8</div>
                </div>
                <div className={styles.followers}>
                  <div className={styles.txt}>Followers</div>
                  <div className={styles.num}>3938</div>
                </div>
                <div className={styles.followers}>
                  <div className={styles.txt}>Following</div>
                  <div className={styles.num}>9</div>
                </div>
              </div>
                <div className={styles.urls}>
                  <div className={styles.item}>
                    <img src={loc} alt="locatiion" />
                    San Francisco
                  </div>
                  <div className={styles.item}>
                    <img src={twitt} alt="locatiion" />
                    Not Available
                  </div>
                  <div className={styles.item}>
                    <img src={url} alt="locatiion" />
                    https://github.blog
                  </div>
                  <div className={styles.item}>
                    <img src={office} alt="locatiion" />
                    @github
                  </div>
                </div>
            </div>
          </div>
        </div>
      </body>
     )
   }
 }
 