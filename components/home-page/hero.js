import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}> 
        <Image 
          src="/images/site/diego2.jpeg" 
          alt="An image showing Diego" 
          width={300}
          height={300}
        />
      </div>
      <h1>Hey my name is Diego</h1>
      <p>I blog about web technologies from the eyes of a computer science student</p>
    </section>
  )
}