"use client";

import * as ParseLib from "parse/dist/parse.min.js";
const Parse = ParseLib.default || ParseLib;

if (!Parse.applicationId) {
  Parse.initialize("APP_ID", "JS_KEY");
  Parse.serverURL = "https://parseapi.back4app.com/";
}

export default Parse;