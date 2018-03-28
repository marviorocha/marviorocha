
CKEDITOR.editorConfig = function (config) {
  // ... other configuration ...
config.skin = 'bootstrapck';
config.uiColor = '#ECF0F1';
config.height = 300;
config.toolbarCanCollapse = true;

config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'NewPage,Preview,Print,Templates,Cut,Copy,Find,Replace,Form,TextField,Checkbox,Radio,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,BidiLtr,BidiRtl,Language,Unlink,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,ShowBlocks,About,Save';


  // ... rest of the original config.js  ...
}
