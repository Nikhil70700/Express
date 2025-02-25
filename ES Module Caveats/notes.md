<!-- 
1. No require, Use import Instead
CommonJS (require) does not work in ES Modules.
Use import instead of require.
 -->

 <!-- 
 2. No __dirname or __filename
In CommonJS, we can use __dirname and __filename directly.
In ES Modules, these are not defined, so you need to use import.meta.url with fileURLToPath.

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  -->

  <!-- 
3. File Extensions Are Mandatory
When using import, you must include the file extension (.js, .mjs, etc.).
import { PORT } from './config.js';

   -->

   <!-- 
4. JSON Modules Need Explicit Import
You cannot use require() for JSON.
Use import with assert { type: "json" }.
✅ Correct Way to Import JSON in ESM

import config from './config.json' assert { type: 'json' };
console.log(config.PORT);

    -->

<!-- 
 Named Imports vs. Default Imports
When using CommonJS modules in an ES Module, named imports might not work.
Use import * as or default imports instead.

import * as fs from 'fs'; // For built-in modules like 'fs'
import express from 'express'; // For default exports
-->