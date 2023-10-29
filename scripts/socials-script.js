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
  
  const asciiContainer4 = document.getElementById('ascii-socials-container');
  const frames4 = [
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
    `,
    `
     ____     ___     ____   ___      _      _       ____  
    / ___|   / _ \\   / ___| |_ _|    / \\    | |     / ___| 
    \\___ \\  | | | | | |      | |    / _ \\   | |     \\___ \\ 
     ___) | | |_| | | |___   | |   / ___ \\  | |___   ___) |
    |____/   \\___/   \\____| |___| /_/   \\_\\ |_____| |____/ 
    `,
  
  ];

  updateASCIIArt(asciiContainer4, frames4); // Start the first animation
  