// import next 
import Image from 'next/image';
import Logo from '../../public/logoBunner.png'
import Link from 'next/link';


//import styles
import s from './footer.module.css'

//import components
import About from '../contentMain/About/About'

// import Images 


const Footer = () => {
  return <div>

    <footer className={s.footer__container}>

      <div className={s.footer__logo}>
        <Image src={Logo} alt="img" width={405} height={120} />
      </div>
      <div className={s.footer__links}>

        <nav>
          <ul className={s.about}>
            <h1><Link href="#about__container"><a>About</a></Link></h1>
            <li>Github repo</li>
            <li>Slack</li>
          </ul>
        </nav>

        <nav>
          <ul className={s.about}>
            <h1>Learning Platform</h1>
            <li>Home</li>
            <li>Courses</li>
            <li>Free Workshops</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </nav>
        <nav>
          <ul className={s.about}>
            <h1>Template</h1>
            <li>Instructions</li>
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
          </ul>
        </nav>
        <nav>
          <ul className={s.about}>
            <h1>Template</h1>
            <li>Instructions</li>
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>About</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>
      <span className={s.footer__title}>
        © Books-shop 2022
      </span>
    </footer>
  </div>;
};
export default Footer;
