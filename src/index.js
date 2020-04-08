import './main.css'
import './javascript.svg'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/atom-one-dark.css';

(function (logger, hljs) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            // output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);
            } else {
                output += arg;
            }

            // output += "</span>&nbsp;";
        }

        const highlightedCode = hljs.highlight('javascript', output).value

        logger.innerHTML += highlightedCode + "<br/>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"), hljs);
