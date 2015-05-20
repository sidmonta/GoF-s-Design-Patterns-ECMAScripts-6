export class Client	{
	setTechnology(df)	{
		this.technology = df;
	}

	test(song)	{
		let media    = this.technology.createMedia();
		let recorder = this.technology.createRecorder();
		let player   = this.technology.createPlayer();

		recorder.accept(media);
		console.log('Recording the song:' + song);
		recorder.record(song);
		console.log('Listening the record: ');
		player.accept(media);
		player.play();
	}
}