"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleWorldGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
function simpleWorldGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log('hello world');
        // const projectRoot = `libs/${options.name}`;
        // addProjectConfiguration(tree, options.name, {
        //   root: projectRoot,
        //   projectType: 'library',
        //   sourceRoot: `${projectRoot}/src`,
        //   targets: {},
        // });
        // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.simpleWorldGenerator = simpleWorldGenerator;
exports.default = simpleWorldGenerator;
//# sourceMappingURL=generator.js.map