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
  
  const asciiContainer3 = document.getElementById('ascii-projects-container');
  const frames3 = [
    // ASCII art frames for the second container
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
     ____    ____     ___        _   _____    ____   _____   ____   
    |  _ \\  |  _ \\   / _ \\      | | | ____|  / ___| |_   _| / ___|  
    | |_) | | |_) | | | | |  _  | | |  _|   | |       | |   \\___ \\  
    |  __/  |  _ <  | |_| | | |_| | | |___  | |___    | |    ___) | 
    |_|     |_| \\_\\  \\___/   \\___/  |_____|  \\____|   |_|   |____/  
    `,
    
  ];

  updateASCIIArt(asciiContainer3, frames3); // Start the first animation
  