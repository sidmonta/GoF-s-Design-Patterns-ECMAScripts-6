import ERHardCodedDirector from 'ERHardCodedDirector'
import OrientedErBuilder from 'OrientedErBuilder'
import NoOrientedERBuilder from 'NoOrientedERBuilder'
import ERModel from 'ERModel'

console.log(ERHardCodedDirector.getModel(new OrientedErBuilder()))

var dbCourseModel = Object.create(ERHardCodedDirector.getModel(new NoOrientedERBuilder()), ERModel)

dbCourseModel.showStructure()
