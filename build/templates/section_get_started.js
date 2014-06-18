var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"get-started\" class=\"section-header\">\n\n  <div class=\"container\">\n    <h2>Get Started</h2>\n    <p>\n      How to start using SideComments.js on your website immediately.\n    </p>\n  </div>\n\n</div>\n\n<div class=\"container\">\n\n  <div class=\"margin-bottom-big download-options\">\n    <h3>\n      1. Download SideComments.js\n    </h3>\n    <div class=\"row clearfix\">\n      <div class=\"column third\">\n        <h4 class=\"margin-bottom-small\">Direct download</h4>\n        <p>Download SideComments.js immediately.</p>\n        <a href=\"https://github.com/aroc/side-comments/archive/master.zip\" class=\"btn\">\n          <i class=\"fa fa-cloud-download\"></i>\n          Download SideComments.js\n        </a>\n      </div>\n      <div class=\"column third\">\n        <h4 class=\"margin-bottom-small\">Source code</h4>\n        <p>Check out the source code on Github.</p>\n        <a href=\"https://github.com/aroc/side-comments\" class=\"btn\">\n          <i class=\"fa fa-github\"></i>\n          SideComments.js on Github\n        </a>\n      </div>\n      <div class=\"column third\">\n        <h4 class=\"margin-bottom-small\">Install with Component</h4>\n        <p>\n          You can install SideComments via component.\n          <br>\n          <br>\n          <code>component install aroc/side-comments</code>\n          <br>\n          <br>\n          or include side-comments in your <strong>component.json file</strong> <code>dependencies</code> object.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"margin-bottom-big\">\n    <h3>\n      2. Include SideComments.js in your project.\n    </h3>\n    <div class=\"alert\">\n      <h3>\n        jQuery Required\n      </h3>\n      <p>\n        You must include jQuery in your project in order for SideComments.js to work. This component uses jQuery to manage DOM manipulation and will not work without it.\n      </p>\n    </div>\n    <p>\n      You'll need to include the following single JavaScript file and two CSS files to get SideComments.js working.\n      <br>  \n      <code>side-comments.js</code>\n      <br>\n      <code>side-comments.css</code>\n      <br>\n      <code>default-theme.css</code>\n      <p>\n        <i class=\"fa fa-info-circle\"></i>\n        You can choose <strong>not</strong> to include <code>default-theme.css</code>, but you'll need to style SideComments youself if you choose not to include it, as <code>side-comments.css</code> handles only the basic layout styling.\n      </p>\n    </p>\n\n  </div>\n  \n  <div class=\"margin-bottom-big\">\n    <h3>\n      3. Set up your HTML.\n    </h3>\n    <p>\n      You need to have a wrapper element to point SideComments at and two things on each commentable section; the class <code>commentable-section</code> and the data attribute <code>data-section-id</code>, which holds the unique ID of that commentable-section for this page.\n    </p>\n    <script src=\"https://gist.github.com/aroc/ae4eeb1023d435b6e45b.js\"></script>\n  </div>\n\n  <div class=\"margin-bottom-big\">\n    <h3>\n      4. Initialize a new SideComments object.\n    </h3>\n    <br>\n    <script src=\"https://gist.github.com/aroc/5ecc7921fbfd5fc26731.js\"></script>\n\n    <p>\n      The current user is an object and is expected to be in the following format:\n    </p>\n    <script src=\"https://gist.github.com/aroc/02a0f8badf219da12667.js\"></script>\n    <p>\n      The existing comments argument is expected to be an array of sections with a nested array of comments. It needs to look like the following:\n    </p>\n    <script src=\"https://gist.github.com/aroc/54a2669783231a0d2215.js\"></script>\n  </div>\n\n  <div class=\"margin-bottom-big\">\n    <h3>\n      5. Listen to post and delete events.\n    </h3>\n    <p>\n      Finally, in order to know when a comment has been posted or deleted, just bind to your SideComments' object events and then do whatever you want with them, (likely save and delete from your database).\n    </p>\n    <script src=\"https://gist.github.com/aroc/a0175669102bec44ea28.js\"></script>\n  </div>\n\n</div>";
  });