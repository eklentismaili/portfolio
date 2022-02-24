import TechTagCloud from '../components/TechTagCloud';
import VerticalText from '../components/VerticalText';

function Technologies() {
  return (
    <section className="technologies">
      <div className="container">
        <div className="row">
          <div className="col-md-2 pb-5 pb-md-0">
            <VerticalText name="Technologies" number={2} />
          </div>
          <div className="col-md-10 technologies-tag-cloud">
            <TechTagCloud />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
