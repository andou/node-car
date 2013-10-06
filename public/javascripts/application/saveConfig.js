$(document).ready(function(){
	
	$("#save").bind('click touch', function(){
		var name=prompt("Please enter a label to save your configuration");
	    if (name!=null){
	    	if (Modernizr.localstorage) {
	    		// window.localStorage is available!
	    		localStorage.setItem(name, window.location);
    		} else {
    		  // no native support for HTML5 storage :(
    		  // maybe try dojox.storage or a third-party solution
    		}
	    }
	    //update list in basket 
	    

	    for (i=0; i<=localStorage.length-1; i++) { // i<100 works perfectly
	    	key = localStorage.key(i);
	    	val = localStorage.getItem(key);
	    	
	    	var storedConfig = document.createElement('li');
	    	
	    	var storedConfigAnchor = document.createElement('a');
	    		storedConfigAnchor.setAttribute('HREF', val);
	    		
	    		storedConfigAnchor.innerHTML = key;
	    		
	    		storedConfig.appendChild(storedConfigAnchor);
	    	
	    	
	    	$(".main_navigation.basket").append(storedConfig);
	    	$(".navigation.desktop .basket .content ul").appendChild(storedConfig);
	    }
	});
});
