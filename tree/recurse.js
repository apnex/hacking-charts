#!/usr/bin/env node

var data = [
	{ "name" : "Level 2: A", "parent":"Top Level" },
	{ "name" : "Top Level", "parent":"null" },
	{ "name" : "Son of A", "parent":"Level 2: A" },
	{ "name" : "Daughter of A", "parent":"Level 2: A" },
	{ "name" : "Level 2: B", "parent":"Top Level" },
	{ "name" : "MOOO", "parent": "Daughter of A" }
];

var dataMap = data.reduce(function(map, node) {
	map[node.name] = node;
	return map;
}, {});

var treeData = [];
data.forEach(function(node) {
	// add to parent
	var parent = dataMap[node.parent];
	if (parent) {
		// create child array if it doesn't exist
		(parent.children || (parent.children = []))
		// add node to child array
		.push(node);
	} else {
		// parent is null or missing
		treeData.push(node);
	}
});

console.log(JSON.stringify(treeData, null, "\t"));

