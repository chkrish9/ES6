//ES 5
let age=20;
let html="<tr>"+
        "<td><span>"+age+""+"</td></span>"
    "</tr>";
$("someId").html(html);

//ES 6
let age1=20;
let html1=`<tr>
            <td><span>${age}</td></span>
            </tr>`;

$("someId").html(html1);
