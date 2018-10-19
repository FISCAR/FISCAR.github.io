var 	//frontDisplay = document.getElementById('frontDisplay');
	pageBrand = document.getElementById('pageBrand');
	menuButton = document.getElementsByClassName('menuButton');
	menuLabel = document.getElementsByClassName('menuLabel');
	services = document.getElementById('services');
	mission = document.getElementById('mission');
	historyDiv = document.getElementById('historyDiv');
	contact = document.getElementById('contact');
	other = document.getElementById('other');
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
		clicked[0] = false;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
	}else{
		services.classList.add('open');
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
		clicked[1] = false;
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
	}else{
		mission.classList.add('open');
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
		clicked[2] = false;
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
	}else{
		historyDiv.classList.add('open');
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
		clicked[3] = false;
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
	}else{
		contact.classList.add('open');
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
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	if (clicked[4]){
		other.classList.remove('open');
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
		clicked[4] = false;
	}else{
		
		other.classList.add('open');
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
	

pageBrand.onclick = function(){
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
		clicked[0] = false;
		for(i = 0; i < sClicked.length; i++){
			if (sClicked){
			servicesInfo[i].classList.remove('open');
			sClicked[i] = false;
			}
		}
	}else{
		services.classList.add('open');
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
		clicked[1] = false;
		for(i = 0; i < mClicked.length; i++){
			if (mClicked){
			missionInfo[i].classList.remove('open');
			mClicked[i] = false;
			}
		}
	}else{
		mission.classList.add('open');
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
		clicked[2] = false;
		for(i = 0; i < hClicked.length; i++){
			if (hClicked){
			historyInfo[i].classList.remove('open');
			hClicked[i] = false;
			}
		}
	}else{
		historyDiv.classList.add('open');
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
		clicked[3] = false;
		for(i = 0; i < cClicked.length; i++){
			if (cClicked){
			contactInfo[i].classList.remove('open');
			cClicked[i] = false;
			}
		}
	}else{
		contact.classList.add('open');
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
	services.classList.remove('open');
	mission.classList.remove('open');
	historyDiv.classList.remove('open');
	contact.classList.remove('open');
	if (clicked[4]){
		other.classList.remove('open');
		for(i = 0; i < oClicked.length; i++){
			if (oClicked){
			otherInfo[i].classList.remove('open');
			oClicked[i] = false;
			}
		}
		clicked[4] = false;
	}else{
		other.classList.add('open');
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

if (document.readyState === 'loading'){
	for(i = 0; i < menuLabel.length;i++){
		menuLabel[i].classList.add('expanded');
		menuButton[i].classList.add('activated');
	}
}

mainPage.addEventListener('wheel', function MouseWheelHandler(e) {
	if (e.deltaY < 0){
		var i = Math.abs((scrollCount-=1)%6);
	}
	if (e.deltaY > 0){
		i = (scrollCount+=1)%6;
	}

    switch(i){
		case 1:
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
			mission.classList.remove('open');
			historyDiv.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[1] = false;
			clicked[2] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 2:
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
			services.classList.remove('open');
			historyDiv.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[0] = false;
			clicked[2] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 3:
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
			services.classList.remove('open');
			mission.classList.remove('open');
			contact.classList.remove('open');
			other.classList.remove('open');
			clicked[0] = false;
			clicked[1] = false;
			clicked[3] = false;
			clicked[4] = false;
			break;
		case 4:
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
