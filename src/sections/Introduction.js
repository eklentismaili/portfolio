import Me from '../assets/images/me.png';

function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={Me} className="introduction-image" alt="Eklent Ismaili" />
          </div>
          <div className="col-md-6 text-center py-3 align-self-center">
            <h6 className="linear-gradient introduction-subheader">
              Front End Developer
            </h6>
            <h1 className="py-4 introduction-header">
              Think the <span className="linear-gradient">Program</span>,
              <br></br>
              <span className="linear-gradient">Program</span> the Thinking.
            </h1>
            <p className="introduction-text">
              Hello, I am Eklent a <span>Front End Developer</span> with strong
              technical agility and an eye for details to deliver an optimal
              user experience. Proven ability to take an idea from conception to
              application, making thoughtful decisions throughout development
              and lifecycle. A humble team player always searching for crafting
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
