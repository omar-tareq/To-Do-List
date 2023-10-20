const inputBox = document.getElementById("input-box");
const cont = document.getElementById("cont");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
    let pp = document.getElementById("cont")
    pp.innerHTML = `<h2>
    <center>
    You must write something !
    </h2>
    `


        // let vivv = document.createElement("video")
        // vivv.innerHTML = `<video src="viv.mp4" controls autoplay></video>`
        // pp.innerHTML = `<h2>
        // <center>
        //     هَٰذِهِ  بِضَاعَتُنَا  رُدَّتْ  إِلَيْنَا ۖ  وَنَمِيرُ  أَهْلَنَا  وَنَحْفَظُ  أَخَانَا  وَنَزْدَادُ  كَيْلَ  بَعِيرٍ ۖ  ذَٰلِكَ  كَيْلٌ  يَسِيرٌ
        //  </center>
        // </h2>  `
        // cont.appendChild(vivv);

        
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let pp = document.getElementById("cont")
        pp.innerHTML = ``
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)



    }

    inputBox.value = ""
    SaveData();
}


listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        SaveData();

    }
}, false);


function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()