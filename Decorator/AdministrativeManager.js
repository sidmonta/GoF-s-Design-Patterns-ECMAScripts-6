import ResponsibleWorker from 'ResponsibleWorker'

export default class AdministrativeManager extends ResponsibleWorker {
  whoIs () {
    this.sayIamBoss()
    super.whoIs()
  }

  sayIamBoss () {
    console.log('I am a boss')
  }
}
