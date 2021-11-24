/**
 * This file is automatically generated from swagger.  You may safely overwrite the existing file with this one.
 *
 * To use this file in the 7 Miles Starter, set up your types.ts file as follows:
 *
 * import { CONTROLLER_TYPES } from './controller-types';
 *
 * const TYPES = Object.assign(
 *  {
 *    ...all of your non-controller (manually created) types go here
 *  },
 *  CONTROLLER_TYPES
 * );
 *
 * export { TYPES }
 */
const CONTROLLER_TYPES = {
  {{#each swagger.endpoints}}
  {{pascalCase this}}Repository: Symbol.for('{{pascalCase this}}Repository'),
  {{pascalCase this}}Service: Symbol.for('{{pascalCase this}}Service'),
  {{pascalCase this}}Controller: Symbol.for('{{pascalCase this}}Controller'),

  {{/each}}
}

export { CONTROLLER_TYPES }