import path from 'path';

const ROOTPATH = process.cwd();

export default {
	isProduction: 'production' == process.env.NODE_ENV,
	node_modules_path: path.join(ROOTPATH, 'node_modules'),
	client_index_path: path.join(ROOTPATH, 'src/client/index.js'),
	src_client_path: path.join(ROOTPATH, 'src/client'),
	src_assets_path: path.join(ROOTPATH, 'src/client/assets'),
	src_component_path: path.join(ROOTPATH, 'src/client/component'),
	dist_client_path: path.join(ROOTPATH, 'dist/client')
}