import $ from 'jquery';
import mustache from 'mustache';
import 'slick-carousel';

class Cv {

init () {
  var promise = $.getJSON('resume.json');
  promise.done(this.parseContent).then(this.parseInterface);
}

parseContent (data) {
  var template = $('#profile-template').html();
  var worktemplate = $('#work-template').html();
  mustache.parse(template);
  var rendereduser = mustache.to_html(template, data);
  $('#target-user').html(rendereduser);
  var renderedwork = mustache.to_html(worktemplate, data);
  $('#target-work').html(renderedwork);
  this.parseInterface;
}

parseInterface (data) {
 /* do more */
}

}

export default Cv;
