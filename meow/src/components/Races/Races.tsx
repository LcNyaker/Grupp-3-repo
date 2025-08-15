import './Races.scss'
import cittens from '../../assets/cittens.jpg';

const Races = () => {
  return (
    <>
      <section className='races'>
      <img className='races-images' src={cittens}
        width="800"
        height="602"
        loading="lazy" alt='About Us'/>
        <div className='races-content'>
          <article className='content'>
            <div className='content-heding'>
              <h2 className="heading">Main Coon</h2>
            </div>
            <div className='content-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo a lectus tempor dignissim. Nulla facilisi. Integer nec lacus sit amet odio vulputate vulputate. Vivamus volutpat nulla non augue convallis, sed malesuada magna vestibulum. Suspendisse potenti. Phasellus interdum malesuada ante, eget sagittis justo cursus nec. Proin eu sem eget nulla feugiat bibendum at sit amet justo. Ut sed risus non orci fermentum scelerisque. Donec vel pretium risus. Morbi condimentum, sapien sed euismod fermentum, metus libero sagittis turpis, ac luctus ligula sapien vel nulla.
                </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Races;