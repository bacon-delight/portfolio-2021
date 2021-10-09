module.exports = {
	pwa: {
		name: process.env.APP_NAME || "Dipanjan De | Portfolio",
	},
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = process.env.APP_NAME || "Dipanjan De | Portfolio";
			return args;
		});
	},
};
