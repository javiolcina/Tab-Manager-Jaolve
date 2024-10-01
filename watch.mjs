import * as esbuild from 'esbuild';

async function watch() {
	const ctx = await esbuild.context({
		entryPoints: [
			'lib/service_worker/service_worker.ts',  // Main service worker entry point
			'lib/popup/popup.tsx'                    // Popup script (JSX or JS)
		],
		bundle: true,
		sourcemap: true,  // Generate source maps for easier debugging
		target: 'chrome88', // Set browser target version
		outdir: 'outlib',   // Output directory
		plugins: [{
			name: 'rebuild-notify',
			setup(build) {
				build.onEnd(result => {
					console.log(`build ended with ${result.errors.length} errors`);
					// HERE: somehow restart the server from here, e.g., by sending a signal that you trap and react to inside the server.
				})
			},
		}],
		define: {__VERSION__: '"' + process.env.npm_package_version + '"'}
	});

	await ctx.watch();  // Watch mode
	console.log('Watching for changes...');
}

watch();
