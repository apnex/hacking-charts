var count = 26;
var max = 100;

var data = {
	labels: [
		'ALCOA OF AUSTRALIA LIMITED',
		'Automotive Holdings Group Ltd',
		'Bankwest',
		'Clough Projects Pty. Ltd.',
		'Curtin University of Technology',
		'Department for Child Protection',
		'Department of Commerce (WA)',
		'Department Of Health WA',
		'Department of Housing',
		'Department of Mines & Petroleum',
		'HBF Health Funds Inc.',
		'Inpex',
		'INSURANCE COMMISSION OF WESTERN AUSTRALIA',
		'Minara Resources Pty. Ltd.',
		'RACING AND WAGERING WESTERN AUSTRALIA',
		'Roy Hill Holdings Pty Ltd',
		'Serco Limited',
		'South32',
		'St John of God Healthcare Inc',
		'Synergy',
		'WA Police',
		'Water Corporation',
		'Wesfarmers Resources',
		'Western Australia Police',
		'Western Power',
		'Woodside Energy Ltd'
	],
	series: [{
		name: 'series2',
		data: [
			33610,
			175802,
			0,
			19739,
			411515,
			43240,
			18400,
			112096,
			40202,
			42161,
			111530,
			85251,
			0,
			26737,
			0,
			375479,
			512050,
			20351,
			54001,
			71095,
			78735,
			20946,
			11767,
			153828,
			165838,
			31114
		]
	}]
}

// options
var opts = {
	height: 700,
	//width: 600,
	axisX: {
		offset: 60
	},
	axisY: {
		onlyInteger: true
	},
	series: {
		'series2': {
			lineSmooth: Chartist.Interpolation.simple(),
			showArea: true
		}
	}
};

// Creating a bar chart with no labels and a series array with one series. For the series we generate random data with `count` elements and random data ranging from 0 to `max`.
//var chart = new Chartist.Bar('.ct-chart', {
/*
var chart = new Chartist.Bar('.ct-chart', {
	//labels: [...Array(count).keys()], // 0 to count
	labels: accounts,
	series: [{
		name: 'series2',
		data: Chartist.times(count).map(Math.random).map(Chartist.mapMultiply(max))
	}]
}, opts);
*/

var chart = new Chartist.Bar('.ct-chart', data, opts);

// This is the bit we are actually interested in. By registering a callback for `draw` events, we can actually intercept the drawing process of each element on the chart.
chart.on('draw', function(context) {
	// First we want to make sure that only do something when the draw event is for bars. Draw events do get fired for labels and grids too.
	switch(context.type) {
		case 'bar':
			context.element.attr({
				style: 'stroke: hsl(' + Math.floor(Chartist.getMultiValue(context.value) / max * 100) + ', 50%, 50%); stroke-width: 20;'
			});
		break;
		case 'line':
			context.element.attr({
				style: 'stroke: #0000ff;'
			});
		break;
		case 'point':
			context.element.attr({
				style: 'stroke: ' + colors['mBlue']
			});
		break;
		case 'area':
			context.element.attr({
				style: 'fill: #00ffff;'
			});
		break;
		case 'label':
			context.element.attr({
				style: 'fill: #00ff00;'
			});
		break;
	}
	console.log(context);
});

