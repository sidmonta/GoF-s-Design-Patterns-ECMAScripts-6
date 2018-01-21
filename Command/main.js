import TV from 'TV'
import UniversalRemoteControl from 'UniversalRemoteControl'
import { TVPowerCommand, TVVolumeUpCommand, TVVolumeDownCommand, TVSetChannelCommand } from 'ConcreteCommand'

const aCommonTV = new TV()

const tvpower = new TVPowerCommand(aCommonTV)
const tvvolup = new TVVolumeUpCommand(aCommonTV)
const tvvoldown = new TVVolumeDownCommand(aCommonTV)
const tvsetch = new TVSetChannelCommand(aCommonTV)

const remote = new UniversalRemoteControl(tvpower, tvvolup, tvvoldown, tvsetch)

remote.pressButtonPower()
remote.pressButtonArrowUp()
remote.pressButtonArrowDown()
remote.pressKeypadToEnterNumber()
