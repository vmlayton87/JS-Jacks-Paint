function configureListeners() {
    let images = document.querySelectorAll("img")// select img elements  

     for (var i = 0; i < images.length; i++) {   
        // iterate over images and add mouseover event listeners       
        images[i].addEventListener("mousemove", ()=>{
            addOpacity(event) 
        })
        images[i].addEventListener("mouseout", ()=>{
            removeOpacity(event) 
        })
            
     }
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add("dim") //event.target is refrencing the item that the event is happening to.
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     event.target.classList.remove("dim")

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let colorName;  
    let price;
    
    
    switch (paintColor) {
        case 'pn1':
            // set variables for price and color name and invoke a function to update the price  
            colorName = "Lime Green"
            price = "$14.99"
            updatePrice(colorName, price)   
            break;       

        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            colorName = "Medium Brown"
            price = "$11.14"
            updatePrice(colorName, price)     
            break;  

        case 'pn3':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Royal Blue"
            price = "$22.99"
            updatePrice(colorName, price)   
            break; 

        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Red"
            price = "$13.42"
            updatePrice(colorName, price)  
            break;   

        case 'pn5':
            // set variables for price and color name and invoke a function to update the price
            colorName = "Solid White"
            price = "$21.98" 
            
            updatePrice(colorName, price)       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price
            colorName = "Solid Black"
            price = "$4.99" 
            
            updatePrice(colorName, price)        
            break;   

        case 'pn7':
            // set variables for price and color name and invoke a function to update the price
            colorName = "Solid Cyan"
            price = "$8.22"
            
            updatePrice(colorName, price)  
            break;   

        case 'pn8':
            // set variables for price and color name and invoke a function to update the price
            colorName = "Solid Purple"
            price = "$11.99"
            
            updatePrice(colorName, price)    
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            colorName = "Solid Yellow"
            price = "$14.99"
            updatePrice(colorName, price) 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        //let color = // select element with corresponding id
        //display color name
        document.querySelector("#color-name").textContent = colorName

       // let colorPrice = // select element with corresponding id
        // display price
        document.querySelector("#color-price").textContent = price
        
    }
    
}
