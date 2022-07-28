require('esbuild').build({
	entryPoints: ['src/index.tsx'],
	bundle: true,
	outfile: 'dist/bundle.js',
  }).catch(() => process.exit(1))