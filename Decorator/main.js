import Engineer from 'Engineer'
import AdministrativeManager from 'AdministrativeManager'
import ProjectManager from 'ProjectManager'

let thisWillBeFamous = new Engineer('William Gateway', 'Programming Department')
console.log('Who are you?')
thisWillBeFamous.whoIs()

thisWillBeFamous = new AdministrativeManager(thisWillBeFamous)
console.log('Who are you?')
thisWillBeFamous.whoIs()

thisWillBeFamous = new ProjectManager(thisWillBeFamous, 'D.O.S. - Doors Operating System')
console.log('Who are you?')
thisWillBeFamous.whoIs()

thisWillBeFamous = new ProjectManager(thisWillBeFamous, 'EveryLoggedToInternet Explorer')
console.log('Who are you?')
thisWillBeFamous.whoIs()
