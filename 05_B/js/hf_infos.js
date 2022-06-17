var legal = { 
	title: "Legal Mentions",
	text: [
		"This site was designed for a research project led by staff from <a target='_blank' href='http://www.hhu.de/'>Heinrich-Heine-University</a>.",
		"<span class='important'>Affiliation</span> Heinrich-Heine-University Düsseldorf - Address : Universitaetsstraße 1, 40225 Düsseldorf, Germany - Phone : +49(0)211.81.11 - Email : julia.muschalik(at)hhu.de ",
		"<span class='important'>Development and implementation</span> Heinrich-Heine-University - J. Muschalik<sup>1</sup>, D. Baer-Henney <sup>2</sup>, D. Schmitz<sup>1</sup> (<sup>1</sup><a target='_blank' href='https://www.anglistik3.hhu.de/team/detailseite-muschalik'>English Language and Linguistics</a> ; <sup>2</sup><a target='_blank' href='https://blogs.phil.hhu.de/dbh13/'>General Linguistics</a> ; <sup>3</sup><a target='_blank' href='https://dominicschmitz.com/'>English Language and Linguistics</a>)",
		"<span class='important'>Publication Manager</span> Julia Muschalik"]
};

var ethic = { 
	title: "Statement of Ethics",
	text: [
		"This study has ethics approval of the <a target='_blank' href='http://www.hhu.de/'>Heinrich-Heine-University</a> ethics committee</a>. All participants are provided with detailed information and give their consent before participating in this experiment."]
};

var anonym = {
	title: "Anonymity",
	text: [	
		"The data collected is <b>anonymous</b>, ie., it does not contain any information allowing you to be identified.",
		"We collect the following data :"+ 
		"<ul><li style='list-style-type:square;'> the current date according to your browser</li>"+
		"<li style='list-style-type:square;'> browser type (Firefox, Chrome, Opera) and version</li>"+
		"<li style='list-style-type:square;'> your operating system (Windows, Mac, Unix) and version</li>"+
		"<li style='list-style-type:square;'> your typing speed</li>"+
		"<li style='list-style-type:square;'> your data from the questionnaire at the end</li></ul>",
		"The data we collect with the questionnaire are neccessary for our comparative analysis.", 
		"All of the collected data is safely stored on JATOS and cannot be accessed by third parties.",
		"Accessing the experiment does not generate any tracer (cookies) on your computer.",
		"The data collection is in compliance with the DSGVO."]
};

var consent = {
	title: "Consent",
	text: ["By agreeing to start the experiment, you give your consent to the recording of the aforementioned data and their use for scientific purposes. Because these data are collected anonymously, they cannot be removed from the data base after you have taken part in the experiment. You are free to leave the experiment at any time (the data is only saved at the very end of the experiment)."]
};

var lucky = {
	title: "Limitation of Liability",
	text: ["The experiment runs in your browser using the JavaScript language and in particular the <a target='_blank' href='http://www.jspsych.org/'>jsPsych</a> library. This language is interpreted by all recent browsers, it makes the content of the page dynamic – the content is modified by your browser directly, independently of the server side. Under no circumstances can this site be held liable for direct or indirect material damage related to the execution of the experience by your browser."]
};


var respon = {
	title: "Funding",
	text: [
		"This research was funded by the Deutsche Forschungsgemeinschaft (Research Unit FOR2373 'Spoken Morphology', grants MU 4366/1-1 'Spelling, pronunciation and morphological structure' and PL 151/9-1 'Final S in English: The role of acoustic detail in morphological learning'), which we gratefully acknowledge."]
};


var scripts = {
	title: "Tools & scripts",
	text: ["The experiment is adapted from Pinet, S., Zielinski, C., Mathôt, S., Dufau, S., Alario, F. X., & Longcamp, M. (2017). 'Measuring sequences of keystrokes with jsPsych: Reliability of response times and interkeystroke intervals. Behavior research methods', 49(3), 1163-1176, and was designed using this <a target='_blank' href=https://github.com/ilcb-crex/Online_experiments_jsPsych/ '>GitHub repository</a> and the <a target='_blank' href='http://www.jspsych.org/'>jsPsych</a> library. "+  
		"The experimental design and contexts were adapted from Schmitz et al. (2021) and all alien drawings were taken from van de Vijver and Baer-Henney (2014). "+ 
		"The keyboard key designs were extracted from <a target='_blank' href='https://commons.wikimedia.org/wiki/File:Computer_keyboard_US.svg'>Wikimedia Commons</a>. "+ 
		"The scrollbars were generated using the plugin <a target='_blank' href='http://manos.malihu.gr/jquery-custom-content-scroller/'>jQuery custom content scroller</a>. "]
};


	
var allinfos = [ethic, anonym, consent, lucky, respon, legal, scripts];

function put_lines(textarr){
	var Np = textarr.length;
	var spar = "";
	for (var k = 0 ; k < Np ; k++){
		spar += "<p>" + textarr[k] + "</p>";
	}
	return spar;
}

function put_infos(infos){
	
	var Ni = infos.length;
	var infotext = "";
	for (var i=0; i < Ni; i++){
		
		var infopart = infos[i];
		infotext += "<div class='legal_title shabox'>" + infopart.title + "</div>";
		infotext += put_lines(infopart.text);
	}
	return infotext;	
}

var infotxt = put_infos(allinfos);