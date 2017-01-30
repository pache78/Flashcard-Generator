'use strict';

//Creating a BasicCard Contructor with front, back args//
function BasicCard(front, back){

//receiving the results of the call//
if(!(this instanceof BasicCard)) {
	return new BasicCard(front, back);

}

 // what will create the front and back of card//
 this.front = front;
 this.back = back;
}

console.log(BasicCard);