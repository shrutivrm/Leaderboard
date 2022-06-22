//Check if all the input fields are filled or not
function validateForm(){
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var country = document.getElementById("country").value;
    var score = document.getElementById("Score").value;
    if(fname =="" || lname == "" || country =="" || score==""){
        alert("All the fields are required");
        return false;
    } else{
        addTable();
    }
}


//Add input data into the table
function addTable(){
    var table = document.getElementById("player_list"),

        newRow = table.insertRow(table.length),

        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),

        fname = document.getElementById("first_name").value + " " + document.getElementById("last_name").value,
        country = document.getElementById("country").value,
        score = document.getElementById("Score").value;
        activity = `<button class="controls-button-insert"  onclick = "remove(this)"><i class="gg-trash"></i></button> 
                    <button class="controls-button-insert"  onclick = "add()">+5</button> 
                    <button class="controls-button-insert"  onclick = "sub()">-5</button>`;

                    
        cell1.innerHTML = `${fname} <div class="date"> ${Date().substring(0,21)}</div>`;
        cell1.className = "list";
        var temp = document.querySelectorAll(".list");
        for (var i = 0; i < temp.length; i++) {
            temp[i].style.color = "black";
            temp[i].style.fontSize = "18px";
            temp[i].style.textAlign = "center";
            temp[i].style.fontWeight = "600";
            temp[i].style.textTransform = "uppercase";
        }

        cell2.innerHTML = country;
        cell2.className = "list1";
        var temp1 = document.querySelectorAll(".list1");
        for (var i = 0; i < temp1.length; i++) {
            temp1[i].style.color = "black";
            temp1[i].style.fontSize = "18px";
            temp1[i].style.textAlign = "center";
            temp1[i].style.fontWeight = "600";
            temp1[i].style.textTransform = "uppercase";
        }

        cell3.innerHTML = score;
        cell3.className = "list2";
        var temp2 = document.querySelectorAll(".list2");
        for (var i = 0; i < temp2.length; i++) {
            temp2[i].style.color = "black";
            temp2[i].style.fontSize = "18px";
            temp2[i].style.textAlign = "center";
            temp2[i].style.fontWeight = "600";
            temp2[i].style.marginRight = "30px";
        }

        cell4.innerHTML = activity;
    
        sortTable();
        clearForm();
}


//To clear the form after submitting
function clearForm(){
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("Score").value = "";
}


//To delete a selected row
function remove(dl){
    //var deleteRow = dl.parentElement.parentElement.parentElement;
    //deleteRow.remove();
    var table = document.getElementById("table-body"), rIndex;
    for ( var i = 0; i <table.rows.length; i++){
        var score, new_score;
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            var num = rIndex - 1;
            //console.log(rIndex);
            var required_row = document.getElementById("table-body").getElementsByTagName('tr')[num];
            required_row.remove();
        }
    }
    sortTable();
}



//Increament the score value.
function add(){
    var table = document.getElementById("table-body"), rIndex;
    for ( var i = 0; i <table.rows.length; i++){
        var score, new_score;
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
        //console.log(rIndex);
            var num = rIndex - 1;
        // console.log(num);
            var required_row = document.getElementById("table-body").getElementsByTagName('tr')[num];
        //console.log(required_row);
        //console.log(required_row.children[2]);
            score = required_row.children[2];
            new_score = Number(score.innerText) + 5;
        //console.log(new_score);
            required_row.children[2].innerHTML = new_score;
            
            
        }
        
    }
    sortTable();
}


//Increament the score value.
function sub(){
    var table = document.getElementById("table-body"), rIndex;
    for ( var i = 0; i <table.rows.length; i++){ 
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
        //console.log(rIndex);
            var num = rIndex - 1;
            var required_row = document.getElementById("table-body").getElementsByTagName('tr')[num];
        //console.log(result.children[2]);
            var score = required_row.children[2];
        
            var new_score = Number(score.innerText) - 5;
        //console.log(new_score);
            required_row.children[2].innerHTML = new_score;
        }
         sortTable();

    } 
}

//Function to sort the rows after updating score values.
function sortTable(){
    var table, i,x,y;
    table = document.getElementById("table-body");
    var switching = true;

    while (switching) {
        switching = false;
        var row = table.rows;
        
        // Loop to go through all rows
        for (i = 0; i <table.rows.length-1; i++) {
            var Switch = false;
            var j = i + 1;
            x = row[i].getElementsByTagName("td")[2];
            y = row[j].getElementsByTagName("td")[2];

            if (x.innerHTML > y.innerHTML)
                {
                    Switch = true;
                    break;
                }

        }
        if (Switch) {
            // Function to switch rows and mark switch as completed
            row[i].parentNode.insertBefore(row[j], row[i]);
            switching = true;
        }
    }
}
