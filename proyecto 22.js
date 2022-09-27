function suma (){
    var IP = parseFloat(document.getElementById('IP').value);
    var IIP = parseFloat(document.getElementById('IIP').value);
    var IIIP = parseFloat(document.getElementById('IIIP').value);
    var IVP = parseFloat(document.getElementById('IVP').value);

    var prome = (IP + IIP + IIIP + IVP) /4 ;
    
    document.getElementById('promedio').value = prome;

    if (prome >=75)
    document.getElementById('status').value= 'Aprobado'
    else 
    document.getElementById('status').value= 'Reprobado'
}