
function myFunction(i){
        document.getElementById("totalprice"+i).innerHTML=Number(document.getElementById("unit"+i).innerHTML)* document.getElementById("quant"+i).value;
    }

        
    // var conteur=0;
    // document.getElementById("button1").addEventListener("click",count)
  
    // function count(){
    //     conteur++;
//   }
 
function addPannier(i){
       
    
   
    if(document.getElementById("totalprice"+i).innerHTML !=='0' && document.getElementById("totalprice"+i).innerHTML !=='0dt')
    {
        // document.getElementById("pannierEmpty").innerHTML="Purchased Items"
            // var li = document.createElement("li");
            // li.className='collection-item'+i;
            // document.getElementById('pannier'+i).appendChild(li)
           
           
           if (document.getElementsByClassName("bloc")[i-1].style.display==''){

            document.getElementsByClassName("bloc")[i-1].style.display='flex'
            document.getElementsByClassName("bloc")[i-1].style.height='100%'
            document.getElementById("removeAll").style.display='flex'
          
            var x = document.createElement("IMG");
            x.setAttribute("src", "image/img"+i+".jpg");
            x.setAttribute("class","img-fluid slideanim imgPannier")
            document.getElementById('imagee'+i).appendChild(x);

            
            var y= document.createElement("P")
            y.setAttribute("class","categorie font-weight-bold input-group-text")
            y.appendChild(document.createTextNode(document.getElementById('catego'+i).innerHTML));
            document.getElementById('pannier'+i).appendChild(y);

            var q= document.createElement("P")
            q.setAttribute("class","categorie font-weight-bold input-group-text")
            q.setAttribute("id","surfacee")
            q.appendChild(document.createTextNode('Total Surface'));
            document.getElementById('htmlsurface'+i).appendChild(q);

            var w= document.createElement("P")
            w.setAttribute("class"," pannierSurface font-weight-bold input-group-text")
            w.setAttribute("id","surfa"+i)
            w.appendChild(document.createTextNode(document.getElementById('quant'+i).value));
            document.getElementById('htmlsurface'+i).appendChild(w)
            document.getElementById('quant'+i).value=''

            var s= document.createElement("P")
            s.setAttribute("class","categorie font-weight-bold input-group-text")
            s.setAttribute("id","unity")
            s.appendChild(document.createTextNode('m²'));
            document.getElementById('htmlsurface'+i).appendChild(s);

            var d= document.createElement("P")
            d.setAttribute("class","categorie font-weight-bold input-group-text")
            d.setAttribute("id","Price")
            d.appendChild(document.createTextNode('Price'));
            document.getElementById('htmlprice'+i).appendChild(d);
            
            var z= document.createElement("P")
            z.setAttribute("class"," pannierPrice font-weight-bold input-group-text")
            z.setAttribute("id","pannierPrice"+i)
            z.appendChild(document.createTextNode(document.getElementById('totalprice'+i).innerHTML));
            document.getElementById('htmlprice'+i).appendChild(z)
            document.getElementById('totalprice'+i).innerHTML='0'

            var f= document.createElement("P")
            f.setAttribute("class","categorie font-weight-bold input-group-text")
            f.setAttribute("id","dt")
            f.appendChild(document.createTextNode('dt'));
            document.getElementById('htmlprice'+i).appendChild(f);

            var v = document.createElement("BUTTON");       
            var t = document.createTextNode("REMOVE"); 
            v.appendChild(t); 
            document.getElementById('pannier'+i).appendChild(v);
            v.setAttribute("class","btn remove btn-danger")
            v.setAttribute("type","submit")
            v.setAttribute("id","btn-remove"+i)

          
           
            }
            else
            {
                
                document.getElementById("surfa"+i).innerHTML=Number(document.getElementById('quant'+i).value)+Number(document.getElementById("surfa"+i).innerHTML)
                document.getElementById("pannierPrice"+i).innerHTML=Number(document.getElementById('totalprice'+i).innerHTML)+Number(document.getElementById("pannierPrice"+i).innerHTML)
                document.getElementById('totalprice'+i).innerHTML='0'
                document.getElementById('quant'+i).value=''
            }

            for(let i=0;i<6;i++){
                if (document.getElementsByClassName("bloc")[i].style.display=='flex')
                {
                    document.getElementById('pannierEmpty').innerHTML='Purchased Items'
                    break;
                }
                else
                document.getElementById('pannierEmpty').innerHTML='Your Pannier Is Empty'
                }
            
            // v.setAttribute("onclick","delet("+i+")")
            
          

          
                document.getElementById("btn-remove"+i).addEventListener("click", delet);
                function delet() {
               
               for(let j=0;j<2;j++){
              
                document.getElementsByClassName("bloc")[i-1].removeChild(document.getElementsByClassName("bloc")[i-1].childNodes[3]);
                 document.getElementsByClassName("bloc")[i-1].style.height='0px'
            }
            let k=1
            while(k<4){
            document.getElementById("htmlprice"+i).removeChild(document.getElementById("htmlprice"+i).childNodes[0]);
            k++
            }
            let n=1
            while(n<4){
                document.getElementById("htmlsurface"+i).removeChild(document.getElementById("htmlsurface"+i).childNodes[0]);
            n++
            }
            
            document.getElementById("imagee"+i).removeChild(document.getElementById("imagee"+i).childNodes[0]);

            document.getElementsByClassName("bloc")[i-1].style.display=''
            
            
            for(let i=0;i<6;i++){
                if (document.getElementsByClassName("bloc")[i].style.display=='flex')
                {
                    document.getElementById('pannierEmpty').innerHTML='Purchased Items'
                    document.getElementById("removeAll").style.display='flex'
                    break;
                }
                else{
                document.getElementById('pannierEmpty').innerHTML='Your Pannier Is Empty'
                document.getElementById("removeAll").style.display=''
                }
                }
            } 
            document.getElementById("removeAll").addEventListener("click", removeall);
            function removeall(){
                for(let i=0;i<6;i++)
                delet()
                
            }
        }
        }   
        
        
      


        $(window).scroll(function() {
            $(".slideanim").each(function(){
             var pos = $(this).offset().top;
  
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
            $(this).addClass("slide");
            }
            });
            });

        //     if(document.getElementsByClassName("remove").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
           


        //    $(document).ready(function(){
        //     $("#btn-remove"+i).click(function(){
        //         $('#pannier'+i).remove();
        //     });
        // });
        
       

          
        //    function delet(){
        //        document.querySelector('#pannier'+i).style.display='none'
        //    }
        // }


        // document.getElementById("btn-remove"+i).addEventListener("click", delet);
        //    function delet(i){
        //     let j=1
        //     while(j<7){
                
        //         document.getElementById("pannier"+i).removeChild(document.getElementById("pannier"+i));
        //         j++
        //     }
        //     if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }
        // } 


        //    document.getElementById("btn-remove1").addEventListener("click", remove);
        //    function remove() {
           
        //      let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[0].removeChild(document.getElementsByClassName("bloc")[0].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }     
           
        //    document.getElementById("btn-remove2").addEventListener("click", remove);
        //    function remove() {
           
        //      let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[1].removeChild(document.getElementsByClassName("bloc")[1].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }     
           
        //    document.getElementById("btn-remove3").addEventListener("click", remove);
        //    function remove() {
           
        //     let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[2].removeChild(document.getElementsByClassName("bloc")[2].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }     
           
        //    document.getElementById("btn-remove4").addEventListener("click", remove);
        //    function remove() {
           
        //      let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[3].removeChild(document.getElementsByClassName("bloc")[3].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }     
           
        //    document.getElementById("btn-remove5").addEventListener("click", remove);
        //    function remove() {
           
        //      let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[4].removeChild(document.getElementsByClassName("bloc")[4].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }     

        //    document.getElementById("btn-remove6").addEventListener("click", remove);
        //    function remove() {
           
        //      let j=1
        //    while(j<7){
               
        //        document.getElementsByClassName("bloc")[5].removeChild(document.getElementsByClassName("bloc")[5].childNodes[1]);
        //        j++
        //    }
        //    if(document.getElementsByClassName("purchased").length==0)
        //    document.getElementById("pannierEmpty").innerHTML="Your Pannier Is Empty"
        //    }    
       


        
      

