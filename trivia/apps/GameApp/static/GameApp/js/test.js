
$(document).ready(function() {
    var num = Math.floor(Math.random() *10);
    var total;
    if(Number.isInteger(total) === true){
        total += total;
    } else {
        total = 0;
    }

    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
    //**************************************************************


    if($("#left1").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean", displayName)
        function displayName(data) {
            $("#left1").replaceWith("<button id='left1'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {

                if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#left1").replaceWith("<button id='left1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    console.log("nah");
                    $("#left1").replaceWith("<button id='left1' class='btn btn-danger'>Incorrect</button>");
                }
            })
            $(".false").click(function() {
                if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#left1").replaceWith("<button id='left1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    $("#left1").replaceWith("<button id='left1' class='btn btn-danger'>Incorrect</button>");
                }
            })
        }
    }))


    var num = Math.floor(Math.random() *10);

    $("#left2").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean", displayName)
        function displayName(data) {
            $("#left2").replaceWith("<button id='left2'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {
            if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                var points = 200;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#left2").replaceWith("<button id='left2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#left2").replaceWith("<button id='left2' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".false").click(function() {
            if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                var points = 200;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#left2").replaceWith("<button id='left2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#left2").replaceWith("<button id='left2' class='btn btn-danger'>Incorrect</button>");
            }
        })
    }
    })


    var num = Math.floor(Math.random() *10);

    $("#left3").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple", displayName)
        function displayName(data) {
            $("#left3").replaceWith("<button id='left3'>" + data.results[num]['question'] + "<br>" + "<input class='A' value='" + data.results[num]['correct_answer'] + "' type='submit'><input class='B' value='" + data.results[num]['incorrect_answers'][2] + "' type='submit'>" + "<br>" + "<input class='C' value='" + data.results[num]['incorrect_answers'][0] + "' type='submit'><input class='D' value='" + data.results[num]['incorrect_answers'][1] + "' type='submit'>"+ " </button>");
            $(".A").click(function() {

            if($(".A").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#left3").replaceWith("<button id='left3' class='btn btn-success'>Correct!</button>");
            }
            else {

                $("#left3").replaceWith("<button id='left3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".B").click(function() {

            if($(".B").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#left3").replaceWith("<button id='left3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#left3").replaceWith("<button id='left3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".C").click(function() {

            if($(".C").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h3>Total: " + total +"</h3>");
                $("#left3").replaceWith("<button id='left3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#left3").replaceWith("<button id='left3' class='btn btn-dange''>Incorrect</button>");
            }
        })
        $(".D").click(function() {
            if($(".D").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h3>Total: " + total +"</h3>");
                $("#left3").replaceWith("<button id='left3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#left3").replaceWith("<button id='left3' class='btn btn-dange''>Incorrect</button>");
            }
        })
    }
    })



    //*************************************************************************************
    if($("#mid1").click(function() {
        console.log("HIT!");
    $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean", displayName)
        function displayName(data) {
            $("#mid1").replaceWith("<button id='mid1'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {
                if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#mid1").replaceWith("<button id='mid1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    $("#mid1").replaceWith("<button id='mid1' class='btn btn-danger'>Incorrect</button>");
                }
                console.log("total: ", total);
            })
            $(".false").click(function() {
                if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#mid1").replaceWith("<button id='mid1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    $("#mid1").replaceWith("<button id='mid1' class='btn btn-danger'>Incorrect</button>");
                }
            })
        }
    }))

    var num = Math.floor(Math.random() *10);
    $("#mid2").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean", displayName)
        function displayName(data) {
            $("#mid2").replaceWith("<button id='mid2'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {

            if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                var points = 200;
                total += points;

                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid2").replaceWith("<button id='mid2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid2").replaceWith("<button id='mid2' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".false").click(function() {

            if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                var points = 200;
                total += points;

                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid2").replaceWith("<button id='mid2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid2").replaceWith("<button id='mid2' class='btn btn-danger'>Incorrect</button>");
            }
        })
    }
    })

    var num = Math.floor(Math.random() *10);

    $("#mid3").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple", displayName)
        function displayName(data) {
            $("#mid3").replaceWith("<button id='mid3'>" + data.results[num]['question'] + "<br>" + "<input class='A' value='" + data.results[num]['incorrect_answers'][2] + "' type='submit'><input class='B' value='" + data.results[num]['correct_answer'] + "' type='submit'>" + "<br>" + "<input class='C' value='" + data.results[num]['incorrect_answers'][0] + "' type='submit'><input class='D' value='" + data.results[num]['incorrect_answers'][1] + "' type='submit'>"+ " </button>");
            $(".A").click(function() {

            if($(".A").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".B").click(function() {

            if($(".B").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".C").click(function() {

            if($(".C").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".D").click(function() {
            console.log("mmmmmm");
            if($(".D").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#mid3").replaceWith("<button id='mid3' class='btn btn-danger'>Incorrect</button>");
            }
        })
    }
    })

    //*************************************************************************************
    if($("#right1").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean", displayName)
        function displayName(data) {
            $("#right1").replaceWith("<button id='right1'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {

                if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#right1").replaceWith("<button id='right1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    $("#right1").replaceWith("<button id='right1' class='btn btn-danger'>Incorrect</button>");
                }
            })
            $(".false").click(function() {
                if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                    var points = 100;
                    total += points;
                    $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                    $("#right1").replaceWith("<button id='right1' class='btn btn-success'>Correct!</button>");
                }
                else {
                    $("#right1").replaceWith("<button id='right1' class='btn btn-danger'>Incorrect</button>");
                }
            })
        }
    }))


    var num = Math.floor(Math.random() *10);

    $("#right2").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=boolean", displayName)
        function displayName(data) {
            $("#right2").replaceWith("<button id='right2'>" + data.results[num]['question'] + "<br>" + "<input class='true' type='submit' value='True'>" + "<input class='false' type='submit' value='False'>" + "</button>");
            $(".true").click(function() {
            if($(".true").val() == "True" && data.results[num]["correct_answer"] == "True") {
                var points = 200;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right2").replaceWith("<button id='right2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#right2").replaceWith("<button id='right2' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".false").click(function() {
            if($(".false").val() == "False" && data.results[num]["correct_answer"] == "False") {
                var points = 200;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right2").replaceWith("<button id='right2' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#right2").replaceWith("<button id='right2' class='btn btn-danger'>Incorrect</button>");
            }
        })
    }
    })

    var num = Math.floor(Math.random() *10);

    $("#right3").click(function() {
        $.get("https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple", displayName)
        function displayName(data) {
            $("#right3").replaceWith("<button id='right3'>" + data.results[num]['question'] + "<br>" + "<input class='A' value='" + data.results[num]['incorrect_answers'][2] + "' type='submit'><input class='B' value='" + data.results[num]['incorrect_answers'][0] + "' type='submit'>" + "<br>" + "<input class='C' value='" + data.results[num]['incorrect_answers'][1] + "' type='submit'><input class='D' value='" + data.results[num]['correct_answer'] + "' type='submit'>"+ " </button>");
            $(".A").click(function() {

            if($(".A").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right3").replaceWith("<button id='right3' class='btn btn-success'>Correct!</button>");
            }
            else {

                $("#right3").replaceWith("<button id='right3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".B").click(function() {

            if($(".B").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right3").replaceWith("<button id='right3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#right3").replaceWith("<button id='right3' class='btn btn-danger'>Incorrect</button>");
            }
        })
        $(".C").click(function() {

            if($(".C").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right3").replaceWith("<button id='right3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#right3").replaceWith("<butto id='right3'n class='btn btn-dange''>Incorrect</button>");
            }
        })
        $(".D").click(function() {
            if($(".D").val() == data.results[num]["correct_answer"]) {
                var points = 300;
                total += points;
                $(".points").html("<h2><span class='text-primary'>S</span><span class='text-warning'>C</span><span class='text-danger'>O</span><span class='text-success'>R</span><span class='text-primary'>E</span>: <span class='text-success'>" + total +"</span></h2>");
                $("#right3").replaceWith("<button id='right3' class='btn btn-success'>Correct!</button>");
            }
            else {
                $("#right3").replaceWith("<butto id='right3'n class='btn btn-dange''>Incorrect</button>");
            }
        })
    }
    })

})

