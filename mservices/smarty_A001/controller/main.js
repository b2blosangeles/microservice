var data = {
	greeting: 'Hi, there are some JScript books you may find interesting:',
	books : [
		{
			title  : 'JavaScript: The Definitive Guide',
			author : 'David Flanagan',
			price  : '31.18'
		},
		{
			title  : 'Murach JavaScript and DOM Scripting',
			author : 'Ray Harris',
		},
		{
			title  : 'Head First JavaScript',
			author : 'Michael Morrison',
			price  : '29.54'
		}
	]
};
var tpl = new jSmart(_TPL_['/mservices/smarty_A001/view/infobox.html']);
var res = tpl.fetch( data );

$($('.'+mapping_data.id)[0]).html(res);
