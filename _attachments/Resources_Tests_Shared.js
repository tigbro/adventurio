/*
 * Mapped with Jetty on lib/
 */
var libFolder = "lib_tests/"; 
var srcFolder = "src_tests/";
$LAB
 .setGlobalDefaults({AlwaysPreserveOrder :true, UseLocalXHR : true})
  .script("lib/"+"jquery-1.7.1.js") // should be already present
 .script(libFolder+"jquery.json-2.3.js") // 2.3 September 2011 http://code.google.com/p/jquery-json/downloads/list
 .script(libFolder+"jasmine.js") // 1.1.0 http://pivotal.github.com/jasmine/download.html
 .script(libFolder+"jasmine-html.js") // https://github.com/tigbro/jasmine-ui/blob/master/test/lib/jasmine-html.js
 .script(libFolder+"sinon-1.3.1.js") // 1.3.1 http://sinonjs.org/
 .script(libFolder+"jasmine-sinon.js") // 10. Februar 2011 https://github.com/froots/jasmine-sinon
// .script(libFolder+"JasmineAdapter.js") // 1.1 https://github.com/ibolmo/jasmine-jstd-adapter/blob/master/src/JasmineAdapter.js
 .script(libFolder+"mock-ajax.js")// 23. September 2011 https://github.com/pivotal/jasmine-ajax/blob/master/lib/mock-ajax.js
 .script(libFolder+"jasmine-jquery.js")// 11. August 2011 https://github.com/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js
//  Tests
// .script(srcFolder+"adventurio/views/reader/IndexIntegrTest.js")
// .script(srcFolder+"adventurio/models/StoryIntegrTest.js")
//.script(srcFolder+"adventurio/utilities/JsonTest.js")
 // .script(srcFolder+"adventurio/models/LoginTest.js")
 // .script(srcFolder+"adventurio/views/creator/SignupTest.js")
 // .script(srcFolder+"adventurio/views/reader/IndexTest.js")
 

