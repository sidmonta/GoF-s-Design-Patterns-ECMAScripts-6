import ModelBuilder from 'ModelBuilder'

export class OrientedErBuilder extends ModelBuilder {
  constructor () {
    super()
    this.relations = new Map()
  }

  addRelationship (fromEntity, toEntity, relation) {
    this.relations.set(relation, [fromEntity, toEntity, '0', '0'])
  }

  addCardMax (entity, relation, value) {
    let relDetail = this.relations.get(relation)
    if (entity === relDetail[0]) relDetail[3] = value
    else relDetail[2] = value

    this.relations.set(relation, relDetail)
  }

  getModel () {
    let model = ''
    for (let elem of this.relations.values()) {
      model += `[${elem[0]}] ---(${elem[2]},${elem[3]})---> [${elem[1]}]\n`
    }

    return model
  }
}
