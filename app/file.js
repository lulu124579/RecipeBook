// //Reads file? but like idk how to use it LOL
// (function (){
//     var DELIMETER = ',';
//     var NEWLINE = '\n';
//     var i = document.getElementById("CsvRecipe");
//     var table = document.getElementById("recipeTable");
//     //Papa.parse("csvFiles/Recipes/recipes.csv");
//     if(!i){
//       return;
//     }
  
//     i.addEventListener('change',function(){
//       if (!!i.files && i.files.length > 0){
//         parseCSV(i.files[0])
//       }
//       parseCSV()
//     })
  
//     function parseCSV(file){
//       if(!file || !FileReader){
//         return;
//       }
//       var reader = new FileReader();
  
//       reader.onload = function(e){
//         toTable(e.target.result);
//       };
      
//       reader.readAsText(file);
//     }
  
//     function toTable(text){
//       if(!text || !table){
//         return;
//       }
  
//       //clear table
//       while(!!table.lastElementChild) {
//         table.removeChild;
//         table.lastElementChild;
//       }
  
//       var rows = text.split(NEWLINE);
//       var headers = rows.shift().split(DELIMETER);
//       var htr = document.createElement('tr');
  
//       headers.forEach(function(h){
//         var th = document.createElement('th');
//         var ht = h.trim();
  
//         if(!ht){
//           return;
//         }
    
//         th.textContent = ht;
//         htr.appendChild(th);
//       });
  
//       table.appendChild(htr);
  
//       var rtr;
   
//       rows.forEach(function(r){
//         r = r.trim();
  
//         if(!r){
//           return;
//         }
  
//         var cols = r.split(DELIMETER);
  
//         if(cols.length == 0){
//           return;
//         }
  
//         rtr = document.createElement('tr');
  
//         cols.forEach(function(c){
//           var td = document.createElement('td');
//           var tc = c.trim();
  
//           td.textContecnt = tc;
//           rtr.appendChild(td);
  
//         });
  
//         table.appendChild(rtr);
  
  
//       });
//     }
//   })();