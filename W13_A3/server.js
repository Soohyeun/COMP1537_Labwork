const express = require('express')
const app = express()

app.listen(process.env.PORT || 5002, function (err) {
    if (err)
        console.log(err);
})

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/index.html");
//     })

app.use(express.static('public')) // public 폴더 안에 있는 모든 파일을 보내줌

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://soo:soohyeun@cluster0.styn6.mongodb.net/COMP1537?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});

const unicornModel = mongoose.model("unicorns", unicornSchema);

app.post("/findUnicornByName", function (req, res) {
    console.log('here is app.post' + req.body.unicornName)

    unicornModel.find({
        name: req.body.unicornName
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });

})

app.post("/findUnicornbyWeight", function (req, res) {
    console.log('here is app.post' + req.body.lowerWeight + req.body.higherWeight)

    unicornModel.find({
        weight: {
            $gt: req.body.lowerWeight
        },
        weight: {
            $lt: req.body.higherWeight
        }
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });

})

app.post("/findUnicornByFood", function (req, res) {
    console.log('here is app.post with ' + req.body.loves)
    
    if (req.body.loves == undefined) {
        unicornModel.find(
            function (err, unicorns) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Data " + unicorns);
            }
            res.send(unicorns);
        });
    } else if (req.body.loves.length <= 1) {
        unicornModel.find({
            loves: {
                $in: req.body.loves
            }
        }, function (err, unicorns) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Data " + unicorns);
            }
            res.send(unicorns);
        });
    } else {
        unicornModel.find({
                $and: [{
                    loves: {
                        $in: req.body.loves[0]
                    }
                }, {
                    loves: {
                        $in: req.body.loves[1]

                    }
                }]
            },
            function (err, unicorns) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("Data " + unicorns);
                }
                res.send(unicorns);
            });
    }
})