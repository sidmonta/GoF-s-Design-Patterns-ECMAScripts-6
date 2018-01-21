const ERModel = function () {
  const modelEntities = new Map()
  const modelRelations = new Map()

  this.addEntity = (name) => {
    modelEntities.set(name, {
      'name': name
    })
  }

  this.addRelationship = (fromEntity, toEntity, relation) => {
    modelRelations.set(relation, {
      'name': relation,
      'entity1': modelEntities.get(fromEntity),
      'entity2': modelEntities.get(toEntity)
    })
  }

  this.addCardMin = (entity, relation, value) => {
    let rel = modelRelations.get(relation)
    if (entity === rel.entity1.name) rel.cardMin1 = value
    else rel.cardMin2 = value
  }

  this.addCardMax = (entity, relation, value) => {
    let rel = modelRelations.get(relation)
    if (entity === rel.entity1.name) rel.cardMax1 = value
    else rel.cardMax2 = value
  }

  this.showStructure = () => {
    for (let elem of modelRelations.values()) {
      console.log(`[${elem.entity1.name}] --(${elem.cardMin1},${elem.cardMax1})-- <${elem.name}> --(${elem.cardMin2},${elem.cardMax2})-- [${elem.entity2.name}]`)
    }
  }
}

export default ERModel
