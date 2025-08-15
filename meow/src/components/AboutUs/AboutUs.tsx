import cittens from '../../assets/cittens.jpg';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <>
    <section className='about-us'>
      <img className='about-us-image' src={cittens}
        width="800"
        height="602"
        loading="lazy" alt='About Us'/>
      <div className='about-us-content'>
        <h2 className="heading">Vilka är vi?</h2>
        <p>Vi är ett gäng kattnördar som lever för att sprida kattglädje och fluffiga bilder. <br />
          Vi är inga veterinärer (men experter på att googla kattfrågor) och vi är helt opartiska när vi säger att katter är bäst i världen. <br />
          Här hittar du historier, tips och massor av pälsbollar som styr världen – från soffan.
        </p>
      </div>
    </section>
    </>
  );
};

export default AboutUs;