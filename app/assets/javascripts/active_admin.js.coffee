#= require active_admin/base
#= require best_in_place
#= require jquery.purr
#= require best_in_place.purr
#= require activeadmin/trumbowyg/trumbowyg
#= require activeadmin/trumbowyg_input
#= require activeadmin/trumbowyg/plugins/upload/trumbowyg.upload
#= require activeadmin/trumbowyg/plugins/noembed/trumbowyg.noembed.min

$(document).ready ->
  jQuery(".best_in_place").best_in_place()
 
