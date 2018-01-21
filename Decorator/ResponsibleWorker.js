import Employee from 'Employee'

export default class ResponsibleWorker extends Employee {
  constructor (employee) {
    super()
    this.responsible = employee
  }

  get name () {
    return this.responsible.name
  }

  get office () {
    return this.responsible.office
  }

  whoIs () {
    this.responsible.whoIs()
  }
}
