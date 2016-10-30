import path from 'path';

const ROOTPATH = process.cwd();

export default {
	ismorphic: true,
	__dirname: process.cwd(), // project root directory
	views_path: path.join(ROOTPATH, 'server/views'),
	views_index_path: path.join(ROOTPATH, 'server/views/index.ejs'),
};