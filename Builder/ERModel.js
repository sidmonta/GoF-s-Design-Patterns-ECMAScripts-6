var ERModel = (function ()	{
	var modelEntities = new Map();
	var modelRelations = new Map();

	this.addEntity = function(name)	{
		modelEntities.set(name, {'name': name});
	};


	this.addRelationship = function(fromEntity, toEntity, relation)	{
		modelRelations.set(relation, {
			'name': relation,
			'entity1': modelEntities.get(fromEntity),
			'entity2': modelEntities.get(toEntity),
		});
	};

	this.addCardMin = function(entity, relation, value)	{
		let rel = modelRelations.get(relation);
		if (entity === rel.entity1.name)	rel.cardMin1 = value;
		else rel.cardMin2 = value;
	};

	this.addCardMax = function(entity, relation, value)	{
		let rel = modelRelations.get(relation);
		if (entity === rel.entity1.name)	rel.cardMax1 = value;
		else rel.cardMax2 = value;
	};

	this.showStructure = function ()	{
		for (let elem of modelRelations.values())
			console.log(`[${elem.entity1.name}] --(${elem.cardMin1},${elem.cardMax1})-- <${elem.name}> --(${elem.cardMin2},${elem.cardMax2})-- [${elem.entity2.name}]`);

	}

});

export ERModel;