function greater(a,b,c){

    if(a>b && a>c){
   console.log('the number ${a} is greater');
    }
    else if(b>c && b>a){
        console.log('the number ${b} is greater')
    }
       
    else{
        console.log('the number ${c} is greater')
    }
    return a,b,c;
}
    greater(1,4,7)