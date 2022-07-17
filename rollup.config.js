import { nodeResolve } from '@rollup/plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import commonjs from 'rollup-plugin-commonjs';

const input = [
  './src/index.js',
];

export default [
  {
    input,
    plugins: [
      nodeResolve(),
      excludeDependenciesFromBundle(),
      commonjs(),
      eslint(),
    ],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
  },
];
