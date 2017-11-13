import path from 'path';

const ROOTPATH = process.cwd();

export default {
	isProduction: 'production' == process.env.NODE_ENV,
	node_modules_path: path.join(ROOTPATH, 'node_modules'),
	client_index_path: path.join(ROOTPATH, 'src/app/index.js'),
	src_client_path: path.join(ROOTPATH, 'src/app'),
	src_assets_path: path.join(ROOTPATH, 'src/app/assets'),
	src_component_path: path.join(ROOTPATH, 'src/app/components'),
	dist_client_path: path.join(ROOTPATH, 'dist/app')
}
