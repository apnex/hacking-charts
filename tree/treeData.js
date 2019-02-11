var treeData = [
	{
		"name": "Top Level",
		"parent": "null",
		"value": 10,
		"type": "black",
		"level": "red",
		"children": [
			{
				"name": "Level 2: A",
				"parent": "Top Level",
				"value": 5,
				"type": "grey",
				"level": "red",
				"children": [
					{
						"name": "Son of A",
						"parent": "Level 2: A",
						"value": 5,
						"type": "steelblue",
						"level": "orange"
					},
					{
						"name": "Daughter of A",
						"parent": "Level 2: A",
						"value": 18,
						"type": "steelblue",
						"level": "red"
					}
				]
			},
			{
				"name": "Level 2: B",
				"parent": "Top Level",
				"value": 10,
				"type": "grey",
				"level": "green"
			}
		]
	}
]
