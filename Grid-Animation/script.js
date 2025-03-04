document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  const parent = document.getElementById("parent-ct");
  if (!parent) {
    console.error("Element with ID 'parent-ct' not found.");
    return;
  }
  
  const gridAmount = () => {
    parent.innerHTML = ""; // Clear previous children
    const parentFragment = document.createDocumentFragment(); // For all grid children
    
    const metaData = [
      { id: 1, title: "Title 1" },
      { id: 2, title: "Title 2" },
      { id: 3, title: "Title 3" },
      { id: 4, title: "Title 4" },
      { id: 5, title: "Title 5" }
    ];
    
    // Create one grid child for each metadata item
    metaData.forEach((item) => {
      const child = document.createElement("div");
      child.classList.add("grid-child");
      child.setAttribute("data-id", item.id); // Add the ID as a data attribute
      child.style.border = "4px solid #fff";
      child.style.width = "100%";
      child.style.height = "100%";
      child.style.borderRadius = "1rem";
      
      // Create a single content div for this item
      const div = document.createElement("div");
      div.textContent = item.title;
      child.appendChild(div);
      
      parentFragment.appendChild(child);
    });
    
    parent.appendChild(parentFragment); // Append all elements at once
    
    // Make sure GSAP is loaded before using it
    if (typeof gsap !== 'undefined') {
      gsap.from(".grid-child", {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 1,
        stagger: 0.1, // Each item appears one after another
        ease: "power2.out"
      });
    } else {
      console.error("GSAP not loaded");
    }
  };
  
  const calculateOffset = (event) => {
    const rect = parent.getBoundingClientRect();
    return {
      x: event.clientX - rect.left + 10,
      y: event.clientY - rect.top + 10,
      rect
    };
  };
  
  console.table({ parent, gridAmount, calculateOffset });
  // Call function to generate grid and animate
  gridAmount();
});