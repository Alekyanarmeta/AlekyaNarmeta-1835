function fun1()
{  
    let elem = document.getElementsByTagName("input");
    let row = document.createElement("tr");
    let table = document.getElementById("tab");
    let temp = [];
    let temp1=[]  // To store selected checkboxes
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].type === "checkbox") {
            if (elem[i].checked) {
                temp.push(elem[i].value); 
                elem[i].checked=false;
            }
            if (elem[i+1].type !== "checkbox")
            {
                let data = document.createElement("td");
                data.textContent =temp;
                row.appendChild(data);
                temp1.push(temp)
            }
        } else{
            if (elem[i].type === "radio")
            {
                if(elem[i].checked)
                {
                let data = document.createElement("td");
                data.textContent = elem[i].value;
                temp1.push(elem[i].value)
                row.appendChild(data);
                elem[i].checked=false;
                }
            }
            else
            {
                let data = document.createElement("td");
                data.textContent = elem[i].value;
                temp1.push(elem[i].value)
                row.appendChild(data);
                 elem[i].value="";
            }
        }
    }
    table.appendChild(row);
}
document.addEventListener("DOMContentLoaded", function () {
    fun2(); // Call fun2() when the page loads
});

function fun2() {
    let button = document.getElementById("button1");
    let div1=document.getElementById("print");
    button.addEventListener("mouseover", function () {
        button.style.background = "red";
    });

    button.addEventListener("mouseout", function () {
        button.style.background = ""; // Reset color on mouse out
    });
    button.addEventListener("mousedown", function () {
        button.style.background = "pink"; // Reset color on mouse out
    }); 
    div1.addEventListener("mouseover",function(){
     div1.style.background="pink";
   });
   div1.addEventListener("mouseout",function(){
    div1.style.background="coral";
  });


}
