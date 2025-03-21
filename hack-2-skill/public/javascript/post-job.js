
document.addEventListener('DOMContentLoaded', function() {
const districtData = {
"Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur", "Krishna", "Nellore"],
"Arunachal Pradesh": ["Tawang", "Itanagar", "Ziro", "Pasighat"],
"Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
"Manipur": ["Imphal East", "Imphal West", "Thoubal", "Bishnupur"],
"Meghalaya": ["East Khasi Hills", "West Khasi Hills", "Ri-Bhoi", "West Garo Hills"],
"Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib"],
"Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
"Tripura": ["Agartala", "Dhalai", "Khowai", "Unakoti"],
"Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
"Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
"Ladakh": ["Leh", "Kargil"],
"Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba"],
"Goa": ["North Goa", "South Goa"],
"Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
"Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
"Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
"Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
"Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
"Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
"Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
"Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
"Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
"Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli"],
"Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
"West Bengal": ["Kolkata", "Darjeeling", "Siliguri", "Howrah"]
};

let selectedstate = document.querySelector('#state');
let districtselect = document.querySelector('#district');

selectedstate.addEventListener('change', function() {
districtselect.innerHTML = '<option value="">Select District</option>';
let val = selectedstate.value;
if(val && districtData[val]) {
    districtData[val].forEach(district => {
        let option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtselect.appendChild(option);
    });
}
});
});


function createDiv() {
    let container = document.getElementById("container");
    let newDiv = document.createElement("div");
    newDiv.classList.add("input-container", "p-3", "border", "rounded", "d-flex", "gap-2", "align-items-center", "bg-light");
    
    let input1 = document.createElement("input");
    input1.type = "number";
    input1.pattern=pattern="[0-9]";
    input1.placeholder = "Enter number of workers";
    input1.classList.add("form-control");
    input1.name = "no_workers[]";
    input1.required = true;

    let input2 = document.createElement("select");
    input2.classList.add("form-select");
    let options = ["Select a proffesion", "Construction-labour", "Carpenter", "Mason", "Electrician", "Plumber", "AC-Tenchnician", "Painter", "Steelworker", "Welder", "Sewage-worker"];
    options.forEach(option => {
        let newOption = document.createElement("option");
        newOption.value = option;
        newOption.innerText = option;
        input2.appendChild(newOption);
    });
    input2.name = "profession[]";
    input2.required = true;

    let input3 = document.createElement("input");
    input3.type = "number";
    input3.pattern=pattern="[0-9]";
    input3.placeholder = "Enter salary";
    input3.classList.add("form-control");
    input3.name = "salary[]";
    input3.required = true;

    let input4 = document.createElement("select");
    input4.classList.add("form-select");
    let optiones= ["Select a payment_method","Hourly","Daily"];
    optiones.forEach(option => {
        let newOption = document.createElement("option");
        newOption.value = option;
        newOption.innerText = option;
        input4.appendChild(newOption);
    });
    input4.name="payment[]"
    input4.required=true;

    let input5 = document.createElement("input");
    input5.type = "number";
    input5.pattern=pattern="^[0-9]*[.]?[0-9]+$";
    input5.placeholder = "work_day";
    input5.classList.add("form-control");
    input5.name = "work_day[]";
    input5.required = true;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("btn", "btn-danger");
    removeBtn.onclick = function() {
    container.removeChild(newDiv);
    };
    
    newDiv.appendChild(input1);
    newDiv.appendChild(input2);
    newDiv.appendChild(input3);
    newDiv.appendChild(input4);
    newDiv.appendChild(input5);
    newDiv.appendChild(removeBtn);
    container.appendChild(newDiv);
}