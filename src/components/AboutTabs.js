import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Job from '../assets/images/icons/experience.png';
import Education from '../assets/images/icons/education.png';
import Hobbies from '../assets/images/icons/hobbies.png';

import Gym from '../assets/images/icons/gym.png';
import Anime from '../assets/images/icons/anime.png';
import Coding from '../assets/images/icons/coding.png';
import Gaming from '../assets/images/icons/gaming.png';

function AboutTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <img src={Job} alt="Experience" className="img-unset" />
          <h6 className="mb-0">Experience</h6>
        </Tab>
        <Tab>
          <img src={Education} alt="Education" className="img-unset" />
          <h6 className="mb-0">Education</h6>
        </Tab>
        <Tab>
          <img src={Hobbies} alt="Hobbies" className="img-unset" />
          <h6 className="mb-0">Hobbies</h6>
        </Tab>
      </TabList>

      <TabPanel>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2021 - 09/2022"
            iconStyle={{
              background:
                'linear-gradient(90deg,rgba(96, 213, 255, 1) 13%,rgb(197, 197, 197) 84%)',
              color: '#fff',
            }}
          >
            <h3 className="vertical-timeline-element-title">UpStruct</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tirane, Albania
            </h4>
            <p>Front End Developer</p>
            <p>
              - Worked with a team of senior software engineers building
              single-page-applications using Reactjs and Typescript.
              <br></br>- Assisted in building beautiful user interfaces for
              different clients without compromising functionality for
              aesthetics.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2020 - 11/2021"
            iconStyle={{
              background:
                'linear-gradient(90deg,rgba(96, 213, 255, 1) 13%,rgb(197, 197, 197) 84%)',
              color: '#fff',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              7th Block Technology & Communications
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tirane, Albania
            </h4>
            <p>Front End Developer</p>
            <p>
              - In charge of various projects from landing pages, content
              management systems to large and complex SaaS solutions using
              Vuejs, Vuex etc.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TabPanel>
      <TabPanel>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 -2020"
            iconStyle={{
              background:
                'linear-gradient(90deg,rgba(96, 213, 255, 1) 13%,rgb(197, 197, 197) 84%)',
              color: '#fff',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor Business Informatics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Tirana
            </h4>
            <p>Faculty of Economy</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2017"
            iconStyle={{
              background:
                'linear-gradient(90deg,rgba(96, 213, 255, 1) 13%,rgb(197, 197, 197) 84%)',
              color: '#fff',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Naim Frasheri High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Durres, Albania
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TabPanel>
      <TabPanel>
        <ul className="hobbies">
          <li className="hobby">
            <img src={Coding} alt="Coding" />
            <h5>Coding</h5>
          </li>
          <li className="hobby">
            <img src={Gaming} alt="Gaming" />
            <h5>Gaming</h5>
          </li>
          <li className="hobby">
            <img src={Anime} alt="Anime" />
            <h5>Anime</h5>
          </li>
          <li className="hobby">
            <img src={Gym} alt="Gym" />
            <h5>Gym</h5>
          </li>
        </ul>
      </TabPanel>
    </Tabs>
  );
}

export default AboutTabs;
