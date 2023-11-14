function updateASCIIArt(container, frames) {
    let frame = 0;
  
    function displayFrame() {
        if (frame < frames.length) {
            container.textContent = '';
            frames[frame].split('\n').forEach(line => {
                const div = document.createElement('div');
                div.innerHTML = line.replace(/ /g, '&nbsp;');
                container.appendChild(div);
            });
  
            frame++;
  
            if (frame < frames.length) {
                // Call the function again after a delay to display the next frame
                setTimeout(displayFrame, 250);
            }
        }
    }
  
    displayFrame();
  }
  
  const asciiContainer1 = document.getElementById('ascii-elijah-container');
  const frames1 = [
    // ASCII art frames for the second container
    `
    `,
    `
     _____   
    | ____| 
    |  _|   
    | |___  
    |_____| 
   `,
     `
     _____   _           
    | ____| | |          
    |  _|   | |          
    | |___  | |___       
    |_____| |_____|      
   `,
     `
     _____   _       ___  
    | ____| | |     |_ _| 
    |  _|   | |      | |  
    | |___  | |___   | |  
    |_____| |_____| |___| 
   `,
    `
     _____   _       ___       _       
    | ____| | |     |_ _|     | |      
    |  _|   | |      | |   _  | |      
    | |___  | |___   | |  | |_| |      
    |_____| |_____| |___|  \\___/       
    `,
    `
     _____   _       ___       _      _         
    | ____| | |     |_ _|     | |    / \\        
    |  _|   | |      | |   _  | |   / _ \\       
    | |___  | |___   | |  | |_| |  / ___ \\      
    |_____| |_____| |___|  \\___/  /_/   \\_\\     
    `,
    `
     _____   _       ___       _      _      _   _      
    | ____| | |     |_ _|     | |    / \\    | | | |     
    |  _|   | |      | |   _  | |   / _ \\   | |_| |     
    | |___  | |___   | |  | |_| |  / ___ \\  |  _  |     
    |_____| |_____| |___|  \\___/  /_/   \\_\\ |_| |_|     
    `,
  ];
  

  
  updateASCIIArt(asciiContainer1, frames1); // Start the first animation
//   updateASCIIArt(asciiContainer2, frames2); // Start the second animation
  