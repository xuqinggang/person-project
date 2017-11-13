import path from 'path';

// base enviroment config
import base_env_config from './base.env.config.js';

const ROOTPATH = process.cwd();

const dev_env_config = {
	
};


export default {
	...dev_env_config,
	...base_env_config
};