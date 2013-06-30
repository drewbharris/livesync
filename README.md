livesync
========

distributed mobile metronome slaves synced to a computer master (MIDI->phones)

## Install

Works only with node 0.8.x for now.

	npm install
	node index.js

Connect your MIDI host to the virtual port "LiveSync" as an output (in Live, make sure it's track and remote output)

Create a new MIDI clip:  use CC 50 as the "tick" and CC 51 as the "tock" of the metronome, set the output to LiveSync.

Connect to <your_ip>:8000 with a Webkit/Blink browser (iOS 6+ supported)

## Troubleshooting

Q: I can't hear anything on iOS 6.

A: iOS requires some user interaction to activate the Web Audio API.  After opening the page on your device, tap either "tick" or "tock" to start the interaction.

Q: It's super glitchy over WiFi.

A: Yes, that's true.  Right now there's no delay or latency compensation at all.  It works best on an ad-hoc WiFi connection currently.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
