import path from 'path';

const ROOTPATH = process.cwd();
const dev_env_config = {
	node_modules_path: path.join(ROOTPATH, 'node_modules'),
	client_path: path.join(ROOTPATH, 'client'),
	assets_path: path.join(ROOTPATH, 'client/assets'),
	component_path: path.join(ROOTPATH, 'client/component'),
};


export default dev_env_config;