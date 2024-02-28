import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [{input: './exports/main.ts',name:'main'}],
	outDir: '.build',
	declaration: true,
	rollup: {
		emitCJS: true
	}
})