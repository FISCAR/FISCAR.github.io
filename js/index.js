var 	frontDisplay = document.getElementById('frontDisplay');
	pageBrand = document.getElementById('pageBrand');
	menuButton = document.getElementsByClassName('menuButton');
	menuLabel = document.getElementsByClassName('menuLabel');
	services = document.getElementById('services');
	mission = document.getElementById('mission');
	historyDiv = document.getElementById('historyDiv');
	contact = document.getElementById('contact');
	other = document.getElementById('other');
	servicesButton = document.getElementsByClassName('servicesButton');
	missionButton = document.getElementsByClassName('missionButton');
	historyButton = document.getElementsByClassName('historyButton');
	contactButton = document.getElementsByClassName('contactButton');
	otherButton = document.getElementsByClassName('otherButton');
	servicesInfo = document.getElementsByClassName('servicesInfo');
	missionInfo = document.getElementsByClassName('missionInfo');
	historyInfo = document.getElementsByClassName('historyInfo');
	contactInfo = document.getElementsByClassName('contactInfo');
	otherInfo = document.getElementsByClassName('otherInfo');
	clicked = [false, false, false, false, false];
	sClicked = [false, false, false, false, false];
	mClicked = [false, false, false, false, false];
	hClicked = [false, false, false, false, false];
	cClicked = [false, false, false, false, false];
	oClicked = [false, false, false, false, false];
	scrollCount = 0;
	/*For Small Display*/
	accMenu = document.getElementsByClassName('accordion');

menuLabel[0].onclick = function(){
	if (clicked[0]){
		services.classList.remove('open');
		menuButton[0].classList.add('defaultAnimation');
		menuButton[0].classList.remove('activated');
		clicked[0] = false;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
	}else{
		services.classList.add('open');
		menuButton[0].classList.remove('defaultAnimation');
		menuButton[0].classList.add('activated');
		clicked[0] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.add('open');
			sClicked[i] = true;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[1] = false;
	clicked[2] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuLabel[1].onclick = function(){
	if (clicked[1]){
		mission.classList.remove('open');
		menuButton[1].classList.add('defaultAnimation');
		menuButton[1].classList.remove('activated');
		clicked[1] = false;
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
	}else{
		mission.classList.add('open');
		menuButton[1].classList.remove('defaultAnimation');
		menuButton[1].classList.add('activated');
		clicked[1] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.add('open');
			mClicked[i] = true;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[2] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuLabel[2].onclick = function(){
	if (clicked[2]){
		historyDiv.classList.remove('open');
		menuButton[2].classList.add('defaultAnimation');
		menuButton[2].classList.remove('activated');
		clicked[2] = false;
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
	}else{
		historyDiv.classList.add('open');
		menuButton[2].classList.remove('defaultAnimation');
		menuButton[2].classList.add('activated');
		clicked[2] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.add('open');
			hClicked[i] = true;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[1] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuLabel[3].onclick = function(){
	if (clicked[3]){
		contact.classList.remove('open');
		menuButton[3].classList.add('defaultAnimation');
		menuButton[3].classList.remove('activated');		
		clicked[3] = false;
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
	}else{
		contact.classList.add('open');
		menuButton[3].classList.remove('defaultAnimation');
		menuButton[3].classList.add('activated');
		clicked[3] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.add('open');
			cClicked[i] = true;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[1] = false;
	clicked[2] = false;
	clicked[4] = false;
}
menuLabel[4].onclick = function(){
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	if (clicked[4]){
		other.classList.remove('open');
		menuButton[4].classList.add('defaultAnimation');
		menuButton[4].classList.remove('activated');
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
		clicked[4] = false;
	}else{
		
		other.classList.add('open');
		menuButton[4].classList.remove('defaultAnimation');
		menuButton[4].classList.add('activated');
		clicked[4] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.add('open');
			oClicked[i] = true;
			}
		}
	}
	clicked[0] = false;
	clicked[1] = false;
	clicked[2] = false;
	clicked[3] = false;
}
	
menuButton[0].onmouseover = function(){
	menuLabel[0].classList.add('expanded');
	menuButton[0].classList.add('activated');
}
menuButton[0].onmouseout = function(){
	if (!clicked[0]){
	menuLabel[0].classList.remove('expanded');
	menuButton[0].classList.remove('activated');
	menuButton[0].classList.add('defaultAnimation');
	}
}
menuButton[1].onmouseover = function(){
	menuLabel[1].classList.add('expanded');
	menuButton[1].classList.add('activated');
}
menuButton[1].onmouseout = function(){
	if (!clicked[1]){
	menuLabel[1].classList.remove('expanded');
	menuButton[1].classList.remove('activated');
	menuButton[1].classList.add('defaultAnimation');
	}
}
menuButton[2].onmouseover = function(){
	menuLabel[2].classList.add('expanded');
	menuButton[2].classList.add('activated');
}
menuButton[2].onmouseout = function(){
	if (!clicked[2]){
	menuLabel[2].classList.remove('expanded');
	menuButton[2].classList.remove('activated');
	menuButton[2].classList.add('defaultAnimation');
	}
}
menuButton[3].onmouseover = function(){
	menuLabel[3].classList.add('expanded');
	menuButton[3].classList.add('activated');
}
menuButton[3].onmouseout = function(){
	if (!clicked[3]){
	menuLabel[3].classList.remove('expanded');
	menuButton[3].classList.remove('activated');
	menuButton[3].classList.add('defaultAnimation');
	}
}
menuButton[4].onmouseover = function(){
	menuLabel[4].classList.add('expanded');
	menuButton[4].classList.add('activated');
}
menuButton[4].onmouseout = function(){
	if (!clicked[4]){
	menuLabel[4].classList.remove('expanded');
	menuButton[4].classList.remove('activated');
	menuButton[4].classList.add('defaultAnimation');
	}
}

pageBrand.onclick = function(){
	frontDisplay.classList.add('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[1] = false;
	clicked[2] = false;
	clicked[3] = false;
	clicked[4] = false;
	for(i = 0; i < sClicked.length; i++){
		if (sClicked){
		servicesInfo[i].classList.remove('open');
		sClicked[i] = false;
		}
	}
	for(i = 0; i < mClicked.length; i++){
		if (mClicked){
		missionInfo[i].classList.remove('open');
		mClicked[i] = false;
		}
	}
	for(i = 0; i < hClicked.length; i++){
		if (hClicked){
		historyInfo[i].classList.remove('open');
		hClicked[i] = false;
		}
	}
	for(i = 0; i < cClicked.length; i++){
		if (cClicked){
		contactInfo[i].classList.remove('open');
		cClicked[i] = false;
		}
	}
	for(i = 0; i < oClicked.length; i++){
		if (oClicked){
		otherInfo[i].classList.remove('open');
		oClicked[i] = false;
		}
	}
}

menuButton[0].onclick = function(){
	if (clicked[0]){
		services.classList.remove('open');
		menuButton[0].classList.add('defaultAnimation');
		menuButton[0].classList.remove('activated');
		clicked[0] = false;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
	}else{
		services.classList.add('open');
		menuButton[0].classList.remove('defaultAnimation');
		menuButton[0].classList.add('activated');
		clicked[0] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.add('open');
			sClicked[i] = true;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[1] = false;
	clicked[2] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuButton[1].onclick = function(){
	if (clicked[1]){
		mission.classList.remove('open');
		menuButton[1].classList.add('defaultAnimation');
		menuButton[1].classList.remove('activated');
		clicked[1] = false;
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
	}else{
		mission.classList.add('open');
		menuButton[1].classList.remove('defaultAnimation');
		menuButton[1].classList.add('activated');
		clicked[1] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.add('open');
			mClicked[i] = true;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[2] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuButton[2].onclick = function(){
	if (clicked[2]){
		historyDiv.classList.remove('open');
		menuButton[2].classList.add('defaultAnimation');
		menuButton[2].classList.remove('activated');
		clicked[2] = false;
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
	}else{
		historyDiv.classList.add('open');
		menuButton[2].classList.remove('defaultAnimation');
		menuButton[2].classList.add('activated');
		clicked[2] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.add('open');
			hClicked[i] = true;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	contact.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[1] = false;
	clicked[3] = false;
	clicked[4] = false;
}
menuButton[3].onclick = function(){
	if (clicked[3]){
		contact.classList.remove('open');
		menuButton[3].classList.add('defaultAnimation');
		menuButton[3].classList.remove('activated');		
		clicked[3] = false;
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
	}else{
		contact.classList.add('open');
		menuButton[3].classList.remove('defaultAnimation');
		menuButton[3].classList.add('activated');
		clicked[3] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.add('open');
			cClicked[i] = true;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
	}
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	other.classList.remove('open');
	clicked[0] = false;
	clicked[1] = false;
	clicked[2] = false;
	clicked[4] = false;
}
menuButton[4].onclick = function(){
	frontDisplay.classList.remove('open');
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	if (clicked[4]){
		other.classList.remove('open');
		menuButton[4].classList.add('defaultAnimation');
		menuButton[4].classList.remove('activated');
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
		clicked[4] = false;
	}else{
		other.classList.add('open');
		menuButton[4].classList.remove('defaultAnimation');
		menuButton[4].classList.add('activated');
		clicked[4] = true;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.add('open');
			oClicked[i] = true;
			}
		}
	}
	clicked[0] = false;
	clicked[1] = false;
	clicked[2] = false;
	clicked[3] = false;
}

servicesButton[0].onclick = function(){
	if(!sClicked[0]){
		servicesInfo[0].classList.add('open');
		sClicked[0] = true;
	}else{
		servicesInfo[0].classList.remove('open');
		sClicked[0] = false;
	}
}
missionButton[0].onclick = function(){
	if(!mClicked[0]){
		missionInfo[0].classList.add('open');
		mClicked[0] = true;
	}else{
		missionInfo[0].classList.remove('open');
		mClicked[0] = false;
	}
}
historyButton[0].onclick = function(){
	if(!hClicked[0]){
		historyInfo[0].classList.add('open');
		hClicked[0] = true;
	}else{
		historyInfo[0].classList.remove('open');
		hClicked[0] = false;
	}
}
contactButton[0].onclick = function(){
	if(!cClicked[0]){
		contactInfo[0].classList.add('open');
		cClicked[0] = true;
	}else{
		contactInfo[0].classList.remove('open');
		cClicked[0] = false;
	}
}
otherButton[0].onclick = function(){
	if(!oClicked[0]){
		otherInfo[0].classList.add('open');
		oClicked[0] = true;
	}else{
		otherInfo[0].classList.remove('open');
		oClicked[0] = false;
	}
}

servicesButton[1].onclick = function(){
	if(!sClicked[1]){
		servicesInfo[1].classList.add('open');
		sClicked[1] = true;
	}else{
		servicesInfo[1].classList.remove('open');
		sClicked[1] = false;
	}
}
missionButton[1].onclick = function(){
	if(!mClicked[1]){
		missionInfo[1].classList.add('open');
		mClicked[1] = true;
	}else{
		missionInfo[1].classList.remove('open');
		mClicked[1] = false;
	}
}
historyButton[1].onclick = function(){
	if(!hClicked[1]){
		historyInfo[1].classList.add('open');
		hClicked[1] = true;
	}else{
		historyInfo[1].classList.remove('open');
		hClicked[1] = false;
	}
}
contactButton[1].onclick = function(){
	if(!cClicked[1]){
		contactInfo[1].classList.add('open');
		cClicked[1] = true;
	}else{
		contactInfo[1].classList.remove('open');
		cClicked[1] = false;
	}
}
otherButton[1].onclick = function(){
	if(!oClicked[1]){
		otherInfo[1].classList.add('open');
		oClicked[1] = true;
	}else{
		otherInfo[1].classList.remove('open');
		oClicked[1] = false;
	}
}

servicesButton[2].onclick = function(){
	if(!sClicked[2]){
		servicesInfo[2].classList.add('open');
		sClicked[2] = true;
	}else{
		servicesInfo[2].classList.remove('open');
		sClicked[2] = false;
	}
}
missionButton[2].onclick = function(){
	if(!mClicked[2]){
		missionInfo[2].classList.add('open');
		mClicked[2] = true;
	}else{
		missionInfo[2].classList.remove('open');
		mClicked[2] = false;
	}
}
historyButton[2].onclick = function(){
	if(!hClicked[2]){
		historyInfo[2].classList.add('open');
		hClicked[2] = true;
	}else{
		historyInfo[2].classList.remove('open');
		hClicked[2] = false;
	}
}
contactButton[2].onclick = function(){
	if(!cClicked[2]){
		contactInfo[2].classList.add('open');
		cClicked[2] = true;
	}else{
		contactInfo[2].classList.remove('open');
		cClicked[2] = false;
	}
}
otherButton[2].onclick = function(){
	if(!oClicked[2]){
		otherInfo[2].classList.add('open');
		oClicked[2] = true;
	}else{
		otherInfo[2].classList.remove('open');
		oClicked[2] = false;
	}
}

servicesButton[3].onclick = function(){
	if(!sClicked[3]){
		servicesInfo[3].classList.add('open');
		sClicked[3] = true;
	}else{
		servicesInfo[3].classList.remove('open');
		sClicked[3] = false;
	}
}
missionButton[3].onclick = function(){
	if(!mClicked[3]){
		missionInfo[3].classList.add('open');
		mClicked[3] = true;
	}else{
		missionInfo[3].classList.remove('open');
		mClicked[3] = false;
	}
}
historyButton[3].onclick = function(){
	if(!hClicked[3]){
		historyInfo[3].classList.add('open');
		hClicked[3] = true;
	}else{
		historyInfo[3].classList.remove('open');
		hClicked[3] = false;
	}
}
contactButton[3].onclick = function(){
	if(!cClicked[3]){
		contactInfo[3].classList.add('open');
		cClicked[3] = true;
	}else{
		contactInfo[3].classList.remove('open');
		cClicked[3] = false;
	}
}
otherButton[3].onclick = function(){
	if(!oClicked[3]){
		otherInfo[3].classList.add('open');
		oClicked[3] = true;
	}else{
		otherInfo[3].classList.remove('open');
		oClicked[3] = false;
	}
}

servicesButton[4].onclick = function(){
	if(!sClicked[4]){
		servicesInfo[4].classList.add('open');
		sClicked[4] = true;
	}else{
		servicesInfo[4].classList.remove('open');
		sClicked[4] = false;
	}
}
missionButton[4].onclick = function(){
	if(!mClicked[4]){
		missionInfo[4].classList.add('open');
		mClicked[4] = true;
	}else{
		missionInfo[4].classList.remove('open');
		mClicked[4] = false;
	}
}
historyButton[4].onclick = function(){
	if(!hClicked[4]){
		historyInfo[4].classList.add('open');
		hClicked[4] = true;
	}else{
		historyInfo[4].classList.remove('open');
		hClicked[4] = false;
	}
}
contactButton[4].onclick = function(){
	if(!cClicked[4]){
		contactInfo[4].classList.add('open');
		cClicked[4] = true;
	}else{
		contactInfo[4].classList.remove('open');
		cClicked[4] = false;
	}
}
otherButton[4].onclick = function(){
	if(!oClicked[4]){
		otherInfo[4].classList.add('open');
		oClicked[4] = true;
	}else{
		otherInfo[4].classList.remove('open');
		oClicked[4] = false;
	}
}

if (document.readyState === 'loading'){
	for(i = 0; i < menuLabel.length;i++){
		menuLabel[i].classList.add('expanded');
		menuButton[i].classList.add('activated');
	}
	frontDisplay.classList.add('open');
}

/*
if (mainPage.addEventListener) {
 mainPage.addEventListener("mousewheel", MouseWheelHandler, false);
 mainPage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
else mainPage.attachEvent("onmousewheel", MouseWheelHandler);
*/

mainPage.addEventListener('wheel', function MouseWheelHandler(e) {
	if (e.deltaY < 0){
		var i = Math.abs((scrollCount-=1)%6);
	}
	if (e.deltaY > 0){
		i = (scrollCount+=1)%6;
	}
	/*var e = window.event || e,
		delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))),
		
	pageBrand.innerHTML = i;*/
    switch(i){
		case 1:
			frontDisplay.classList.add('open');
			services.classList.remove('open');
			other.classList.remove('open');
			for(i = 0; i < sClicked.length; i++){
				if (sClicked){
				servicesInfo[i].classList.remove('open');
				sClicked[i] = false;
				}
			}
			for(i = 0; i < oClicked.length; i++){
				if (oClicked){
				otherInfo[i].classList.remove('open');
				oClicked[i] = false;
				}
			}
			break;
		case 2:
			if (clicked[0]){
				services.classList.remove('open');
				menuButton[0].classList.add('defaultAnimation');
				menuButton[0].classList.remove('activated');
				clicked[0] = false;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.remove('open');
					sClicked[i] = false;
					}
				}
			}else{
				services.classList.add('open');
				menuButton[0].classList.remove('defaultAnimation');
				menuButton[0].classList.add('activated');
				clicked[0] = true;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.add('open');
					sClicked[i] = true;
					}
				}
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.remove('open');
					mClicked[i] = false;
					}
				}
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.remove('open');
					hClicked[i] = false;
					}
				}
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.remove('open');
					cClicked[i] = false;
					}
				}
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.remove('open');
					oClicked[i] = false;
					}
				}
			}
			frontDisplay.classList.remove('open');
			mission.classList.remove('open');
			historyDiv.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[1] = false;
			clicked[2] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 3:
			if (clicked[1]){
				mission.classList.remove('open');
				menuButton[1].classList.add('defaultAnimation');
				menuButton[1].classList.remove('activated');
				clicked[1] = false;
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.remove('open');
					mClicked[i] = false;
					}
				}
			}else{
				mission.classList.add('open');
				menuButton[1].classList.remove('defaultAnimation');
				menuButton[1].classList.add('activated');
				clicked[1] = true;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.remove('open');
					sClicked[i] = false;
					}
				}
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.add('open');
					mClicked[i] = true;
					}
				}
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.remove('open');
					hClicked[i] = false;
					}
				}
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.remove('open');
					cClicked[i] = false;
					}
				}
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.remove('open');
					oClicked[i] = false;
					}
				}
			}
			frontDisplay.classList.remove('open');
			services.classList.remove('open');
			historyDiv.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[0] = false;
			clicked[2] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 4:
			if (clicked[2]){
				historyDiv.classList.remove('open');
				menuButton[2].classList.add('defaultAnimation');
				menuButton[2].classList.remove('activated');
				clicked[2] = false;
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.remove('open');
					hClicked[i] = false;
					}
				}
			}else{
				historyDiv.classList.add('open');
				menuButton[2].classList.remove('defaultAnimation');
				menuButton[2].classList.add('activated');
				clicked[2] = true;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.remove('open');
					sClicked[i] = false;
					}
				}
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.remove('open');
					mClicked[i] = false;
					}
				}
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.add('open');
					hClicked[i] = true;
					}
				}
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.remove('open');
					cClicked[i] = false;
					}
				}
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.remove('open');
					oClicked[i] = false;
					}
				}
			}
			frontDisplay.classList.remove('open');
			services.classList.remove('open');
			mission.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[0] = false;
			clicked[1] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 5:
			if (clicked[3]){
				contact.classList.remove('open');
				menuButton[3].classList.add('defaultAnimation');
				menuButton[3].classList.remove('activated');		
				clicked[3] = false;
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.remove('open');
					cClicked[i] = false;
					}
				}
			}else{
				contact.classList.add('open');
				menuButton[3].classList.remove('defaultAnimation');
				menuButton[3].classList.add('activated');
				clicked[3] = true;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.remove('open');
					sClicked[i] = false;
					}
				}
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.remove('open');
					mClicked[i] = false;
					}
				}
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.remove('open');
					hClicked[i] = false;
					}
				}
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.add('open');
					cClicked[i] = true;
					}
				}
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.remove('open');
					oClicked[i] = false;
					}
				}
			}
			frontDisplay.classList.remove('open');
			services.classList.remove('open');
			mission.classList.remove('open');
			historyDiv.classList.remove('open');
			other.classList.remove('open');
			clicked[0] = false;
			clicked[1] = false;
			clicked[2] = false;
			clicked[4] = false;	
			break;
		case 0:
			frontDisplay.classList.remove('open');
			services.classList.remove('open');
			mission.classList.remove('open');
			historyDiv.classList.remove('open');
			contact.classList.remove('open');
			if (clicked[4]){
				other.classList.remove('open');
				menuButton[4].classList.add('defaultAnimation');
				menuButton[4].classList.remove('activated');
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.remove('open');
					oClicked[i] = false;
					}
				}
				clicked[4] = false;
			}else{
				other.classList.add('open');
				menuButton[4].classList.remove('defaultAnimation');
				menuButton[4].classList.add('activated');
				clicked[4] = true;
				for(i = 0; i < sClicked.length; i++){
					if (sClicked){
					servicesInfo[i].classList.remove('open');
					sClicked[i] = false;
					}
				}
				for(i = 0; i < mClicked.length; i++){
					if (mClicked){
					missionInfo[i].classList.remove('open');
					mClicked[i] = false;
					}
				}
				for(i = 0; i < hClicked.length; i++){
					if (hClicked){
					historyInfo[i].classList.remove('open');
					hClicked[i] = false;
					}
				}
				for(i = 0; i < cClicked.length; i++){
					if (cClicked){
					contactInfo[i].classList.remove('open');
					cClicked[i] = false;
					}
				}
				for(i = 0; i < oClicked.length; i++){
					if (oClicked){
					otherInfo[i].classList.add('open');
					oClicked[i] = true;
					}
				}
			}
			clicked[0] = false;
			clicked[1] = false;
			clicked[2] = false;
			clicked[3] = false;		
			break;
	}
 return false;
});

/*Accordion control for small display*/
for (iAcc=0; iAcc < accMenu.length; iAcc++){
  accMenu[iAcc].addEventListener("click", function(){
	this.classList.toggle("activate");
  var panel = this.nextElementSibling;
  if (panel.style.display === "block"){
  	panel.style.display = "none";
  } else {
  	panel.style.display = "block";
  }
  });
}
