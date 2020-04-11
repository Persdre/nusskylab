'use strict';
$(document).ready(function () {
  $('input[name="feedback[feedback_to_team]"]').parent().parent().parent().children('.form-group.feedback_target_team_id').show();
  $('input[name="feedback[feedback_to_team]"]').parent().parent().parent().children('.form-group.feedback_adviser_id').hide();

  $('input[name="feedback[feedback_to_team]"]').change(function (e) {
    if ($(e.target).prop('checked')) {
      $(e.target).parent().parent().parent().children('.form-group.feedback_target_team_id').show();
      $(e.target).parent().parent().parent().children('.form-group.feedback_adviser_id').hide();
    } else {
      $(e.target).parent().parent().parent().children('.form-group.feedback_target_team_id').hide();
      $(e.target).parent().parent().parent().children('.form-group.feedback_adviser_id').show();
    }
  });
});
