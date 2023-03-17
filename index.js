

var first = ["Adeniran", "Adeola", "Jame"]
var names = ["Ayomide", "Grace", "Bola"]
var Email = ["@gmail.com", "@outlook.com", "@hotmail.com"]
var btn = $(".btn")
var count = "23"
var ce = $(".ce")
var phone = ["+234", "+233", "+169"]
var ger = ["male", "Female"]
coun = "8000000000"
var deb = ["Master Card", "Visa card"]
var num = "5241 6701 2345 6789"
var bank = ["Wema bank", "GTB", "Stanbic IBTC", "CitiBank"]
//  end var
btn.click(function () {
        var round = Math.floor(Math.random() * 3)
        var sur = $(".sur").html("<span>" + first[round] + "</span>")

        var roun = Math.floor(Math.random() * 3)
        var na = $(".na").html("<span>" + names[roun] + "</span>")

        var round1 = Math.floor(Math.random() * 3)
        var em = $(".em").html("<span>" + first[round] + names[roun] + count + "</span>" + Email[round1])

        count = Math.floor(Math.random() * 99)


        var round3 = Math.floor(Math.random() * 3)
        var one = $(".one").html("<span>" + phone[round3] + coun)
        coun = Math.floor(Math.random() * 8000000000)

        var round4 = Math.floor(Math.random() * 2)
        var tro = $(".tro").html("<span>" + ger[round4] + "</span>")

        num = Math.floor(Math.random() * 5241670123456789)
        var car = $(".car").html("<span>" + num)

        var round5 = Math.floor(Math.random() * 4)
        var ba = $(".ba").html("<span>" + bank[round5] + "</span>")

        var round6 = Math.floor(Math.random() * 2)
        var ba = $(".debit").html("<span>" + deb[round6] + "</span>")

        cou = Math.ceil(Math.random() * 4)  
       ce.attr("src", "profile/man"+cou+".png")

})

// var ul=$("ul")
// var input=""
// var btn=$(".btn")
// btn.click(function (params) {
//     input=$("input").val()
//     ul.append("<ul>"+"</ul>"+input)
//     $("input").val("")

// })