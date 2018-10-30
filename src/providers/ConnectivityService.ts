import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class ConnectivityService {

	internetStatus: boolean = true;

	constructor(
		private network: Network,
	) {
		if (this.network.type === 'none') {
			this.internetStatus = false;
		}

		this.network.onDisconnect().subscribe(() => {
			this.internetStatus = false;
		});

		this.network.onConnect().subscribe(() => {
            this.internetStatus = true;
            console.log("connn");
		});
	}

	isOnline(): boolean {
		return this.internetStatus;
	}
}