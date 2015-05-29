import {ModelBuilder} from 'ModelBuilder';

export class NoOrientedERBuilder extends ModelBuilder	{

	constructor()	{
		super();
		this.model = new ERModel();
	}

	addEntity(name)	{
		this.model.addEntity(name);
	}

	addRelationship(fromEntity, toEntity, relation)	{
		this.model.addRelationship(fromEntity, toEntity, relation);
	}

	addCardMin(entity, relation, value)	{
		this.model.addCardMin(entity, relation, value);
	}

	addCardMax(entity, relation, value)	{
		this.model.addCardMax(entity, relation, value);
	}

	getModel()	{
		return this.model;
	}
}