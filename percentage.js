var lang = {
    "en": {
        algorithm: "Algorithm",
        dataStructure: "Data Structure",
        english: "English",
        japanese: "Japanese",
        javaScriptEvaluation: "Proficient in JavaScript, familiar with modern front-end technologies such as Node.js, AngularJS, RequireJS and etc.",
        algorithmEvaluation: "Deep understanding of data structures and algorithms, rich experience in performance tuning",
        cppJavaEvaluation: "Familiar with C/C++, Java and some other modern programming languages",
        renderingEvaluation: "Lots of experience working with HTML5 rendering, both using canvas or SVG",
        englishEvaluation: "CET6 and BEC higher, fluency in speaking, skilled in reading and communication",
        japaneseEvalution: "JLPT N1, had consecutive interpretation and translation experiences"
    },
    "zh-CN": {
        algorithm: "算法",
        dataStructure: "数据结构",
        english: "英语",
        japanese: "日语",
        javaScriptEvaluation: "精通 JavaScript，熟悉流行的前端技术，诸如：Node.js，AngularJS，RequireJS 等等",
        algorithmEvaluation: "对数据结构和算法有全面深刻的理解，在性能调优方面有丰富的经验",
        cppJavaEvaluation: "熟悉 C/C++, Java 等其他一些现代编程语言",
        renderingEvaluation: "对HTML5渲染很有经验，包括 canvas 和 SVG",
        englishEvaluation: "英语，通过 CET6级、BEC 高级，可以毫无障碍地阅读和交流",
        japaneseEvalution: "日本语能力试验1级，有业余性质的交替传译和翻译的经验"
    }
};

var createPercentageView = function (text, percent) {
    var canvas = document.createElement("canvas");
    var canvasContainer = document.getElementById('canvasContainer');
    canvasContainer.appendChild(canvas);

    canvas.width = 180;
    canvas.height = 160;
    var ctx = canvas.getContext('2d');

    var waitTime = 1200;

    function drawBackground () {
        ctx.strokeStyle = '#AAAAAA';
        ctx.lineWidth = 13;
        ctx.beginPath();
        ctx.arc(80, 80, 60, 0, 2 * Math.PI);
        ctx.stroke();
    
        ctx.textAlign = 'center';
        ctx.font = "19px Verdana";
        ctx.fillText(text, 80, 87, 101);    
    }

    drawBackground();

    function draw() {
        ctx.clearRect(0, 0, 180, 160);
        drawBackground();
        var time = (new Date()).getTime();
        ctx.strokeStyle = '#303030';
        ctx.lineWidth = 13;
        ctx.beginPath();
        ctx.arc(80, 80, 60, -0.5 * Math.PI, (2 * percent * ((time - startTime - waitTime) / 1000) - 0.5) * Math.PI);
        ctx.stroke();
        if ((time - startTime - waitTime) < 1000) {
            window.requestAnimationFrame(draw);
        }
    }
    setTimeout(function () {
        window.requestAnimationFrame(draw);
    }, waitTime);

    return canvas;
}

var startTime = (new Date()).getTime();
var langType = document.documentElement.lang;
createPercentageView('JavaScript', 0.9).title = lang[langType].javaScriptEvaluation;
createPercentageView('C/C++', 0.7).title = lang[langType].cppJavaEvaluation;
createPercentageView('Java', 0.5).title = lang[langType].cppJavaEvaluation;
createPercentageView(lang[langType].algorithm, 0.75).title = lang[langType].algorithmEvaluation;
createPercentageView(lang[langType].dataStructure, 0.7).title = lang[langType].algorithmEvaluation;
createPercentageView(lang[langType].english, 0.8).title = lang[langType].englishEvaluation;
createPercentageView(lang[langType].japanese, 0.85).title = lang[langType].japaneseEvalution;