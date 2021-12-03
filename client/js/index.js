const animButton = document.querySelectorAll('.anim');
import Lottie from 'lottie-web'

const wrapperHeight = 884;

(function(window){
    init();
    loadStep('dist/assets/anim-data/seq-chargingstation.json', 'dist/assets/screen-cs.png', false, [28,192]);
})(window);


function init(){
    animButton.forEach(function(element){
	element.addEventListener('click', function(){
	    const _id = this.getAttribute('id');
	    switch(_id){
	    case 'anim-1' : loadStep('dist/assets/anim-data/seq-chargingstation.json', 'dist/assets/screen-cs.png', false, [28,192])
		break;
	    case 'anim-2' : loadStep('dist/assets/anim-data/seq-group.json', 'dist/assets/screen-group.png', false, [28,312])
		break;
	    case 'anim-3' : loadStep('dist/assets/anim-data/seq-llm-dynamic.json', 'dist/assets/screen.png', true, [28,312])
		break;
	    }
	});
    })
}


function loadStep(animFile, screenFile, isLoop, position){
    const container = document.getElementById('anim');
    const screen = document.getElementById('screen');
    const svg = document.getElementsByTagName('svg'); // if an anim is present, we spot it...
    svg.length > 0 ? container.removeChild(svg[0]) : null; // ...and we remove it
    const animation = Lottie.loadAnimation({
	container: container,
	renderer: 'svg',
	loop: isLoop,
	autoplay: true,
	path: animFile
    });

    screen.setAttribute('style', 'background: url('+screenFile+') no-repeat; background-size: cover;')
    container.setAttribute('style', 'margin-left: '+position[0]+'px; margin-top: '+position[1]+'px;')
}

window.onresize = function() {
    adaptDeviceSize();
}
function adaptDeviceSize(){
    const container = document.getElementById('wrapper');
    if(window.innerHeight < wrapperHeight+64){
	const nh = window.innerHeight / wrapperHeight
	container.setAttribute('style', 'transform: scale('+nh+')')
	console.log("attention");
    }
}
