'use strict';

//Creating a ClozeCard Constructor with text and cloze args//

function ClozeCard(text, cloze){

//receiving the results of the call//
	if(!(instanceof ClozeCard)) {
		new ClozeCard(text, cloze);
	}

	this.text = text;
	this.cloze = cloze;
}