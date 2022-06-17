/** Big object to define the form pages **/

/* Define all sub-objects first*/


/* ------------------------- General overview */
//var form_blocks = function(npbar_ini, npbar_tot){
function define_form_blocks(){			// npbar_ini, npbar_tot

	var kbcur = {
				type: "radio",
				idname: "kbcur",
				quest: "The keyboard layout you are <b>currently</b> using : ",
				opt_str : ["qwerty", "qwertz", "qwerty modified as qwertz", "qwertz modified as qwerty"],
				opt_id : ["kbcur_qy", "kbcur_qz", "kbcur_qy2qz", "kbcur_qz2qy"]
				};
				
	var age = {
				type: "text",
				idname: "age",
				quest: "Your age :",
				input_nchar: 3
				};
				
	var gender = {
				type : "radio",
				idname : "gender",
				quest : "You are ... :",
				opt_str : ["male", "female", "other"],
				opt_id : ["male", "female", "other"]
				};
				
	var handed = [
				{
				type : "radio",
				idname : "handedness",
				quest : "Dominant hand : ",
				opt_str : ["left-handed", "right-handed", "ambidexter"],
				opt_id : ["hand_left", "hand_right", "hand_ambi"]
				},
				{
				type : "radio",
				idname : "hand_pen",
				quest : "The hand you use for writing with a pen : ",
				opt_str : ["left", "right"],
				opt_id : ["pen_left", "pen_right"]
				}];
		
	var educ = [
				{
				type : "list",
				idname : "educlevel",
				quest : "What is your highest level of education ? :",
				opt_str : ["High school diploma/A-level", "BA", "MA", "PhD", "other"],
				opt_id : ["alevel", "BA", "MA", "PhD", "other"]
				},			

				{
				type : "radio",
				idname : "student",
				quest : "Are you currently enrolled as a student ?",
				opt_str : ["yes", "no"],
				opt_id : ["student_yes", "student_no"]
				},	
				
				{
				type : "list",
				idname : "study_domain",
				quest : "Which field of study ?",
				opt_str : ["Law, Economics, Management", "Literature & Language", "Natural Science"],
				opt_id : ["studom_econ", "studom_litlang", "studom_natsci"],
				visible_if : ["student_yes"]
				},	

				{
				type : "list",
				idname : "study_year",
				quest : "Your year of study :",
				opt_str : ["1", "2", "3", "4", "5", "6+"],
				opt_id : ["studyr_1", "studyr_2", "studyr_3", "studyr_4", "studyr_5", "studyr_6+"],
				visible_if : ["student_yes"]
				},
				
				{
				type : "radio",
				idname : "study_notetaking",
				quest : "I take notes :",
				opt_str : ["typed", "handwritten"],
				opt_id : ["studnote_kb", "studnote_hand"],
				visible_if : ["student_yes"]
				}
				
				];	

	var language = [

				{
				type : "radio",
				idname : "lang_native",
				quest : "What was the language primarily spoken in your home? : ",
				opt_str : ["English", "other"],
				opt_id : ["langnat_en", "langnat_oth"]
				},
				
				{
				type : "text",
				idname : "lang_city",
				quest : "Which city (+state) have you spent most of your life in? :",
				input_nchar: 50,
				visible_if : ["langnat_en"]
				},
				
				{
				type : "radio",
				idname : "biling",
				quest : "Are you bilingual, i.e., did you learn any other language besided English from early childhood ?",
				opt_str : ["yes", "no"],
				opt_id : ["biling_yes", "biling_no"]
				},
				
				{
				type : "text",
				idname : "biling_lang",
				quest : "Which language(s)?",
				input_nchar : 100,
				visible_if : ["biling_yes"]
				},

				{
				type : "radio",
				idname : "impair",
				quest : "Do you have a known language impairment (speech and/or writing) ?",
				opt_str : ["yes", "no"],
				opt_id : ["impair_yes", "impair_no"]
				},
				
				{
				type : "list",
				idname : "impair_what",
				quest : "What type of impairment ?",
				opt_str : ["dyslexia", "SLD (spoken language disorder)", "hearing impairment", "other"],
				opt_id : ["impair_dys", "impair_spoken", "impair_hear", "impair_oth"],
				visible_if : ["impair_yes"]
				}
				];
	var music = [			
				{
				type : "radio",
				idname : "musician",
				quest : "Are you a musician ?",
				opt_str : ["yes", "no"],
				opt_id : ["music_yes", "music_no"]
				},

				{
				type : "text",
				idname : "musician_instru",
				quest : "Which instrument(s) ?",
				input_nchar: 50,
				visible_if : ["music_yes"]
				}	
				];
				
			
	/* --------------------------About keyboard typing */
	var kb_typing = [
				{
				type: "radio",
				idname: "kb_user",
				quest: "Do you regularly type on a keyboard ?",
				opt_str : ["yes", "no"],
				opt_id : ["kb_yes", "kb_no"]
				},
				{
				type: "checkbox",
				idname: "kb_hardware",
				quest: "I primarily use a... ?",
				opt_str: ["desktop computer", "laptop", "tablet", "other"],
				opt_id: ["kb_deskpc", "kb_laptop", "kb_tablet", "kb_other"]
				},

				{
				type: "checkbox",
				idname: "kbuse",
				quest: "Right now, I am using a... ?",
				opt_str: ["desktop computer", "laptop", "tablet", "other"],
				opt_id: ["kbuse_deskpc", "kbuse_laptop", "kbuse_tablet", "kbuse_other"]
				},

				{
				type : "list",
				idname : "screentime",
				quest : "In total, how much time do you approximately spend on a computer or tablet per day (in hrs) ?",
				opt_str : ["0", "1", "2", "3", "4", "5", "6+"],
				opt_id : ["scrt_0", "scrt_1", "scrt_2", "scrt_3", "scrt_4",	"scrt_5", "scrt_6+"]
				},	
				
				{
				type : "list",
				idname : "kb_time",
				quest : "What percentage of your screentime do you spend <b>typing</b> ?",
				opt_str : ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
				opt_id : ["scrttyp_0", "scrttyp_10", "scrttyp_20", "scrttyp_30", "scrttyp_40", "scrttyp_50",
						"scrttyp_60", "scrttyp_70", "scrttyp_80", "scrttyp_90", "scrttyp_100"]
				},	

				{
				type: "checkbox",
				idname: "kb_activity",
				quest: "What is your main type of activity on a keyboard (select 2 max) ?",
				opt_str: ["note taking", "copying", "text production", "email and/or social media", "gaming"],
				opt_id: ["kbact_note", "kbact_copy", "kbact_text", "kbact_emailsm", "kbact_gaming"],
				checklim: 2
				},
				
				{
				type: "radio",
				idname: "kb_learn",
				quest: "How did you learn to type?",
				opt_str : ["self-taught", "supervised training"],
				opt_id : ["kblearn_self", "kblearn_train"]
				},

				{
				type : "list",
				idname : "kb_years",
				quest : "Approximately, for how many years have you been typing on a keyboard ?",
				opt_str : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20",
						"21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40+"],
				opt_id : ["kbyr_1","kbyr_2","kbyr_3","kbyr_4","kbyr_5","kbyr_6","kbyr_7","kbyr_8","kbyr_9","kbyr_10",
				"kbyr_11","kbyr_12", "kbyr_13","kbyr_14","kbyr_15","kbyr_16","kbyr_17","kbyr_18","kbyr_19","kbyr_20",
				"kbyr_21","kbyr_22","kbyr_23", "kbyr_24","kbyr_25","kbyr_26","kbyr_27","kbyr_28","kbyr_29","kbyr_30",
				"kbyr_31","kbyr_32","kbyr_33","kbyr_34", "kbyr_35","kbyr_36","kbyr_37","kbyr_38","kbyr_39","kbyr_40"]
				},	

				{
				type: "radio",
				idname: "kb_handwatch",
				quest: "Do you watch your own hands while typing ?",
				opt_str : ["never", "rarely", "often", "always"],
				opt_id : ["kbhand_never", "kbhand_rarely", "kbhand_often", "kbhand_always"]
				},	
				
				{
				type: "radio",
				idname: "kb_improve",
				quest: "Have you ever tried to improve your typing (e.g. trying to go faster, use more fingers, etc.) ?",
				opt_str : ["yes", "no"],
				opt_id : ["kbimp_yes", "kbimp_no"]
				},

				{
				type: "radio",
				idname: "kb_other",
				quest: "Do you have any notable experience with keyboards other than QWERTY (e.g., during stays abroad) ?",
				opt_str : ["yes", "no"],
				opt_id : ["kbother_yes", "kbother_no"]
				}			
			];
	/*----------------------------------------- Writing on other medium */		
	var other_medium = [
				{
				type : "list",
				idname : "othmed_dur",
				quest : "In total, how much time per day do you spend writing on media other than your laptop (e.g. paper) "+
					"(<b>actual time spent writing only</b>) : ",
				opt_str : ["0 minutes", "10 minutes", "20 minutes", "30 minutes", "40 minutes", "50 minutes", "1 hour", "2 hours", "3 hours", "4 + heures"],
				opt_id : ["othdur_0", "othdur_10m", "othdur_20m", "othdur_30m", "othdur_40m", "othdur_50m", "othdur_1", "othdur_2", "othdur_3", "othdur_4+"]
				},	
				
				{
				type: "radio",
				idname: "othmed_smartphone",
				quest: "Do you use a smartphone ?",
				opt_str: ["yes", "no"],
				opt_id: ["othmed_smart_yes", "othmed_smart_no"]
				},
				
				{
				type: "list",
				idname: "othmed_smart_year",
				quest: "For how many years ?",
				opt_str : ["1","2","3","4","5","6","7","8","9","10+"],
				opt_id : ["smyr_1","smyr_2","smyr_3","smyr_4","smyr_5","smyr_6","smyr_7","smyr_8","smyr_9","smyr_10+"],
				visible_if : ["othmed_smart_yes"]
				},
				
				{
				type: "radio",
				idname: "othmed_kb",
				quest: "On your phone, do you use a keyboard? :",
				opt_str : ["QWERTY", "other (e.g. numeric keypad)"],
				opt_id : ["othmed_kb_qwerty", "othmed_kb_other"]
				},
				
				{
				type: "radio",
				idname: "othmed_phon",
				quest: 'Do you use phonetic abbreviations such as cu or 2nite ?',
				opt_str : ["yes", "no"],
				opt_id : ["othmed_phon_yes", "othmed_phon_no"]
				}
				
		/*		{
				type: "radio",
				idname: "othmed_swype",
				quest: 'Utilisation du SWYPE ?',
				opt_str : ["Oui", "Non"],
				opt_id : ["othmed_swype_yes", "othmed_swype_no"]
				},			
				{
				type : "text",
				idname : "othmed_sms",
				quest : "Estimation du nombre de SMS écrit par jour : ",
				input_nchar: 4
				}*/
				
				];

	var handwritten = {
				type: "list",
				idname: "handwrt_dur",
				quest: "Estimated total time spent <b>handwriting</b> per day : ",
				opt_str :  ["0 minute", "10 minutes", "20 minutes", "30 minutes", "40 minutes", "50 minutes", "1 hour", "2 hours", "3 hours", "4+ hours"],
				opt_id : ["hdwdur_0", "hdwdur_10m", "hdwdur_20m", "hdwdur_30m", "hdwdur_40m", "hdwdur_50m","hdwdur_1", "hdwdur_2", "hdwdur_3", "hdwdur_4+"]
				};

	var wrt_comments = [ 
				{
				type: "radio",
				idname: "is_writcom",
				quest: "Do you have any comments about your writing practice (digital or handwritten) ? ",
				opt_str : ["yes", "no"],
				opt_id : ["wcom_yes", "wcom_no"]
				},
				{
				type: "text",
				idname: "writing_comments",
				quest: "If so, which ? ",
				input_nchar: 100,
				visible_if : ["wcom_yes"]
				}
				];
				
	var exp_problem = [
				{
				type: "radio",
				idname: "exp_prob",
				quest: "Did you encounter any problems during this online experiment ?",
				opt_str : ["yes", "no"],
				opt_id : ["prob_yes", "prob_no"]
				},
				{
				type: "text",
				idname: "exp_prob_which",
				quest: "If so, which ?",
				input_nchar: 100,
				visible_if : ["prob_yes"]
				}
				];
				
	// Special form page with selection of the fingers
	// Use splice method to insert it in form_block
	
	// Need a specific plugin to display the special form (checkbox + image conditionnelle)
	var fingstr = ['thumb', 'index finger', 'middle finger', 'ring finger', 'little finger',
					'thumb', 'index finger', 'middle finger', 'ring finger', 'little finger'];
	var fingid = ['pog_EN','ing_EN','mag_EN','ang_EN','aug_EN','pod_EN','ind_EN','mad_EN','and_EN','aud_EN'];
	var form_fingers = {
		type: 'form-fingers',
		progbar: false, 
		idname: "finger_choices",
		quest: "Select those fingers you use to type on a keyboard :",
		img_background: "img/form/hf_fing_bg_EN.png",
		img_maskpart : "img/form/hf_fing_",
		opt_str: fingstr,
		opt_id: fingid
	};	

	/* ================= Big form object */	
	var iniarr = [];
	var hf_form = [
		{
			preamble: "Some additional information :",
			elements: iniarr.concat(kbcur, age, gender, handed, educ)	
		},	
		{
			preamble: " ",
			elements: iniarr.concat(language)
		},	
		
		{
			preamble: "<p> About your screentime (PC, tablet) :</p>" +
						"<p style='font-size:16px'><i>This part only concerns your use of your "+
						"<b>computer or tablet (with a virtual keyboard)</b>.</i></p>",
			elements: iniarr.concat(kb_typing)
		},	
		
		/*{
			preamble: "Pratique de l'écriture sur un autre support (téléphone portable, smartphone) :",
			elements: iniarr.concat(other_medium)
		},	
		{
			preamble: "Pratique de l'écriture manuscrite :",
			elements: iniarr.concat(handwritten)
		},*/
		{
			preamble: "And finally ... :",
			elements: iniarr.concat(wrt_comments, exp_problem)		
		}
		];
		
	/*** Define ALL FORM BLOCKS*/

	var Npages = hf_form.length;
	var form_blocks = new Array(Npages);
	var g = 0;
	for (var i = 0; i < Npages ; i++) {
		if (i==3){
			g = g +1;
		};
		
		if (i==0){
			var pbar = true;
		}else{
			var pbar = false;
		}
		form_blocks[i] = {
			type: "form",
			preamble: hf_form[i].preamble,
			progbar: pbar,
			form_struct: hf_form[i].elements,
			submit: "Submit"
		};
		g = g + 1;
	}
	// Add form_finger at the 3th position (& remove 0 items of the ionitial array)
	// With JavaScript array splice method :
	form_blocks.splice(3, 0, form_fingers);
	
	return form_blocks;
};