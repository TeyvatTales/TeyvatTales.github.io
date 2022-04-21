
    var data = 0;
    document.getElementById("stars").innerText = data;
    function decrement() {
        if (data > 0) {
            data = data - 1;
            document.getElementById("stars").innerText = data;
        }
    }
    function increment() {
        if (data < 36) {
            data = data + 1;
            document.getElementById("stars").innerText = data;
        }
    }

    var currentBanner = document.getElementById("all-banners");
    function rotateBanner() {
        if (currentBanner.src.match("banner1")) {
            currentBanner.src = "images/banner2.png";
        }
        else if (currentBanner.src.match("banner2")) {
            currentBanner.src = "images/banner3.png";
        }
        else if (currentBanner.src.match("banner3")) {
            currentBanner.src = "images/banner1.png";
        }
    }

    var currentBoss = document.getElementById("all-bosses");
    function rotateBoss() {
        if (currentBoss.src.match("Andrius")) {
            currentBoss.src = "images/Enemy_Stormterror_Icon.png";
        }
        else if (currentBoss.src.match("Stormterror")) {
            currentBoss.src = "images/Enemy_Childe_P3_Icon.png";
        }
        else if (currentBoss.src.match("Childe")) {
            currentBoss.src = "images/Enemy_Azhdaha_Icon.png";
        }
        else if (currentBoss.src.match("Azhdaha")) {
            currentBoss.src = "images/Enemy_Signora_Icon.png";
        }
        else if (currentBoss.src.match("Signora")) {
            currentBoss.src = "images/Enemy_Magatsu_Mitake_Narukami_no_Mikoto_Icon.png";
        }
        else if (currentBoss.src.match("Magatsu")) {
            currentBoss.src = "images/Enemy_Andrius_Icon.png";
        }
    }

    const searchWeapon = () => {
        const searchBox = document.getElementById("search-item").value.toUpperCase();
        //Retrieves whatever is being inputted into the search bar (and then converting to uppercase)
        const weaponList = document.getElementById("weapon-list");
        //Retrieves the whole list of weapons for future reference
        const weapon = document.querySelectorAll(".weapon");
        // Selects all elements with the class name weapon
        const weaponName = weaponList.getElementsByTagName("h2")
        // Retrieves all the h2's of weaponList collection which was the whole list of weapon

        // Go through for loop to check each weapon name
        for (var i = 0; i < weaponName.length; i++) {
            // Assign the current weapon name to the variable match
            let match = weapon[i].getElementsByTagName("h2")[0];

            if (match) {
                // Convert match into text/string for future reference/comparison
                let textValue = match.textContent || match.innerHTML

                // Compares textValue and what the user inputted into search box and confrims it has
                // more than -1 similar letters (?) and then displays the weapon if it is true
                if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                    weapon[i].style.display = "";
                } else {
                    weapon[i].style.display = "none";
                }
            }
        }
    }

    function updateClock() {
        var now = new Date();
        var nName = now.getDay();
        var nMonth = now.getMonth();
        var nNum = now.getDate();
        var nYear = now.getFullYear();

        var months =["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayName", "month", "dayNum", "year"];
        var values = [weeks[nName], months[nMonth], nNum, nYear];

        for(var i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
    }

    window.setInterval("updateClock()", 1);
    