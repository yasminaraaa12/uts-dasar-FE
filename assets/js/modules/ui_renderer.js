// ui_renderer.js 
import {   
    getProductsByCategory,   
    calculateTotalValuation, 
} from "./product_service.js";  
const formatCurrency = (amount) => `Rp ${amount.toLocaleString("id-ID")}`;  
document.addEventListener("DOMContentLoaded", () => {   
    const tableBody = document.querySelector("#product-list-body");   
    const totalDisplay = document.querySelector("#total-valuation");    
    const pertanian = getProductsByCategory("Pertanian");   
    const totalValue = calculateTotalValuation(pertanian);    
    if (tableBody) {     
        tableBody.innerHTML = pertanian       
        .map(        
         (p) => `         
         <tr>           
         <td>${p.id}</td>           
         <td>${p.name}</td>           
         <td><span class="badge">${p.category}</span></td>           
         <td class="text-right">${formatCurrency(p.price)}</td>         
         </tr>`,       
        )       
        .join("");   
    }    
    if (totalDisplay) {     
        totalDisplay.textContent = formatCurrency(totalValue);   
    } 
});