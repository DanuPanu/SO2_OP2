import express from 'express';
import path from 'path';
import maakunnat, {Maakunnat} from './models/maakunnat';

const app : express.Application = express();

const portti : number = Number(process.env.PORT) || 3102;

 interface Kunnat {
    nimi : string,
    kuntamuoto : string,
    asukkaita : number
    kuntanumero? : number
 }

function poistaAakkoset(nimi : string) {
    return nimi.replace(/ä/g, 'a').replace(/å/g, 'a').replace(/ö/g, 'o');
}

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/kunnat", (req: express.Request, res: express.Response) : void =>{

    let kunnat : Kunnat[] = maakunnat.map((maakunta : Maakunnat) =>{
        
        if(maakunta.nimi_fi != maakunta.nimi_sv){
            return{   
            nimi : `${maakunta.nimi_fi}(${maakunta.nimi_sv})`,
            kuntamuoto : maakunta.kuntamuoto,
            asukkaita : maakunta.asukkaita
            }
        }else{
            return {
            nimi : maakunta.nimi_fi,
            kuntamuoto : maakunta.kuntamuoto,
            asukkaita : maakunta.asukkaita
        }}
         
    });
    res.json(kunnat)
})

app.get("/kunnat/:kuntanumero", (req: express.Request, res: express.Response) : void =>{

    let kunta : Kunnat | undefined = maakunnat.map((maakunta : Maakunnat) =>{
        
        if(maakunta.nimi_fi != maakunta.nimi_sv){
            return{   
            nimi : `${maakunta.nimi_fi}(${maakunta.nimi_sv})`,
            kuntamuoto : maakunta.kuntamuoto,
            asukkaita : maakunta.asukkaita,
            kuntanumero : maakunta.kuntanro
            }
        }else{
            return {
            nimi : maakunta.nimi_fi,
            kuntamuoto : maakunta.kuntamuoto,
            asukkaita : maakunta.asukkaita,
            kuntanumero : maakunta.kuntanro
        }}
        
    }).find((kunta : Kunnat) => kunta.kuntanumero === Number(req.params.kuntanumero));
    
    if(kunta){
        res.json(kunta)
    } else{
        res.json({virhe : `Kuntaa ei löydy`})
    }

});

app.get(`/maakunnat/:maakunnan_nimi`, (req: express.Request, res : express.Response) : void => {

    const maakuntaNimiParam = req.params.maakunnan_nimi;
    const maakuntaNimi = poistaAakkoset(maakuntaNimiParam.toLowerCase());

    const haettuMaakunta = maakunnat.find(maakunta => poistaAakkoset(maakunta.maakuntanimi_fi.toLowerCase()) === maakuntaNimi);

    if (haettuMaakunta) {
        res.json({
            nimiSuomeksi: haettuMaakunta.maakuntanimi_fi,
            nimiRuotsiksi: haettuMaakunta.maakuntanimi_sv,
            kaupunkienLukumaara: maakunnat.filter(kunta => kunta.maakuntanro === haettuMaakunta.maakuntanro && kunta.kuntamuoto === "Kaupunki").length,
            kuntienLukumaara: maakunnat.filter(kunta => kunta.maakuntanro === haettuMaakunta.maakuntanro && kunta.kuntamuoto === "Kunta").length,
            asukasmaara: maakunnat.filter(kunta => kunta.maakuntanro === haettuMaakunta.maakuntanro).reduce((sum, kunta) => sum + kunta.asukkaita, 0)
        });
    } else {
        res.json({virhe : 'Maakuntaa ei löydy'});
    }
});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);    

});