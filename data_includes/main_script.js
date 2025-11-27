
var shuffleSequence = seq(randomize(startsWith("acceptability")),"outro");

var pageTitle = "Prolific Linguistic Survey";
var completionMessage = "The results were successfully sent to the server. You can now validate your participation on Prolific using the following code: CHNJPZ4O. Thanks!";
var completionErrorMessage = "There was an error sending the results to the server. Do not refresh this page. Check your internet connection and try sending the results again.";


var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true,
        hideProgressBar: true
    },
    "Message", {
       hideProgressBar: true
    },
    "FastScale", {
        startValue: 0,  
        endValue: 100,
        hideProgressBar: false,
        handleLabel: false,
        scaleLabels: ["Definitely not","Definitely"],
        startColor: "#A00000",
        endColor: "#A00000"
    }
];



var items = [

    ["sep", "Separator", {transfer:300, normalMessage:"+"}],

  ["questionnaire", "Message", {html:{include:"questionnaire.html"}}],
    
// items

['acceptability_1_good_controls', 'FastScale', {html: '<p class="sentence">&ldquo;Most people eat breakfast in the morning.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_2_good_controls', 'FastScale', {html: '<p class="sentence">&ldquo;The sun rises in the east.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_3_good_controls', 'FastScale', {html: '<p class="sentence">&ldquo;Dogs can recognize their owners&#39; voices.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_4_good_controls', 'FastScale', {html: '<p class="sentence">&ldquo;Male cardinals are red.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_5_good_controls', 'FastScale', {html: '<p class="sentence">&ldquo;Not everyone in the US drives an automatic car.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_6_syntax1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_7_syntax1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_8_syntax1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_9_syntax1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_10_syntax1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_11_syntax2', 'FastScale', {html: '<p class="sentence">&ldquo;The pigs grunts.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_12_syntax2', 'FastScale', {html: '<p class="sentence">&ldquo;We thought he to be unhappy.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_13_syntax2', 'FastScale', {html: '<p class="sentence">&ldquo;House the old collapsed.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_14_syntax2', 'FastScale', {html: '<p class="sentence">&ldquo;She tried to may leave.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_15_syntax2', 'FastScale', {html: '<p class="sentence">&ldquo;Himself shaved Andy.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_16_processing', 'FastScale', {html: '<p class="sentence">&ldquo;Fat people eat accumulates in their bodies.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_17_processing', 'FastScale', {html: '<p class="sentence">&ldquo;When a doctor examines some patients worry they might be sick.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_18_processing', 'FastScale', {html: '<p class="sentence">&ldquo;When the ice melts the ground in Northen cities becomes wet.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_19_processing', 'FastScale', {html: '<p class="sentence">&ldquo;The language that the country that borders Canada uses is English.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_20_processing', 'FastScale', {html: '<p class="sentence">&ldquo;Scientists who the committee awards the Nobel Prize to are celebrated worldwide.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_21_false', 'FastScale', {html: '<p class="sentence">&ldquo;Bananas grow on pine trees.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_22_false', 'FastScale', {html: '<p class="sentence">&ldquo;The Pacific Ocean is smaller than Lake Michigan.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_23_false', 'FastScale', {html: '<p class="sentence">&ldquo;Male cardinals are blue.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_24_false', 'FastScale', {html: '<p class="sentence">&ldquo;Everyone in the US drives a manual transmission.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_25_false', 'FastScale', {html: '<p class="sentence">&ldquo;The sun rises in the west.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_26_contradiction', 'FastScale', {html: '<p class="sentence">&ldquo;The number seven is both odd and even.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_27_contradiction', 'FastScale', {html: '<p class="sentence">&ldquo;An empty swimming pool is full of water.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_28_contradiction', 'FastScale', {html: '<p class="sentence">&ldquo;Texas has more and less population than California.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_29_contradiction', 'FastScale', {html: '<p class="sentence">&ldquo;North Carolina and Virginia have smaller populations than each other.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_30_contradiction', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_31_tautology', 'FastScale', {html: '<p class="sentence">&ldquo;The largest US city has more population than the third-largest one.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_32_tautology', 'FastScale', {html: '<p class="sentence">&ldquo;A full swimming pool isn&#39;t empty.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_33_tautology', 'FastScale', {html: '<p class="sentence">&ldquo;Illinois has either more or less population than Maryland.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_34_tautology', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_35_tautology', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_36_magri', 'FastScale', {html: '<p class="sentence">&ldquo;Some Canadians come from a cold country.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_37_magri', 'FastScale', {html: '<p class="sentence">&ldquo;Some elephants are mammals.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_38_magri', 'FastScale', {html: '<p class="sentence">&ldquo;Everyone&#39;s left hand or right hand is different from the other.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_39_magri', 'FastScale', {html: '<p class="sentence">&ldquo;California or Oregon have the same time zone.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_40_magri', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_41_presup_failure', 'FastScale', {html: '<p class="sentence">&ldquo;The queen of California visited the Smithsonian last week.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_42_presup_failure', 'FastScale', {html: '<p class="sentence">&ldquo;The US state north of Alaska has terrible winters.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_43_presup_failure', 'FastScale', {html: '<p class="sentence">&ldquo;Americans recently stopped driving on the left.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_44_presup_failure', 'FastScale', {html: '<p class="sentence">&ldquo;Both states bordering Pennsylvania have smaller populations.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_45_presup_failure', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_46_MP_failure', 'FastScale', {html: '<p class="sentence">&ldquo;Most people can hold a pound with all their hands.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_47_MP_failure', 'FastScale', {html: '<p class="sentence">&ldquo;A mother of the defendant usually attends trials.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_48_MP_failure', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_49_MP_failure', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_50_MP_failure', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_51_logicality1', 'FastScale', {html: '<p class="sentence">&ldquo;There are most motorized cars. .&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_52_logicality1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_53_logicality1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_54_logicality1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_55_logicality1', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_56_logicality2', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_57_logicality2', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_58_logicality2', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_59_logicality2', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_60_logicality2', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_61_logicality3', 'FastScale', {html: '<p class="sentence">&ldquo;Parents usually hope whether their children pass important exams. .&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_62_logicality3', 'FastScale', {html: '<p class="sentence">&ldquo;In medieval times, people believed whether the sun revolved around the earth..&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_63_logicality3', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_64_logicality3', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_65_logicality3', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_66_logicality4', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_67_logicality4', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_68_logicality4', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_69_logicality4', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],
['acceptability_70_logicality4', 'FastScale', {html: '<p class="sentence">&ldquo;.&rdquo;</p><p class="prompt">Do you think the sentence could be spoken by a native speaker?</p>'}],

];

