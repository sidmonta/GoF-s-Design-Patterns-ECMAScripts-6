import Client from 'Client'
import TapeDevicesFactory from 'TapeDevicesFactory'
import CDDevicesFactory from 'CDDevicesFactory'

var client = new Client()
console.log('**Testing tape device')
client.setTechnology(new TapeDevicesFactory())
client.test('I wanna hold your hand...')

console.log('**Testing CD device')
client.setTechnology(new CDDevicesFactory())
client.test('Fly me to the moon...')
