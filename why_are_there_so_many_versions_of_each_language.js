//is u too tired of typing every single version of your 
//language to check if its doable in your language? well this is what 
//this is for :wink: (kinda mainly for python because pythons too slow
//to do like a bunch of problems, and as someone who kinda only knows
//python (:ehecry:), i will know not to waste my time doing something
//not doable in python)

//orz AZron for userscript template :praydge:

//oh yeah... errr sorry if its sorta messed up 🐒

$(document).ready(function() {

    if ($("li.tab.active")[0].innerText == " Best" || $("li.tab.active")[0].innerText == " All") {

        var temp = document.querySelector("#content-right > div > div > div");
        
        // pyfon ones~
        var pybox = document.createElement("input");
        pybox.setAttribute("type", "checkbox");
        var pytag = document.createElement("label");
        pytag.innerText = "yo is this doable in pyfon? \n";
        temp.appendChild(pybox);
        temp.appendChild(pytag);
        pybox.checked = false;
        
        // ja:b:a ones~
        var jvbox = document.createElement("input");
        jvbox.setAttribute("type", "checkbox");
        var jvtag = document.createElement("label");
        jvtag.innerText = "hb java? \n";
        temp.appendChild(jvbox);
        temp.appendChild(jvtag);
        jvbox.checked = false; 

        // cpp ones~
        var cppbox = document.createElement("input");
        cppbox.setAttribute("type", "checkbox");
        var cpptag = document.createElement("label");
        cpptag.innerText = "aaand cpp? (most likely lol) \n";
        temp.appendChild(cppbox);
        temp.appendChild(cpptag);
        cppbox.checked = false;        
            
        
        pybox.onclick = pyfonuwu;
        jvbox.onclick = javauwu;
        cppbox.onclick = cppuwu;
        
        function pyfonuwu(){
            var pysuffix = '/?language=PY2&language=PY3&language=PYPY&language=PYPY3';
            window.location.href = ((window.location.href).split('/')).slice(0,-1).join('/') + pysuffix;
        }    
        
        function javauwu(){
            var javasuffix = '/?language=JAVA11&language=JAVA15&language=JAVA8';
            window.location.href = ((window.location.href).split('/')).slice(0,-1).join('/') + javasuffix;
        }
        
        function cppuwu(){
            var cppsuffix = '/?language=CPP03&language=CPP11&language=CPP14&language=CPP17&language=CPP20&language=PCPP03&language=PCPP11&language=VC';
            window.location.href = ((window.location.href).split('/')).slice(0,-1).join('/') + cppsuffix;
        }    
        
    }
})

//stan svt ;)
