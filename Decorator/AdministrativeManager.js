import { ResponsibleWorker } from 'ResponsibleWorker'

export class AdministrativeManager extends ResponsibleWorker {
  whoIs () {
    this.sayIamBoss()
    super.whoIs()
  }

  sayIamBoss () {
    console.log('I am a boss')
  }
}
