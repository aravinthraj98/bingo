
    /*var submit=document.getElementById('sub');
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
    })*/
    function fill(value){
        document.getElementById('choice').style.display='none';
        if(value=='user'){
            var input=document.getElementById('form');
            input.style.display='';
        }
        else{
            document.getElementById('choice').style.display='none';
            var input=document.getElementById('form');
            input.style.display='none';
            
            numberpush();
            randompush();
            computerpush();
        }
    }
    var BINGO=['B','I','N','G','O'];
   var number=[];
   var number1=[];
   var random=[];
   var random1=[];
   var random2=[];
   var uchoice= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[5,10,15,20,25],[1,7,13,19,25],[5,9,13,17,21]];  
   var cchoice= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[5,10,15,20,25],[1,7,13,19,25],[5,9,13,17,21]];  
  userpush();
  
 //  randompush();
 //  computerpush();
   function numberpush(){
       for(var i=1;i<=25;i++){
           number.push(i);
           number1.push(i);
       }
   }
   function randompush(){
   // numberpush();
    for(var i=0;i<25;i++){
        var c=number.length;
        var a=Math.floor(Math.random()*c);
        var s=number.splice(a,1);
        random.push(s);
    }
    user(random);
   }
   function user(random){
    for(i=1;i<=25;i++){
        var button=document.createElement('button');
        button.id=i;
        button.value=random[i-1];
        document.querySelector('#number').appendChild(button);
        document.getElementById(i).innerHTML=random[i-1];
        document.getElementById(i).setAttribute("onclick",`clicked('user',${random[i-1]},${i})`);
        if(i%5==0){
        var br=document.createElement('br');
        document.querySelector('#number').appendChild(br);
        document.querySelector('#number').appendChild(br);

   }


    }
   
   }
function computerpush(){
   for(i=0;i<25;i++){
       var c=number1.length;
       var a=Math.floor(Math.random()*c);
       var s=number1.splice(a,1);
       random1.push(s);
       random2.push(s);



   }
   for(i=1;i<=25;i++){
    var button=document.createElement('button');
    button.id='c'+i;
    button.value=random1[i-1];
    document.querySelector('#computer').appendChild(button);
    document.getElementById('c'+i).innerHTML=random1[i-1];
   document.getElementById('c'+i).setAttribute("onclick",`clicked('computer',${random1[i-1]},${i})`);
   if(i%5==0){
     var br=document.createElement('br');
     document.querySelector('#computer').appendChild(br);
     document.querySelector('#computer').appendChild(br);




    }

  }
}
var chance='user';
function clicked(u,v,j){
    
 
    
    for(i in random){
       if(random[i]==v){
       var button= document.getElementById(parseInt(i)+1);
       button.disabled=true;
       button.style.backgroundColor='green';
       }
    }
    for(i in random1){
        if(random1[i]==v){
       var button= document.getElementById('c'+(parseInt(i)+1));
       button.disabled=true;
       button.style.backgroundColor='green';

       for(i in random2){
           if(random2[i]==v){
               random2.splice(i,1);
           }

       }
    
    }
    }

   


  if(u=='user'){
      
    document.getElementById('number').style.pointerEvents='none';
    
    
    for(i in uchoice){
        
        for(k in uchoice[i]){

            
        if(uchoice[i][k]==j){
            uchoice[i].splice(k,1);

            if(uchoice[i].length==0){
                uchoice.splice(i,1);
                document.getElementById('win').innerHTML+=BINGO[0];
                BINGO.splice(0,1);
            }
            console.log(uchoice[i]);
          }
        }
   }
   for(i in random1){
       if(random1[i]==v){
        var je=parseInt(i)+1;
       // console.log(je);
      }
    }
    for(i in cchoice){
        
        for(k in cchoice[i]){

            
        if(cchoice[i][k]==je){
            cchoice[i].splice(k,1);
            if(cchoice[i].length==0){
                cchoice.splice(i,1);
            }
          // console.log(cchoice[i]);
          }
        }
   }
   autoclick();


 }
 else if(u=='computer'){
    for(i in random){
       if(random[i]==v){
        var je=parseInt(i)+1;
        //console.log(je);
      }
    }
    for(i in uchoice){
        
        for(k in uchoice[i]){

            
        if(uchoice[i][k]==je){
            uchoice[i].splice(k,1);

            if(uchoice[i].length==0){
                uchoice.splice(i,1);
                document.getElementById('win').innerHTML+=BINGO[0];
                BINGO.splice(0,1);
            }
            
            //console.log(uchoice[i]);
          }
        }
   }
   for(i in random1){
       if(random1[i]==v){
           var je=parseInt(i)+1;
           

       }

   }
   for(i in cchoice){
        
        for(k in cchoice[i]){

            
        if(cchoice[i][k]==je){
            cchoice[i].splice(k,1);
            if(cchoice[i].length==0){
                cchoice.splice(i,1);
            }
           // console.log(uchoice[i]);
          }
        }
   }

 }
 if(uchoice.length==7 || cchoice.length==7){
     document.getElementById('computer').style.display='';
     if(uchoice.length==7){
         alert('you win');
         
     }
     else{
         alert('computer win');
     }
 }
 else{
     console.log('uchoice'+uchoice.length+'cchoice'+cchoice.length);
 }

     
 }
 function autoclick(){
     setTimeout(()=>{
     var c= random2.length;
     var a=Math.floor(Math.random()*c)+1;
     var c=random2[a-1];
     for(i in random1){
        if(random1[i]==c){
            var b=parseInt(i)+1;
        }
     }
     document.getElementById('c'+b).click();
     document.getElementById('c').innerHTML='computer CHOICE:'+random1[b-1];
     var cl=random2.splice(a-1,1);
     document.getElementById('number').style.pointerEvents='';
    //  var chance='user';
   },2000);


 }
 function userpush(){
     for(i=1;i<=25;i++){
         var br='';
         if(i%5==0){
           br='<br>';
         }
         var id='u'+i;
         var input=`<input type='number' id=${id} pattern='\d{1-25}' max=25 required>${br}`;
         document.getElementById('user').innerHTML+=input;


     }
 }
 function userget(){
     randomu=[];
     for(i=1;i<=25;i++){
         var u='u'+i;
         var v=document.getElementById(u).value;
         if(v.length==0){
             break;
         }
         if(v in randomu){
             alert('no is repeated,no repeatation allowed');
             document.getElementById(u).focus();
             
             break;
         }
         randomu.push(v);

     }
     if(randomu.length==25){
         numberpush();
         user(randomu);
         computerpush();
         document.getElementById('form').style.display='none';
         document.getElementById('choice').style.display='none';
     }
    random=randomu;
 }

  