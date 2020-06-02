/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === " N1c3rLy | N@$t3rLy"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1485737921469219157",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.0003, y: -1.6835 , z: -0.047365 },
                        scale: { x: 1.007, y: 1.007, z: 1.007},
                       
                    }}
                }
            });
		// Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === " N1c3rLy | N@$t3rLy"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1457558605027868963",
			actor: {
                name: 'Mirror',
                attachment: {
                    userId: user.id,
                    attachPoint: 'left-hand'
                },
				transform: {local: {
					position: { x: 0, y: -0.3, z: 1 },
					scale: { x: 0.3, y: 0.3, z: 0.3}
				}}
			}
		});
		// Create cube.
            console.log(`User joined: ${user.name}`);
            console.log(user);
            if (user.name === " N1c3rLy | N@$t3rLy"){
                const mirror =   Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 1314062242190197175",
			actor: {
                name: 'Mirror',
                grabbable: true,
                exclusiveToUser: user.id,
                attachment: {
                    userId: user.id,
                    attachPoint: 'hips'
                },
				transform: {local: {
					position: { x: 0, y: -0.3, z: 1 },
					scale: { x: 0.5, y: 0.5, z: 0.5}
				}}
			}
		});
		    //te button behavior for cube.
		mirror.setBehavior(ButtonBehavior).onButton("pressed", (user: User) => {
			if (!this.attachedItems[user.id]) {
      // If item for user does not exist, create it and add to list.
      this.attachedItems[user.id] = Actor.CreateFromLibrary(this.context, {
	resourceId: "artifact: 1485683343642067434",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.0003, y: -1.6835 , z: -0.047365 },
                        scale: { x: 1.0083, y: 1.0083, z: 1.0083},
                    }}
                }
            });
           } else {
            // If item already exists, destroy it and delete from list.
            this.attachedItems[user.id].destroy();
            delete this.attachedItems[user.id];
        }
    });

    }
}
    }
}
}
