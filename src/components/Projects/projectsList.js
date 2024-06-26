import ppp from '../../assets/PPPgraphs.PNG';
import acp from '../../assets/ACP_UI.PNG';
import tensorflow from '../../assets/tensorflow-graphs.JPG';
import fitbit_home_page from '../../assets/fitbit_home_page.JPG';
import blueprint_logo from '../../assets/blueprint_logo.png';

import projectDescriptions from './ProjectDescriptions';

const projectsList = [
	{
		title: 'Anti-Copy-Paster Undergraduate Research',
		image: acp,
		link: 'https://github.com/refactorings/anti-copy-paster',
	},
	{
		title: 'Node Visualizer',
		image: blueprint_logo,
		link: 'https://github.com/stevensblueprint/nycmesh-node-visualizer',
	},
	{
		title: 'Ping Pong Tracking Website',
		image: ppp,
		link: 'https://github.com/ALEEF02/PingPongPage',
	},
	{
		title: 'Fitbit Health App',
		image: fitbit_home_page,
		link: 'https://jon0.netlify.app/#projects',
	},
	{
		title: 'Tensorflow Image Classifier',
		image: tensorflow,
		link: 'https://github.com/JonMike8/Cat-image-classifier',
	},
];
export const loadProjects = () => {
	for (let i = 0; i < projectsList.length; i++) {
		let currentProject = projectsList[i];
		currentProject['desc'] = projectDescriptions[i];
	}
	return projectsList;
};
