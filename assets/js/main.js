// Mengimpor fungsi dari modul independen  

import { getProductsByCategory, calculateTotalValuation } from './modules/product_service.js';  
document.addEventListener('DOMContentLoaded', () => {  
        console.log("=== Aplikasi Modular Diinisialisasi ==="); 
            // 1. Eksekusi filter data pertanian 
        const pertanian = getProducts('pertanian');  
        console.log("Produk Kategori Pertanian:", pertanian); 
           // 2. Eksekusi kalkulasi total nilai aset 
        const totalValue = calculateTotalValuation(pertanian); 
         console.log(`Total Valuasi UMKM Pertanian: Rp ${totalValue.toLocaleString('id-ID')}`); 
         }); 