
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

    function spiralTimer() {
        const now = new Date();
        var hours = now.getUTCHours();
        var minutes = now.getUTCMinutes();
        var seconds = now.getUTCSeconds();

        // Change to UTC-5 (North America)
        if (hours - 5 < 0) {
            now.setUTCHours(-1);
            now.setUTCHours(hours - 5 + 24);
        }
        else {
            now.setUTCHours(hours - 5);
        }

        const end = new Date(now);

        if (now.getUTCDate() < 16) {
            end.setUTCDate(16);
        }
        else {
            end.setUTCDate(1);
            end.setMonth(end.getMonth() + 1);
        }
        end.setUTCHours(4, 0, 0, 0);
        const timeLeft = end.getTime() - now.getTime();

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("spiralDays").innerHTML = days;
        document.getElementById("spiralHrs").innerHTML = hrs;
        document.getElementById("spiralMins").innerHTML = mins;
        document.getElementById("spiralS").innerHTML = s;
    }

    var spiralFunction = setInterval(spiralTimer, 1000);

    var resin = 0;

    function resinTimer() {
        const now = new Date();
        var resin = document.getElementById("resinEntry").value;
        //var resin = 60;

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        const end = new Date(now);
        end.setTime(now.getTime() + ((160 - resin) * 8 * 60000));
        const timeLeft = end.getTime() - now.getTime();

        var hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("resinHrs").innerHTML = hrs;
        document.getElementById("resinMins").innerHTML = mins;
        document.getElementById("resinS").innerHTML = s;
    }

    var resinFunction = setInterval(resinTimer, 1000);


    var parametricTimeLeft = 597600000;

    function parametricTimerCalculate() {
        const now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        const end = new Date(now);
        end.setDate(end.getDate() + 6);
        end.setHours(end.getHours() + 22);
        parametricTimeLeft = end.getTime() - now.getTime();
    }

    function parametricTimer() {
        var days = Math.floor(parametricTimeLeft / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((parametricTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((parametricTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((parametricTimeLeft % (1000 * 60)) / 1000);

        document.getElementById("parametricDays").innerHTML = days;
        document.getElementById("parametricHrs").innerHTML = hrs;
        document.getElementById("parametricMins").innerHTML = mins;
        document.getElementById("parametricS").innerHTML = s;

        parametricTimeLeft = parametricTimeLeft - 1000;
    }

    var parametricFunction = setInterval(parametricTimer, 1000);

    function bossTimer() {
        const now = new Date();
        var hours = now.getUTCHours();
        var minutes = now.getUTCMinutes();
        var seconds = now.getUTCSeconds();

        // Change to UTC-5 (North America)
        if (hours - 5 < 0) {
            now.setUTCHours(-1);
            now.setUTCHours(hours - 5 + 24);
        }
        else {
            now.setUTCHours(hours - 5);
        }
        
        const end = new Date(now);
        end.setDate(now.getDate() + (((1 + 7 - now.getDay()) % 7) || 7));
        end.setUTCHours(4, 0, 0, 0);

        const timeLeft = end.getTime() - now.getTime();

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("bossDays").innerHTML = days;
        document.getElementById("bossHrs").innerHTML = hrs;
        document.getElementById("bossMins").innerHTML = mins;
        document.getElementById("bossS").innerHTML = s;
    }

    var bossFunction = setInterval(bossTimer, 1000);

    var currentBannerStartDate = new Date(2022,3,19,0,0,0,0);
    function bannerTimer() {
        const now = new Date();
        var hours = now.getUTCHours();
        var minutes = now.getUTCMinutes();
        var seconds = now.getUTCSeconds();

        // Change to UTC-5 (North America)
        if (hours - 5 < 0) {
            now.setUTCHours(-1);
            now.setUTCHours(hours - 5 + 24);
        }
        else {
            now.setUTCHours(hours - 5);
        }
        
        const end = new Date(currentBannerStartDate);
        end.setUTCDate(end.getUTCDate() + 21);
        end.setUTCHours(4, 0, 0, 0);

        const timeLeft = end.getTime() - now.getTime();

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("bannerDays").innerHTML = days;
        document.getElementById("bannerHrs").innerHTML = hrs;
        document.getElementById("bannerMins").innerHTML = mins;
        document.getElementById("bannerS").innerHTML = s;
    }

    var bannerFunction = setInterval(bannerTimer, 1000);

