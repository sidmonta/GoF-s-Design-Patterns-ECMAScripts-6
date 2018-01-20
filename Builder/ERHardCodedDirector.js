export class ERHardCodedDirector	{

	static getModel(builder)	{
		builder.addEntity("Student");
		builder.addEntity("University");
		builder.addEntity("Professor");

		builder.addRelationship("Student", "University", "Studies at");

		builder.addCardMin("Student", "Studies at", '1');
		builder.addCardMax("Student", "Studies at", '1');
		builder.addCardMin("University", "Studies at", '0');
		builder.addCardMax("University", "Studies at", 'N');

		builder.addRelationship("University", "Professor", "Has");

		builder.addCardMin("University", "Has", '0');
		builder.addCardMax("University", "Has", 'N');
		builder.addCardMin("Professor", "Has", '1');
		builder.addCardMax("Professor", "Has", 'N');

		return builder.getModel();

	}
}