var startingTime = new Date().getTime();
            function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++){
                color+= letters [Math.floor(Math.random() * 16)];
            }
            return(color);
        }
        function makeShapeAppear () {
            document.getElementById("shape").style.top = Math.random() * 200;
            document.getElementById("shape").style.left = Math.random() * 200;
            var randomForHeight = Math.random();
            document.getElementById("shape").style.height = randomForHeight * 400;
            document.getElementById("shape").style.width = randomForHeight * 400;
            document.getElementById("shape").style.backgroundColor = getRandomColor();
            if(Math.random() > 0.5){
                document.getElementById("shape").style.borderRadius = "50%"
            } else {
                document.getElementById("shape").style.borderRadius = "0%"
            }
            document.getElementById("shape").style.display = "block";
            startingTime = new Date().getTime();
        }

        function appearAfterDelay () {
            setTimeout(makeShapeAppear, Math.random() * 2000);
        }

        

        appearAfterDelay();

        document.getElementById("shape").onclick = function() {
            document.getElementById("shape").style.display = "none";
            var finishTime = new Date().getTime();
            var difference = finishTime - startingTime;
            document.getElementById("timeTaken").innerHTML = difference/1000 + " sec"
            appearAfterDelay();
        }