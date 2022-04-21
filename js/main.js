
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
