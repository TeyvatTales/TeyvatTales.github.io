
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

    const searchCharacter = () => {
        const searchBox = document.getElementById("search-item").value.toUpperCase();
        //Retrieves whatever is being inputted into the search bar (and then converting to uppercase)
        const characterList = document.getElementById("character-list");
        //Retrieves the whole list of characters for future reference
        const character = document.querySelectorAll(".character");
        // Selects all elements with the class name character
        const characterName = characterList.getElementsByTagName("h2")
        // Retrieves all the h2's of characterList collection which was the whole list of character

        // Go through for loop to check each character name
        for (var i = 0; i < characterName.length; i++) {
            // Assign the current character name to the variable match
            let match = character[i].getElementsByTagName("h2")[0];

            if (match) {
                // Convert match into text/string for future reference/comparison
                let textValue = match.textContent || match.innerHTML

                // Compares textValue and what the user inputted into search box and confrims it has
                // more than -1 similar letters (?) and then displays the character if it is true
                if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                    character[i].style.display = "";
                } else {
                    character[i].style.display = "none";
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
    