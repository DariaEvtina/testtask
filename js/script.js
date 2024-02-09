function addletters(){
    const arr = ["a","b","c","d","e","f","g","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const element = document.getElementById("alphabet");
    for (var letter in arr){
        let para = document.createElement("a");
        para.href="#";
        let node = document.createTextNode(arr[letter]);
        para.appendChild(node);
        element.appendChild(para);
    }
}
