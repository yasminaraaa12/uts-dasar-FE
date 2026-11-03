 // Data Mock Produk Terenkapsulasi  
 const products = [  
     { id: 1, name: "Beras Organik", price: 18000000, category: "Beras & Biji-Biji" },  
     { id: 2, name: "Mangga", price: 1200000, category: "Buah" },      
     { id: 3, name: "Bayam", price: 300000, category: "Sayuran" }  
      ];  
      // Named Export: Filter menggunakan Higher-Order Function 'filter' 
export const getProductsByCategory = (categoryName) => { 
         if (!categoryName) return products; 
         return products.filter((p) => p.category.toLowerCase() === categoryName.toLowerCase()); 
};
    // Named Export: Kalkulasi total menggunakan Higher-Order Function 'reduce' 
export const calculateTotalValuation = (items) => {
     return items.reduce((accumulator, item) => accumulator + item.price, 0);

};