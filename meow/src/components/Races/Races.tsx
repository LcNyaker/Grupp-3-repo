import './Races.scss';
import cittens from '../../assets/cittens.jpg';
import siamese from '../../assets/siamese.jpg';
import perser from '../../assets/perser.jpg';
import norskskogskatt from '../../assets/norskskogskatt.jpg';

const raceData = [
  {
    img: cittens,
    alt: 'Om oss',
    title: 'Om oss',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo a lectus tempor dignissim. Nulla facilisi. Integer nec lacus sit amet odio vulputate vulputate.`
  },
    {
    img: perser,
    alt: 'Perser',
    title: 'Perser',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo a lectus tempor dignissim. Nulla facilisi. Integer nec lacus sit amet odio vulputate vulputate.`
  },
    {
    img: norskskogskatt,
    alt: 'Norskskogskatt',
    title: 'Norskskogskatt',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo a lectus tempor dignissim. Nulla facilisi. Integer nec lacus sit amet odio vulputate vulputate.`
  },
  {
    img: siamese,
    alt: 'Siamese',
    title: 'Siamese',
    description: `Ut sed risus non orci fermentum scelerisque. Donec vel pretium risus. Morbi condimentum, sapien sed euismod fermentum.`
  }
];

const Races = () => {
  return (
    <section className='races' id='races'>
      {raceData.map((race, index) => (
        <div className='race' key={index}>
          <div className='race-image'>
            <img 
              className='races-images' 
              src={race.img} 
              width="800" 
              height="602" 
              loading="lazy" 
              alt={race.alt} 
            />
            <h4>{race.title}</h4>
          </div>
          <div className='races-content'>
            <article className='content'>
              <div className='content-heading'>
                <h2 className="heading">{race.title}</h2>
              </div>
              <div className='content-text'>
                <p>{race.description}</p>
              </div>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Races;
