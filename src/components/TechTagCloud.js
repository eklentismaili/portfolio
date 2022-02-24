import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const myTags = [
  'JavaScript',
  'CSS',
  'HTML',
  'Scss',
  'Bootstrap',
  'React',
  'Vuejs',
  'Vuex',
  'Git',
  'Webpack',
  'Typescript',
  'npm',
  'Ionic',
  'jQuery',
];

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

function TechTagCloud() {
  useEffect(() => {
    var tagCloud = TagCloud(document.querySelector('.content'), myTags, {
      // radius in px
      radius: 250,

      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'slow',

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 90,

      // interact with cursor move on mouse out
      keep: true,
    });
  }, []);

  return <span className="content"></span>;
}

export default TechTagCloud;
