import { ResponsibleWorker } from 'ResponsibleWorker'

export class ProjectManager extends ResponsibleWorker {
  constructor (empl, proj) {
    super(empl)
    this.project = proj
  }

  whoIs () {
    super.whoIs()
    console.log(`I am the Manager of the Project: ${this.project}`)
  }
}
