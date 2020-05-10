:root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: red;
}

body {
    margin: 0px;
    padding: 0px;
    background-color: #464B59;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/*----------------------------------- Imagen de Fondo -----------------------------*/
.d-size{
    width: 100%;
}
.imagenC{
    margin-left: -5px;
    height: 756px;
}
/*---------------------------------------Fin Imagen de Fondo-----------------------*/

/*------------------------------Inicio Form Contacto-------------------------------*/
.d-left{
    display: flex;
    float: right;
    width: 40%;
    margin-top: -120px;
    margin-bottom: 10px;
}
.d-block{
    width: 70%;
    overflow: hidden;
    text-align: center;
}
.block-tittle{
    box-sizing: border-box;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    color: white;
}
.block-form{
    box-sizing: border-box;
    background-color: #363636;
    width: 100%;
    border-radius: 10px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.item-form{
    margin-top: 10px;
    float: left;
    display: block;
    width: 100%;
    font-size: 16;
    border-radius: 5px;
}
.btn-enviar{
    margin-top: 10px;
    width: 100px;
    font-size: 18;
    border-radius: 5px;
    color: white;
    background: rgb(9, 9, 9);
    background: radial-gradient(circle, rgba(9, 9, 9, 1) 28%, rgba(155, 157, 157, 1) 98%, rgba(95, 95, 96, 0.026114669500612697) 100%);
}
/*---------------------------------- Fin Form Contacto---------------------------------------*/

/*------------------------------Inicio footer general-------------------------------*/
.footer{
    vertical-align: middle;
    height: 75px;
    display: flex;
    width: 100%;
    color: white;
    overflow: hidden;
    background: rgb(155, 157, 157);
    background: linear-gradient(117deg, rgba(155, 157, 157, 1) 40%, rgba(9, 9, 9, 1) 100%, rgba(95, 95, 96, 0.026114669500612697) 100%);
}
.footer boxR{
    width: 50%;
    float: right;
    text-align: right;
    height: 100%;
    font-size: 12px;
    font-weight: bold;
    padding-top: 30px;
}
.footer boxL{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 50%;
    font-size: 22px;
    font-weight: bold;
}
.footerElement{
    margin: 10px;
    height: 40px;
    width: 40px;
}
/*---------------------------------- fin footer general---------------------------------------*/

/*---------------------------------- Inicio Barra Diagonal---------------------------------------*/
.b-block{
    width: 100%;
    height: 300px;
    align-items: center;
    overflow: hidden;
    padding-top: 140px;
}
.barra{
    margin-left: -27px;
    transform: rotate(-9deg);
    background: #E6DADA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 108%;
    display: flex;
    justify-content: space-between;
    height: 150px;
}
.barra a{
    font-size: 20px;
    font-weight: bold;
    text-decoration: unset;
    color: white;
}
.section1{
    height: 120px;
    box-sizing: border-box;
    display: flex;
    width: 50%;
    align-items: center;
}
.section1 li{
    list-style: none;
    padding-left: 25px;
}
.section2{
    height: 120px;
    box-sizing: border-box;
    width: 35%;
    display: flex;
    align-items: center;
}
.section2 li{
    list-style: none;
    float: right;
    padding-left: 25px;
    overflow: hidden;
}
#logo{
    height: 90px;
}
#carrito{
    height: 50px;
    border: 5px solid grey;
    border-radius: 50%;
    box-shadow: lightgrey;
}
/*---------------------------------- Fin Barra Diagonal---------------------------------------*/
.i-block{
    margin-top: -75px;
    width: 100%;
    height: 150px;
    margin-bottom: -75px;
    display: flex;
    align-items: center;
}
.btn-tienda{
    margin: auto;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 25px;
    padding-left: 25px;
    font-size: 25px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    background: rgb(9, 9, 9);
    background: radial-gradient(circle, rgba(9, 9, 9, 1) 28%, rgba(155, 157, 157, 1) 98%, rgba(95, 95, 96, 0.026114669500612697) 100%);
}
/* -------------------------- Inicio index -------------------------------------------------------*/
.advert{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: 20px solid rgb(82, 82, 82);
    box-sizing: border-box;
    background-color: white;
}
.advert-block{
    margin-top: 20px;
    height: 500px;
    width: 100%;
    padding-left: 8%;
    padding-right: 8%;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.block1{
    width: 80%;
    margin-right: 8%;
    margin-left: 8%;
    text-align: center;
    border-bottom: 2px solid rgb(82, 82, 82);
}
.block2{
    display: flex;
    align-items: center;
    width: 100%;
}
.block2-d1{
    width: 400px;
}
.block2-d2{
    width: 500px;
    height: 100%;
    text-align: center;
    font-size: 20px;
}
.btn-ingreso{
    margin-top: 10px;
    font-weight: bold;
    width: 100px;
    height: 40px;
    font-size: 20px;
    border-radius: 12px;
    color: white;
    background: rgb(9, 9, 9);
    background: radial-gradient(circle, rgba(9, 9, 9, 1) 28%, rgba(155, 157, 157, 1) 98%, rgba(95, 95, 96, 0.026114669500612697) 100%);
}
/* -------------------------- Fin index -------------------------------------------------------*/