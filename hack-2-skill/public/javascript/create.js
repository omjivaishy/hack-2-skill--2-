
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
        let selectedstate=document.querySelector('#state');
        let districtselect=document.querySelector('#district')

        selectedstate.addEventListener('change',function(){
            districtselect.innerHTML='<option value="">Select District</option>';
            let val=selectedstate.value;
            if(val && districtData[val])
        {
            districtData[val].forEach(district => {
                let option=document.createElement("option");
                option.value=district;
                option.textContent=district;
                districtselect.appendChild(option);
            });
        }
        });

        async function address(latitude,longitude) {
            try {
                let api= await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                let data=await api.json();
                districtselect.innerHTML='<option value="">Select District</option>';
                selectedstate.value=`${data.address.state}`;
                districtselect.getElementsByTagName("option")[0].textContent=`${data.address.state_district}`;
                districtselect.getElementsByTagName("option")[0].value=`${data.address.state_district}`;
                console.table(data);
            } catch (error) {
                console.log(error);
            }
        }

const userlocation = document.getElementById("use-location");
userlocation.addEventListener("click", function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      address(latitude,longitude);
    }, 
    function(error) {
      console.error("Error getting location:", error);
    });

  } else {
    console.error("Geolocation is not supported by this browser");
  }
});

  function validatePassword() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var message = document.getElementById("message");
            
            if (password === confirmPassword && password !== "") {
                message.style.color = "green";
                message.innerHTML = "Passwords match";
            } else {
                message.style.color = "red";
                message.innerHTML = "Passwords do not match";
            }
        }