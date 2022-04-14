
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

    function hoyoLabTimer() {
        const now = new Date();
        var hours = now.getUTCHours();
        var minutes = now.getUTCMinutes();
        var seconds = now.getUTCSeconds();

        // Change to UTC+8
        if (hours + 8 >= 24) {
            now.setUTCHours(24);
            now.setUTCHours(hours + 8 - 24);
        }
        else {
            now.setUTCHours(hours + 8);
        }
        
        // End date at midnight
        const end = new Date(now);
        end.setUTCDate(end.getUTCDate() + 1);
        end.setUTCHours(0, 0, 0, 0);

        const timeLeft = end.getTime() - now.getTime();

        var hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("checkInHrs").innerHTML = hrs;
        document.getElementById("checkInMins").innerHTML = mins;
        document.getElementById("checkInS").innerHTML = s;
    }

    var hoyoFunction = setInterval(hoyoLabTimer, 1000);
