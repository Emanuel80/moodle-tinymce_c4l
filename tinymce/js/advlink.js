function insertAction(classe,special=null) {
	var inst = tinyMCEPopup.editor;
	var elm;

	elm = inst.selection.getNode();
	//checkPrefix(document.forms[0].href);
	item = elm.innerHTML;
	console.log(elm.innerText.length);
	if(elm.innerText.length <= 1){
		item = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
	}

	//before
	new_item = '<p class="c4l-spacer"></p>'; //spacer row
	if(special == 'right'){
		new_item += '<div class="c4l-inline-group">';
	}
	new_item += '<div class="'+classe+'">'; //class div container
	if(special == 'quote'){
        new_item += '<div class="c4l-quote-body"><div class="c4l-quote-line"></div><div class="c4l-quote-text"></div>';
	};
	if(special == 'cards'){
        new_item += '<div class="c4l-dodontcards-do">';
	};
	if(special == 'example'){
        new_item += '<h1>Title here</h1><p>';
	};
	if(special == 'figure'){
		new_item += '<figure class="c4l-figure"><img src="https://source.unsplash.com/random/800x600" alt="'+item+'"><figcaption>';
		new_item += '<em class="c4l-figure-footer"><p>';
	};
    
	new_item += item; //content

	//after
	if(special == 'quote'){
        new_item += '</div><div class="c4l-quote-caption"><span>FIRSTNAME LASTNAME Insert caption here</div></div>';
	};
	if(special == 'cards'){
        new_item += '</div><div class="c4l-dodontcards-dont">Wrong sentences here</div>';
	};
	if(special == 'reading'){
        new_item += '<div class="c4l-readingcontext-caption"><span>FIRSTNAME LASTNAME Insert caption here</div></div>';
	};
	if(special == 'example'){
        new_item += '</p>';
	};
	if(special == 'figure'){
		new_item += '</em><span class="c4l-figure-caption"><strong>Font: </strong>Phasellus a posuere nibh.</span>';
		new_item += '</figcaption></figure>';
	};
	new_item +='</div>';//end class div container
	if(special == 'right'){
		new_item += '</div>';
	}
	new_item +='<p><br></p>'; //break row
	elm.innerHTML = new_item;

	if (elm.childNodes.length != 1 || elm.firstChild.nodeName != 'IMG') {
		inst.focus();
		inst.selection.select(elm);
		inst.selection.collapse(0);
		tinyMCEPopup.storeSelection();
	};

	tinyMCEPopup.execCommand("mceEndUndoLevel");
	tinyMCEPopup.close();
}