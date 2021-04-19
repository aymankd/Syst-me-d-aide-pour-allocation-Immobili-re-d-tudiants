const express = require('express') 
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'prjtutore'
})
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/Search', (req, res) => {
    const search = req.body.search
    const mode = req.body.mode
    const Catg = req.body.Catg
    const supL = req.body.supL
    const supU = req.body.supU
    const prL = req.body.prL
    const prU = req.body.prU
    

    if(search != 'Rabat' && search != 'Salé' && search != 'Kenitra' ){
        const sql = "Select * from universite where nom = ? "
        db.query(sql, [search], (err, result) => {
            if(result.length !=0){
                lat=result[0].latitude_univ
                lag=result[0].longitude_univ

                    md = "";
                    if(mode != "all")
                        md =" and mode = '"+mode+"' "
                    ct = "";
                    if(Catg != "all")
                        ct =" and type = '"+Catg+"' "
                            
                    
                sql2 = "SELECT *, getDistance(latitude_loc,longitude_loc, ?, ?) as distance FROM location where ( prix > ? and prix < ? ) and ( superficie > ? and superficie < ? ) "+md+ct+" HAVING distance < 1.5 ORDER BY distance"                
                db.query(sql2, [lat,lag,prL,prU,supL,supU], (err2, result2) => {
                    if(result2.length !=0){
                        res.send({res:result2, msg:0})
                    }else
                    res.send({msg:2})
                })
            }else
            res.send({msg:1})
        }) 
    }
})

app.listen(3001, () => {
    console.log("running on port 3001")
})