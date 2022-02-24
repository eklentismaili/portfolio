import AboutTabs from '../components/AboutTabs';
import VerticalText from '../components/VerticalText';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-2 pb-5 pb-md-0">
            <VerticalText name="About" number={1} />
          </div>
          <div className="col-md-10">
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
