//包装函数
module.exports = function(grunt) {
	
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		
		//获取 package.json 的信息
		pkg: grunt.file.readJSON('package.json'),
		
		//jshint插件的配置信息
		jshint: {
			build: ['Gruntfile.js', 'static/src/js/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		
		//css插件配置信息
		csslint: {
			build: ['static/src/css/*.css'],
			options: {
				csslintrc: '.csslint'
			}
		},
		
		//watch插件的配置信息
		watch: {
			build: {
				files: ['static/src/js/*.js', 'static/src/css/*.css'],
				tasks: ['jshint',],
				options: {
					spawn: false
				}
			}
		}
	});
	
	//告诉grunt将使用插件
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//告诉grunt当我们在终端输入grunt时需要做些什么
	grunt.registerTask('default',['jshint', 'csslint', 'watch']);
};